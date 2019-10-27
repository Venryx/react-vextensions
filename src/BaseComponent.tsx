import React, { Component } from "react";
import autoBind from "react-autobind";
import { BaseProps, GetDOM, HasSealedProps, RemoveDuplicates, Sealed, ToJSON, EnsureSealedPropsArentOverriden, E, Assert, ShallowEquals } from "./General";
import {WarnOfTransientObjectProps_Options} from "./Decorators";

export enum RenderSource {
	Mount, // first render, after creation
	PropChange, // from prop-change, and ancestor re-renders (e.g. ancestor.forceUpdate(), ancestor.setState())
	SetState, // from this.SetState()
	Update, // from this.Update()
}
//@HasSealedProps // instead of using this decorator, we just include the "EnsureSealedPropsArentOverriden(this, BaseComponent);" line directly (to reduce nesting / depth of class-prototype chain)	
export class BaseComponent<Props, State = {}, Stash = {}> extends Component<Props & BaseProps, State> {
	static componentCurrentlyRendering: BaseComponent<any>;

	renderCount = 0;
	constructor(props) {
		super(props);
		EnsureSealedPropsArentOverriden(this, BaseComponent);
		autoBind(this);
		// if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
		//		so reach in to original class, and set up auto-binding for its prototype members as well
		if (this.constructor.name == "RadiumEnhancer") {
			autoBind(Object.getPrototypeOf(this));
		}

		this.state = {} as any; // this.state starts as undefined, so set it to {} to match with this.stash and this.debug
		Object.assign(this.state, this.constructor["initialState"]);
		//this.Stash(this.constructor["initialStash"]);
		Object.assign(this.stash, this.constructor["initialStash"]);
		this.AttachReactDevToolsHelpers();
		
		// if using PreRender, wrap render func
		/* if (this.PreRender != BaseComponent.prototype.PreRender) {
			let oldRender = this.render;
			this.render = function() {
				this.PreRender();
				return oldRender.apply(this, arguments);
			};
		} */

		// wrap the derived-class' render function, to include some extra code
		if (!this.constructor.prototype.render.modifiedByBaseComponent) {
			let oldRender = this.constructor.prototype.render;
			this.constructor.prototype.render = function() {
				this.PreRender();
				BaseComponent.componentCurrentlyRendering = this;
				//this.renderCount = (this.renderCount|0) + 1;
				this.renderCount++;
				let result = oldRender.apply(this, arguments);
				BaseComponent.componentCurrentlyRendering = null;
				return result;
			};
			this.constructor.prototype.render.modifiedByBaseComponent = true;
		}

		// you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
		/*let oldRender = this.render;
		this.render = function() {
			try {
				this.PreRender();
				return oldRender.apply(this, arguments);
			} catch (ex) {
				debugger;
				throw ex;
			}
		};*/
	}

	//initialState: Partial<State>;
	//state = {} as State; // redefined here, so we can set the initial-state to {} (instead of undefined)

	stash = {} as Stash;
	get PropsState() { return E(this.props, this.state); }
	get PropsStash() { return E(this.props, this.stash); }
	get PropsStateStash() { return E(this.props, this.state, this.stash); }
	Stash(newStashData: Stash, replaceData = false) {
		if (replaceData) Object.keys(this.stash).forEach(key=> { delete this.stash[key]; });
		Object.assign(this.stash, newStashData);
	}

	debug = {} as any;
	Debug(newDebugData: any, replaceData = false) {
		if (replaceData) Object.keys(this.debug).forEach(key=> { delete this.debug[key]; });
		Object.assign(this.debug, newDebugData);
	}

	AttachReactDevToolsHelpers(stash = true, debug = true) {
		this.state["@stash"] = this.stash;
		this.state["@debug"] = this.debug;
	}

	refs;
	//timers = [] as Timer[];

	get DOM() { return GetDOM(this); }
	get DOM_HTML() { return GetDOM(this) as HTMLElement; }
	//DOMAs<T extends Element>() { return GetDOM(this) as T; }
	//get DOM_() { return this.mounted ? $(this.DOM) : null; }
	// needed for wrapper-components that don't provide way of accessing inner-component
	//get InnerComp() { return FindReact(this.DOM); }

	// make all these optional, so fits Component type definition/shape
	get FlattenedChildren() {
	    var children = children instanceof Array ? this.props.children : [this.props.children];
	    return React.Children.map((children as any).filter(a=>a), a=>a);
	}

	// helper for debugging
	private GetPropChanges_lastValues = {};
	GetPropChanges(newProps = this.props, oldProps = this.GetPropChanges_lastValues, setLastValues = true) {
		let oldAndNewKeys = RemoveDuplicates(Object.keys(newProps).concat(Object.keys(oldProps)));
		let changedKeys = oldAndNewKeys.filter(key=>!Object.is(newProps[key], oldProps[key]));

		let result = [] as {key: string, oldVal: any, newVal: any}[];
		for (let key of changedKeys) {
			result.push({key, oldVal: oldProps[key], newVal: newProps[key]});
		}
		if (setLastValues) this.GetPropChanges_lastValues = {...newProps as any};
		return result;
	}
	private GetStateChanges_lastValues = {};
	GetStateChanges(newState = this.state, oldState = this.GetStateChanges_lastValues, setLastValues = true) {
		let oldAndNewKeys = RemoveDuplicates(Object.keys(newState).concat(Object.keys(oldState)));
		let changedKeys = oldAndNewKeys.filter(key=>!Object.is(newState[key], oldState[key]));

		let result = [] as {key: string, oldVal: any, newVal: any}[];
		for (let key of changedKeys) {
			result.push({key, oldVal: oldState[key], newVal: newState[key]});
		}
		if (setLastValues) this.GetStateChanges_lastValues = {...newState as any};
		return result;
	}

	//forceUpdate(_: ()=>"Do not call this. Call Update() instead.") {
	forceUpdate() {
		//throw new Error("Do not call this. Call Update() instead.");
		//console.warn("Do not call this. Call Update() instead."); // removed warning, since we're transitioning to react-hooks, and forceUpdate gets called from some hooks
		this.Update();
	}
	Update(postUpdate?) {
		//if (!this.Mounted) return;
		this.lastRender_source = RenderSource.Update;
		//this.forceUpdate(postUpdate);
		Component.prototype.forceUpdate.call(this, postUpdate);
	}
	Clear(postClear?) {
		var oldRender = this.render;
		this.render = function() {
			this.render = oldRender;
			//WaitXThenRun(0, this.Update);
			setTimeout(()=>this.Update());
			return <div/>;
		};
		postClear();
	}
	ClearThenUpdate() {
		//this.Clear(this.Update);
		this.Clear(()=>this.Update());
	}
	/** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */
	UpdateAndReceive(props) {
		return ()=> {
			//if (!this.Mounted) return;
			//this.forceUpdate();
			Component.prototype.forceUpdate.apply(this, arguments);
			if (this.autoRemoveChangeListeners)
				this.RemoveChangeListeners();
			this.ComponentWillMountOrReceiveProps(props)
		};
	}

	//setState(_: ()=>"Do not call this. Call SetState() instead.") {
	/*setState() {
		throw new Error("Do not call this. Call SetState() instead.");
	}*/
	setState(): "Do not call this. Call SetState() instead." { return null as any; }
	SetState(newState: Partial<State>, callback?: ()=>any, cancelIfStateSame = true, jsonCompare = false) {
		if (cancelIfStateSame) {
			if (jsonCompare) {
				// we only care about new-state's keys -- setState() leaves unmentioned keys untouched
				let oldState_forNewStateKeys = Object.keys(newState).reduce((result, key)=>(result[key] = this.state[key], result), {});
				if (ToJSON(newState) == ToJSON(oldState_forNewStateKeys)) return [];
			} else {
				//if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
				// use a looser comparison (we want a missing prop to be equivalent to null and undefined)
				let same = true;
				//for (let key of RemoveDuplicates(Object.keys(this.state).concat(Object.keys(newState)))) {
				for (let key of Object.keys(newState)) {
					let valA = this.state[key as any];
					let valB = newState[key as any];
					if (valA == null && valB == null) continue;

					if (valA !== valB) {
						same = false;
						break;
					}
				}
				if (same) return [];
			}
		}

		let componentClass = this.constructor as any;
		if (componentClass.ValidateState) {
			let newState_merged = Object.assign({}, this.state, newState);
			componentClass.ValidateState(newState_merged);
		}
		
		this.lastRender_source = RenderSource.SetState;
		//this.setState(newState as S, callback);
		Component.prototype.setState.call(this, newState, callback);
	}

	changeListeners = [];
	AddChangeListeners(host, ...funcs) {
		if (host == null) return; // maybe temp

	    /*host.extraMethods = funcs;
	    for (let func of funcs)
			this.changeListeners.push({host: host, func: func});*/
	    for (let func of funcs) {
			if (typeof func == "string")
				func = (func as any).Func(this.Update);
			// if actual function, add it (else, ignore entry--it must have been a failed conditional)
			if (func instanceof Function) {
				//if (!host.HasExtraMethod(func)) {
				host.extraMethod = func;
				this.changeListeners.push({host: host, func: func});
			}
		}
	}
	RemoveChangeListeners() {
		//this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
	    for (let changeListener of this.changeListeners)
	        changeListener.host.removeExtraMethod = changeListener.func;
	    this.changeListeners = [];
	}
	RemoveChangeListenersFor(host) {
		var changeListenersToRemove = this.changeListeners.filter(a=>a.host == host);
		for (let listener of changeListenersToRemove) {
			listener.host.removeExtraMethod = listener.func;
			this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
		}
	}

	autoRemoveChangeListeners = true;
	ComponentWillMount(): void {};
	ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void {};
	@Sealed UNSAFE_componentWillMount() {
		if (this.autoRemoveChangeListeners)
			this.RemoveChangeListeners();
		this.ComponentWillMount(); 
		this.ComponentWillMountOrReceiveProps(this.props, true);
		this.lastRender_source = RenderSource.Mount;
	}

	ComponentDidMount(...args: any[]): void {};
	ComponentDidMountOrUpdate(lastProps?: Readonly<Props & BaseProps & {children?}>, lastState?: State): void {};
	ComponentDidMountOrUpdate_lastProps: Readonly<Props & BaseProps & {children?}>;
	ComponentDidMountOrUpdate_lastState: State;

	mounted = false;
	@Sealed componentDidMount(...args) {
		this.ComponentDidMount(...args);
		this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
		this.ComponentDidMountOrUpdate_lastProps = this.props as any;
		this.ComponentDidMountOrUpdate_lastState = this.state;
		/*let {Ref} = this.props;
		if (Ref) Ref(this);*/
		this.mounted = true;
		this.CallPostRender();
	}

	ComponentWillUnmount(): void {};
	@Sealed componentWillUnmount() {
		this.ComponentWillUnmount();
		/*for (let timer of this.timers) {
			timer.Stop();
		}
		this.timers = [];*/
		/*let {Ref} = this.props;
		if (Ref) Ref(null);*/
		this.mounted = false;
	}
	
	warnOfTransientObjectProps_options: WarnOfTransientObjectProps_Options = null;
	ComponentWillReceiveProps(newProps: any[]): void {};
	@Sealed UNSAFE_componentWillReceiveProps(newProps) {
		if (this.autoRemoveChangeListeners) {
			this.RemoveChangeListeners();
		}
		
		let warnOptions = this.warnOfTransientObjectProps_options || this.constructor["warnOfTransientObjectProps_options"] as WarnOfTransientObjectProps_Options;
		if (window["DEV"] && warnOptions) {
			for (let [key, value] of Object["entries"](newProps)) {
				if (warnOptions.ignoreProps && warnOptions.ignoreProps.indexOf(key) != -1) continue;
				let isObject = value instanceof Object || (typeof value == "object" && value != null);
				if (isObject && value != this.props[key] && value.memoized == null) {
					let isFunction = value instanceof Function;
					if (!isFunction && !warnOptions.warnForNonFunctions) continue;
					console.warn(`Transient ${isFunction ? "callback" : "object"}-prop detected. @Comp(${this.constructor.name}) @Prop(${key}) @Value:`, value);
				}
			}
			/* let changedProps = this.GetPropChanges(newProps, this.props, false);
			// to prevent false-positives, only raise a warning when the *only* props that changed were callbacks
			if (changedProps.every(prop=>prop.oldVal instanceof Function && prop.newVal instanceof Function)) {
				for (let prop of changedProps) {
					console.warn(`Transient callback-prop detected. @Comp(${this.constructor.name}) @Prop(${prop.key}) @Value:`, prop.newVal);
				}
			} */
		}

		this.ComponentWillReceiveProps(newProps);
		this.ComponentWillMountOrReceiveProps(newProps, false);
		this.lastRender_source = RenderSource.PropChange;
	}
	ComponentDidUpdate(...args: any[]): void {};
	@Sealed componentDidUpdate(...args) {
	   this.ComponentDidUpdate(...args);
		this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
		this.ComponentDidMountOrUpdate_lastProps = this.props as any;
		this.ComponentDidMountOrUpdate_lastState = this.state;
		this.CallPostRender();
	}

	// whether the current/upcoming render was triggered by a mount or prop-change (as opposed to setState() or forceUpdate())
	lastRender_source: RenderSource;
	private CallPostRender() {
		if (this.PostRender == BaseComponent.prototype.PostRender) return;

		let renderSource = this.lastRender_source;

		let ownPostRender = this.PostRender as any;
		// can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
		let prototypePostRender = this.constructor.prototype.PostRender;
		if (ownPostRender.instant || prototypePostRender.instant) {
			this.PostRender(renderSource);
		} else {
			/*if (QuickIncrement("PostRenderLog") <= 1)
				Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
			//Log("Calling PostRender for: " + this.constructor.name);
			setTimeout(()=>window.requestAnimationFrame(()=> {
			//WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
				if (!this.mounted) return;
				this.PostRender(renderSource);
			}));
			/*WaitXThenRun(0, ()=> {
				this.PostRender();
			});*/
		}
	}

	PreRender(): void {};
	PostRender(source?: RenderSource): void {};

	// maybe temp
	/*get Mounted() {
	    return ReactInstanceMap.get(this) != null;
	}*/
}

/*export function BaseComponentWithConnect<Props>(connectFunc: (state?: RootState, props?)=>Props) {
	return function InnerFunc<State>() {
		return BaseComponent as new(..._)=>BaseComponent<Props, State>;
	};
}*/
/*export function BaseComponentWithConnector<PassedProps, ConnectProps, State>(connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State, forwardRef = false) {
	let resultClass = class BaseComponentEnhanced extends BaseComponent<PassedProps & Partial<ConnectProps>, State> {
		constructor(props) {
			super(props);
			this.state = initialState;
			if (this.constructor["initialState"]) {
				throw new Error(`Cannot specify "${this.constructor.name}.initialState". (initial-state is already set using BaseComponentWithConnect function)`)
			}
		}
	}
	// we can't auto-decorate with Connect, because the ConnectedComp is a *wrapper* around the component (Wrapper is a separate component containing the Comp->BaseCompWithConnector->BaseComp proto-chain)
	/*let Connect = BaseComponentWithConnector["Connect"];
	if (Connect) {
		resultClass = Connect(connector, forwardRef)(resultClass);
	}*#/
	
	//return resultClass;
	return resultClass as any as new(..._)=>BaseComponent<PassedProps & Partial<ConnectProps>, State>;
}

/** Derivative of BaseComponentWithConnector. Has same signature, but ignores the connector-related functionality. (so makes same as just BaseComponent, but as a quick toggle) *#/
export function BaseComponentWithConnector_Off<PassedProps, ConnectProps, State>(initialState: State);
export function BaseComponentWithConnector_Off<PassedProps, ConnectProps, State>(connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State);
export function BaseComponentWithConnector_Off<PassedProps, ConnectProps, State>(...args) {
	let connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State;
	if (args.length == 1) [initialState] = args;
	else if (args.length == 2) [connector, initialState] = args;
	
	let resultClass = class BaseComponentEnhanced extends BaseComponent<PassedProps, State> {
		constructor(props) {
			super(props);
			this.state = initialState;
			if (this.constructor["initialState"]) {
				throw new Error(`Cannot specify "${this.constructor.name}.initialState". (initial-state is already set using BaseComponentWithConnect function)`)
			}
		}
	}
	return resultClass as any as new(..._)=>BaseComponent<PassedProps, State>;
}*/

// Note: We can't auto-apply the actual Connect decorator, because here can only be the *base* for the user-component, not *wrap* it (which is needed for the react-redux "Connected(Comp)" component)
export function BaseComponentWithConnector<PassedProps, ConnectProps, State, Stash>(connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State, initialStash: Stash = null) {
	class BaseComponentEnhanced extends BaseComponent<PassedProps & Partial<ConnectProps>, State, Stash> {
		constructor(props) {
			super(props);
			Object.assign(this.state, initialState);
			Object.assign(this.stash, initialStash);
			Assert(this.constructor["initialState"] == null, `Cannot specify "${this.constructor.name}.initialState". (initial-state is already set using BaseComponentWithConnect function)`);
			Assert(this.constructor["initialStash"] == null, `Cannot specify "${this.constructor.name}.initialStash". (initial-stash is already set using BaseComponentWithConnect function)`);
		}
	}
	//return BaseComponentEnhanced;
	return BaseComponentEnhanced as any as new(..._)=>BaseComponent<PassedProps & Partial<ConnectProps>, State>;
}

export function BaseComponentPlus<Props, State, Stash>(defaultProps: Props, initialState: State = null, initialStash: Stash = null) {
	class BaseComponentPlus extends BaseComponent<Props, State, Stash> {
		static defaultProps = defaultProps;
		constructor(props) {
			super(props);
			Object.assign(this.state, initialState);
			Object.assign(this.stash, initialStash);
			Assert(this.constructor["initialState"] == null, `Cannot specify "${this.constructor.name}.initialState". (initial-state is already set using BaseComponentPlus function)`);
			Assert(this.constructor["initialStash"] == null, `Cannot specify "${this.constructor.name}.initialStash". (initial-stash is already set using BaseComponentPlus function)`);
		}
	}
	//return BaseComponentPlus;
	return BaseComponentPlus as any as new(..._)=>BaseComponent<Props, State, Stash>;
}
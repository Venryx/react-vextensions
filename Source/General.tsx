import React, {PropsWithChildren, Ref} from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import {E, AsMultiline, WrapWithGo} from "./Internals/FromJSVE.js";
import {n} from "./Internals/@Types.js";

//var ReactInstanceMap = require("react/lib/ReactInstanceMap");

export function GetDOM(comp: Component<any, any>|n) {
	if (comp == null || comp["mounted"] === false) return null; // mounted is a prop on BaseComponents
	return ReactDOM.findDOMNode(comp) as Element;
}

export function FindReact(dom, traverseUp = 0) {
	const key = Object.keys(dom).find(key=>{
		return key.startsWith("__reactFiber$") // react 17+
			|| key.startsWith("__reactInternalInstance$"); // react <17
	});
	const domFiber = dom[key!];
	if (domFiber == null) return null;

	// react <16
	if (domFiber._currentElement) {
		let compFiber = domFiber._currentElement._owner;
		for (let i = 0; i < traverseUp; i++) {
			compFiber = compFiber._currentElement._owner;
		}
		return compFiber._instance;
	}

	// react 16+
	const GetCompFiber = fiber => {
		//return fiber._debugOwner; // this also works, but is __DEV__ only
		let parentFiber = fiber.return;
		while (typeof parentFiber.type == "string") {
			parentFiber = parentFiber.return;
		}
		return parentFiber;
	};
	let compFiber = GetCompFiber(domFiber);
	for (let i = 0; i < traverseUp; i++) {
		compFiber = GetCompFiber(compFiber);
	}
	return compFiber.stateNode;
}

// needed for wrapper-components that don't provide way of accessing inner-component
export function GetInnerComp(wrapperComp: React.Component<any, any>|n) {
	// in old react-redux versions, if you use `connect([...], {withRef: true})`, a function will be available at wrapper.getWrappedInstance(); use that if available
	if (wrapperComp && wrapperComp["getWrappedInstance"]) return wrapperComp["getWrappedInstance"]();
	const dom = GetDOM(wrapperComp);
	if (dom == null) return null;
	return FindReact(dom) as any;
}

export type numberOrSuch = number | string;
export interface BaseProps extends PropsWithChildren {
	m?: numberOrSuch; ml?: numberOrSuch; mr?: numberOrSuch; mt?: numberOrSuch; mb?: numberOrSuch;
	mlr?: numberOrSuch | "margin left-right"; mtb?: numberOrSuch | "margin top-bottom";
	p?: numberOrSuch; pl?: numberOrSuch; pr?: numberOrSuch; pt?: numberOrSuch; pb?: numberOrSuch;
	plr?: numberOrSuch | "padding left-right"; ptb?: numberOrSuch | "padding top-bottom";
	sel?: boolean; ct?: boolean;

	// removed, because ReactJS does not recognize "Ref" as special prop like "ref" is 
	//Ref?: (comp: any)=>any;
}
export var basePropFullKeys = {
	m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
	mlr: null, mtb: null,
	p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
	plr: null, ptb: null,
	sel: null, // selectable
	ct: null, // clickthrough
};
//export const basePropKeys = Object.keys(basePropFullKeys);
export const basePropKeys = new Set(Object.keys(basePropFullKeys));

export function BasicStyles(props) {
	const result: any = {};
	ExpandBasicStylesOnX(result, props);
	return result;
}
export function ExpandBasicStylesOnX(styleObj, props) {
	for (const key in props) {
		const fullKey = basePropFullKeys[key];
		if (fullKey != null) {
			styleObj[fullKey] = props[key];
		} else if (key == "mlr") {
			styleObj.marginLeft = props[key];
			styleObj.marginRight = props[key];
		} else if (key == "mtb") {
			styleObj.marginTop = props[key];
			styleObj.marginBottom = props[key];
		} else if (key == "plr") {
			styleObj.paddingLeft = props[key];
			styleObj.paddingRight = props[key];
		} else if (key == "ptb") {
			styleObj.paddingTop = props[key];
			styleObj.paddingBottom = props[key];
		}
	}
}

function DoNothing() {}
export function ApplyBasicStyles(target: React.ComponentClass<any>, removeBasePropKeys = true) {
	let oldRender = target.prototype.render;
	target.prototype.render = function () {
		let props = this.props;
		// unfreeze props
		/* if (Object.isFrozen(props)) this.props = {...props};
		if (props.style && Object.isFrozen(props.style)) props.style = {...props.style}; */

		let result = oldRender.call(this) as React.JSX.Element;
		// optimization; only unfreeze props if/when we need to (pre: ~100ms over 20s map-load)
		let unfreezeProps = ()=>{
			// unfreeze result, and its props
			if (Object.isFrozen(result)) result = {...result};
			if (Object.isFrozen(result.props)) result.props = {...result.props};
			unfreezeProps = DoNothing; // optimization
		};
		
		if (props.sel || props.ct) {
			unfreezeProps();
			let className = classNames({selectable: props.sel, clickThrough: props.ct}, result.props.className);
			if (className) {
				result.props.className = className;
			}
		}

		//result.props.style = {...result.props.style, ...BasicStyles(props)};
		if (result.props.style == null) {
			unfreezeProps();
			result.props.style = {};
		}
		ExpandBasicStylesOnX(result.props.style, props);
		if (removeBasePropKeys) {
			for (const key of basePropKeys) {
				unfreezeProps();
				delete result.props[key];
			}
		}

		return result;
	}
}
/*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
	let oldRender = target.prototype.render;
	target.prototype.render = function() {
		let result = oldRender.call(this) as JSX.Element;
		result.props.style = E(BasicStyles(result.props), result.props.style);
		RemoveBasePropKeys(result.props);
		return result;
	}
}*/

export function ShallowEquals(objA, objB, options?: {propsToIgnore?: string[]}|n) {
	if (objA === objB) return true;

	const keysA = Object.keys(objA || {});
	const keysB = Object.keys(objB || {});
	if (keysA.length !== keysB.length) return false;

	// Test for A's keys different from B.
	const hasOwn = Object.prototype.hasOwnProperty;
	for (let i = 0; i < keysA.length; i++) {
		let key = keysA[i];
		if (options && options.propsToIgnore && options.propsToIgnore.indexOf(key) != -1) continue;
		if (!hasOwn.call(objB, key) || objA[key] !== objB[key]) return false;

		const valA = objA[key];
		const valB = objB[key];
		if (valA !== valB) return false;
	}

	return true;
}
export function ShallowChanged(objA, objB, options?: {propsToIgnore?: string[], propsToCompareMoreDeeply?: string[]}) {
	if (options && options.propsToCompareMoreDeeply && options.propsToCompareMoreDeeply.length) {
		if (ShallowChanged(objA.Excluding(...options.propsToCompareMoreDeeply), objB.Excluding(...options.propsToCompareMoreDeeply))) {
			return true;
		}

		for (let key of options.propsToCompareMoreDeeply) {
			// for "children", shallow-compare at two levels deeper
			if (key == "children") {
				for (let childKey of (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())) {
					if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
				}
			} else {
				if (ShallowChanged(objA[key], objB[key])) return true;
			}
		}
		return false;
	}
	return !ShallowEquals(objA, objB, options?.propsToIgnore ? {propsToIgnore: options.propsToIgnore} : null);
}

//require("./GlobalStyles");

//let loaded = false;
let globalElementHolder: HTMLDivElement;

//export const onReadyForGlobalElementsListeners = [] as (() => any)[];
/*export function OnWindowLoaded() {
	onReadyForGlobalElementsListeners.forEach(a => a());
}
//window.addEventListener("load", OnWindowLoaded);
if (document.readyState == "loading") {
	document.addEventListener("DOMContentLoaded", OnWindowLoaded);
} else {
	OnWindowLoaded();
}*/

export function RunWhenReadyForGlobalElements(listener: ()=>any) {
	// if running in NodeJS, quick-return
	if (typeof document == "undefined") return;

	if (document.readyState == "loading") {
		//window.addEventListener("load", listener);
		document.addEventListener("DOMContentLoaded", listener);
	} else {
		listener();
	}
}

export function AddGlobalElement(html: string, asMultiline = true) {
	if (asMultiline) {
		html = AsMultiline(html, 0);
	}
	RunWhenReadyForGlobalElements(()=> {
		globalElementHolder = globalElementHolder ?? document.querySelector("#hidden_early") ?? (()=>{
			const newHolder = document.createElement("div");
			newHolder.id = "hidden_early";
			Object.assign(newHolder.style, {position: "absolute", left: -1000, top: -1000, width: 1000, height: 1000, overflow: "hidden"});
			document.body.prepend(newHolder);
			return newHolder;
		})();

		//let nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
		//let nodeType = html.match(`<([a-zA-Z-]+)`)[1];
		const match = html.match(`<([^ >]+)`);
		if (match == null) throw new Error(`Invalid html: ${html}`);
		let nodeType = match[1];
		let element = document.createElement(nodeType);
		globalElementHolder.appendChild(element);
		element.outerHTML = html;
	});
};
export function AddGlobalStyle(str: string, asMultiline = true) {
	if (asMultiline) {
		str = AsMultiline(str, 0);
	}
	AddGlobalElement(`
		<style>
		${str}
		</style>
	`);
};

/*AddGlobalStyle(`
*:not(.ignoreBaseCSS) {
	color: rgba(255,255,255,.7);
}
`);*/

/*#* Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
/*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
	WaitXThenRun(0, ()=> {
		debugger;
		let type = typeGetterFunc() as any;
		setFunc(type.DecoratedComponent);
	});
	return {} as any;
}*/
/*export function PreRadium<T>(_: T, wrapperClass: Function): T {
	return (wrapperClass as any).DecoratedComponent;
}*/

/*export function GetErrorMessagesUnderElement(element: HTMLElement) {
	return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
}*/

/** As an alternative to adding this decorator to your class, consider just adding the line "EnsureSealedPropsArentOverriden(this, MyClass);" into its constructor. */
export function HasSealedProps(target: new (..._) => any) {
	/*let oldConstructor = target.constructor;
	target.constructor = function() {
		for (let key in target["prototype"]) {
			let method = target["prototype"][key];
			if (method.sealed && this[key] != method) {
				throw new Error(`Cannot override sealed method "${key}".`);
			}
		}
		return oldConstructor.apply(this, arguments);
	};*/

	/*class WrapperClass {
		constructor(...args) {
			for (let key of Object.getOwnPropertyNames(target.prototype)) {
				//let method = target.prototype[key];
				let method = Object.getOwnPropertyDescriptor(target.prototype, key).value;
				if (method instanceof Function && method.sealed && this[key] != method) {
					throw new Error(`Cannot override sealed method "${key}".`);
				}
			}
			return new target(...args);
		}
	}
	WrapperClass.prototype = target.prototype;
	return WrapperClass as any;*/

	return (class WrapperClass extends target {
		constructor(...args) {
			super(...args);
			EnsureSealedPropsArentOverriden(this, target);
		}
	}) as any;
}
export type SealedEntry = {name: string, method: Function};
export const sealedMethodsForClasses = new Map<Function, SealedEntry[]>();

export type SealedPropHandlingResult = "allow" | Error | "noChange";
export type DifferenceInterceptor = (classWherePropsSealed: new (..._) => any, sealedEntry: SealedEntry, compInstance: any)=>SealedPropHandlingResult;
export let sealedProps_differenceInterceptor: DifferenceInterceptor;
/** By setting an interceptor, you can tell react-vextensions that certain deviant values of a sealed prop are acceptable. (eg. a patched version of componentDidMount from a library like mobx-react) */
export function sealedProps_differenceInterceptor_set(interceptor: DifferenceInterceptor) {
	sealedProps_differenceInterceptor = interceptor;
}

export function EnsureSealedPropsArentOverriden(compInstance: any, classWherePropsSealed: new (..._) => any, fixNote?: (methodName: string) => string, allowMobXOverriding = false) {
	// cache list of sealed-methods; can save ~100ms over ~20_000ms map-load duration
	if (!sealedMethodsForClasses.has(classWherePropsSealed)) {
		const sealedMethods = Object.entries(Object.getOwnPropertyDescriptors(classWherePropsSealed.prototype))
			.filter(([key, desc])=>desc.value instanceof Function && desc.value["sealed"])
			.map(([key, desc])=>({name: key, method: desc.value}));
		sealedMethodsForClasses.set(classWherePropsSealed, sealedMethods);
	}
	
	for (const entry of sealedMethodsForClasses.get(classWherePropsSealed) ?? []) {
		let entryResult: SealedPropHandlingResult = "allow";
		if (compInstance[entry.name] != entry.method) {
			entryResult = new Error(`Cannot override sealed method "${entry.name}".${fixNote ? fixNote(entry.name) : ""}`);
			
			if (allowMobXOverriding) {
				let classProto = compInstance.constructor.prototype;

				// There are multiple ways one could use to detect if the given func is provided by mobx/mobx-react.
				// For now, we rely on mobx-react calling `patch(prototype, "componentWillUnmount", ...)` on the class prototype, alongside its replacement of render() and componentDidMount()
				// So if we find that `componentWillUnmount` was patched in that way, then we consider all three of these methods to be mobx-react-provided.

				const funcsMobxReactAffects = ["render", "componentDidMount", "componentWillUnmount"];
				let mobxMixinsKey = Object.getOwnPropertySymbols(classProto).find(a=>a.toString() == "Symbol(patchMixins)");
				// if this method is one mobx-react affects, and all such methods exist on class-proto, and class-proto has a mobx-mixins-key, and that mobx-mixins shows that `componentWillUnmount` method was patched...
				if (funcsMobxReactAffects.includes(entry.name) && funcsMobxReactAffects.every(a=>classProto[a]) && mobxMixinsKey && classProto[mobxMixinsKey]?.componentWillUnmount != null) {
					// ...then "continue" -- such that the method's differing does not trigger an error (this is normal, for mobx-react comps)
					entryResult = "allow";
				}
			}
		}

		if (entryResult != "allow" && sealedProps_differenceInterceptor) {
			let newEntryResult = sealedProps_differenceInterceptor(classWherePropsSealed, entry, compInstance);
			if (newEntryResult != "noChange") {
				entryResult = newEntryResult;
			}
		}

		if (entryResult instanceof Error) throw entryResult;
	}
}

export function Sealed(target: Object, key: string) {
	target[key].sealed = true;
}

const reactSpecialProps = [
	"key",
	"children",
	"dangerouslySetInnerHTML",
];
const elementTypeInstances = {};
export function FilterOutUnrecognizedProps(props: Object, elementType: string, allowDataProps = true) {
	//if (process.env.NODE_ENV !== 'development') { return props; }
	if (elementTypeInstances[elementType] == null) {
		elementTypeInstances[elementType] = document.createElement(elementType);
	}
	let testerElement = elementTypeInstances[elementType];

	// filter out any keys which don't exist in React's special-props or the tester
	const filteredProps = {};
	Object.keys(props).filter(propName =>
		(propName in testerElement) || (propName.toLowerCase() in testerElement) || reactSpecialProps.indexOf(propName) != -1 || (allowDataProps && propName.startsWith("data-"))
	).forEach(propName => filteredProps[propName] = props[propName]);
	return filteredProps;
}

export const RunWithRenderingBatched = WrapWithGo((func: Function) => {
	ReactDOM.unstable_batchedUpdates(func as any);
});

export function CombineRefs(...refs: Ref<any>[]) {
	return (comp: Component | Element) => {
		for (let ref of refs) {
			if (typeof ref == "function") {
				ref(comp);
			} else {
				ref!["current" as any] = comp; // not sure if correct
			}
		}
	};
}
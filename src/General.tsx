import React, {Ref} from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import {BaseComponent} from "./BaseComponent";
import classNames from "classnames";
import {E, AsMultiline, WrapWithGo} from "./Internals/FromJSVE";

export function RemoveDuplicates(items: any) {
	var result = [];
	for (let item of items) {
		if (result.indexOf(item) == -1) {
			result.push(item);
		}
	}
	return result;
}

//var ReactInstanceMap = require("react/lib/ReactInstanceMap");

export function GetDOM(comp: Component<any, any>) {
	if (comp == null || comp["mounted"] === false) return null; // mounted is a prop on BaseComponents
	return ReactDOM.findDOMNode(comp) as Element;
}
export function FindReact(dom, traverseUp = 0) {
	const key = Object.keys(dom).find(key=>key.startsWith("__reactInternalInstance$"));
	const domFiber = dom[key];
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
	const GetCompFiber = fiber=>{
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
export function GetInnerComp(wrapperComp: React.Component<any, any>) {
	// in old react-redux versions, if you use `connect([...], {withRef: true})`, a function will be available at wrapper.getWrappedInstance(); use that if available
	if (wrapperComp && wrapperComp["getWrappedInstance"]) return wrapperComp["getWrappedInstance"]();
	const dom = GetDOM(wrapperComp);
	if (dom == null) return null;
	return FindReact(dom) as any;
}

export type numberOrSuch = number | string;
export interface BaseProps {
	m?: numberOrSuch; ml?: numberOrSuch; mr?: numberOrSuch; mt?: numberOrSuch; mb? : numberOrSuch;
	mlr?: numberOrSuch | "margin left-right"; mtb?: numberOrSuch | "margin top-bottom";
	p?: numberOrSuch; pl?: numberOrSuch; pr?: numberOrSuch; pt?: numberOrSuch; pb?: numberOrSuch;
	plr?: numberOrSuch | "padding left-right"; ptb?: numberOrSuch | "padding top-bottom";
	sel?: boolean; ct?: boolean;

	//tabLabel?: string; active?: boolean;

	page?; match?;
	//firebase?: FirebaseDatabase;

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

	//tabLabel: null, active: null,

	page: null, match: null,
	firebase: null,
};
function RemoveBasePropKeys(restObj) {
	for (let key in basePropFullKeys)
		delete restObj[key];
}
export function BasicStyles(props) {
	var result: any = {};

	for (let key in props) {
		if (basePropFullKeys[key] != null) {
			let fullKey = basePropFullKeys[key];
			result[fullKey] = props[key];
		} else if (key == "mlr") {
			result.marginLeft = props[key];
			result.marginRight = props[key];
		} else if (key == "mtb") {
			result.marginTop = props[key];
			result.marginBottom = props[key];
		} else if (key == "plr") {
			result.paddingLeft = props[key];
			result.paddingRight = props[key];
		} else if (key == "ptb") {
			result.paddingTop = props[key];
			result.paddingBottom = props[key];
		}
	}

	return result;
}
export function ApplyBasicStyles(target: React.ComponentClass<any>) {
	let oldRender = target.prototype.render;
	target.prototype.render = function() {
		let props = this.props;
		// unfreeze props
		/* if (Object.isFrozen(props)) this.props = E(props);
		if (props.style && Object.isFrozen(props.style)) props.style = E(props.style); */

		let result = oldRender.call(this) as JSX.Element;
		// unfreeze result
		if (Object.isFrozen(result)) result = E(result);
		if (Object.isFrozen(result.props)) result.props = E(result.props);
		//if (result.props.style && Object.isFrozen(result.props.style)) result.props.style = E(result.props.style);

		let className = classNames({selectable: props.sel, clickThrough: props.ct}, result.props.className);
		if (className) {
			result.props.className = className;
		}
		result.props.style = E(result.props.style, BasicStyles(props));
		RemoveBasePropKeys(result.props);
		
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

export function ShallowEquals(objA, objB, options?: {propsToIgnore?: string[]}) {
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
	return !ShallowEquals(objA, objB, options && options.propsToIgnore ? {propsToIgnore: options.propsToIgnore} : null);
}

//require("./GlobalStyles");

let loaded = false;
let globalElementHolder: HTMLDivElement;
export function AddGlobalElement(html: string, asMultiline = true) {
	if (asMultiline) {
		html = AsMultiline(html, 0);
	}
	let proceed = ()=> {
		loaded = true;

		if (globalElementHolder == null) {
			globalElementHolder = document.querySelector("#hidden_early");
			if (globalElementHolder == null) {
				globalElementHolder = document.createElement("div");
				globalElementHolder.id = "hidden_early";
				Object.assign(globalElementHolder.style, {position: "absolute", left: -1000, top: -1000, width: 1000, height: 1000, overflow: "hidden"});
				document.body.prepend(globalElementHolder);
			}
		}

		//let nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
		//let nodeType = html.match(`<([a-zA-Z-]+)`)[1];
		let nodeType = html.match(`<([^ >]+)`)[1];
		let element = document.createElement(nodeType);
		globalElementHolder.appendChild(element);
		element.outerHTML = html;
	};
	if (loaded) {
		proceed();
	} else {
		window.addEventListener("load", proceed);
	}
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
export function HasSealedProps(target: new(..._)=>any) {
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
export function EnsureSealedPropsArentOverriden(compInstance: any, classWherePropsSealed: new(..._)=>any, fixNote?: (methodName: string)=>string, allowMobXOverriding = false) {
	for (let methodName of Object.getOwnPropertyNames(classWherePropsSealed.prototype)) {
		//let method = classWherePropsSealed.prototype[key];
		let method = Object.getOwnPropertyDescriptor(classWherePropsSealed.prototype, methodName).value;
		if (method instanceof Function && method.sealed && compInstance[methodName] != method) {
			if (allowMobXOverriding) {
				let classProto = compInstance.constructor.prototype;
				let mobxMixinsKey = Object.getOwnPropertySymbols(classProto).find(a=>a.toString() == "Symbol(patchMixins)");
				let mobxMixins = classProto[mobxMixinsKey];
				if (mobxMixins && mobxMixins[methodName] != null) continue;
			}

			throw new Error(`Cannot override sealed method "${methodName}".${fixNote ? fixNote(methodName) : ""}`);
		}
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
	Object.keys(props).filter(propName=> 
		 (propName in testerElement) || (propName.toLowerCase() in testerElement) || reactSpecialProps.indexOf(propName) != -1 || (allowDataProps && propName.startsWith("data-"))
	).forEach(propName=>filteredProps[propName] = props[propName]);
	return filteredProps;
}

export const RunWithRenderingBatched = WrapWithGo((func: Function)=>{
	ReactDOM.unstable_batchedUpdates(func as any);
});

export function CombineRefs(...refs: Ref<any>[]) {
	return (comp: Component | Element)=> {
		for (let ref of refs) {
			if (typeof ref == "function") {
				ref(comp);
			} else {
				ref["current" as any] = comp; // not sure if correct
			}
		}
	};
}
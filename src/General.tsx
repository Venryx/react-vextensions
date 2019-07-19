import React from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import {BaseComponent} from "./BaseComponent";
import classNames from "classnames";

export function E<E1,E2,E3,E4,E5,E6,E7,E8>(e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8):E1&E2&E3&E4&E5&E6&E7&E8 {
	var result = {} as any;
	for (var extend of arguments)
		result.Extend(extend);
	return result;
	//return StyleSheet.create(result);
}

export function ToJSON(obj) { return JSON.stringify(obj); }
export function FromJSON(json) { return JSON.parse(json); }

export function AsMultiline(str: string, desiredIndent: number = null) {
	let result = str.substring(str.indexOf("\n") + 1, str.lastIndexOf("\n"));
	if (desiredIndent != null) {
		let firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
		if (firstLineIndent) {
			let lines = result.split("\n");
			// remove X tabs from start of each line (where X is firstLineIndent)
			lines = lines.map(line=>line.replace(new RegExp(`^\t{0,${firstLineIndent}}`), ""));
			result = lines.join("\n");
		}
	}
	return result;
};

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
export function FindReact(dom) {
	if (dom == null) return null;
	let key = Object.keys(dom).find(key=>key.startsWith("__reactInternalInstance$"));
	let internalInstance = dom[key];
	if (internalInstance == null) return null;

	if (internalInstance.return) { // react 16+
		return internalInstance._debugOwner
			? internalInstance._debugOwner.stateNode
			: internalInstance.return.stateNode;
	} else { // react <16
		//return internalInstance._currentElement._owner._instance as React.Component<any, any>;
		return internalInstance._currentElement._owner._instance as BaseComponent<any, any>;
	}
}
// needed for wrapper-components that don't provide way of accessing inner-component
export function GetInnerComp(wrapperComp: React.Component<any, any>) {
	// in old react-redux versions, if you use `connect([...], {withRef: true})`, a function will be available at wrapper.getWrappedInstance(); use that if available
	if (wrapperComp && wrapperComp["getWrappedInstance"]) return wrapperComp["getWrappedInstance"]();
	return FindReact(GetDOM(wrapperComp)) as any;
}

export type numberOrSuch = number | string;
export interface BaseProps {
	m?: numberOrSuch; ml?: numberOrSuch; mr?: numberOrSuch; mt?: numberOrSuch; mb? : numberOrSuch;
	mlr?: numberOrSuch | "margin left-right"; mtb?: numberOrSuch | "margin top-bottom";
	p?: numberOrSuch; pl?: numberOrSuch; pr?: numberOrSuch; pt?: numberOrSuch; pb?: numberOrSuch;
	plr?: numberOrSuch | "padding left-right"; ptb?: numberOrSuch | "padding top-bottom";
	sel?: boolean; ct?: boolean;

	tabLabel?: string; active?: boolean;

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

	tabLabel: null, active: null,

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
		let result = oldRender.call(this) as JSX.Element;

		let props = this.props;
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

function Excluding(obj, ...propNames) {
	var result = E(obj);
	for (let propName of propNames) {
		 delete result[propName];
	}
	return result;
}

export class SimpleShouldUpdate_Options {
	propsToIgnore = null as string[];
	stateToIgnore = null as string[];
	useShouldUpdateProp = false;
}
export function SimpleShouldUpdate(target: Function);
export function SimpleShouldUpdate(options: Partial<SimpleShouldUpdate_Options>);
export function SimpleShouldUpdate(...args) {
	let options = new SimpleShouldUpdate_Options();
	if (typeof args[0] == "function") {
		ApplyToClass(args[0]);
	} else {
		options = E(options, args[0]);
		return ApplyToClass;
	}

	function ApplyToClass(targetClass: Function) {
		targetClass.prototype.shouldComponentUpdate = function(newProps, newState) {
			/*if (options.logChangedWhen...) {
				Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));
			}*/

			if (options.useShouldUpdateProp) {
				let {shouldUpdate} = newProps;
				if (typeof shouldUpdate == "boolean") return shouldUpdate;
				if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
			}
			return ShallowChanged(this.props, newProps, {propsToIgnore: options.propsToIgnore}) || ShallowChanged(this.state, newState, {propsToIgnore: options.stateToIgnore});
		}
	}
}

// for PostRender() func
export function Instant(target, name) {
	target[name].instant = true;
}

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
export function AddGlobalElement(html: string, asMultiline = true) {
	if (asMultiline) {
		html = AsMultiline(html, 0);
	}
	let proceed = ()=> {
		loaded = true;
		//let nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
		//let nodeType = html.match(`<([a-zA-Z-]+)`)[1];
		let nodeType = html.match(`<([^ >]+)`)[1];
		let element = document.createElement(nodeType);
		document.querySelector("#hidden_early").appendChild(element);
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
export function EnsureSealedPropsArentOverriden(compInstance: any, classWherePropsSealed: new(..._)=>any) {
	for (let key of Object.getOwnPropertyNames(classWherePropsSealed.prototype)) {
		//let method = classWherePropsSealed.prototype[key];
		let method = Object.getOwnPropertyDescriptor(classWherePropsSealed.prototype, key).value;
		if (method instanceof Function && method.sealed && compInstance[key] != method) {
			throw new Error(`Cannot override sealed method "${key}".`);
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
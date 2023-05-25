import ReactDOM from "react-dom";
import classNames from "classnames";
import { AsMultiline, WrapWithGo } from "./Internals/FromJSVE.js";
//var ReactInstanceMap = require("react/lib/ReactInstanceMap");
export function GetDOM(comp) {
    if (comp == null || comp["mounted"] === false)
        return null; // mounted is a prop on BaseComponents
    return ReactDOM.findDOMNode(comp);
}
export function FindReact(dom, traverseUp = 0) {
    const key = Object.keys(dom).find(key => {
        return key.startsWith("__reactFiber$") // react 17+
            || key.startsWith("__reactInternalInstance$"); // react <17
    });
    const domFiber = dom[key];
    if (domFiber == null)
        return null;
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
export function GetInnerComp(wrapperComp) {
    // in old react-redux versions, if you use `connect([...], {withRef: true})`, a function will be available at wrapper.getWrappedInstance(); use that if available
    if (wrapperComp && wrapperComp["getWrappedInstance"])
        return wrapperComp["getWrappedInstance"]();
    const dom = GetDOM(wrapperComp);
    if (dom == null)
        return null;
    return FindReact(dom);
}
export var basePropFullKeys = {
    m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
    mlr: null, mtb: null,
    p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
    plr: null, ptb: null,
    sel: null,
    ct: null, // clickthrough
};
//export const basePropKeys = Object.keys(basePropFullKeys);
export const basePropKeys = new Set(Object.keys(basePropFullKeys));
export function BasicStyles(props) {
    const result = {};
    ExpandBasicStylesOnX(result, props);
    return result;
}
export function ExpandBasicStylesOnX(styleObj, props) {
    for (const key in props) {
        const fullKey = basePropFullKeys[key];
        if (fullKey != null) {
            styleObj[fullKey] = props[key];
        }
        else if (key == "mlr") {
            styleObj.marginLeft = props[key];
            styleObj.marginRight = props[key];
        }
        else if (key == "mtb") {
            styleObj.marginTop = props[key];
            styleObj.marginBottom = props[key];
        }
        else if (key == "plr") {
            styleObj.paddingLeft = props[key];
            styleObj.paddingRight = props[key];
        }
        else if (key == "ptb") {
            styleObj.paddingTop = props[key];
            styleObj.paddingBottom = props[key];
        }
    }
}
function DoNothing() { }
export function ApplyBasicStyles(target, removeBasePropKeys = true) {
    let oldRender = target.prototype.render;
    target.prototype.render = function () {
        let props = this.props;
        // unfreeze props
        /* if (Object.isFrozen(props)) this.props = {...props};
        if (props.style && Object.isFrozen(props.style)) props.style = {...props.style}; */
        let result = oldRender.call(this);
        // optimization; only unfreeze props if/when we need to (pre: ~100ms over 20s map-load)
        let unfreezeProps = () => {
            // unfreeze result, and its props
            if (Object.isFrozen(result))
                result = Object.assign({}, result);
            if (Object.isFrozen(result.props))
                result.props = Object.assign({}, result.props);
            unfreezeProps = DoNothing; // optimization
        };
        if (props.sel || props.ct) {
            unfreezeProps();
            let className = classNames({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
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
    };
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
export function ShallowEquals(objA, objB, options) {
    if (objA === objB)
        return true;
    const keysA = Object.keys(objA || {});
    const keysB = Object.keys(objB || {});
    if (keysA.length !== keysB.length)
        return false;
    // Test for A's keys different from B.
    const hasOwn = Object.prototype.hasOwnProperty;
    for (let i = 0; i < keysA.length; i++) {
        let key = keysA[i];
        if (options && options.propsToIgnore && options.propsToIgnore.indexOf(key) != -1)
            continue;
        if (!hasOwn.call(objB, key) || objA[key] !== objB[key])
            return false;
        const valA = objA[key];
        const valB = objB[key];
        if (valA !== valB)
            return false;
    }
    return true;
}
export function ShallowChanged(objA, objB, options) {
    if (options && options.propsToCompareMoreDeeply && options.propsToCompareMoreDeeply.length) {
        if (ShallowChanged(objA.Excluding(...options.propsToCompareMoreDeeply), objB.Excluding(...options.propsToCompareMoreDeeply))) {
            return true;
        }
        for (let key of options.propsToCompareMoreDeeply) {
            // for "children", shallow-compare at two levels deeper
            if (key == "children") {
                for (let childKey of (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())) {
                    if (ShallowChanged(objA.children[childKey], objB.children[childKey]))
                        return true;
                }
            }
            else {
                if (ShallowChanged(objA[key], objB[key]))
                    return true;
            }
        }
        return false;
    }
    return !ShallowEquals(objA, objB, (options === null || options === void 0 ? void 0 : options.propsToIgnore) ? { propsToIgnore: options.propsToIgnore } : null);
}
//require("./GlobalStyles");
//let loaded = false;
let globalElementHolder;
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
export function RunWhenReadyForGlobalElements(listener) {
    // if running in NodeJS, quick-return
    if (typeof document == "undefined")
        return;
    if (document.readyState == "loading") {
        //window.addEventListener("load", listener);
        document.addEventListener("DOMContentLoaded", listener);
    }
    else {
        listener();
    }
}
export function AddGlobalElement(html, asMultiline = true) {
    if (asMultiline) {
        html = AsMultiline(html, 0);
    }
    RunWhenReadyForGlobalElements(() => {
        var _a;
        globalElementHolder = (_a = globalElementHolder !== null && globalElementHolder !== void 0 ? globalElementHolder : document.querySelector("#hidden_early")) !== null && _a !== void 0 ? _a : (() => {
            const newHolder = document.createElement("div");
            newHolder.id = "hidden_early";
            Object.assign(newHolder.style, { position: "absolute", left: -1000, top: -1000, width: 1000, height: 1000, overflow: "hidden" });
            document.body.prepend(newHolder);
            return newHolder;
        })();
        //let nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
        //let nodeType = html.match(`<([a-zA-Z-]+)`)[1];
        const match = html.match(`<([^ >]+)`);
        if (match == null)
            throw new Error(`Invalid html: ${html}`);
        let nodeType = match[1];
        let element = document.createElement(nodeType);
        globalElementHolder.appendChild(element);
        element.outerHTML = html;
    });
}
;
export function AddGlobalStyle(str, asMultiline = true) {
    if (asMultiline) {
        str = AsMultiline(str, 0);
    }
    AddGlobalElement(`
		<style>
		${str}
		</style>
	`);
}
;
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
export function HasSealedProps(target) {
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
    });
}
export const sealedMethodsForClasses = new Map();
export function EnsureSealedPropsArentOverriden(compInstance, classWherePropsSealed, fixNote, allowMobXOverriding = false) {
    var _a;
    // cache list of sealed-methods; can save ~100ms over ~20_000ms map-load duration
    if (!sealedMethodsForClasses.has(classWherePropsSealed)) {
        const sealedMethods = Object.entries(Object.getOwnPropertyDescriptors(classWherePropsSealed.prototype))
            .filter(([key, desc]) => desc.value instanceof Function && desc.value["sealed"])
            .map(([key, desc]) => ({ name: key, method: desc.value }));
        sealedMethodsForClasses.set(classWherePropsSealed, sealedMethods);
    }
    for (const entry of (_a = sealedMethodsForClasses.get(classWherePropsSealed)) !== null && _a !== void 0 ? _a : []) {
        if (compInstance[entry.name] != entry.method) {
            if (allowMobXOverriding) {
                let classProto = compInstance.constructor.prototype;
                let mobxMixinsKey = Object.getOwnPropertySymbols(classProto).find(a => a.toString() == "Symbol(patchMixins)");
                // if mobx-mixings-key is present, and mixin is found for this method, then "continue" -- such that the method's differing does not trigger an error (this is normal, for mobx-react comps)
                if (mobxMixinsKey != null) {
                    let mobxMixins = classProto[mobxMixinsKey];
                    if (mobxMixins && mobxMixins[entry.name] != null)
                        continue;
                }
            }
            throw new Error(`Cannot override sealed method "${entry.name}".${fixNote ? fixNote(entry.name) : ""}`);
        }
    }
}
export function Sealed(target, key) {
    target[key].sealed = true;
}
const reactSpecialProps = [
    "key",
    "children",
    "dangerouslySetInnerHTML",
];
const elementTypeInstances = {};
export function FilterOutUnrecognizedProps(props, elementType, allowDataProps = true) {
    //if (process.env.NODE_ENV !== 'development') { return props; }
    if (elementTypeInstances[elementType] == null) {
        elementTypeInstances[elementType] = document.createElement(elementType);
    }
    let testerElement = elementTypeInstances[elementType];
    // filter out any keys which don't exist in React's special-props or the tester
    const filteredProps = {};
    Object.keys(props).filter(propName => (propName in testerElement) || (propName.toLowerCase() in testerElement) || reactSpecialProps.indexOf(propName) != -1 || (allowDataProps && propName.startsWith("data-"))).forEach(propName => filteredProps[propName] = props[propName]);
    return filteredProps;
}
export const RunWithRenderingBatched = WrapWithGo((func) => {
    ReactDOM.unstable_batchedUpdates(func);
});
export function CombineRefs(...refs) {
    return (comp) => {
        for (let ref of refs) {
            if (typeof ref == "function") {
                ref(comp);
            }
            else {
                ref["current"] = comp; // not sure if correct
            }
        }
    };
}

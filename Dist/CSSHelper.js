/*
Todo items
==========
1) Add system that hoists static style props into a css-class (in a <style> element). ("static" style props are those not wrapped in `dyn(...)`)
2) Add full support for {..., ":hover": {...}} substructures. (atm, css() accepts that key, but the only thing able to apply it is the ClassBasedStyle() function)
3) Extract this system into a separate package. (at some point)
*/
import { Component } from "react";
/**
 * Example usage:
 * ```
 * const {key, css, dyn} = cssHelper(this);
 * return (
 * 	<nav className={key("root", "clickThrough")} style={css({
 * 		position: "absolute", zIndex: dyn(manager.zIndexes.subNavBar), top: 0, width: "100%", textAlign: "center",
 * 	})}>
 * 		<div className={key("sub1")} style={css(
 * 			{display: "inline-block", background: "rgba(0,0,0,.7)", boxShadow: dyn(manager.colors.navBarBoxShadow.css())},
 * 			dyn(fullWidth ? {width: "100%"} : {borderRadius: "0 0 10px 10px"}),
 * 		)}>
 * 			{children}
 * 		</div>
 * 	</nav>
 * );
 * ```
 */
export function cssHelper(compInstance, cloneInputsForHooks = true) {
    const compClass = compInstance.constructor;
    let keyCallIndex = 0;
    let liveKey;
    const key = (...classNames) => {
        let classNames_final = classNames;
        const callIndex = keyCallIndex++;
        const keyHooks = [];
        for (const hookSet of GetHookSetsForCompClass(compClass)) {
            keyHooks.push(...hookSet.key);
        }
        if (cloneInputsForHooks && keyHooks.length)
            classNames_final = classNames_final.slice();
        for (const hook of keyHooks) {
            const ctx = new KeyHook_Context({
                self: compInstance,
                callIndex,
                classNames_orig: classNames,
                classNames: classNames_final,
            });
            hook(ctx);
        }
        liveKey = classNames_final[0];
        return classNames_final.filter(a => a).join(" ");
    };
    let cssCallIndex = 0;
    const css = ((...args) => {
        let keyFromArg, styles;
        if (typeof args[0] == "string" && args[0].length > 0)
            [keyFromArg, ...styles] = args;
        else
            styles = args;
        const callIndex = cssCallIndex++;
        const key_final = keyFromArg !== null && keyFromArg !== void 0 ? keyFromArg : liveKey;
        if (liveKey != null && keyFromArg != null)
            console.warn("Live-key was set using key(...), but the subsequent css(...) call supplied its own key, discarding the live-key.");
        let styles_final = styles;
        const cssHooks = [];
        for (const hookSet of GetHookSetsForCompClass(compClass)) {
            cssHooks.push(...hookSet.css);
        }
        if (cloneInputsForHooks && cssHooks.length)
            styles_final = styles_final.slice();
        for (const hook of cssHooks) {
            const ctx = new CSSHook_Context({
                self: compInstance,
                key: key_final,
                callIndex,
                styleArgs_orig: styles,
                styleArgs: styles_final,
            });
            hook(ctx);
        }
        liveKey = null;
        return Object.assign({}, ...styles_final);
    });
    const dyn = (val) => {
        return val;
    };
    return { key, css, dyn };
}
/** Pass this into the addHook functions to have your hook run for any component-class. */
export class CompClass_Any extends Component {
}
export const compClassHookSets = new WeakMap();
export const compClassHookSets_byName = new Map();
export function GetCompClassHookSet(compClassOrName) {
    if (typeof compClassOrName == "string") {
        if (!compClassHookSets_byName.has(compClassOrName)) {
            compClassHookSets_byName.set(compClassOrName, new CompClassHookSet());
        }
        return compClassHookSets_byName.get(compClassOrName);
    }
    else {
        if (!compClassHookSets.has(compClassOrName)) {
            compClassHookSets.set(compClassOrName, new CompClassHookSet());
        }
        return compClassHookSets.get(compClassOrName);
    }
}
export function GetHookSetsForCompClass(compClass) {
    var _a, _b, _c;
    return []
        .concat((_a = compClassHookSets.get(CompClass_Any)) !== null && _a !== void 0 ? _a : [])
        .concat((_b = compClassHookSets.get(compClass)) !== null && _b !== void 0 ? _b : [])
        .concat((_c = compClassHookSets_byName.get(compClass.name)) !== null && _c !== void 0 ? _c : []);
}
export class CompClassHookSet {
    constructor() {
        this.key = [];
        this.css = [];
    }
}
/**
 * Example usage:
 * ```
 * addHook_key(CompFromLib, ctx=>{
 * 	if (ctx.classNames[0] == "root") {
 * 		ctx.classNames.push("selectable");
 * 	}
 * })
 * ```
 */
export function addHook_key(compClassOrName, hook) {
    GetCompClassHookSet(compClassOrName).key.push(hook);
}
export class KeyHook_Context {
    constructor(data) { Object.assign(this, data); }
}
/**
 * Example usage:
 * ```
 * addHook_css(CompFromLib, ctx=>{
 * 	if (ctx.key == "sub1") {
 * 		ctx.styleArgs.push({color: ctx.self.props.useDarkTheme ? "black" : "white"});
 * 	}
 * })
 * ```
 */
export function addHook_css(compClassOrName, hook) {
    GetCompClassHookSet(compClassOrName).css.push(hook);
}
export class CSSHook_Context {
    constructor(data) { Object.assign(this, data); }
}

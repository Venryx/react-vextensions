/*
Todo items
==========
1) Add system that hoists static style props into a css-class (in a <style> element). ("static" style props are those not wrapped in `dyn(...)`)
2) Extract this system into a separate package. (at some point)
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
        var _a, _b, _c, _d;
        let classNames_final = classNames;
        const callIndex = keyCallIndex++;
        const keyHooks = []
            .concat((_b = (_a = compClassHookSets.get(CompClass_Any)) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : [])
            .concat((_d = (_c = compClassHookSets.get(compClass)) === null || _c === void 0 ? void 0 : _c.key) !== null && _d !== void 0 ? _d : []);
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
        var _a, _b, _c, _d;
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
        const cssHooks = []
            .concat((_b = (_a = compClassHookSets.get(CompClass_Any)) === null || _a === void 0 ? void 0 : _a.css) !== null && _b !== void 0 ? _b : [])
            .concat((_d = (_c = compClassHookSets.get(compClass)) === null || _c === void 0 ? void 0 : _c.css) !== null && _d !== void 0 ? _d : []);
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
export function addHook_key(compClass, hook) {
    if (!compClassHookSets.has(compClass)) {
        compClassHookSets.set(compClass, new CompClassHookSet());
    }
    compClassHookSets.get(compClass).key.push(hook);
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
export function addHook_css(compClass, hook) {
    if (!compClassHookSets.has(compClass)) {
        compClassHookSets.set(compClass, new CompClassHookSet());
    }
    compClassHookSets.get(compClass).css.push(hook);
}
export class CSSHook_Context {
    constructor(data) { Object.assign(this, data); }
}

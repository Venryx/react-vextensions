import React, { Component } from "react";
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
export declare function cssHelper(compInstance: React.ReactInstance, cloneInputsForHooks?: boolean): {
    key: (...classNames: any[]) => string;
    css: {
        (key: string, ...styles: StyleOrFalsy[]): React.CSSProperties;
        (...styles: StyleOrFalsy[]): React.CSSProperties;
    };
    dyn: <T>(val: T) => T;
};
export declare type Style = ConvertType_ConvertFields_UndefToUndefOrNull<React.CSSProperties> & {
    ":hover"?: Style;
};
export declare type ConvertType_ConvertFields_UndefToUndefOrNull<T extends object> = {
    [K in keyof T]: ConvertType_UndefToUndefOrNull<T[K]>;
};
export declare type ConvertType_UndefToUndefOrNull<T> = T extends undefined ? (undefined | null) : T;
export declare type StyleOrFalsy = Style | "" | 0 | false | null | undefined;
export declare type CompClass = new (..._: any[]) => React.Component;
/** Pass this into the addHook functions to have your hook run for any component-class. */
export declare class CompClass_Any extends Component {
}
export declare const compClassHookSets: WeakMap<CompClass, CompClassHookSet>;
export declare class CompClassHookSet {
    key: KeyHook[];
    css: CSSHook[];
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
export declare function addHook_key(compClass: CompClass, hook: KeyHook): void;
export declare type KeyHook = (ctx: KeyHook_Context) => void;
export declare class KeyHook_Context {
    constructor(data?: Partial<KeyHook_Context>);
    self: React.ReactInstance;
    callIndex: number;
    classNames_orig: any[];
    classNames: any[];
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
export declare function addHook_css(compClass: CompClass, hook: CSSHook): void;
export declare type CSSHook = (ctx: CSSHook_Context) => void;
export declare class CSSHook_Context {
    constructor(data?: Partial<CSSHook_Context>);
    self: React.ReactInstance;
    key: string | null;
    callIndex: number;
    styleArgs_orig: StyleOrFalsy[];
    styleArgs: StyleOrFalsy[];
}

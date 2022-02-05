/*
Todo items
==========
1) Add system that hoists static style props into a css-class (in a <style> element). ("static" style props are those not wrapped in `dyn(...)`)
2) Add full support for {..., ":hover": {...}} substructures. (atm, css() accepts that key, but the only thing able to apply it is the ClassBasedStyle() function)
3) Extract this system into a separate package. (at some point)
*/

import React, {Component} from "react";

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
export function cssHelper(compInstance: React.ReactInstance, cloneInputsForHooks = true) {
	const compClass = compInstance.constructor as CompClass;

	let keyCallIndex = 0;
	let liveKey: string | null;
	const key = (...classNames: any[])=>{
		let classNames_final = classNames;
		const callIndex = keyCallIndex++;

		const keyHooks = [] as KeyHook[];
		for (const hookSet of GetHookSetsForCompClass(compClass)) {
			keyHooks.push(...hookSet.key);
		}
		if (cloneInputsForHooks && keyHooks.length) classNames_final = classNames_final.slice();
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
		return classNames_final.filter(a=>a).join(" ");
	};

	let cssCallIndex = 0;
	const css = <{
		(key: string, ...styles: StyleOrFalsy[]): React.CSSProperties;
		(...styles: StyleOrFalsy[]): React.CSSProperties;
	}>((...args)=>{
		let keyFromArg: string|undefined, styles: StyleOrFalsy[];
		if (typeof args[0] == "string" && args[0].length > 0) [keyFromArg, ...styles] = args;
		else styles = args;
		const callIndex = cssCallIndex++;

		const key_final = keyFromArg ?? liveKey;
		if (liveKey != null && keyFromArg != null) console.warn("Live-key was set using key(...), but the subsequent css(...) call supplied its own key, discarding the live-key.");
		let styles_final = styles;

		const cssHooks = [] as CSSHook[];
		for (const hookSet of GetHookSetsForCompClass(compClass)) {
			cssHooks.push(...hookSet.css);
		}
		if (cloneInputsForHooks && cssHooks.length) styles_final = styles_final.slice();
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
		return Object.assign({}, ...styles_final) as React.CSSProperties;
	});

	const dyn = <T>(val: T)=>{
		return val;
	};

	return {key, css, dyn};
}

// Style is a "loosened" CSSProperties, which accepts "null" for any style-prop that accepts "undefined"
export type Style = ConvertType_ConvertFields_UndefToUndefOrNull<React.CSSProperties>
	& {
		// pseudo-styles (currently applied through use of ClassBasedStyle() function)
		":hover"?: Style
	};
export type ConvertType_ConvertFields_UndefToUndefOrNull<T extends object> = {
	[K in keyof T]: ConvertType_UndefToUndefOrNull<T[K]>;
}
export type ConvertType_UndefToUndefOrNull<T> = T extends undefined ? (undefined | null) : T;

export type StyleOrFalsy = Style | "" | 0 | false | null | undefined;
export type CompClass = new(..._)=>React.Component;
/** Pass this into the addHook functions to have your hook run for any component-class. */
export class CompClass_Any extends Component {}
export const compClassHookSets = new WeakMap<CompClass, CompClassHookSet>();
export const compClassHookSets_byName = new Map<string, CompClassHookSet>();
export function GetCompClassHookSet(compClassOrName: CompClass | string) {
	if (typeof compClassOrName == "string") {
		if (!compClassHookSets_byName.has(compClassOrName)) {
			compClassHookSets_byName.set(compClassOrName, new CompClassHookSet());
		}
		return compClassHookSets_byName.get(compClassOrName)!;
	} else { 
		if (!compClassHookSets.has(compClassOrName)) {
			compClassHookSets.set(compClassOrName, new CompClassHookSet());
		}
		return compClassHookSets.get(compClassOrName)!;
	}
}
export function GetHookSetsForCompClass(compClass: CompClass) {
	return ([] as CompClassHookSet[])
		.concat(compClassHookSets.get(CompClass_Any) ?? [])
		.concat(compClassHookSets.get(compClass) ?? [])
		.concat(compClassHookSets_byName.get(compClass.name) ?? []);
}
export class CompClassHookSet {
	key: KeyHook[] = [];
	css: CSSHook[] = [];
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
export function addHook_key(compClassOrName: CompClass | string, hook: KeyHook) {
	GetCompClassHookSet(compClassOrName).key.push(hook);
}
export type KeyHook = (ctx: KeyHook_Context)=>void;
export class KeyHook_Context {
	constructor(data?: Partial<KeyHook_Context>) { Object.assign(this, data); }
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
export function addHook_css(compClassOrName: CompClass | string, hook: CSSHook) {
	GetCompClassHookSet(compClassOrName).css.push(hook);
}
export type CSSHook = (ctx: CSSHook_Context)=>void;
export class CSSHook_Context {
	constructor(data?: Partial<CSSHook_Context>) { Object.assign(this, data); }
	self: React.ReactInstance;
	key: string | null;
	callIndex: number;
	styleArgs_orig: StyleOrFalsy[];
	styleArgs: StyleOrFalsy[];
}
import React, {ForwardRefExoticComponent, RefAttributes, Dispatch, SetStateAction, forwardRef, Ref, DependencyList} from "react";
import {useCallback} from "react";
import {E} from "./Internals/FromJSVE.js";

// BaseHooks.ts is the replacement for BaseComponent.ts, made up of "hooks" for React "function classes" (rather than being the base-class for user components)

// type helpers
// ==========

export type Handle<T> =
	T extends ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : // capture result of forwardRef
	T extends (props: any, ref: Ref<infer T2>)=>JSX.Element ? T2 : // more generic capture (eg. works with Wrap)
	never;

// wrapper for function-components
// ==========

export class WrapOptions {
	/** If true, render-func is wrapped with React.memo(...) */
	pure = true;
	/** Only actually called if the render-func supplied has a ref parameter. */
	forwardRef = true;
}

export let inRenderFunc = false;

/*export function Wrap<Props, Result>(renderFunc: (props: Props)=>Result): (props: Props)=>Result;
export function Wrap<Props, Ref, Result>(renderFunc: (props: Props, ref: Ref)=>Result): (props: Props, ref: Ref)=>Result;
export function Wrap<Props, Result>(options: Partial<WrapOptions>, renderFunc: (props: Props)=>Result): (props: Props)=>Result;
export function Wrap<Props, Ref, Result>(options: Partial<WrapOptions>, renderFunc: (props: Props, ref: Ref)=>Result): (props: Props, ref: Ref)=>Result;*/
export function Wrap<Func>(renderFunc: Func): Func;
export function Wrap<Func>(options: Partial<WrapOptions>, renderFunc: Func): Func;
export function Wrap(...args) {
	let options: WrapOptions, renderFunc: Function;
	if (args.length == 1) [renderFunc] = args;
	else /*if (args.length == 2)*/ [options, renderFunc] = args;
	options = E(new WrapOptions(), options!);

	let result = function() {
		inRenderFunc = true;
		let result = renderFunc.apply(this, arguments);
		inRenderFunc = false;
		return result;
	};
	if (options.forwardRef && renderFunc.length == 2) result = forwardRef(result) as any;
	if (options.pure) result = React.memo(result) as any;
	return result;
}

// hooks
// ==========

// use as-is
export {useEffect as UseEffect, useImperativeHandle as UseImperativeHandle} from "react";
//export {useMemo as UseMemo, useCallback as UseCallback} from "react";
export {useMemo as UseMemo} from "react";

function areStrictEqual(a, b) {
	return a === b;
}

/** Like useState, except it cancels the state-setting if the new-value equals the old-value. */
export function UseState<S>(initialState: S | (() => S), areEqual = areStrictEqual): [S, Dispatch<SetStateAction<S>>] {
	const [state, setState] = React.useState(initialState);
	const stateRef = React.useRef(state);
	const areEqualRef = React.useRef(areEqual);
	areEqualRef.current = areEqual;

	const updateState = React.useCallback(stateOrReducer => {
		const nextState =
			typeof stateOrReducer === "function"
			? stateOrReducer(stateRef.current)
			: stateOrReducer;

		if (!areEqualRef.current(stateRef.current, nextState)) {
			stateRef.current = nextState;
			setState(nextState);
		}
	}, []);

	return [state, updateState];
}

/*export function UseMemo<T>(deps: DependencyList | undefined, factory: () => T): T {
	return useMemo(factory, deps);
}*/

/*export function UseMemo<T>(factory: () => T, deps: DependencyList | undefined): T {
	if (factory instanceof)
	return useMemo(factory, deps);
}*/

export function UseCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T {
	if (window["DEV"]) callback["memoized"] = true;
	return useCallback(callback, deps);
}

export function TODO() {
}
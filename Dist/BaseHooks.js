import React, { forwardRef } from "react";
import { useCallback } from "react";
import { E } from "./Internals/FromJSVE";
// wrapper for function-components
// ==========
export class WrapOptions {
    constructor() {
        /** If true, render-func is wrapped with React.memo(...) */
        this.pure = true;
        /** Only actually called if the render-func supplied has a ref parameter. */
        this.forwardRef = true;
    }
}
export let inRenderFunc = false;
export function Wrap(...args) {
    let options, renderFunc;
    if (args.length == 1)
        [renderFunc] = args;
    else /*if (args.length == 2)*/
        [options, renderFunc] = args;
    options = E(new WrapOptions(), options);
    let result = function () {
        inRenderFunc = true;
        let result = renderFunc.apply(this, arguments);
        inRenderFunc = false;
        return result;
    };
    if (options.forwardRef && renderFunc.length == 2)
        result = forwardRef(result);
    if (options.pure)
        result = React.memo(result);
    return result;
}
// hooks
// ==========
// use as-is
export { useEffect as UseEffect, useImperativeHandle as UseImperativeHandle } from "react";
//export {useMemo as UseMemo, useCallback as UseCallback} from "react";
export { useMemo as UseMemo } from "react";
function areStrictEqual(a, b) {
    return a === b;
}
/** Like useState, except it cancels the state-setting if the new-value equals the old-value. */
export function UseState(initialState, areEqual = areStrictEqual) {
    const [state, setState] = React.useState(initialState);
    const stateRef = React.useRef(state);
    const areEqualRef = React.useRef(areEqual);
    areEqualRef.current = areEqual;
    const updateState = React.useCallback(stateOrReducer => {
        const nextState = typeof stateOrReducer === "function"
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
export function UseCallback(callback, deps) {
    if (window["DEV"])
        callback["memoized"] = true;
    return useCallback(callback, deps);
}
export function TODO() {
}

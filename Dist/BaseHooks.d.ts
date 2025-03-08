import React, { ForwardRefExoticComponent, RefAttributes, Dispatch, SetStateAction, Ref, DependencyList } from "react";
export type Handle<T> = T extends ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : T extends (props: any, ref: Ref<infer T2>) => React.JSX.Element ? T2 : never;
export declare class WrapOptions {
    /** If true, render-func is wrapped with React.memo(...) */
    pure: boolean;
    /** Only actually called if the render-func supplied has a ref parameter. */
    forwardRef: boolean;
}
export declare let inRenderFunc: boolean;
export declare function Wrap<Func>(renderFunc: Func): Func;
export declare function Wrap<Func>(options: Partial<WrapOptions>, renderFunc: Func): Func;
export { useEffect as UseEffect, useImperativeHandle as UseImperativeHandle } from "react";
export { useMemo as UseMemo } from "react";
declare function areStrictEqual(a: any, b: any): boolean;
/** Like useState, except it cancels the state-setting if the new-value equals the old-value. */
export declare function UseState<S>(initialState: S | (() => S), areEqual?: typeof areStrictEqual): [S, Dispatch<SetStateAction<S>>];
export declare function UseCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
export declare function TODO(): void;

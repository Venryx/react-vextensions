import React, { PropsWithChildren, Ref } from "react";
import { Component } from "react";
import { n } from "./Internals/@Types.js";
export declare function GetDOM(comp: Component<any, any> | n): Element | null;
export declare function FindReact(dom: any, traverseUp?: number): any;
export declare function GetInnerComp(wrapperComp: React.Component<any, any> | n): any;
export type numberOrSuch = number | string;
export interface BaseProps extends PropsWithChildren {
    m?: numberOrSuch;
    ml?: numberOrSuch;
    mr?: numberOrSuch;
    mt?: numberOrSuch;
    mb?: numberOrSuch;
    mlr?: numberOrSuch | "margin left-right";
    mtb?: numberOrSuch | "margin top-bottom";
    p?: numberOrSuch;
    pl?: numberOrSuch;
    pr?: numberOrSuch;
    pt?: numberOrSuch;
    pb?: numberOrSuch;
    plr?: numberOrSuch | "padding left-right";
    ptb?: numberOrSuch | "padding top-bottom";
    sel?: boolean;
    ct?: boolean;
}
export declare var basePropFullKeys: {
    m: string;
    ml: string;
    mr: string;
    mt: string;
    mb: string;
    mlr: null;
    mtb: null;
    p: string;
    pl: string;
    pr: string;
    pt: string;
    pb: string;
    plr: null;
    ptb: null;
    sel: null;
    ct: null;
};
export declare const basePropKeys: Set<string>;
export declare function BasicStyles(props: any): any;
export declare function ExpandBasicStylesOnX(styleObj: any, props: any): void;
export declare function ApplyBasicStyles(target: React.ComponentClass<any>, removeBasePropKeys?: boolean): void;
export declare function ShallowEquals(objA: any, objB: any, options?: {
    propsToIgnore?: string[];
} | n): boolean;
export declare function ShallowChanged(objA: any, objB: any, options?: {
    propsToIgnore?: string[];
    propsToCompareMoreDeeply?: string[];
}): boolean;
export declare function RunWhenReadyForGlobalElements(listener: () => any): void;
export declare function AddGlobalElement(html: string, asMultiline?: boolean): void;
export declare function AddGlobalStyle(str: string, asMultiline?: boolean): void;
/** As an alternative to adding this decorator to your class, consider just adding the line "EnsureSealedPropsArentOverriden(this, MyClass);" into its constructor. */
export declare function HasSealedProps(target: new (..._: any[]) => any): any;
export type SealedEntry = {
    name: string;
    method: Function;
};
export declare const sealedMethodsForClasses: Map<Function, SealedEntry[]>;
export type SealedPropHandlingResult = "allow" | Error | "noChange";
export type DifferenceInterceptor = (classWherePropsSealed: new (..._: any[]) => any, sealedEntry: SealedEntry, compInstance: any) => SealedPropHandlingResult;
export declare let sealedProps_differenceInterceptor: DifferenceInterceptor;
/** By setting an interceptor, you can tell react-vextensions that certain deviant values of a sealed prop are acceptable. (eg. a patched version of componentDidMount from a library like mobx-react) */
export declare function sealedProps_differenceInterceptor_set(interceptor: DifferenceInterceptor): void;
export declare function EnsureSealedPropsArentOverriden(compInstance: any, classWherePropsSealed: new (..._: any[]) => any, fixNote?: (methodName: string) => string, allowMobXOverriding?: boolean): void;
export declare function Sealed(target: Object, key: string): void;
export declare function FilterOutUnrecognizedProps(props: Object, elementType: string, allowDataProps?: boolean): {};
export declare const RunWithRenderingBatched: ((func: Function) => void) & {
    Go: Function;
};
export declare function CombineRefs(...refs: Ref<any>[]): (comp: Component | Element) => void;

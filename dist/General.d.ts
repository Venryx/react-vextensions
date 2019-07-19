import React from "react";
import { Component } from "react";
export declare function E<E1, E2, E3, E4, E5, E6, E7, E8>(e1?: E1, e2?: E2, e3?: E3, e4?: E4, e5?: E5, e6?: E6, e7?: E7, e8?: E8): E1 & E2 & E3 & E4 & E5 & E6 & E7 & E8;
export declare function ToJSON(obj: any): string;
export declare function FromJSON(json: any): any;
export declare function AsMultiline(str: string, desiredIndent?: number): string;
export declare function RemoveDuplicates(items: any): any[];
export declare function GetDOM(comp: Component<any, any>): Element;
export declare function FindReact(dom: any): any;
export declare function GetInnerComp(wrapperComp: React.Component<any, any>): any;
export declare type numberOrSuch = number | string;
export interface BaseProps {
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
    tabLabel?: string;
    active?: boolean;
    page?: any;
    match?: any;
}
export declare var basePropFullKeys: {
    m: string;
    ml: string;
    mr: string;
    mt: string;
    mb: string;
    mlr: any;
    mtb: any;
    p: string;
    pl: string;
    pr: string;
    pt: string;
    pb: string;
    plr: any;
    ptb: any;
    sel: any;
    ct: any;
    tabLabel: any;
    active: any;
    page: any;
    match: any;
    firebase: any;
};
export declare function BasicStyles(props: any): any;
export declare function ApplyBasicStyles(target: React.ComponentClass<any>): void;
export declare class SimpleShouldUpdate_Options {
    propsToIgnore: string[];
    stateToIgnore: string[];
    useShouldUpdateProp: boolean;
}
export declare function SimpleShouldUpdate(target: Function): any;
export declare function SimpleShouldUpdate(options: Partial<SimpleShouldUpdate_Options>): any;
export declare function Instant(target: any, name: any): void;
export declare function ShallowEquals(objA: any, objB: any, options?: {
    propsToIgnore?: string[];
}): boolean;
export declare function ShallowChanged(objA: any, objB: any, options?: {
    propsToIgnore?: string[];
    propsToCompareMoreDeeply?: string[];
}): boolean;
export declare function AddGlobalElement(html: string, asMultiline?: boolean): void;
export declare function AddGlobalStyle(str: string, asMultiline?: boolean): void;
/** As an alternative to adding this decorator to your class, consider just adding the line "EnsureSealedPropsArentOverriden(this, MyClass);" into its constructor. */
export declare function HasSealedProps(target: new (..._: any[]) => any): any;
export declare function EnsureSealedPropsArentOverriden(compInstance: any, classWherePropsSealed: new (..._: any[]) => any): void;
export declare function Sealed(target: Object, key: string): void;
export declare function FilterOutUnrecognizedProps(props: Object, elementType: string, allowDataProps?: boolean): {};

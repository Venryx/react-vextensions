import React, { Component } from "react";
import { BaseProps } from "./General";
export declare enum RenderSource {
    Mount = 0,
    PropChange = 1,
    SetState = 2,
    Update = 3
}
export declare class BaseComponent<P, S> extends Component<P & BaseProps, S> {
    constructor(props: any);
    defaultState: Partial<S>;
    refs: any;
    readonly DOM: Element;
    readonly DOM_HTML: HTMLElement;
    readonly FlattenedChildren: React.ReactElement<any>[];
    private GetPropChanges_lastValues;
    GetPropChanges(): {
        key: string;
        oldVal: any;
        newVal: any;
    }[];
    private GetStateChanges_lastValues;
    GetStateChanges(): {
        key: string;
        oldVal: any;
        newVal: any;
    }[];
    forceUpdate(): void;
    Update(postUpdate?: any): void;
    Clear(postClear?: any): void;
    ClearThenUpdate(): void;
    /** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */
    UpdateAndReceive(props: any): () => void;
    setState(): "Do not call this. Call SetState() instead.";
    SetState(newState: Partial<S>, callback?: () => any, cancelIfStateSame?: boolean, jsonCompare?: boolean): any[];
    changeListeners: any[];
    AddChangeListeners(host: any, ...funcs: any[]): void;
    RemoveChangeListeners(): void;
    RemoveChangeListenersFor(host: any): void;
    autoRemoveChangeListeners: boolean;
    ComponentWillMount(): void;
    ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void;
    UNSAFE_componentWillMount(): void;
    ComponentDidMount(...args: any[]): void;
    ComponentDidMountOrUpdate(lastProps?: Readonly<P & BaseProps & {
        children?: any;
    }>, lastState?: S): void;
    ComponentDidMountOrUpdate_lastProps: Readonly<P & BaseProps & {
        children?: any;
    }>;
    ComponentDidMountOrUpdate_lastState: S;
    mounted: boolean;
    componentDidMount(...args: any[]): void;
    ComponentWillUnmount(): void;
    componentWillUnmount(): void;
    ComponentWillReceiveProps(newProps: any[]): void;
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    ComponentDidUpdate(...args: any[]): void;
    componentDidUpdate(...args: any[]): void;
    lastRender_source: RenderSource;
    private CallPostRender;
    PreRender(): void;
    PostRender(source?: RenderSource): void;
}
export declare function BaseComponentWithConnector<PassedProps, ConnectProps, State>(connector: (state?: any, props?: PassedProps) => ConnectProps, initialState: State): new (..._: any[]) => BaseComponent<PassedProps & Partial<ConnectProps>, State>;

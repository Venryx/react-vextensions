import React, { Component } from "react";
import { BaseProps } from "./General";
import { WarnOfTransientObjectProps_Options } from "./Decorators";
export declare enum RenderSource {
    Mount = 0,
    PropChange = 1,
    SetState = 2,
    Update = 3
}
export declare class BaseComponent<Props = {}, State = {}, Stash = {}> extends Component<Props & BaseProps, State> {
    static componentCurrentlyRendering: BaseComponent<any>;
    static renderCount: number;
    static lastRenderTime: number;
    renderCount: number;
    lastRenderTime: number;
    constructor(props: any);
    stash: Stash;
    readonly PropsState: Readonly<Props & BaseProps> & Readonly<{
        children?: React.ReactNode;
    }> & Readonly<State>;
    readonly PropsStash: Readonly<Props & BaseProps> & Readonly<{
        children?: React.ReactNode;
    }> & Stash;
    readonly PropsStateStash: Readonly<Props & BaseProps> & Readonly<{
        children?: React.ReactNode;
    }> & Readonly<State> & Stash;
    Stash(newStashData: Stash, replaceData?: boolean): void;
    debug: any;
    Debug(newDebugData: any, replaceData?: boolean): void;
    AttachReactDevToolsHelpers(stash?: boolean, debug?: boolean): void;
    refs: any;
    readonly DOM: Element;
    readonly DOM_HTML: HTMLElement;
    readonly FlattenedChildren: any[];
    _GetPropChanges_lastValues: {};
    GetPropChanges(newProps?: Readonly<Props & BaseProps> & Readonly<{
        children?: React.ReactNode;
    }>, oldProps?: {}, setLastValues?: boolean): {
        key: string;
        oldVal: any;
        newVal: any;
    }[];
    _GetStateChanges_lastValues: {};
    GetStateChanges(newState?: Readonly<State>, oldState?: {}, setLastValues?: boolean): {
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
    SetState(newState: Partial<State>, callback?: () => any, cancelIfStateSame?: boolean, jsonCompare?: boolean): any[];
    changeListeners: any[];
    AddChangeListeners(host: any, ...funcs: any[]): void;
    RemoveChangeListeners(): void;
    RemoveChangeListenersFor(host: any): void;
    autoRemoveChangeListeners: boolean;
    ComponentWillMount(): void;
    ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void;
    UNSAFE_componentWillMount(): void;
    ComponentDidMount(...args: any[]): void;
    ComponentDidMountOrUpdate(lastProps?: Readonly<Props & BaseProps & {
        children?: any;
    }>, lastState?: State): void;
    ComponentDidMountOrUpdate_lastProps: Readonly<Props & BaseProps & {
        children?: any;
    }>;
    ComponentDidMountOrUpdate_lastState: State;
    mounted: boolean;
    componentDidMount(...args: any[]): void;
    ComponentWillUnmount(): void;
    componentWillUnmount(): void;
    warnOfTransientObjectProps_options: WarnOfTransientObjectProps_Options;
    ComponentWillReceiveProps(newProps: any[]): void;
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    ComponentDidUpdate(...args: any[]): void;
    componentDidUpdate(...args: any[]): void;
    lastRender_source: RenderSource;
    _CallPostRender(): void;
    PreRender(): void;
    PostRender(source?: RenderSource): void;
}
export declare function BaseComponentWithConnector<PassedProps, ConnectProps, State, Stash>(connector: (state?: any, props?: PassedProps) => ConnectProps, initialState: State, initialStash?: Stash): {
    new (props: any): {
        Stash(newStashData: Stash, replaceData?: boolean): void;
        renderCount: number;
        lastRenderTime: number;
        stash: Stash;
        readonly PropsState: Readonly<PassedProps & Partial<ConnectProps> & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }> & Readonly<State>;
        readonly PropsStash: Readonly<PassedProps & Partial<ConnectProps> & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }> & Stash;
        readonly PropsStateStash: Readonly<PassedProps & Partial<ConnectProps> & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }> & Readonly<State> & Stash;
        debug: any;
        Debug(newDebugData: any, replaceData?: boolean): void;
        AttachReactDevToolsHelpers(stash?: boolean, debug?: boolean): void;
        refs: any;
        readonly DOM: Element;
        readonly DOM_HTML: HTMLElement;
        readonly FlattenedChildren: any[];
        _GetPropChanges_lastValues: {};
        GetPropChanges(newProps?: Readonly<PassedProps & Partial<ConnectProps> & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }>, oldProps?: {}, setLastValues?: boolean): {
            key: string;
            oldVal: any;
            newVal: any;
        }[];
        _GetStateChanges_lastValues: {};
        GetStateChanges(newState?: Readonly<State>, oldState?: {}, setLastValues?: boolean): {
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
        SetState(newState: Partial<State>, callback?: () => any, cancelIfStateSame?: boolean, jsonCompare?: boolean): any[];
        changeListeners: any[];
        AddChangeListeners(host: any, ...funcs: any[]): void;
        RemoveChangeListeners(): void;
        RemoveChangeListenersFor(host: any): void;
        autoRemoveChangeListeners: boolean;
        ComponentWillMount(): void;
        ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void;
        UNSAFE_componentWillMount(): void;
        ComponentDidMount(...args: any[]): void;
        ComponentDidMountOrUpdate(lastProps?: Readonly<PassedProps & Partial<ConnectProps> & BaseProps & {
            children?: any;
        }>, lastState?: State): void;
        ComponentDidMountOrUpdate_lastProps: Readonly<PassedProps & Partial<ConnectProps> & BaseProps & {
            children?: any;
        }>;
        ComponentDidMountOrUpdate_lastState: State;
        mounted: boolean;
        componentDidMount(...args: any[]): void;
        ComponentWillUnmount(): void;
        componentWillUnmount(): void;
        warnOfTransientObjectProps_options: WarnOfTransientObjectProps_Options;
        ComponentWillReceiveProps(newProps: any[]): void;
        UNSAFE_componentWillReceiveProps(newProps: any): void;
        ComponentDidUpdate(...args: any[]): void;
        componentDidUpdate(...args: any[]): void;
        lastRender_source: RenderSource;
        _CallPostRender(): void;
        PreRender(): void;
        PostRender(source?: RenderSource): void;
        context: any;
        render(): React.ReactNode;
        readonly props: Readonly<PassedProps & Partial<ConnectProps> & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<State>;
        shouldComponentUpdate?(nextProps: Readonly<PassedProps & Partial<ConnectProps> & BaseProps>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<PassedProps & Partial<ConnectProps> & BaseProps>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<PassedProps & Partial<ConnectProps> & BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<PassedProps & Partial<ConnectProps> & BaseProps>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<PassedProps & Partial<ConnectProps> & BaseProps>, nextState: Readonly<State>, nextContext: any): void;
    };
    componentCurrentlyRendering: BaseComponent<any, {}, {}>;
    renderCount: number;
    lastRenderTime: number;
    contextType?: React.Context<any>;
};
export declare function BaseComponentPlus<Props, State, Stash>(defaultProps?: Props, initialState?: State, initialStash?: Stash): {
    new (props: any): {
        Stash(newStashData: Stash, replaceData?: boolean): void;
        renderCount: number;
        lastRenderTime: number;
        stash: Stash;
        readonly PropsState: Readonly<Props & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }> & Readonly<State>;
        readonly PropsStash: Readonly<Props & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }> & Stash;
        readonly PropsStateStash: Readonly<Props & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }> & Readonly<State> & Stash;
        debug: any;
        Debug(newDebugData: any, replaceData?: boolean): void;
        AttachReactDevToolsHelpers(stash?: boolean, debug?: boolean): void;
        refs: any;
        readonly DOM: Element;
        readonly DOM_HTML: HTMLElement;
        readonly FlattenedChildren: any[];
        _GetPropChanges_lastValues: {};
        GetPropChanges(newProps?: Readonly<Props & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }>, oldProps?: {}, setLastValues?: boolean): {
            key: string;
            oldVal: any;
            newVal: any;
        }[];
        _GetStateChanges_lastValues: {};
        GetStateChanges(newState?: Readonly<State>, oldState?: {}, setLastValues?: boolean): {
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
        SetState(newState: Partial<State>, callback?: () => any, cancelIfStateSame?: boolean, jsonCompare?: boolean): any[];
        changeListeners: any[];
        AddChangeListeners(host: any, ...funcs: any[]): void;
        RemoveChangeListeners(): void;
        RemoveChangeListenersFor(host: any): void;
        autoRemoveChangeListeners: boolean;
        ComponentWillMount(): void;
        ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void;
        UNSAFE_componentWillMount(): void;
        ComponentDidMount(...args: any[]): void;
        ComponentDidMountOrUpdate(lastProps?: Readonly<Props & BaseProps & {
            children?: any;
        }>, lastState?: State): void;
        ComponentDidMountOrUpdate_lastProps: Readonly<Props & BaseProps & {
            children?: any;
        }>;
        ComponentDidMountOrUpdate_lastState: State;
        mounted: boolean;
        componentDidMount(...args: any[]): void;
        ComponentWillUnmount(): void;
        componentWillUnmount(): void;
        warnOfTransientObjectProps_options: WarnOfTransientObjectProps_Options;
        ComponentWillReceiveProps(newProps: any[]): void;
        UNSAFE_componentWillReceiveProps(newProps: any): void;
        ComponentDidUpdate(...args: any[]): void;
        componentDidUpdate(...args: any[]): void;
        lastRender_source: RenderSource;
        _CallPostRender(): void;
        PreRender(): void;
        PostRender(source?: RenderSource): void;
        context: any;
        render(): React.ReactNode;
        readonly props: Readonly<Props & BaseProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<State>;
        shouldComponentUpdate?(nextProps: Readonly<Props & BaseProps>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props & BaseProps>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props & BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props & BaseProps>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props & BaseProps>, nextState: Readonly<State>, nextContext: any): void;
    };
    defaultProps: Props;
    componentCurrentlyRendering: BaseComponent<any, {}, {}>;
    renderCount: number;
    lastRenderTime: number;
    contextType?: React.Context<any>;
};

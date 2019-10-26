import React, { Component } from "react";
import { BaseProps } from "./General";
import { WarnOfTransientObjectProps_Options } from "./Decorators";
export declare enum RenderSource {
    Mount = 0,
    PropChange = 1,
    SetState = 2,
    Update = 3
}
export declare class BaseComponent<Props, State = {}, Stash = {}> extends Component<Props & BaseProps, State> {
    constructor(props: any);
    initialState: Partial<State>;
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
    Stash(stash: Stash): void;
    refs: any;
    readonly DOM: Element;
    readonly DOM_HTML: HTMLElement;
    readonly FlattenedChildren: any[];
    private GetPropChanges_lastValues;
    GetPropChanges(newProps?: Readonly<Props & BaseProps> & Readonly<{
        children?: React.ReactNode;
    }>, oldProps?: {}, setLastValues?: boolean): {
        key: string;
        oldVal: any;
        newVal: any;
    }[];
    private GetStateChanges_lastValues;
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
    private CallPostRender;
    PreRender(): void;
    PostRender(source?: RenderSource): void;
}
export declare function BaseComponentWithConnector<PassedProps, ConnectProps, State>(connector: (state?: any, props?: PassedProps) => ConnectProps, initialState: State): new (..._: any[]) => BaseComponent<PassedProps & Partial<ConnectProps>, State, {}>;
export declare function BaseComponentPlus<Props, State, Stash>(defaultProps: Props, initialState?: State, initialStash?: Stash): new (..._: any[]) => BaseComponent<Props, State, Stash>;

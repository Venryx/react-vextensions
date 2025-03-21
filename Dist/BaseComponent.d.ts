import { Component } from "react";
import { BaseProps } from "./General.js";
import { WarnOfTransientObjectProps_Options } from "./Decorators.js";
import { PropChange } from "./Internals/FromJSVE.js";
import { n } from "./Internals/@Types.js";
export declare function EnsureClassProtoRenderFunctionIsWrapped(classProto: any): void;
export declare enum RenderSource {
    Mount = 0,// first render, after creation
    PropChange = 1,// from prop-change, and ancestor re-renders (e.g. ancestor.forceUpdate(), ancestor.setState())
    SetState = 2,// from this.SetState()
    Update = 3
}
export declare class BaseComponent<Props extends object = {}, State extends object = {}, Stash extends object = {}> extends Component<Props & BaseProps, State> {
    static constructorExtensionFunc: (instance: BaseComponent, props: any) => void;
    static componentCurrentlyRendering: BaseComponent<any> | n;
    static renderCount: number;
    static lastRenderTime: number;
    renderCount: number;
    lastRenderTime: number;
    constructor(props: any);
    stash: Stash;
    get PropsState(): Readonly<Props & BaseProps> & Readonly<State>;
    get PropsStash(): Readonly<Props & BaseProps> & Stash;
    get PropsStateStash(): Readonly<Props & BaseProps> & Readonly<State> & Stash;
    Stash(newStashData: Stash, replaceData?: boolean): void;
    debug: any;
    Debug(newDebugData: any, replaceData?: boolean): void;
    AttachReactDevToolsHelpers(stash?: boolean, debug?: boolean): void;
    refs: any;
    get DOM(): Element | null;
    get DOM_HTML(): HTMLElement;
    get FlattenedChildren(): any;
    _GetPropChanges_lastValues: {};
    GetPropChanges(newProps?: Readonly<Props & BaseProps>, oldProps?: {}, setLastValues?: boolean): PropChange[];
    _GetStateChanges_lastValues: {};
    GetStateChanges(newState?: Readonly<State>, oldState?: {}, setLastValues?: boolean): PropChange[];
    forceUpdate(): void;
    Update(postUpdate?: any): void;
    /** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */
    UpdateAndReceive(props: any): () => void;
    setState(): "Do not call this. Call SetState() instead.";
    SetState(newState: Partial<State>, callback?: (() => any) | n, cancelIfStateSame?: boolean, jsonCompare?: boolean): never[] | undefined;
    changeListeners: {
        host: any;
        func: Function;
    }[];
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
    warnOfTransientObjectProps_options: WarnOfTransientObjectProps_Options | undefined;
    lastPropChange_info: {
        oldProps: Props;
        newProps: Props;
        changes: PropChange[];
    } | undefined;
    ComponentWillReceiveProps(newProps: any[]): void;
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    ComponentDidUpdate(...args: any[]): void;
    componentDidUpdate(...args: any[]): void;
    lastRender_source: RenderSource;
    _CallPostRender(): void;
    PreRender(): void;
    PostRender(source?: RenderSource): void;
}
export declare function BaseComponentWithConnector<PassedProps extends object, ConnectProps extends object, State extends object, Stash extends object>(connector: (state?: any, props?: PassedProps) => ConnectProps, initialState: State, initialStash?: Stash | n): (new (..._: any) => BaseComponent<PassedProps & Partial<ConnectProps>, State>) & {
    renderCount: number;
    lastRenderTime: number;
};
export declare function BaseComponentPlus<Props extends object, State extends object, Stash extends object>(defaultProps?: Props, initialState?: State | n, initialStash?: Stash | n): (new (..._: any) => BaseComponent<Props, State, Stash>) & {
    renderCount: number;
    lastRenderTime: number;
};

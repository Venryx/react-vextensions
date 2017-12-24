/// <reference types="react" />
import * as React from "react";
import { Component } from "react";
import { Vector2i } from "./Utils";
export declare class Div extends Component<{
    shouldUpdate;
} & React.HTMLProps<HTMLDivElement>, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): JSX.Element;
}
export default class ScrollView extends Component<{
    backgroundDrag?: boolean;
    backgroundDragMatchFunc?: (element: HTMLElement) => boolean;
    bufferScrollEventsBy?: number;
    scrollH_pos?: number;
    scrollV_pos?: number;
    className?: string;
    style?;
    contentStyle?;
    scrollHBarStyle?;
    scrollVBarStyle?;
    onMouseDown?;
    onClick?;
    onScrollEnd?: (pos: Vector2i) => void;
} & React.HTMLProps<HTMLDivElement>, Partial<{
    containerWidth;
    contentWidth;
    containerHeight;
    contentHeight;
    scrollH_active: boolean;
    scrollH_pos: number;
    scrollV_active;
    scrollV_pos: number;
    scrollHBar_hovered: boolean;
    scrollVBar_hovered: boolean;
    scrollOp_bar;
}>> {
    constructor(props: any);
    content: any;
    scrollHBar: any;
    scrollVBar: any;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    LoadScroll(): void;
    PostRender(firstRender: any): void;
    componentWillUnmount(): void;
    propsJustChanged: boolean;
    readonly PropsJustChanged: boolean;
    componentWillReceiveProps(nextProps: any): void;
    sizeJustChanged: boolean;
    readonly SizeJustChanged: boolean;
    UpdateSize(): void;
    private HandleScroll(e);
    UpdateScrolls(): void;
    private OnContentMouseDown(e);
    private OnScrollbarMouseDown(e);
    scroll_startMousePos: Vector2i;
    scroll_startScrollPos: Vector2i;
    private StartScrolling(e);
    hScrollableDOM: Element;
    vScrollableDOM: Element;
    private OnMouseMove(e);
    private OnMouseUp(e);
    private OnTouchEnd();
    private OnScrollEnd();
    GetScroll(): {
        x: number;
        y: number;
    };
    SetScroll(scrollPos: Vector2i): void;
    ScrollBy(scrollPosOffset: Vector2i): void;
}

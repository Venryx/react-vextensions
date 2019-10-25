import { ForwardRefExoticComponent, RefAttributes } from "react";
export declare type Handle<T> = T extends ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : never;
export declare function TODO(): void;

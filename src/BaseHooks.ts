import {ForwardRefExoticComponent, RefAttributes} from "react";

// BaseHooks.ts is the replacement for BaseComponent.ts, made up of "hooks" for React "function classes" (rather than being the base-class for user components)

// type helpers
// ==========

// custom exposer approach
//export type VProps<Internals, Props> = Props & {exposer?: (internals: Internals)=>void};

/* type ExtractRefAttributes<T extends ElementType> = ComponentProps<T>["ref"];
//type Test2<T extends Ref<infer T2>, T2 = any> = T2;
type Test3<T> = T extends Ref<infer U> ? U : any; */
// type ExtractRefAttributes<T extends React.ForwardRefExoticComponent<RefAttributes<T2>>> = T2;
//export type ExtractRefAttributes<T extends ElementType> = T extends React.ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : never;
//export type Handle<T extends ElementType> = T extends React.ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : never;
export type Handle<T> = T extends ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : never;

// hooks
// ==========

export function TODO() {
}
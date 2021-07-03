export declare class SimpleShouldUpdate_Options {
    propsToIgnore?: string[];
    stateToIgnore?: string[];
    useShouldUpdateProp: boolean;
}
export declare function SimpleShouldUpdate(target: Function): any;
export declare function SimpleShouldUpdate(options: Partial<SimpleShouldUpdate_Options>): any;
export declare class WarnOfTransientObjectProps_Options {
    ignoreProps?: string[];
    warnForNonFunctions: boolean;
}
export declare function WarnOfTransientObjectProps(target: Function): any;
export declare function WarnOfTransientObjectProps(options: Partial<WarnOfTransientObjectProps_Options>): any;
export declare function Instant(target: any, name: any): void;

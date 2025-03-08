import { CSSProperties } from "react";
export type PseudoStyleTypes = "hover";
export declare const pseudoStyleTypes: PseudoStyleTypes[];
export declare function ConvertStyleObjectToCSSString(styleObj: any): string;
/**
 * Creates a global <style> element with the given style (if not yet created), under a derived-from-style-data class-name. Returns that class-name for components to use.
 * If pseudoStyleType is provided (eg. "hover"), that pseudo-style-type will be appended to the selector, thus having the style only apply for the given state (eg. only on element hover).
*/
export declare function ClassBasedStyle(style: CSSProperties, pseudoStyleType?: PseudoStyleTypes): string;
/** Searches styleComposite for pseudo-selectors (eg: ":hover"), and extracts each one into a class-based-style, then returns those class-names as a space-separated string. */
export declare function ClassBasedStyles(styleComposite: any): string;

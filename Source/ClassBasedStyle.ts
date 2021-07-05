import { CSSProperties } from "react";
import { AddGlobalStyle } from "./General.js";
import ReactDOMServer from "react-dom/server";
import React from "react";
import {ToJSON} from "./Internals/FromJSVE.js";

let classBasedStyleKeys = {};

export type PseudoStyleTypes = "hover";
export const pseudoStyleTypes = ["hover"] as PseudoStyleTypes[];

export function ConvertStyleObjectToCSSString(styleObj) {
	let str = ReactDOMServer.renderToString(React.createElement("div", {style: styleObj})) as string;
	let styleStrMatch = str.match(/style="(.+?)" data-reactroot/);
	if (styleStrMatch == null) {
		throw new Error(`Failed to convert style-object to string: ${styleObj}`);
	}
	
	let styleStr = styleStrMatch[1] + ";"; // add final semicolon; new versions of React leave it out for some reason
	return styleStr;
}

/**
 * Creates a global <style> element with the given style (if not yet created), under a derived-from-style-data class-name. Returns that class-name for components to use.
 * If pseudoStyleType is provided (eg. "hover"), that pseudo-style-type will be appended to the selector, thus having the style only apply for the given state (eg. only on element hover).
*/
export function ClassBasedStyle(style: CSSProperties, pseudoStyleType?: PseudoStyleTypes) {
	let styleText = ConvertStyleObjectToCSSString(style);

	var styleKey = ToJSON(pseudoStyleType + "---" + styleText); // get a unique identifier for this particular class-based-style
	styleKey = styleKey.replace(/[^a-zA-Z0-9-]/g, ""); // make sure key is a valid class-name

	// if <style> element for the given style-composite has not been created yet, create it 
	if (classBasedStyleKeys[styleKey] == null) {
		classBasedStyleKeys[styleKey] = true;
		AddGlobalStyle(`
			.${styleKey}${pseudoStyleType ? `:${pseudoStyleType}` : ""} {
				${styleText.replace(/([^ ]+?);/g, "$1 !important;")}
			}
		`);
	}
	
	return styleKey;
}

/** Searches styleComposite for pseudo-selectors (eg: ":hover"), and extracts each one into a class-based-style, then returns those class-names as a space-separated string. */
export function ClassBasedStyles(styleComposite) {
	let classNames = [] as string[];
	for (let type of pseudoStyleTypes) {
		if (styleComposite[`:${type}`]) {
			classNames.push(ClassBasedStyle(styleComposite[`:${type}`], type))
		}
	}
	return classNames.join(" ");
}
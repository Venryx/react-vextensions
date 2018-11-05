import { CSSProperties } from "react";
import {createMarkupForStyles} from "react-dom/lib/CSSPropertyOperations";
import { ToJSON, AddGlobalStyle, AsMultiline } from "./General";

let pseudoSelectorStyleKeys = {};

export type PseudoStyleTypes = "hover";
export function CreateGlobalPseudoStyleAndReturnClassName(pseudoStyleType: PseudoStyleTypes, style: CSSProperties) {
	let styleText = createMarkupForStyles(style);

	var styleKey = ToJSON(pseudoStyleType + "---" + styleText); // get a unique identifier for this particular pseudo-style
	styleKey = styleKey.replace(/[^a-zA-Z0-9-]/g, ""); // make sure key is a valid class-name

	// if <style> element for the given style-composite has not been created yet, create it 
	if (pseudoSelectorStyleKeys[styleKey] == null) {
		pseudoSelectorStyleKeys[styleKey] = true;
		AddGlobalStyle(`
			.${styleKey}:${pseudoStyleType} {
				${styleText.replace(/([^ ]+?);/g, "$1 !important;")}
			}
		`);
	}
	
	return styleKey;
}
import {RemoveDuplicates} from "./General";

export function E<E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15,E16,E17,E18,E19,E20>(
	e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8,e9?:E9,e10?:E10,
	e11?:E11,e12?:E12,e13?:E13,e14?:E14,e15?:E15,e16?:E16,e17?:E17,e18?:E18,e19?:E19,e20?:E20,
):E1&E2&E3&E4&E5&E6&E7&E8&E9&E10&E11&E12&E13&E14&E15&E16&E17&E18&E19&E20 {
	var result = {} as any;
	for (var extend of arguments) {
		Object.assign(result, extend);
	}
	return result;
	//return StyleSheet.create(result);
}

export function ToJSON(obj) { return JSON.stringify(obj); }
export function FromJSON(json) { return JSON.parse(json); }

export function AsMultiline(str: string, desiredIndent?: number) {
	let result = str.substring(str.indexOf("\n") + 1, str.lastIndexOf("\n"));
	if (desiredIndent != null) {
		let firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
		if (firstLineIndent) {
			let lines = result.split("\n");
			// remove X tabs from start of each line (where X is firstLineIndent)
			lines = lines.map(line=>line.replace(new RegExp(`^\t{0,${firstLineIndent}}`), ""));
			result = lines.join("\n");
		}
	}
	return result;
};

export function Assert(condition, messageOrMessageFunc?: string | Function | null, triggerDebugger = true): asserts condition {
	if (condition) return undefined as any;

	var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

	//JSVE.logFunc(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
	//console.error("Assert failed) " + message);

	const skipError = false; // add flag which you can use to skip the error, when paused in debugger
	if (triggerDebugger) {
		debugger;
	}
	if (!skipError) throw new Error(`Assert failed) ${message}`);
	return undefined as any;
}

/*export function Excluding(obj, ...propNames) {
	var result = E(obj);
	for (let propName of propNames) {
		 delete result[propName];
	}
	return result;
}*/

export type GetFirstParamType<T> = T extends (val: infer Arg1Type)=>any ? Arg1Type : never;
export function WrapWithGo<Func extends(val)=>any>(func: Func): Func & {Go: GetFirstParamType<Func>} {
	Object.defineProperty(func, "Go", {
		set: func,
	});
	return func as any;
}

export type PropChange = {key: string, oldVal: any, newVal: any};
// START: type-helper variants
export function GetPropChanges(oldObj, newObj): PropChange[];
export function GetPropChanges(oldObj, newObj, returnNullIfSame: false, useJSONCompare?: boolean): PropChange[];
// END
export function GetPropChanges(oldObj, newObj, returnNullIfSame?: boolean, useJSONCompare?: boolean): PropChange[]|null;
export function GetPropChanges(oldObj, newObj, returnNullIfSame = false, useJSONCompare = false): PropChange[]|null {
	oldObj = oldObj || {}, newObj = newObj || {};
	const keys = RemoveDuplicates(Object.keys(oldObj).concat(Object.keys(newObj)));
	const result: PropChange[] = [];
	for (const key of keys) {
		const newVal_forComparison = useJSONCompare ? ToJSON(newObj[key]) : newObj[key];
		const oldVal_forComparison = useJSONCompare ? ToJSON(oldObj[key]) : oldObj[key];
		if (newVal_forComparison !== oldVal_forComparison) {
			result.push({key, oldVal: oldObj[key], newVal: newObj[key]});
		}
	}
	if (result.length == 0 && returnNullIfSame) return null;
	return result;
}
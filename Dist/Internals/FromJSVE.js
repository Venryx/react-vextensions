import { RemoveDuplicates } from "./General";
export function E(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20) {
    var result = {};
    for (var extend of arguments) {
        Object.assign(result, extend);
    }
    return result;
    //return StyleSheet.create(result);
}
export function ToJSON(obj) { return JSON.stringify(obj); }
export function FromJSON(json) { return JSON.parse(json); }
export function AsMultiline(str, desiredIndent) {
    let result = str.substring(str.indexOf("\n") + 1, str.lastIndexOf("\n"));
    if (desiredIndent != null) {
        let firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
        if (firstLineIndent) {
            let lines = result.split("\n");
            // remove X tabs from start of each line (where X is firstLineIndent)
            lines = lines.map(line => line.replace(new RegExp(`^\t{0,${firstLineIndent}}`), ""));
            result = lines.join("\n");
        }
    }
    return result;
}
;
export function Assert(condition, messageOrMessageFunc, triggerDebugger = true) {
    if (condition)
        return undefined;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    //JSVE.logFunc(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
    //console.error("Assert failed) " + message);
    const skipError = false; // add flag which you can use to skip the error, when paused in debugger
    if (triggerDebugger) {
        debugger;
    }
    if (!skipError)
        throw new Error(`Assert failed) ${message}`);
    return undefined;
}
export function WrapWithGo(func) {
    Object.defineProperty(func, "Go", {
        set: func,
    });
    return func;
}
export function GetPropChanges(oldObj, newObj, returnNullIfSame = false, useJSONCompare = false) {
    oldObj = oldObj || {}, newObj = newObj || {};
    const keys = RemoveDuplicates(Object.keys(oldObj).concat(Object.keys(newObj)));
    const result = [];
    for (const key of keys) {
        const newVal_forComparison = useJSONCompare ? ToJSON(newObj[key]) : newObj[key];
        const oldVal_forComparison = useJSONCompare ? ToJSON(oldObj[key]) : oldObj[key];
        if (newVal_forComparison !== oldVal_forComparison) {
            result.push({ key, oldVal: oldObj[key], newVal: newObj[key] });
        }
    }
    if (result.length == 0 && returnNullIfSame)
        return null;
    return result;
}

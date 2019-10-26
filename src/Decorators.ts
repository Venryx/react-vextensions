import {E, ShallowChanged, Assert} from "./General";

export class SimpleShouldUpdate_Options {
	propsToIgnore = null as string[];
	stateToIgnore = null as string[];
	useShouldUpdateProp = false;
}
export function SimpleShouldUpdate(target: Function);
export function SimpleShouldUpdate(options: Partial<SimpleShouldUpdate_Options>);
export function SimpleShouldUpdate(...args) {
	let options = new SimpleShouldUpdate_Options();
	if (typeof args[0] == "function") {
		ApplyToClass(args[0]);
	} else {
		options = E(options, args[0]);
		return ApplyToClass;
	}

	function ApplyToClass(targetClass: Function) {
		targetClass.prototype.shouldComponentUpdate = function(newProps, newState) {
			/*if (options.logChangedWhen...) {
				Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));
			}*/

			if (options.useShouldUpdateProp) {
				let {shouldUpdate} = newProps;
				if (typeof shouldUpdate == "boolean") return shouldUpdate;
				if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
			}
			return ShallowChanged(this.props, newProps, {propsToIgnore: options.propsToIgnore}) || ShallowChanged(this.state, newState, {propsToIgnore: options.stateToIgnore});
		}
	}
}

export class WarnOfTransientObjectProps_Options {
	ignoreProps: string[] = null;
	warnForNonFunctions = false;
}
export function WarnOfTransientObjectProps(target: Function);
export function WarnOfTransientObjectProps(options: Partial<WarnOfTransientObjectProps_Options>);
export function WarnOfTransientObjectProps(...args) {
	//Assert(targetClass instanceof Function, `Must decorate a class directly. (no "()" in "@WarnOfTransientObjectProps" line)`);
	let options = new WarnOfTransientObjectProps_Options();
	if (typeof args[0] == "function") {
		ApplyToClass(args[0]);
	} else {
		options = E(options, args[0]);
		return ApplyToClass;
	}

	function ApplyToClass(targetClass: Function) {
		targetClass["warnOfTransientObjectProps_options"] = options;
	}
}

// for PostRender() func
export function Instant(target, name) {
	target[name].instant = true;
}
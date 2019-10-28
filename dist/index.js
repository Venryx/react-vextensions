(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseComponent = __webpack_require__(8);

Object.keys(_BaseComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BaseComponent[key];
    }
  });
});

var _BaseHooks = __webpack_require__(11);

Object.keys(_BaseHooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BaseHooks[key];
    }
  });
});

var _ClassBasedStyle = __webpack_require__(5);

Object.keys(_ClassBasedStyle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ClassBasedStyle[key];
    }
  });
});

var _Decorators = __webpack_require__(12);

Object.keys(_Decorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Decorators[key];
    }
  });
});

var _General = __webpack_require__(2);

Object.keys(_General).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _General[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basePropFullKeys = undefined;
exports.E = E;
exports.ToJSON = ToJSON;
exports.FromJSON = FromJSON;
exports.AsMultiline = AsMultiline;
exports.RemoveDuplicates = RemoveDuplicates;
exports.GetDOM = GetDOM;
exports.FindReact = FindReact;
exports.GetInnerComp = GetInnerComp;
exports.BasicStyles = BasicStyles;
exports.ApplyBasicStyles = ApplyBasicStyles;
exports.ShallowEquals = ShallowEquals;
exports.ShallowChanged = ShallowChanged;
exports.AddGlobalElement = AddGlobalElement;
exports.AddGlobalStyle = AddGlobalStyle;
exports.HasSealedProps = HasSealedProps;
exports.EnsureSealedPropsArentOverriden = EnsureSealedPropsArentOverriden;
exports.Sealed = Sealed;
exports.FilterOutUnrecognizedProps = FilterOutUnrecognizedProps;
exports.Assert = Assert;

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function E(e1, e2, e3, e4, e5, e6, e7, e8) {
    var result = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var extend = _step.value;

            result.Extend(extend);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
    //return StyleSheet.create(result);
}
function ToJSON(obj) {
    return JSON.stringify(obj);
}
function FromJSON(json) {
    return JSON.parse(json);
}
function AsMultiline(str) {
    var desiredIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var result = str.substring(str.indexOf("\n") + 1, str.lastIndexOf("\n"));
    if (desiredIndent != null) {
        var firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
        if (firstLineIndent) {
            var lines = result.split("\n");
            // remove X tabs from start of each line (where X is firstLineIndent)
            lines = lines.map(function (line) {
                return line.replace(new RegExp("^\t{0," + firstLineIndent + "}"), "");
            });
            result = lines.join("\n");
        }
    }
    return result;
}
;
function RemoveDuplicates(items) {
    var result = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (result.indexOf(item) == -1) {
                result.push(item);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return result;
}
//var ReactInstanceMap = require("react/lib/ReactInstanceMap");
function GetDOM(comp) {
    if (comp == null || comp["mounted"] === false) return null; // mounted is a prop on BaseComponents
    return _reactDom2.default.findDOMNode(comp);
}
function FindReact(dom) {
    if (dom == null) return null;
    var key = Object.keys(dom).find(function (key) {
        return key.startsWith("__reactInternalInstance$");
    });
    var internalInstance = dom[key];
    if (internalInstance == null) return null;
    if (internalInstance.return) {
        // react 16+
        return internalInstance._debugOwner ? internalInstance._debugOwner.stateNode : internalInstance.return.stateNode;
    } else {
        // react <16
        //return internalInstance._currentElement._owner._instance as React.Component<any, any>;
        return internalInstance._currentElement._owner._instance;
    }
}
// needed for wrapper-components that don't provide way of accessing inner-component
function GetInnerComp(wrapperComp) {
    // in old react-redux versions, if you use `connect([...], {withRef: true})`, a function will be available at wrapper.getWrappedInstance(); use that if available
    if (wrapperComp && wrapperComp["getWrappedInstance"]) return wrapperComp["getWrappedInstance"]();
    return FindReact(GetDOM(wrapperComp));
}
var basePropFullKeys = exports.basePropFullKeys = {
    m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
    mlr: null, mtb: null,
    p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
    plr: null, ptb: null,
    sel: null,
    ct: null,
    //tabLabel: null, active: null,
    page: null, match: null,
    firebase: null
};
function RemoveBasePropKeys(restObj) {
    for (var key in basePropFullKeys) {
        delete restObj[key];
    }
}
function BasicStyles(props) {
    var result = {};
    for (var key in props) {
        if (basePropFullKeys[key] != null) {
            var fullKey = basePropFullKeys[key];
            result[fullKey] = props[key];
        } else if (key == "mlr") {
            result.marginLeft = props[key];
            result.marginRight = props[key];
        } else if (key == "mtb") {
            result.marginTop = props[key];
            result.marginBottom = props[key];
        } else if (key == "plr") {
            result.paddingLeft = props[key];
            result.paddingRight = props[key];
        } else if (key == "ptb") {
            result.paddingTop = props[key];
            result.paddingBottom = props[key];
        }
    }
    return result;
}
function ApplyBasicStyles(target) {
    var oldRender = target.prototype.render;
    target.prototype.render = function () {
        var result = oldRender.call(this);
        var props = this.props;
        var className = (0, _classnames2.default)({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
        if (className) {
            result.props.className = className;
        }
        result.props.style = E(result.props.style, BasicStyles(props));
        RemoveBasePropKeys(result.props);
        return result;
    };
}
/*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
    let oldRender = target.prototype.render;
    target.prototype.render = function() {
        let result = oldRender.call(this) as JSX.Element;
        result.props.style = E(BasicStyles(result.props), result.props.style);
        RemoveBasePropKeys(result.props);
        return result;
    }
}*/
function Excluding(obj) {
    var result = E(obj);

    for (var _len = arguments.length, propNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        propNames[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = propNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var propName = _step3.value;

            delete result[propName];
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return result;
}
function ShallowEquals(objA, objB, options) {
    if (objA === objB) return true;
    var keysA = Object.keys(objA || {});
    var keysB = Object.keys(objB || {});
    if (keysA.length !== keysB.length) return false;
    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        var key = keysA[i];
        if (options && options.propsToIgnore && options.propsToIgnore.indexOf(key) != -1) continue;
        if (!hasOwn.call(objB, key) || objA[key] !== objB[key]) return false;
        var valA = objA[key];
        var valB = objB[key];
        if (valA !== valB) return false;
    }
    return true;
}
function ShallowChanged(objA, objB, options) {
    if (options && options.propsToCompareMoreDeeply && options.propsToCompareMoreDeeply.length) {
        if (ShallowChanged(objA.Excluding.apply(objA, _toConsumableArray(options.propsToCompareMoreDeeply)), objB.Excluding.apply(objB, _toConsumableArray(options.propsToCompareMoreDeeply)))) {
            return true;
        }
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = options.propsToCompareMoreDeeply[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var key = _step4.value;

                // for "children", shallow-compare at two levels deeper
                if (key == "children") {
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var childKey = _step5.value;

                            if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                } else {
                    if (ShallowChanged(objA[key], objB[key])) return true;
                }
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        return false;
    }
    return !ShallowEquals(objA, objB, options && options.propsToIgnore ? { propsToIgnore: options.propsToIgnore } : null);
}
//require("./GlobalStyles");
var loaded = false;
function AddGlobalElement(html) {
    var asMultiline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (asMultiline) {
        html = AsMultiline(html, 0);
    }
    var proceed = function proceed() {
        loaded = true;
        //let nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
        //let nodeType = html.match(`<([a-zA-Z-]+)`)[1];
        var nodeType = html.match("<([^ >]+)")[1];
        var element = document.createElement(nodeType);
        document.querySelector("#hidden_early").appendChild(element);
        element.outerHTML = html;
    };
    if (loaded) {
        proceed();
    } else {
        window.addEventListener("load", proceed);
    }
}
;
function AddGlobalStyle(str) {
    var asMultiline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (asMultiline) {
        str = AsMultiline(str, 0);
    }
    AddGlobalElement("\n\t\t<style>\n\t\t" + str + "\n\t\t</style>\n\t");
}
;
/*AddGlobalStyle(`
*:not(.ignoreBaseCSS) {
    color: rgba(255,255,255,.7);
}
`);*/
/*#* Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
/*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
    WaitXThenRun(0, ()=> {
        debugger;
        let type = typeGetterFunc() as any;
        setFunc(type.DecoratedComponent);
    });
    return {} as any;
}*/
/*export function PreRadium<T>(_: T, wrapperClass: Function): T {
    return (wrapperClass as any).DecoratedComponent;
}*/
/*export function GetErrorMessagesUnderElement(element: HTMLElement) {
    return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
    return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
}*/
/** As an alternative to adding this decorator to your class, consider just adding the line "EnsureSealedPropsArentOverriden(this, MyClass);" into its constructor. */
function HasSealedProps(target) {
    /*let oldConstructor = target.constructor;
    target.constructor = function() {
        for (let key in target["prototype"]) {
            let method = target["prototype"][key];
            if (method.sealed && this[key] != method) {
                throw new Error(`Cannot override sealed method "${key}".`);
            }
        }
        return oldConstructor.apply(this, arguments);
    };*/
    /*class WrapperClass {
        constructor(...args) {
            for (let key of Object.getOwnPropertyNames(target.prototype)) {
                //let method = target.prototype[key];
                let method = Object.getOwnPropertyDescriptor(target.prototype, key).value;
                if (method instanceof Function && method.sealed && this[key] != method) {
                    throw new Error(`Cannot override sealed method "${key}".`);
                }
            }
            return new target(...args);
        }
    }
    WrapperClass.prototype = target.prototype;
    return WrapperClass as any;*/
    return function (_target) {
        _inherits(WrapperClass, _target);

        function WrapperClass() {
            var _ref;

            _classCallCheck(this, WrapperClass);

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            var _this = _possibleConstructorReturn(this, (_ref = WrapperClass.__proto__ || Object.getPrototypeOf(WrapperClass)).call.apply(_ref, [this].concat(args)));

            EnsureSealedPropsArentOverriden(_this, target);
            return _this;
        }

        return WrapperClass;
    }(target);
}
function EnsureSealedPropsArentOverriden(compInstance, classWherePropsSealed) {
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = Object.getOwnPropertyNames(classWherePropsSealed.prototype)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var key = _step6.value;

            //let method = classWherePropsSealed.prototype[key];
            var method = Object.getOwnPropertyDescriptor(classWherePropsSealed.prototype, key).value;
            if (method instanceof Function && method.sealed && compInstance[key] != method) {
                throw new Error("Cannot override sealed method \"" + key + "\".");
            }
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }
}
function Sealed(target, key) {
    target[key].sealed = true;
}
var reactSpecialProps = ["key", "children", "dangerouslySetInnerHTML"];
var elementTypeInstances = {};
function FilterOutUnrecognizedProps(props, elementType) {
    var allowDataProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    //if (process.env.NODE_ENV !== 'development') { return props; }
    if (elementTypeInstances[elementType] == null) {
        elementTypeInstances[elementType] = document.createElement(elementType);
    }
    var testerElement = elementTypeInstances[elementType];
    // filter out any keys which don't exist in React's special-props or the tester
    var filteredProps = {};
    Object.keys(props).filter(function (propName) {
        return propName in testerElement || propName.toLowerCase() in testerElement || reactSpecialProps.indexOf(propName) != -1 || allowDataProps && propName.startsWith("data-");
    }).forEach(function (propName) {
        return filteredProps[propName] = props[propName];
    });
    return filteredProps;
}
function Assert(condition, messageOrMessageFunc) {
    if (condition) return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    //JSVE.logFunc(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    var skipError = false; // add flag which you can use to skip the error, when paused in debugger
    debugger;
    if (!skipError) throw new Error("Assert failed) " + message);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pseudoStyleTypes = undefined;
exports.ConvertStyleObjectToCSSString = ConvertStyleObjectToCSSString;
exports.ClassBasedStyle = ClassBasedStyle;
exports.ClassBasedStyles = ClassBasedStyles;

var _General = __webpack_require__(2);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classBasedStyleKeys = {};
var pseudoStyleTypes = exports.pseudoStyleTypes = ["hover"];
function ConvertStyleObjectToCSSString(styleObj) {
    var str = _server2.default.renderToString(_react2.default.createElement("div", { style: styleObj }));
    var styleStrMatch = str.match(/style="(.+?)" data-reactroot/);
    if (styleStrMatch == null) return null;
    var styleStr = styleStrMatch[1] + ";"; // add final semicolon; new versions of React leave it out for some reason
    return styleStr;
}
/**
 * Creates a global <style> element with the given style (if not yet created), under a derived-from-style-data class-name. Returns that class-name for components to use.
 * If pseudoStyleType is provided (eg. "hover"), that pseudo-style-type will be appended to the selector, thus having the style only apply for the given state (eg. only on element hover).
*/
function ClassBasedStyle(style, pseudoStyleType) {
    var styleText = ConvertStyleObjectToCSSString(style);
    var styleKey = (0, _General.ToJSON)(pseudoStyleType + "---" + styleText); // get a unique identifier for this particular class-based-style
    styleKey = styleKey.replace(/[^a-zA-Z0-9-]/g, ""); // make sure key is a valid class-name
    // if <style> element for the given style-composite has not been created yet, create it 
    if (classBasedStyleKeys[styleKey] == null) {
        classBasedStyleKeys[styleKey] = true;
        (0, _General.AddGlobalStyle)("\n\t\t\t." + styleKey + (pseudoStyleType ? ":" + pseudoStyleType : "") + " {\n\t\t\t\t" + styleText.replace(/([^ ]+?);/g, "$1 !important;") + "\n\t\t\t}\n\t\t");
    }
    return styleKey;
}
/** Searches styleComposite for pseudo-selectors (eg: ":hover"), and extracts each one into a class-based-style, then returns those class-names as a space-separated string. */
function ClassBasedStyles(styleComposite) {
    var classNames = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = pseudoStyleTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var type = _step.value;

            if (styleComposite[":" + type]) {
                classNames.push(ClassBasedStyle(styleComposite[":" + type], type));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return classNames.join(" ");
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseComponent = exports.RenderSource = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.BaseComponentWithConnector = BaseComponentWithConnector;
exports.BaseComponentPlus = BaseComponentPlus;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactAutobind = __webpack_require__(9);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _General = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RenderSource = exports.RenderSource = undefined;
(function (RenderSource) {
    RenderSource[RenderSource["Mount"] = 0] = "Mount";
    RenderSource[RenderSource["PropChange"] = 1] = "PropChange";
    RenderSource[RenderSource["SetState"] = 2] = "SetState";
    RenderSource[RenderSource["Update"] = 3] = "Update";
})(RenderSource || (exports.RenderSource = RenderSource = {}));
//@HasSealedProps // instead of using this decorator, we just include the "EnsureSealedPropsArentOverriden(this, BaseComponent);" line directly (to reduce nesting / depth of class-prototype chain)	

var BaseComponent = exports.BaseComponent = function (_Component) {
    _inherits(BaseComponent, _Component);

    function BaseComponent(props) {
        _classCallCheck(this, BaseComponent);

        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

        _this.renderCount = 0;
        //initialState: Partial<State>;
        //state = {} as State; // redefined here, so we can set the initial-state to {} (instead of undefined)
        _this.stash = {};
        _this.debug = {};
        // helper for debugging
        _this.GetPropChanges_lastValues = {};
        _this.GetStateChanges_lastValues = {};
        _this.changeListeners = [];
        _this.autoRemoveChangeListeners = true;
        _this.mounted = false;
        _this.warnOfTransientObjectProps_options = null;
        (0, _General.EnsureSealedPropsArentOverriden)(_this, BaseComponent);
        (0, _reactAutobind2.default)(_this);
        // if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
        //		so reach in to original class, and set up auto-binding for its prototype members as well
        if (_this.constructor.name == "RadiumEnhancer") {
            (0, _reactAutobind2.default)(Object.getPrototypeOf(_this));
        }
        _this.state = {}; // this.state starts as undefined, so set it to {} to match with this.stash and this.debug
        Object.assign(_this.state, _this.constructor["initialState"]);
        //this.Stash(this.constructor["initialStash"]);
        Object.assign(_this.stash, _this.constructor["initialStash"]);
        _this.AttachReactDevToolsHelpers();
        // if using PreRender, wrap render func
        /* if (this.PreRender != BaseComponent.prototype.PreRender) {
            let oldRender = this.render;
            this.render = function() {
                this.PreRender();
                return oldRender.apply(this, arguments);
            };
        } */
        // wrap the derived-class' render function, to include some extra code
        if (!_this.constructor.prototype.render.modifiedByBaseComponent) {
            var oldRender = _this.constructor.prototype.render;
            _this.constructor.prototype.render = function () {
                this.PreRender();
                BaseComponent.componentCurrentlyRendering = this;
                //this.renderCount = (this.renderCount|0) + 1;
                this.renderCount++;
                var result = oldRender.apply(this, arguments);
                BaseComponent.componentCurrentlyRendering = null;
                return result;
            };
            _this.constructor.prototype.render.modifiedByBaseComponent = true;
        }
        // you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
        /*let oldRender = this.render;
        this.render = function() {
            try {
                this.PreRender();
                return oldRender.apply(this, arguments);
            } catch (ex) {
                debugger;
                throw ex;
            }
        };*/
        return _this;
    }

    _createClass(BaseComponent, [{
        key: "Stash",
        value: function Stash(newStashData) {
            var _this2 = this;

            var replaceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (replaceData) Object.keys(this.stash).forEach(function (key) {
                delete _this2.stash[key];
            });
            Object.assign(this.stash, newStashData);
        }
    }, {
        key: "Debug",
        value: function Debug(newDebugData) {
            var _this3 = this;

            var replaceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (replaceData) Object.keys(this.debug).forEach(function (key) {
                delete _this3.debug[key];
            });
            Object.assign(this.debug, newDebugData);
        }
    }, {
        key: "AttachReactDevToolsHelpers",
        value: function AttachReactDevToolsHelpers() {
            var stash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.state["@stash"] = this.stash;
            this.state["@debug"] = this.debug;
        }
        //timers = [] as Timer[];

    }, {
        key: "GetPropChanges",
        value: function GetPropChanges() {
            var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
            var oldProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.GetPropChanges_lastValues;
            var setLastValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var oldAndNewKeys = (0, _General.RemoveDuplicates)(Object.keys(newProps).concat(Object.keys(oldProps)));
            var changedKeys = oldAndNewKeys.filter(function (key) {
                return !Object.is(newProps[key], oldProps[key]);
            });
            var result = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = changedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    result.push({ key: key, oldVal: oldProps[key], newVal: newProps[key] });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (setLastValues) this.GetPropChanges_lastValues = Object.assign({}, newProps);
            return result;
        }
    }, {
        key: "GetStateChanges",
        value: function GetStateChanges() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.GetStateChanges_lastValues;
            var setLastValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var oldAndNewKeys = (0, _General.RemoveDuplicates)(Object.keys(newState).concat(Object.keys(oldState)));
            var changedKeys = oldAndNewKeys.filter(function (key) {
                return !Object.is(newState[key], oldState[key]);
            });
            var result = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = changedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    result.push({ key: key, oldVal: oldState[key], newVal: newState[key] });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (setLastValues) this.GetStateChanges_lastValues = Object.assign({}, newState);
            return result;
        }
        //forceUpdate(_: ()=>"Do not call this. Call Update() instead.") {

    }, {
        key: "forceUpdate",
        value: function forceUpdate() {
            //throw new Error("Do not call this. Call Update() instead.");
            //console.warn("Do not call this. Call Update() instead."); // removed warning, since we're transitioning to react-hooks, and forceUpdate gets called from some hooks
            this.Update();
        }
    }, {
        key: "Update",
        value: function Update(postUpdate) {
            //if (!this.Mounted) return;
            this.lastRender_source = RenderSource.Update;
            //this.forceUpdate(postUpdate);
            _react.Component.prototype.forceUpdate.call(this, postUpdate);
        }
    }, {
        key: "Clear",
        value: function Clear(postClear) {
            var oldRender = this.render;
            this.render = function () {
                var _this4 = this;

                this.render = oldRender;
                //WaitXThenRun(0, this.Update);
                setTimeout(function () {
                    return _this4.Update();
                });
                return _react2.default.createElement("div", null);
            };
            postClear();
        }
    }, {
        key: "ClearThenUpdate",
        value: function ClearThenUpdate() {
            var _this5 = this;

            //this.Clear(this.Update);
            this.Clear(function () {
                return _this5.Update();
            });
        }
        /** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */

    }, {
        key: "UpdateAndReceive",
        value: function UpdateAndReceive(props) {
            var _this6 = this,
                _arguments = arguments;

            return function () {
                //if (!this.Mounted) return;
                //this.forceUpdate();
                _react.Component.prototype.forceUpdate.apply(_this6, _arguments);
                if (_this6.autoRemoveChangeListeners) _this6.RemoveChangeListeners();
                _this6.ComponentWillMountOrReceiveProps(props);
            };
        }
        //setState(_: ()=>"Do not call this. Call SetState() instead.") {
        /*setState() {
            throw new Error("Do not call this. Call SetState() instead.");
        }*/

    }, {
        key: "setState",
        value: function setState() {
            return null;
        }
    }, {
        key: "SetState",
        value: function SetState(newState, callback) {
            var _this7 = this;

            var cancelIfStateSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var jsonCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (cancelIfStateSame) {
                if (jsonCompare) {
                    // we only care about new-state's keys -- setState() leaves unmentioned keys untouched
                    var oldState_forNewStateKeys = Object.keys(newState).reduce(function (result, key) {
                        return result[key] = _this7.state[key], result;
                    }, {});
                    if ((0, _General.ToJSON)(newState) == (0, _General.ToJSON)(oldState_forNewStateKeys)) return [];
                } else {
                    //if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
                    // use a looser comparison (we want a missing prop to be equivalent to null and undefined)
                    var same = true;
                    //for (let key of RemoveDuplicates(Object.keys(this.state).concat(Object.keys(newState)))) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = Object.keys(newState)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var key = _step3.value;

                            var valA = this.state[key];
                            var valB = newState[key];
                            if (valA == null && valB == null) continue;
                            if (valA !== valB) {
                                same = false;
                                break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    if (same) return [];
                }
            }
            var componentClass = this.constructor;
            if (componentClass.ValidateState) {
                var newState_merged = Object.assign({}, this.state, newState);
                componentClass.ValidateState(newState_merged);
            }
            this.lastRender_source = RenderSource.SetState;
            //this.setState(newState as S, callback);
            _react.Component.prototype.setState.call(this, newState, callback);
        }
    }, {
        key: "AddChangeListeners",
        value: function AddChangeListeners(host) {
            if (host == null) return; // maybe temp
            /*host.extraMethods = funcs;
            for (let func of funcs)
                this.changeListeners.push({host: host, func: func});*/

            for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                funcs[_key - 1] = arguments[_key];
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = funcs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var func = _step4.value;

                    if (typeof func == "string") func = func.Func(this.Update);
                    // if actual function, add it (else, ignore entry--it must have been a failed conditional)
                    if (func instanceof Function) {
                        //if (!host.HasExtraMethod(func)) {
                        host.extraMethod = func;
                        this.changeListeners.push({ host: host, func: func });
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: "RemoveChangeListeners",
        value: function RemoveChangeListeners() {
            //this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.changeListeners[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var changeListener = _step5.value;

                    changeListener.host.removeExtraMethod = changeListener.func;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            this.changeListeners = [];
        }
    }, {
        key: "RemoveChangeListenersFor",
        value: function RemoveChangeListenersFor(host) {
            var changeListenersToRemove = this.changeListeners.filter(function (a) {
                return a.host == host;
            });
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = changeListenersToRemove[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var listener = _step6.value;

                    listener.host.removeExtraMethod = listener.func;
                    this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }
    }, {
        key: "ComponentWillMount",
        value: function ComponentWillMount() {}
    }, {
        key: "ComponentWillMountOrReceiveProps",
        value: function ComponentWillMountOrReceiveProps(newProps, forMount) {}
    }, {
        key: "UNSAFE_componentWillMount",
        value: function UNSAFE_componentWillMount() {
            if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
            this.ComponentWillMount();
            this.ComponentWillMountOrReceiveProps(this.props, true);
            this.lastRender_source = RenderSource.Mount;
        }
    }, {
        key: "ComponentDidMount",
        value: function ComponentDidMount() {}
    }, {
        key: "ComponentDidMountOrUpdate",
        value: function ComponentDidMountOrUpdate(lastProps, lastState) {}
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.ComponentDidMount.apply(this, arguments);
            this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
            this.ComponentDidMountOrUpdate_lastProps = this.props;
            this.ComponentDidMountOrUpdate_lastState = this.state;
            /*let {Ref} = this.props;
            if (Ref) Ref(this);*/
            this.mounted = true;
            this.CallPostRender();
        }
    }, {
        key: "ComponentWillUnmount",
        value: function ComponentWillUnmount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.ComponentWillUnmount();
            /*for (let timer of this.timers) {
                timer.Stop();
            }
            this.timers = [];*/
            /*let {Ref} = this.props;
            if (Ref) Ref(null);*/
            this.mounted = false;
        }
    }, {
        key: "ComponentWillReceiveProps",
        value: function ComponentWillReceiveProps(newProps) {}
    }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(newProps) {
            if (this.autoRemoveChangeListeners) {
                this.RemoveChangeListeners();
            }
            var warnOptions = this.warnOfTransientObjectProps_options || this.constructor["warnOfTransientObjectProps_options"];
            if (window["DEV"] && warnOptions) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = Object["entries"](newProps)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var _step7$value = _slicedToArray(_step7.value, 2),
                            key = _step7$value[0],
                            value = _step7$value[1];

                        if (warnOptions.ignoreProps && warnOptions.ignoreProps.indexOf(key) != -1) continue;
                        var isObject = value instanceof Object || (typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && value != null;
                        if (isObject && value != this.props[key] && value.memoized == null) {
                            var isFunction = value instanceof Function;
                            if (!isFunction && !warnOptions.warnForNonFunctions) continue;
                            console.warn("Transient " + (isFunction ? "callback" : "object") + "-prop detected. @Comp(" + this.constructor.name + ") @Prop(" + key + ") @Value:", value);
                        }
                    }
                    /* let changedProps = this.GetPropChanges(newProps, this.props, false);
                    // to prevent false-positives, only raise a warning when the *only* props that changed were callbacks
                    if (changedProps.every(prop=>prop.oldVal instanceof Function && prop.newVal instanceof Function)) {
                        for (let prop of changedProps) {
                            console.warn(`Transient callback-prop detected. @Comp(${this.constructor.name}) @Prop(${prop.key}) @Value:`, prop.newVal);
                        }
                    } */
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
            this.ComponentWillReceiveProps(newProps);
            this.ComponentWillMountOrReceiveProps(newProps, false);
            this.lastRender_source = RenderSource.PropChange;
        }
    }, {
        key: "ComponentDidUpdate",
        value: function ComponentDidUpdate() {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.ComponentDidUpdate.apply(this, arguments);
            this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
            this.ComponentDidMountOrUpdate_lastProps = this.props;
            this.ComponentDidMountOrUpdate_lastState = this.state;
            this.CallPostRender();
        }
    }, {
        key: "CallPostRender",
        value: function CallPostRender() {
            var _this8 = this;

            if (this.PostRender == BaseComponent.prototype.PostRender) return;
            var renderSource = this.lastRender_source;
            var ownPostRender = this.PostRender;
            // can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
            var prototypePostRender = this.constructor.prototype.PostRender;
            if (ownPostRender.instant || prototypePostRender.instant) {
                this.PostRender(renderSource);
            } else {
                /*if (QuickIncrement("PostRenderLog") <= 1)
                    Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
                //Log("Calling PostRender for: " + this.constructor.name);
                setTimeout(function () {
                    return window.requestAnimationFrame(function () {
                        //WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
                        if (!_this8.mounted) return;
                        _this8.PostRender(renderSource);
                    });
                });
                /*WaitXThenRun(0, ()=> {
                    this.PostRender();
                });*/
            }
        }
    }, {
        key: "PreRender",
        value: function PreRender() {}
    }, {
        key: "PostRender",
        value: function PostRender(source) {}
    }, {
        key: "PropsState",
        get: function get() {
            return (0, _General.E)(this.props, this.state);
        }
    }, {
        key: "PropsStash",
        get: function get() {
            return (0, _General.E)(this.props, this.stash);
        }
    }, {
        key: "PropsStateStash",
        get: function get() {
            return (0, _General.E)(this.props, this.state, this.stash);
        }
    }, {
        key: "DOM",
        get: function get() {
            return (0, _General.GetDOM)(this);
        }
    }, {
        key: "DOM_HTML",
        get: function get() {
            return (0, _General.GetDOM)(this);
        }
        //DOMAs<T extends Element>() { return GetDOM(this) as T; }
        //get DOM_() { return this.mounted ? $(this.DOM) : null; }
        // needed for wrapper-components that don't provide way of accessing inner-component
        //get InnerComp() { return FindReact(this.DOM); }
        // make all these optional, so fits Component type definition/shape

    }, {
        key: "FlattenedChildren",
        get: function get() {
            var children = children instanceof Array ? this.props.children : [this.props.children];
            return _react2.default.Children.map(children.filter(function (a) {
                return a;
            }), function (a) {
                return a;
            });
        }
    }]);

    return BaseComponent;
}(_react.Component);

__decorate([_General.Sealed], BaseComponent.prototype, "UNSAFE_componentWillMount", null);
__decorate([_General.Sealed], BaseComponent.prototype, "componentDidMount", null);
__decorate([_General.Sealed], BaseComponent.prototype, "componentWillUnmount", null);
__decorate([_General.Sealed], BaseComponent.prototype, "UNSAFE_componentWillReceiveProps", null);
__decorate([_General.Sealed], BaseComponent.prototype, "componentDidUpdate", null);
/*export function BaseComponentWithConnect<Props>(connectFunc: (state?: RootState, props?)=>Props) {
    return function InnerFunc<State>() {
        return BaseComponent as new(..._)=>BaseComponent<Props, State>;
    };
}*/
/*export function BaseComponentWithConnector<PassedProps, ConnectProps, State>(connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State, forwardRef = false) {
    let resultClass = class BaseComponentEnhanced extends BaseComponent<PassedProps & Partial<ConnectProps>, State> {
        constructor(props) {
            super(props);
            this.state = initialState;
            if (this.constructor["initialState"]) {
                throw new Error(`Cannot specify "${this.constructor.name}.initialState". (initial-state is already set using BaseComponentWithConnect function)`)
            }
        }
    }
    // we can't auto-decorate with Connect, because the ConnectedComp is a *wrapper* around the component (Wrapper is a separate component containing the Comp->BaseCompWithConnector->BaseComp proto-chain)
    /*let Connect = BaseComponentWithConnector["Connect"];
    if (Connect) {
        resultClass = Connect(connector, forwardRef)(resultClass);
    }*#/
    
    //return resultClass;
    return resultClass as any as new(..._)=>BaseComponent<PassedProps & Partial<ConnectProps>, State>;
}

/** Derivative of BaseComponentWithConnector. Has same signature, but ignores the connector-related functionality. (so makes same as just BaseComponent, but as a quick toggle) *#/
export function BaseComponentWithConnector_Off<PassedProps, ConnectProps, State>(initialState: State);
export function BaseComponentWithConnector_Off<PassedProps, ConnectProps, State>(connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State);
export function BaseComponentWithConnector_Off<PassedProps, ConnectProps, State>(...args) {
    let connector: (state?, props?: PassedProps)=>ConnectProps, initialState: State;
    if (args.length == 1) [initialState] = args;
    else if (args.length == 2) [connector, initialState] = args;
    
    let resultClass = class BaseComponentEnhanced extends BaseComponent<PassedProps, State> {
        constructor(props) {
            super(props);
            this.state = initialState;
            if (this.constructor["initialState"]) {
                throw new Error(`Cannot specify "${this.constructor.name}.initialState". (initial-state is already set using BaseComponentWithConnect function)`)
            }
        }
    }
    return resultClass as any as new(..._)=>BaseComponent<PassedProps, State>;
}*/
// Note: We can't auto-apply the actual Connect decorator, because here can only be the *base* for the user-component, not *wrap* it (which is needed for the react-redux "Connected(Comp)" component)
function BaseComponentWithConnector(connector, initialState) {
    var initialStash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var BaseComponentEnhanced = function (_BaseComponent) {
        _inherits(BaseComponentEnhanced, _BaseComponent);

        function BaseComponentEnhanced(props) {
            _classCallCheck(this, BaseComponentEnhanced);

            var _this9 = _possibleConstructorReturn(this, (BaseComponentEnhanced.__proto__ || Object.getPrototypeOf(BaseComponentEnhanced)).call(this, props));

            Object.assign(_this9.state, initialState);
            Object.assign(_this9.stash, initialStash);
            (0, _General.Assert)(_this9.constructor["initialState"] == null, "Cannot specify \"" + _this9.constructor.name + ".initialState\". (initial-state is already set using BaseComponentWithConnect function)");
            (0, _General.Assert)(_this9.constructor["initialStash"] == null, "Cannot specify \"" + _this9.constructor.name + ".initialStash\". (initial-stash is already set using BaseComponentWithConnect function)");
            return _this9;
        }

        return BaseComponentEnhanced;
    }(BaseComponent);
    //return BaseComponentEnhanced;


    return BaseComponentEnhanced;
}
function BaseComponentPlus() {
    var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var initialStash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var BaseComponentPlus = function (_BaseComponent2) {
        _inherits(BaseComponentPlus, _BaseComponent2);

        function BaseComponentPlus(props) {
            _classCallCheck(this, BaseComponentPlus);

            var _this10 = _possibleConstructorReturn(this, (BaseComponentPlus.__proto__ || Object.getPrototypeOf(BaseComponentPlus)).call(this, props));

            Object.assign(_this10.state, initialState);
            Object.assign(_this10.stash, initialStash);
            (0, _General.Assert)(_this10.constructor["initialState"] == null, "Cannot specify \"" + _this10.constructor.name + ".initialState\". (initial-state is already set using BaseComponentPlus function)");
            (0, _General.Assert)(_this10.constructor["initialStash"] == null, "Cannot specify \"" + _this10.constructor.name + ".initialStash\". (initial-stash is already set using BaseComponentPlus function)");
            return _this10;
        }

        return BaseComponentPlus;
    }(BaseComponent);

    BaseComponentPlus.defaultProps = defaultProps;
    //return BaseComponentPlus;
    return BaseComponentPlus;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autoBind;
var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

var toBind = [];

function autoBind(context) {
  if (context === undefined) {
    console.error('Autobind error: No context provided.');
    return;
  }

  var objPrototype = Object.getPrototypeOf(context);

  if (arguments.length > 1) {
    // If a list of methods to bind is provided, use it.
    toBind = Array.prototype.slice.call(arguments, 1);
  } else {
    // If no list of methods to bind is provided, bind all available methods in class.
    toBind = Object.getOwnPropertyNames(objPrototype);
  }

  toBind.forEach(function (method) {
    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

    if (descriptor === undefined) {
      console.warn('Autobind: "' + method + '" method not found in class.');
      return;
    }

    // Return if it's special case function or if not a function at all
    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
      return;
    }

    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
  });
}

/**
* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
* Return a descriptor removing the value and returning a getter
* The getter will return a .bind version of the function
* and memoize the result against a symbol on the instance
*/
function boundMethod(objPrototype, method, descriptor) {
  var fn = descriptor.value;

  return {
    configurable: true,
    get: function get() {
      if (this === objPrototype || this.hasOwnProperty(method)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      Object.defineProperty(this, method, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UseMemo = exports.UseImperativeHandle = exports.UseEffect = exports.inRenderFunc = exports.WrapOptions = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.Wrap = Wrap;

var _react = __webpack_require__(7);

Object.defineProperty(exports, "UseEffect", {
    enumerable: true,
    get: function get() {
        return _react.useEffect;
    }
});
Object.defineProperty(exports, "UseImperativeHandle", {
    enumerable: true,
    get: function get() {
        return _react.useImperativeHandle;
    }
});
Object.defineProperty(exports, "UseMemo", {
    enumerable: true,
    get: function get() {
        return _react.useMemo;
    }
});
exports.UseState = UseState;
exports.UseCallback = UseCallback;
exports.TODO = TODO;

var _react2 = _interopRequireDefault(_react);

var _ = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// wrapper for function-components
// ==========
var WrapOptions = exports.WrapOptions = function WrapOptions() {
    _classCallCheck(this, WrapOptions);

    /** If true, render-func is wrapped with React.memo(...) */
    this.pure = true;
    /** Only actually called if the render-func supplied has a ref parameter. */
    this.forwardRef = true;
};

var inRenderFunc = exports.inRenderFunc = false;
function Wrap() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var options = void 0,
        renderFunc = void 0;
    if (args.length == 1) {
        ;
        renderFunc = args[0];
    }if (args.length == 2) {
        ;
        options = args[0];
        renderFunc = args[1];
    }options = (0, _.E)(new WrapOptions(), options);
    var result = function result() {
        exports.inRenderFunc = inRenderFunc = true;
        var result = renderFunc.apply(this, arguments);
        exports.inRenderFunc = inRenderFunc = false;
        return result;
    };
    if (options.forwardRef && renderFunc.length == 2) result = (0, _react.forwardRef)(result);
    if (options.pure) result = _react2.default.memo(result);
    return result;
}
// hooks
// ==========
// use as-is

function areStrictEqual(a, b) {
    return a === b;
}
/** Like useState, except it cancels the state-setting if the new-value equals the old-value. */
function UseState(initialState) {
    var areEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : areStrictEqual;

    var _React$useState = _react2.default.useState(initialState),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    var stateRef = _react2.default.useRef(state);
    var areEqualRef = _react2.default.useRef(areEqual);
    areEqualRef.current = areEqual;
    var updateState = _react2.default.useCallback(function (stateOrReducer) {
        var nextState = typeof stateOrReducer === "function" ? stateOrReducer(stateRef.current) : stateOrReducer;
        if (!areEqualRef.current(stateRef.current, nextState)) {
            stateRef.current = nextState;
            setState(nextState);
        }
    }, []);
    return [state, updateState];
}
/*export function UseMemo<T>(deps: DependencyList | undefined, factory: () => T): T {
    return useMemo(factory, deps);
}*/
/*export function UseMemo<T>(factory: () => T, deps: DependencyList | undefined): T {
    if (factory instanceof)
    return useMemo(factory, deps);
}*/
function UseCallback(callback, deps) {
    if (window["DEV"]) callback["memoized"] = true;
    return (0, _react.useCallback)(callback, deps);
}
function TODO() {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WarnOfTransientObjectProps_Options = exports.SimpleShouldUpdate_Options = undefined;
exports.SimpleShouldUpdate = SimpleShouldUpdate;
exports.WarnOfTransientObjectProps = WarnOfTransientObjectProps;
exports.Instant = Instant;

var _General = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleShouldUpdate_Options = exports.SimpleShouldUpdate_Options = function SimpleShouldUpdate_Options() {
    _classCallCheck(this, SimpleShouldUpdate_Options);

    this.propsToIgnore = null;
    this.stateToIgnore = null;
    this.useShouldUpdateProp = false;
};

function SimpleShouldUpdate() {
    var options = new SimpleShouldUpdate_Options();
    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) == "function") {
        ApplyToClass(arguments.length <= 0 ? undefined : arguments[0]);
    } else {
        options = (0, _General.E)(options, arguments.length <= 0 ? undefined : arguments[0]);
        return ApplyToClass;
    }
    function ApplyToClass(targetClass) {
        (0, _General.Assert)(targetClass.prototype.shouldComponentUpdate == null, "Cannot apply SimpleShouldUpdate to class \"" + targetClass.name + "\", because it already has a shouldComponentUpdate method present.");
        targetClass.prototype.shouldComponentUpdate = function (newProps, newState) {
            /*if (options.logChangedWhen...) {
                Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));
            }*/
            if (options.useShouldUpdateProp) {
                var shouldUpdate = newProps.shouldUpdate;

                if (typeof shouldUpdate == "boolean") return shouldUpdate;
                if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
            }
            return (0, _General.ShallowChanged)(this.props, newProps, { propsToIgnore: options.propsToIgnore }) || (0, _General.ShallowChanged)(this.state, newState, { propsToIgnore: options.stateToIgnore });
        };
    }
}

var WarnOfTransientObjectProps_Options = exports.WarnOfTransientObjectProps_Options = function WarnOfTransientObjectProps_Options() {
    _classCallCheck(this, WarnOfTransientObjectProps_Options);

    this.ignoreProps = null;
    this.warnForNonFunctions = false;
};

function WarnOfTransientObjectProps() {
    //Assert(targetClass instanceof Function, `Must decorate a class directly. (no "()" in "@WarnOfTransientObjectProps" line)`);
    var options = new WarnOfTransientObjectProps_Options();
    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) == "function") {
        ApplyToClass(arguments.length <= 0 ? undefined : arguments[0]);
    } else {
        options = (0, _General.E)(options, arguments.length <= 0 ? undefined : arguments[0]);
        return ApplyToClass;
    }
    function ApplyToClass(targetClass) {
        targetClass["warnOfTransientObjectProps_options"] = options;
    }
}
// for PostRender() func
function Instant(target, name) {
    target[name].instant = true;
}

/***/ })
/******/ ]);
});
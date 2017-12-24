(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Div = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _reactAutobind = __webpack_require__(3);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	var _Utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};
	/*import {E} from "../../../Frame/General/Globals_Free";
	import {BaseComponent, Div, FindDOM, FindDOM_, Classes} from "../../../Frame/General/ReactGlobals";
	import {BufferAction} from "../../../Frame/General/Timers";*/

	//declare var $;
	var $ = window.$;

	var Div = exports.Div = function (_Component) {
	    _inherits(Div, _Component);

	    function Div() {
	        _classCallCheck(this, Div);

	        return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
	    }

	    _createClass(Div, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.props.shouldUpdate) return this.props.shouldUpdate(nextProps, nextState);
	            return true;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _a = this.props,
	                shouldUpdate = _a.shouldUpdate,
	                rest = __rest(_a, ["shouldUpdate"]);
	            return React.createElement("div", Object.assign({}, rest));
	        }
	    }]);

	    return Div;
	}(_react.Component);

	var inFirefox = navigator.userAgent.includes("Firefox");
	// main
	// ==========
	var styles = {
	    root: { position: "relative", height: "100%", flex: 1, overflow: "hidden" },
	    content: {
	        //height: "100%", flex: 1,
	        position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
	        overflow: "auto", overflowScrolling: "touch", "-webkit-overflow-scrolling": "touch"
	    },
	    //content_draggable: {cursor: "grab -webkit-grab -moz-grab"},
	    //content_dragging: {cursor: "-webkit-grabbing"}, // implemented in <style> tag instead, due to <Div> not being re-rendered (intentionally)
	    scrollBar: {
	        backgroundColor: "rgba(255,255,255,.3)",
	        borderRadius: 5
	    },
	    scrollBar_h: { position: "absolute", boxSizing: "border-box", zIndex: 10, height: 8, bottom: 0 },
	    scrollBar_v: { position: "absolute", boxSizing: "border-box", zIndex: 10, width: 8, right: 0 },
	    scrollBar_active: { backgroundColor: "rgba(255,255,255,.7)" },
	    scrollTrack: { position: "absolute", pointerEvents: "none" },
	    scrollTrack_h: { left: 0, right: 0, bottom: 0, height: 8 },
	    scrollTrack_v: { right: 0, top: 0, bottom: 0, width: 8 }
	};

	var ScrollView = function (_Component2) {
	    _inherits(ScrollView, _Component2);

	    function ScrollView(props) {
	        _classCallCheck(this, ScrollView);

	        var _this2 = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

	        _this2.propsJustChanged = false;
	        _this2.sizeJustChanged = false;
	        (0, _reactAutobind2.default)(_this2);
	        _this2.state = {
	            containerWidth: 0,
	            contentWidth: 0,
	            scrollH_active: false,
	            //scrollH_pos: this.props.scrollH_pos,
	            containerHeight: 0,
	            contentHeight: 0,
	            scrollV_active: false
	        };
	        return _this2;
	    }
	    //_lastState = {} as any; // to fix edge case, for when using "marginRight: -17" to hide scroll-bar


	    _createClass(ScrollView, [{
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            var _a = this.props,
	                backgroundDrag = _a.backgroundDrag,
	                backgroundDragMatchFunc = _a.backgroundDragMatchFunc,
	                bufferScrollEventsBy = _a.bufferScrollEventsBy,
	                scrollH_pos = _a.scrollH_pos,
	                scrollV_pos = _a.scrollV_pos,
	                className = _a.className,
	                style = _a.style,
	                contentStyle = _a.contentStyle,
	                scrollHBarStyle = _a.scrollHBarStyle,
	                scrollVBarStyle = _a.scrollVBarStyle,
	                onMouseDown = _a.onMouseDown,
	                onClick = _a.onClick,
	                onScrollEnd = _a.onScrollEnd,
	                children = _a.children,
	                rest = __rest(_a, ["backgroundDrag", "backgroundDragMatchFunc", "bufferScrollEventsBy", "scrollH_pos", "scrollV_pos", "className", "style", "contentStyle", "scrollHBarStyle", "scrollVBarStyle", "onMouseDown", "onClick", "onScrollEnd", "children"]);
	            children = children instanceof Array ? children : [children];
	            var _state = this.state,
	                containerWidth = _state.containerWidth,
	                containerHeight = _state.containerHeight,
	                contentWidth = _state.contentWidth,
	                contentHeight = _state.contentHeight,
	                scrollH_active = _state.scrollH_active,
	                scrollH_pos = _state.scrollH_pos,
	                scrollV_active = _state.scrollV_active,
	                scrollV_pos = _state.scrollV_pos,
	                scrollOp_bar = _state.scrollOp_bar;
	            //let scrollbarVisibilityChanged = scrollH_active != this._lastState.scrollH_active || scrollV_active != this._lastState.scrollV_active;
	            /*let scrollbarVisibilityChanged = containerWidth != this._lastState.containerWidth || containerHeight != this._lastState.containerHeight
	                || contentWidth != this._lastState.contentWidth || contentHeight != this._lastState.contentHeight;
	            this._lastState = this.state;*/
	            //console.log(`Rendering... ${this.propsJustChanged} ${this.sizeJustChanged}`);

	            var classes = ["ScrollView", backgroundDrag && "draggable", scrollOp_bar && "scrollActive", className && className];
	            return React.createElement("div", Object.assign({}, rest, { className: classes.filter(function (a) {
	                    return a;
	                }).join(" "), style: (0, _Utils.E)(styles.root, style) }), scrollH_active && React.createElement("div", { className: "scrollTrack horizontal", style: (0, _Utils.E)(styles.scrollTrack, styles.scrollTrack_h) }, React.createElement("div", { ref: function ref(c) {
	                    return _this3.scrollHBar = c;
	                }, className: "scrollBar horizontal", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: function onMouseOver() {
	                    return _this3.setState({ scrollHBar_hovered: true });
	                }, onMouseOut: function onMouseOut() {
	                    return _this3.setState({ scrollHBar_hovered: false });
	                }, style: (0, _Utils.E)(styles.scrollBar, styles.scrollBar_h, (this.state.scrollHBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollHBar) && styles.scrollBar_active, { width: containerWidth / contentWidth * 100 + "%", left: scrollH_pos / contentWidth * 100 + "%", pointerEvents: "all" }, scrollHBarStyle) })), scrollV_active && React.createElement("div", { className: "scrollTrack vertical", style: (0, _Utils.E)(styles.scrollTrack, styles.scrollTrack_v) }, React.createElement("div", { ref: function ref(c) {
	                    return _this3.scrollVBar = c;
	                }, className: "scrollBar vertical", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: function onMouseOver() {
	                    return _this3.setState({ scrollVBar_hovered: true });
	                }, onMouseOut: function onMouseOut() {
	                    return _this3.setState({ scrollVBar_hovered: false });
	                }, style: (0, _Utils.E)(styles.scrollBar, styles.scrollBar_v, (this.state.scrollVBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollVBar) && styles.scrollBar_active, { height: containerHeight / contentHeight * 100 + "%", top: scrollV_pos / contentHeight * 100 + "%", pointerEvents: "all" }, scrollVBarStyle) })), React.createElement("style", null, "\n\t\t\t\t.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; }\n\t\t\t\t.ScrollView.draggable > .content { cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; }\n\t\t\t\t.ScrollView.draggable.scrollActive > .content { cursor: grabbing !important; cursor: -webkit-grabbing !important; cursor: -moz-grabbing !important; }\n\t\t\t\t"), React.createElement(Div, { ref: function ref(c) {
	                    return _this3.content = c;
	                }, className: "content hideScrollbar", onScroll: this.HandleScroll, onMouseDown: this.OnContentMouseDown, onTouchEnd: this.OnTouchEnd, onClick: onClick, style: (0, _Utils.E)(styles.content, /*backgroundDrag && styles.content_draggable,*/ /*scrollOp_bar && styles.content_dragging,*/inFirefox && scrollH_active && { /*paddingBottom: GetHScrollBarHeight(),*/marginBottom: -(0, _Utils.GetHScrollBarHeight)() }, inFirefox && scrollV_active && { /*paddingRight: GetVScrollBarWidth(),*/marginRight: -(0, _Utils.GetVScrollBarWidth)() }, contentStyle), shouldUpdate: function shouldUpdate() {
	                    return _this3.PropsJustChanged || inFirefox && _this3.SizeJustChanged;
	                } }, children));
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this4 = this;

	            window.addEventListener("resize", this.UpdateSize);
	            document.addEventListener("mousemove", this.OnMouseMove);
	            document.addEventListener("mouseup", this.OnMouseUp);
	            //this.UpdateSize();
	            this.LoadScroll();
	            setTimeout(function () {
	                return window.requestAnimationFrame(function () {
	                    return _this4.PostRender(false);
	                });
	            }, 0);
	            this.hScrollableDOM = this.hScrollableDOM || (0, _Utils.FindDOM)(this.content);
	            this.vScrollableDOM = this.vScrollableDOM || (0, _Utils.FindDOM)(this.content);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            var _this5 = this;

	            if (!this.propsJustChanged) return; // if was just a scroll-update, ignore
	            this.LoadScroll();
	            setTimeout(function () {
	                return window.requestAnimationFrame(function () {
	                    return _this5.PostRender(false);
	                });
	            }, 0);
	        }
	    }, {
	        key: "LoadScroll",
	        value: function LoadScroll() {
	            if (!this.state.scrollH_pos && !this.state.scrollV_pos) return;
	            this.hScrollableDOM.scrollLeft = this.state.scrollH_pos;
	            this.vScrollableDOM.scrollTop = this.state.scrollV_pos;
	        }
	    }, {
	        key: "PostRender",
	        value: function PostRender(firstRender) {
	            (0, _Utils.FindDOM_)(this).OnVisible(this.UpdateSize, true);
	            //FindDOM_(this).OnVisible(this.UpdateSize, true, true);
	            /*if (firstRender)
	                FindDOM_(this).OnVisible(this.LoadScroll, true, true);*/
	            // onTouchEndCapture doesn't work consistently, so use native event
	            /*FindDOM(this.content).ontouchend = ()=>(console.log("end"), this.OnTouchEnd());
	            FindDOM(this.content).ontouchcancel = ()=>(console.log("cancel"), this.OnTouchEnd());
	            FindDOM(this.content).ontouchmove = ()=>{console.log("move")};
	            FindDOM(this.content).ontouchstart = ()=>{console.log("start")};*/
	            if (firstRender) {
	                this.setState({
	                    "scrollH_pos": this.props.scrollH_pos,
	                    "scrollV_pos": this.props.scrollV_pos
	                });
	            }
	        }
	        // for some reason, this gets called even if not really unmounting (or... I don't see why it'd be unmounting, anyway)

	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.UpdateSize);
	            document.removeEventListener("mousemove", this.OnMouseMove);
	            document.removeEventListener("mouseup", this.OnMouseUp);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            var _setState;

	            this.setState((_setState = {}, _defineProperty(_setState, nextProps.scrollH_pos != null ? "scrollH_pos" : "na", nextProps.scrollH_pos), _defineProperty(_setState, nextProps.scrollV_pos != null ? "scrollV_pos" : "na", nextProps.scrollV_pos), _setState));
	            // when updating children, we should remeasure the heights to decide whether to toggle scroll enabledness
	            // todo: in the future, have this run in PostRender() or something, as I think setTimeout is not guaranteed to run after the UI is updated 
	            setTimeout(this.UpdateSize);
	            this.propsJustChanged = true;
	        }
	    }, {
	        key: "UpdateSize",
	        value: function UpdateSize() {
	            var container = (0, _Utils.FindDOM)(this);
	            var content = (0, _Utils.FindDOM)(this.content);
	            if (container == null || content == null) return;
	            /*var containerWidth = container.offsetWidth;
	            var containerHeight = container.offsetHeight;*/
	            var containerWidth = container.clientWidth;
	            var containerHeight = container.clientHeight;
	            /*var contentWidth = this.hScrollableDOM.scrollWidth;
	            var contentHeight = this.vScrollableDOM.scrollHeight;*/
	            var contentWidth = content.scrollWidth + parseInt(content.style.marginRight || "0"); // include margin
	            var contentHeight = content.scrollHeight + parseInt(content.style.marginBottom || "0"); // include margin
	            //Log(`Width: ${contentWidth}/${containerWidth}, Height: ${contentHeight}/${containerHeight}`);
	            if (containerWidth != this.state.containerWidth || containerHeight != this.state.containerHeight || contentWidth != this.state.contentWidth || contentHeight != this.state.contentHeight) {
	                this.sizeJustChanged = true;
	                this.setState({
	                    containerWidth: containerWidth, containerHeight: containerHeight,
	                    contentWidth: contentWidth, contentHeight: contentHeight,
	                    scrollH_active: contentWidth > containerWidth,
	                    scrollV_active: contentHeight > containerHeight
	                });
	            }
	        }
	    }, {
	        key: "HandleScroll",
	        value: function HandleScroll(e) {
	            // if not user-initiated event, ignore
	            //if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
	            //e.stopPropagation();
	            // maybe temp; for performance, when used in LogEntriesUI
	            if (this.props.bufferScrollEventsBy) (0, _Utils.BufferAction)("ScrollView_HandleScroll", this.props.bufferScrollEventsBy, this.UpdateScrolls);else this.UpdateScrolls();
	        }
	    }, {
	        key: "UpdateScrolls",
	        value: function UpdateScrolls() {
	            //var contentUI = FindDOM(this.content);
	            var scrollH_pos = this.hScrollableDOM.scrollLeft;
	            var scrollV_pos = this.vScrollableDOM.scrollTop;
	            if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
	                this.setState({ scrollH_pos: scrollH_pos, scrollV_pos: scrollV_pos });
	                //this.props.onScroll && this.props.onScroll({x: scrollH_pos, y: scrollV_pos});
	                this.UpdateSize(); // update size info (if changed)
	            }
	        }
	        // #maybe temp; for performance, when used in LogEntriesUI
	        /*UpdateSizeAndScrolls() {
	            this.StartSetStateCluster();
	            this.UpdateSize();
	            this.UpdateScrolls();
	            this.EndSetStateCluster();
	        }*/

	    }, {
	        key: "OnContentMouseDown",
	        value: function OnContentMouseDown(e) {
	            var _this6 = this;

	            var _props = this.props,
	                backgroundDrag = _props.backgroundDrag,
	                backgroundDragMatchFunc = _props.backgroundDragMatchFunc;

	            if (!backgroundDrag) return;
	            backgroundDragMatchFunc = backgroundDragMatchFunc || function (a) {
	                var nodePlusParents = [a];
	                while (nodePlusParents[nodePlusParents.length - 1].parentNode instanceof Element) {
	                    nodePlusParents.push(nodePlusParents[nodePlusParents.length - 1].parentNode);
	                }var firstScrollViewParent = nodePlusParents.find(function (b) {
	                    return b.className.split(" ").indexOf("ScrollView") != -1;
	                });
	                if (firstScrollViewParent == null || firstScrollViewParent[0] != (0, _Utils.FindDOM)(_this6)) return false;
	                return a.className.split(" ").indexOf("content") != -1 || a == _this6.content; // || a == this.state.svgRoot;
	            };
	            if (!backgroundDragMatchFunc(e.target)) return;
	            if (e.button != 0) return;
	            this.StartScrolling(e);
	            this.props.onMouseDown && this.props.onMouseDown(e);
	        }
	    }, {
	        key: "OnScrollbarMouseDown",
	        value: function OnScrollbarMouseDown(e) {
	            e.preventDefault();
	            this.StartScrolling(e);
	        }
	    }, {
	        key: "StartScrolling",
	        value: function StartScrolling(e) {
	            //this.updateChildren = false;
	            this.setState({ scrollOp_bar: e.target });
	            this.scroll_startMousePos = { x: e.pageX, y: e.pageY };
	            this.scroll_startScrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
	        }
	    }, {
	        key: "OnMouseMove",
	        value: function OnMouseMove(e) {
	            var _state2 = this.state,
	                scrollOp_bar = _state2.scrollOp_bar,
	                containerWidth = _state2.containerWidth,
	                containerHeight = _state2.containerHeight,
	                contentWidth = _state2.contentWidth,
	                contentHeight = _state2.contentHeight;

	            if (!scrollOp_bar) return;
	            var scrollBar = $(scrollOp_bar);
	            var scroll_mousePosDif = { x: e.pageX - this.scroll_startMousePos.x, y: e.pageY - this.scroll_startMousePos.y };
	            if (scrollBar.is(".horizontal")) {
	                var scrollPixelsPerScrollbarPixels = contentWidth / containerWidth;
	                this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x + scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels;
	            } else if (scrollBar.is(".vertical")) {
	                var _scrollPixelsPerScrollbarPixels = contentHeight / containerHeight;
	                this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y + scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels;
	            } else {
	                var _scrollPixelsPerScrollbarPixels2 = 1;
	                this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x - scroll_mousePosDif.x * _scrollPixelsPerScrollbarPixels2;
	                this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y - scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels2;
	            }
	        }
	    }, {
	        key: "OnMouseUp",
	        value: function OnMouseUp(e) {
	            if (!this.state.scrollOp_bar) return;
	            this.setState({ scrollOp_bar: null });
	            this.OnScrollEnd();
	        }
	    }, {
	        key: "OnTouchEnd",
	        value: function OnTouchEnd() {
	            this.OnScrollEnd();
	        }
	    }, {
	        key: "OnScrollEnd",
	        value: function OnScrollEnd() {
	            var onScrollEnd = this.props.onScrollEnd;

	            if (onScrollEnd) {
	                //let content = FindDOM(this.content);
	                var scrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
	                onScrollEnd(scrollPos);
	            }
	        }
	        // for external use

	    }, {
	        key: "GetScroll",
	        value: function GetScroll() {
	            return { x: this.state.scrollH_pos, y: this.state.scrollV_pos };
	        }
	        // alternative to using "scrollH_pos" and "scrollV_pos" props

	    }, {
	        key: "SetScroll",
	        value: function SetScroll(scrollPos) {
	            //this.setState({scrollH_pos: scrollPos.x, scrollV_pos: scrollPos.y}, ()=>this.LoadScroll());
	            //var content = FindDOM(this.content);
	            this.hScrollableDOM.scrollLeft = scrollPos.x;
	            this.vScrollableDOM.scrollTop = scrollPos.y;
	        }
	    }, {
	        key: "ScrollBy",
	        value: function ScrollBy(scrollPosOffset) {
	            //this.setState({scrollH_pos: this.GetScroll().x + scrollPosOffset.x, scrollV_pos: this.GetScroll().y + scrollPosOffset.y}, ()=>this.LoadScroll());
	            //var content = FindDOM(this.content);
	            this.hScrollableDOM.scrollLeft += scrollPosOffset.x;
	            this.vScrollableDOM.scrollTop += scrollPosOffset.y;
	            //this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
	        }
	    }, {
	        key: "PropsJustChanged",
	        get: function get() {
	            var result = this.propsJustChanged;
	            this.propsJustChanged = false;
	            return result;
	        }
	    }, {
	        key: "SizeJustChanged",
	        get: function get() {
	            var result = this.sizeJustChanged;
	            this.sizeJustChanged = false;
	            return result;
	        }
	    }]);

	    return ScrollView;
	}(_react.Component);

	exports.default = ScrollView;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Log = Log;
	exports.Assert = Assert;
	exports.FindDOM = FindDOM;
	exports.FindDOM_ = FindDOM_;
	exports.E = E;
	exports.BufferAction = BufferAction;
	exports.GetScrollBarSizes = GetScrollBarSizes;
	exports.GetHScrollBarHeight = GetHScrollBarHeight;
	exports.GetVScrollBarWidth = GetVScrollBarWidth;
	exports.HasScrollBar = HasScrollBar;
	exports.HasVScrollBar = HasVScrollBar;
	exports.HasHScrollBar = HasHScrollBar;

	var _reactDom = __webpack_require__(6);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//declare var $;
	var $ = window.$;
	function Log(message) {
	    var _console;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    (_console = console).log.apply(_console, [message].concat(args));
	}
	function Assert(condition, message) {
	    if (condition) return;
	    //console.log(`Assert failed) ${message}\n\nStackTrace) ${new Error().stack}`);
	    //console.error("Assert failed) " + message);
	    throw new Error("Assert failed) " + message);
	}
	function FindDOM(comp) {
	    if (comp == null || comp._reactInternalInstance == null) return null;
	    return ReactDOM.findDOMNode(comp);
	}
	function FindDOM_(comp) {
	    return $(FindDOM(comp));
	}
	function E() {
	    var result = {};

	    for (var _len2 = arguments.length, objExtends = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        objExtends[_key2] = arguments[_key2];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = objExtends[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var extend = _step.value;

	            for (var key in extend) {
	                result[key] = extend[key];
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

	    return result;
	    //return StyleSheet.create(result);
	}
	var funcLastScheduledRunTimes = {};
	function BufferAction() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	    }

	    if (args.length == 2) var minInterval = args[0],
	            func = args[1],
	            key = null;else if (args.length == 3) var key = args[0],
	            minInterval = args[1],
	            func = args[2];
	    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
	    var now = new Date().getTime();
	    var timeSinceLast = now - lastScheduledRunTime;
	    if (timeSinceLast >= minInterval) {
	        func();
	        funcLastScheduledRunTimes[key] = now;
	    } else {
	        var waitingForNextRunAlready = lastScheduledRunTime > now;
	        if (!waitingForNextRunAlready) {
	            var nextRunTime = lastScheduledRunTime + minInterval;
	            var timeTillNextRun = nextRunTime - now;
	            //WaitXThenRun(timeTillNextRun, func);
	            setTimeout(func, timeTillNextRun);
	            funcLastScheduledRunTimes[key] = nextRunTime;
	        }
	    }
	}
	(function ($) {
	    $.fn.OnVisible = function (callback, onlyRunOnce, triggerIfAlreadyVisible) {
	        var $this = $(this);
	        var options = {
	            keyframes: "\n@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, ",
	            selector: $this.selector
	        };
	        // if the keyframes aren't present, add them in a style element
	        if (!$("style.domnodeappear-keyframes").length) $("head").append("<style class='domnodeappear-keyframes'>" + options.keyframes + "</style>");
	        // add animation to selected element
	        //$("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")
	        if (triggerIfAlreadyVisible && $this.is(":visible")) {
	            callback();
	            if (onlyRunOnce) return;
	        }
	        $this.css({ animationName: "nodeInserted", "-webkit-animation-name": "nodeInserted", animationDuration: "0.001s", "-webkit-animation-duration": "0.001s" });
	        // on animation start, execute the callback
	        var handler = function handler(e) {
	            var target = $(e.target);
	            //if (e.originalEvent.animationName == "nodeInserted" && target.is(options.selector))
	            //Log(e.target);
	            if (e.originalEvent.animationName == "nodeInserted" && $this.get().Contains(e.target)) {
	                callback.call(target);
	                if (onlyRunOnce) {
	                    $this.css({ animationName: "", "-webkit-animation-name": "", animationDuration: "", "-webkit-animation-duration": "" });
	                    $(document).off("animationstart webkitAnimationStart oanimationstart MSAnimationStart", handler);
	                }
	            }
	        };
	        $(document).on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", handler);
	    };
	    /*$.fn.OnVisible_WithDelay = function(delay, callback, onlyRunOnce, triggerIfAlreadyVisible) {
	        return this.OnVisible(function() { setTimeout(callback, delay); }, onlyRunOnce, triggerIfAlreadyVisible);
	    };*/
	})($);
	var _scrollBarSizes = void 0;
	function GetScrollBarSizes() {
	    if (!_scrollBarSizes) {
	        /*let outer = $("<div style='visibility: hidden; position: absolute; left: -100px; top: -100px; height: 100px; overflow: scroll;'/>").appendTo("body");
	        let heightWithScroll = $("<div>").css({height: "100%"}).appendTo(outer).outerHeight();
	        outer.remove();
	        _hScrollBarHeight = 100 - heightWithScroll;
	        Log("HHeight:" + _hScrollBarHeight);
	        //V._hScrollBarHeight = outer.children().height() - outer.children()[0].clientHeight;*/
	        /*let container = $("<div style='visibility: hidden; position: absolute; top: -1000px; width: 100px; height: 100px; overflow: scroll;'/>").appendTo("body");
	        _scrollBarSizes = {width: 100 - container[0].clientWidth, height: 100 - container[0].clientHeight};
	        container.remove();*/
	        var div = document.createElement("div");
	        Object.assign(div.style, { position: "absolute", visibility: "hidden", overflow: "scroll", width: "100px", height: "100px" });
	        document.body.appendChild(div);
	        //_scrollBarSizes = {width: div.offsetWidth - div.clientWidth, height: div.offsetHeight - div.clientHeight};
	        _scrollBarSizes = { width: 100 - div.clientWidth, height: 100 - div.clientHeight };
	        div.remove();
	    }
	    return _scrollBarSizes;
	}
	function GetHScrollBarHeight() {
	    return GetScrollBarSizes().height;
	}
	function GetVScrollBarWidth() {
	    return GetScrollBarSizes().width;
	}
	function HasScrollBar(control) {
	    return HasVScrollBar(control) || HasHScrollBar(control);
	}
	function HasVScrollBar(control) {
	    return control[0].scrollHeight > control[0].clientHeight;
	}
	function HasHScrollBar(control) {
	    return control[0].scrollWidth > control[0].clientWidth;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ])
});
;
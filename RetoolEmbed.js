"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RetoolEmbed = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RetoolEmbed = exports.RetoolEmbed = /*#__PURE__*/function (_HTMLElement) {
  function RetoolEmbed() {
    var _this$onData;
    var _this;
    _classCallCheck(this, RetoolEmbed);
    _this = _callSuper(this, RetoolEmbed);
    _defineProperty(_this, "iframe", void 0);
    _defineProperty(_this, "elementWatchers", {});
    _defineProperty(_this, "onData", void 0);
    _defineProperty(_this, "customStyle", void 0);
    _defineProperty(_this, "_data", void 0);
    _defineProperty(_this, "createOrReplaceWatcher", function (selector, pageName, queryId) {
      var watcherId = pageName + "-" + queryId;
      var updatedState = _this.elementWatchers;
      updatedState[watcherId] = {
        iframe: _this.iframe,
        selector: selector,
        pageName: pageName,
        queryId: queryId
      };
      _this.elementWatchers = updatedState;
      _this.onDataHandler();
    });
    _defineProperty(_this, "postMessageForSelector", function (messageType, eventData) {
      var maybeData = _this.data ? _this.data[eventData.selector] : null;
      if (maybeData !== null && maybeData !== undefined) {
        var _this$iframe;
        (_this$iframe = _this.iframe) === null || _this$iframe === void 0 || (_this$iframe = _this$iframe.contentWindow) === null || _this$iframe === void 0 || _this$iframe.postMessage({
          type: messageType,
          result: maybeData,
          id: eventData.id,
          pageName: eventData.pageName
        }, "*");
      } else {
        console.log("Not sending data back to Retool, nothing found for selector: ".concat(eventData.selector));
      }
    });
    _this.iframe = document.createElement("iframe");
    _this.onMessage = _this.onMessage.bind(_this);
    _this.onData = (_this$onData = _this.onData) === null || _this$onData === void 0 ? void 0 : _this$onData.bind(_this);
    return _this;
  }
  _inherits(RetoolEmbed, _HTMLElement);
  return _createClass(RetoolEmbed, [{
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      this._data = value;
      this.onDataHandler();
    }
  }, {
    key: "onMessage",
    value: function onMessage(event) {
      var _this$iframe2, _event$data, _event$data2;
      if (!((_this$iframe2 = this.iframe) !== null && _this$iframe2 !== void 0 && _this$iframe2.contentWindow)) return;
      if ((event.origin === new URL(this.iframe.src).origin || event.origin == "null") && ((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.type) !== "PARENT_WINDOW_QUERY" && ((_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.type) !== "intercom-snippet__ready") {
        var _this$onData2;
        (_this$onData2 = this.onData) === null || _this$onData2 === void 0 || _this$onData2.call(this, event.data);
      }
      if (event.data.type === "PARENT_WINDOW_QUERY") {
        this.createOrReplaceWatcher(event.data.selector, event.data.pageName, event.data.id);
        this.postMessageForSelector("PARENT_WINDOW_RESULT", event.data);
      }
    }
  }, {
    key: "onDataHandler",
    value: function onDataHandler() {
      for (var key in this.elementWatchers) {
        var _watcher$iframe;
        var watcher = this.elementWatchers[key];
        (_watcher$iframe = watcher.iframe) === null || _watcher$iframe === void 0 || (_watcher$iframe = _watcher$iframe.contentWindow) === null || _watcher$iframe === void 0 || _watcher$iframe.postMessage({
          type: "PARENT_WINDOW_RESULT",
          result: this.data[watcher.selector],
          id: watcher.queryId,
          pageName: watcher.pageName
        }, "*");
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // defaults for the iframe
      this.iframe.sandbox.add("allow-scripts", "allow-same-origin", "allow-popups", "allow-forms");
      this.iframe.title = "Retool Embed";

      // initial attributes
      var src = this.getAttribute("src");
      this.iframe.setAttribute("src", src !== null && src !== void 0 ? src : "");
      if (this.customStyle) {
        this.iframe.setAttribute("style", this.customStyle);
      }
      this.appendChild(this.iframe);
      window.addEventListener("message", this.onMessage);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener("message", this.onMessage);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZXRvb2xFbWJlZCIsImV4cG9ydHMiLCJfSFRNTEVsZW1lbnQiLCJfdGhpcyRvbkRhdGEiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJzZWxlY3RvciIsInBhZ2VOYW1lIiwicXVlcnlJZCIsIndhdGNoZXJJZCIsInVwZGF0ZWRTdGF0ZSIsImVsZW1lbnRXYXRjaGVycyIsImlmcmFtZSIsIm9uRGF0YUhhbmRsZXIiLCJtZXNzYWdlVHlwZSIsImV2ZW50RGF0YSIsIm1heWJlRGF0YSIsImRhdGEiLCJ1bmRlZmluZWQiLCJfdGhpcyRpZnJhbWUiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiLCJ0eXBlIiwicmVzdWx0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25NZXNzYWdlIiwiYmluZCIsIm9uRGF0YSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl9kYXRhIiwic2V0IiwidmFsdWUiLCJldmVudCIsIl90aGlzJGlmcmFtZTIiLCJfZXZlbnQkZGF0YSIsIl9ldmVudCRkYXRhMiIsIm9yaWdpbiIsIlVSTCIsInNyYyIsIl90aGlzJG9uRGF0YTIiLCJjYWxsIiwiY3JlYXRlT3JSZXBsYWNlV2F0Y2hlciIsInBvc3RNZXNzYWdlRm9yU2VsZWN0b3IiLCJfd2F0Y2hlciRpZnJhbWUiLCJ3YXRjaGVyIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJzYW5kYm94IiwiYWRkIiwidGl0bGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJjdXN0b21TdHlsZSIsImFwcGVuZENoaWxkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXRvb2xFbWJlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFdhdGNoZXJWYWx1ZSA9IHtcbiAgaWZyYW1lPzogSFRNTElGcmFtZUVsZW1lbnQ7XG4gIHNlbGVjdG9yOiBzdHJpbmc7XG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG4gIHF1ZXJ5SWQ6IHN0cmluZztcbn07XG5leHBvcnQgY2xhc3MgUmV0b29sRW1iZWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHByaXZhdGUgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgcHJpdmF0ZSBlbGVtZW50V2F0Y2hlcnM6IFJlY29yZDxzdHJpbmcsIFdhdGNoZXJWYWx1ZT4gPSB7fTtcbiAgcHVibGljIG9uRGF0YT86IChkYXRhOiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBjdXN0b21TdHlsZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIHRoaXMub25NZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0YSA9IHRoaXMub25EYXRhPy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgc2V0IGRhdGEodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICB0aGlzLm9uRGF0YUhhbmRsZXIoKTtcbiAgfVxuXG4gIG9uTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlmcmFtZT8uY29udGVudFdpbmRvdykgcmV0dXJuO1xuXG4gICAgaWYgKFxuICAgICAgKGV2ZW50Lm9yaWdpbiA9PT0gbmV3IFVSTCh0aGlzLmlmcmFtZS5zcmMpLm9yaWdpbiB8fFxuICAgICAgICBldmVudC5vcmlnaW4gPT0gXCJudWxsXCIpICYmXG4gICAgICBldmVudC5kYXRhPy50eXBlICE9PSBcIlBBUkVOVF9XSU5ET1dfUVVFUllcIiAmJlxuICAgICAgZXZlbnQuZGF0YT8udHlwZSAhPT0gXCJpbnRlcmNvbS1zbmlwcGV0X19yZWFkeVwiXG4gICAgKSB7XG4gICAgICB0aGlzLm9uRGF0YT8uKGV2ZW50LmRhdGEpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09IFwiUEFSRU5UX1dJTkRPV19RVUVSWVwiKSB7XG4gICAgICB0aGlzLmNyZWF0ZU9yUmVwbGFjZVdhdGNoZXIoXG4gICAgICAgIGV2ZW50LmRhdGEuc2VsZWN0b3IsXG4gICAgICAgIGV2ZW50LmRhdGEucGFnZU5hbWUsXG4gICAgICAgIGV2ZW50LmRhdGEuaWRcbiAgICAgICk7XG4gICAgICB0aGlzLnBvc3RNZXNzYWdlRm9yU2VsZWN0b3IoXCJQQVJFTlRfV0lORE9XX1JFU1VMVFwiLCBldmVudC5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRGF0YUhhbmRsZXIoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5lbGVtZW50V2F0Y2hlcnMpIHtcbiAgICAgIGNvbnN0IHdhdGNoZXIgPSB0aGlzLmVsZW1lbnRXYXRjaGVyc1trZXldO1xuICAgICAgd2F0Y2hlci5pZnJhbWU/LmNvbnRlbnRXaW5kb3c/LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJQQVJFTlRfV0lORE9XX1JFU1VMVFwiLFxuICAgICAgICAgIHJlc3VsdDogdGhpcy5kYXRhW3dhdGNoZXIuc2VsZWN0b3JdLFxuICAgICAgICAgIGlkOiB3YXRjaGVyLnF1ZXJ5SWQsXG4gICAgICAgICAgcGFnZU5hbWU6IHdhdGNoZXIucGFnZU5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIFwiKlwiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT3JSZXBsYWNlV2F0Y2hlciA9IChcbiAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgIHBhZ2VOYW1lOiBzdHJpbmcsXG4gICAgcXVlcnlJZDogc3RyaW5nXG4gICkgPT4ge1xuICAgIGNvbnN0IHdhdGNoZXJJZCA9IHBhZ2VOYW1lICsgXCItXCIgKyBxdWVyeUlkO1xuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHRoaXMuZWxlbWVudFdhdGNoZXJzO1xuXG4gICAgdXBkYXRlZFN0YXRlW3dhdGNoZXJJZF0gPSB7XG4gICAgICBpZnJhbWU6IHRoaXMuaWZyYW1lLFxuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgcGFnZU5hbWU6IHBhZ2VOYW1lLFxuICAgICAgcXVlcnlJZDogcXVlcnlJZCxcbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50V2F0Y2hlcnMgPSB1cGRhdGVkU3RhdGU7XG4gICAgdGhpcy5vbkRhdGFIYW5kbGVyKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBwb3N0TWVzc2FnZUZvclNlbGVjdG9yID0gKG1lc3NhZ2VUeXBlOiBzdHJpbmcsIGV2ZW50RGF0YTogYW55KSA9PiB7XG4gICAgY29uc3QgbWF5YmVEYXRhID0gdGhpcy5kYXRhID8gdGhpcy5kYXRhW2V2ZW50RGF0YS5zZWxlY3Rvcl0gOiBudWxsO1xuXG4gICAgaWYgKG1heWJlRGF0YSAhPT0gbnVsbCAmJiBtYXliZURhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pZnJhbWU/LmNvbnRlbnRXaW5kb3c/LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICAgICAgcmVzdWx0OiBtYXliZURhdGEsXG4gICAgICAgICAgaWQ6IGV2ZW50RGF0YS5pZCxcbiAgICAgICAgICBwYWdlTmFtZTogZXZlbnREYXRhLnBhZ2VOYW1lLFxuICAgICAgICB9LFxuICAgICAgICBcIipcIlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBOb3Qgc2VuZGluZyBkYXRhIGJhY2sgdG8gUmV0b29sLCBub3RoaW5nIGZvdW5kIGZvciBzZWxlY3RvcjogJHtldmVudERhdGEuc2VsZWN0b3J9YFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gZGVmYXVsdHMgZm9yIHRoZSBpZnJhbWVcbiAgICB0aGlzLmlmcmFtZS5zYW5kYm94LmFkZChcImFsbG93LXNjcmlwdHNcIiwgXCJhbGxvdy1zYW1lLW9yaWdpblwiLCBcImFsbG93LXBvcHVwc1wiLCBcImFsbG93LWZvcm1zXCIpO1xuICAgIHRoaXMuaWZyYW1lLnRpdGxlID0gXCJSZXRvb2wgRW1iZWRcIjtcblxuICAgIC8vIGluaXRpYWwgYXR0cmlidXRlc1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMgPz8gXCJcIik7XG5cbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZSkge1xuICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdGhpcy5jdXN0b21TdHlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMub25NZXNzYWdlKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uTWVzc2FnZSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYUEsV0FBVyxHQUFBQyxPQUFBLENBQUFELFdBQUEsMEJBQUFFLFlBQUE7RUFPdEIsU0FBQUYsWUFBQSxFQUFjO0lBQUEsSUFBQUcsWUFBQTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBTCxXQUFBO0lBQ1pJLEtBQUEsR0FBQUUsVUFB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QUN6QyxDQUFBZ0IsZUFBQSxHQUFBQyxPQUFPLENBQUN4QyxNQUFNLGNBQUF1QyxlQUFBLGdCQUFBQSxlQUFBLEdBQWRBLGVBQUEsQ0FBZ0IvQixhQUFhLGNBQUErQixlQUFBLGVBQTdCQSxlQUFBLENBQStCOUIsV0FBVyxDQUN4QztVQUNFQyxJQUFJLEVBQUUsc0JBQXNCO1VBQzVCQyxNQUFNLEVBQUUsSUFBSSxDQUFDTixJQUFJLENBQUNtQyxPQUFPLENBQUM5QyxRQUFRLENBQUM7VUFDbkNrQixFQUFFLEVBQUU0QixPQUFPLENBQUM1QyxPQUFPO1VBQ25CRCxRQUFRLEVBQUU2QyxPQUFPLENBQUM3QztRQUNwQixDQUFDLEVBQ0QsR0FDRixDQUFDO01BQ0g7SUFDRjtFQUFDO0lBQUE0QixHQUFBO0lBQUFJLEtBQUEsRUF5Q0QsU0FBQWMsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEI7TUFDQSxJQUFJLENBQUN6QyxNQUFNLENBQUMwQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQztNQUM1RixJQUFJLENBQUMzQyxNQUFNLENBQUM0QyxLQUFLLEdBQUcsY0FBYzs7TUFFbEM7TUFDQSxJQUFNVixHQUFHLEdBQUcsSUFBSSxDQUFDVyxZQUFZLENBQUMsS0FBSyxDQUFDO01BQ3BDLElBQUksQ0FBQzdDLE1BQU0sQ0FBQzhDLFlBQVksQ0FBQyxLQUFLLEVBQUVaLEdBQUcsYUFBSEEsR0FBRyxjQUFIQSxHQUFHLEdBQUksRUFBRSxDQUFDO01BRTFDLElBQUksSUFBSSxDQUFDYSxXQUFXLEVBQUU7UUFDcEIsSUFBSSxDQUFDL0MsTUFBTSxDQUFDOEMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQztNQUNyRDtNQUVBLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ2hELE1BQU0sQ0FBQztNQUM3QmlELE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQztJQUNwRDtFQUFDO0lBQUFLLEdBQUE7SUFBQUksS0FBQSxFQUVELFNBQUF3QixvQkFBb0JBLENBQUEsRUFBRztNQUNyQkYsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDbEMsU0FBUyxDQUFDO0lBQ3ZEO0VBQUM7QUFBQSxlQUFBbUMsZ0JBQUEsQ0FySDhCQyxXQUFXIiwiaWdub3JlTGlzdCI6W119
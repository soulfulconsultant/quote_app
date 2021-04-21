(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-quote-module"], {
    /***/
    "3gGh":
    /*!***************************************!*\
      !*** ./src/app/quote/quote.module.ts ***!
      \***************************************/

    /*! exports provided: QuoteModule */

    /***/
    function gGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteModule", function () {
        return QuoteModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components */
      "trG8");
      /* harmony import */


      var _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-routing.module */
      "GaGK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]];

      var QuoteModule = function QuoteModule() {
        _classCallCheck(this, QuoteModule);
      };

      QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: QuoteModule
      });
      QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function QuoteModule_Factory(t) {
          return new (t || QuoteModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "6U+y":
    /*!***************************************************************************!*\
      !*** ./src/app/quote/components/quote-preview/quote-preview.component.ts ***!
      \***************************************************************************/

    /*! exports provided: QuotePreviewComponent */

    /***/
    function UY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function () {
        return QuotePreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function QuotePreviewComponent_blockquote_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA9\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.author);
        }
      }

      var QuotePreviewComponent = function QuotePreviewComponent() {
        _classCallCheck(this, QuotePreviewComponent);
      };

      QuotePreviewComponent.ɵfac = function QuotePreviewComponent_Factory(t) {
        return new (t || QuotePreviewComponent)();
      };

      QuotePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuotePreviewComponent,
        selectors: [["app-quote-preview"]],
        inputs: {
          quote: "quote"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function QuotePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuotePreviewComponent_blockquote_0_Template, 7, 2, "blockquote", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  flex-basis: 50%;\n}\nblockquote[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 100%;\n  background: #8ccddd;\n  color: #ffffff;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 26px;\n  text-align: justify;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after, blockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"icons\";\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  content: \"\u275D\";\n  top: 0;\n  left: 0;\n  transform: translate(-50%, -20%);\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n  transform: translate(50%, 20%);\n}\nblockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1b3RlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNDWTtFREFaLGNDRGE7QURDZjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUVFLGtCQUFBO0VBQ0Esb0JDbEJRO0FEaUJkO0FBSUk7RUFDRSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtBQUZOO0FBS0k7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUhOO0FBT0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFMSiIsImZpbGUiOiJxdW90ZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zY3NzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbn1cblxuYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogJGNvbG9yX19ibHVlO1xuICBjb2xvcjogJGNvbG9yX193aGl0ZTtcblxuICBzdHJvbmcge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udF9faWNvbnM7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjc1ZCc7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwJSk7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFxlODAwJztcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAyMCUpO1xuICAgIH1cbiAgfVxuXG4gIGNpdGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbn1cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdjYjZjNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuJGNvbG9yX19lcnJvcjogI2ZmNzM3MztcbiRjb2xvcl9fZGlzYWJsZWQ6ICM5NGIyYjk7XG4kY29sb3JfX2xpZ2h0X2dyYXk6ICNjN2U2ZWU7XG4vLyNcblxuJGJvcmRlcl9fc2l6ZTogMnB4O1xuJGJvcmRlcl9fcmFkaXVzOiAxMHB4O1xuXG4kc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "GaGK":
    /*!***********************************************!*\
      !*** ./src/app/quote/quote-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: QuoteRoutingModule */

    /***/
    function GaGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteRoutingModule", function () {
        return QuoteRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "trG8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"]
      }];

      var QuoteRoutingModule = function QuoteRoutingModule() {
        _classCallCheck(this, QuoteRoutingModule);
      };

      QuoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: QuoteRoutingModule
      });
      QuoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function QuoteRoutingModule_Factory(t) {
          return new (t || QuoteRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "I6y0":
    /*!*******************************************************************************!*\
      !*** ./src/app/quote/components/quote-container/quote-container.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: QuoteContainerComponent */

    /***/
    function I6y0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function () {
        return QuoteContainerComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quote-share-modal/quote-share-modal.component */
      "OWr9");
      /* harmony import */


      var _view_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../view.models */
      "yHeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services */
      "o0su");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../quote/quote.component */
      "Lw4S");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/loader/loader.component */
      "668k");

      function QuoteContainerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-quote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_ng_container_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r5.getRandomQuote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_ng_container_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.openShareModal(quote_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("quote", quote_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@isClicked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, ctx_r4.isRefreshBtnClicked$) ? "isClicked" : "");
        }
      }

      function QuoteContainerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QuoteContainerComponent_ng_container_0_ng_container_1_Template, 6, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.isLoading$))("ngIfElse", _r1);
        }
      }

      function QuoteContainerComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
        }
      }

      var QuoteContainerComponent = /*#__PURE__*/function () {
        function QuoteContainerComponent(quoteService, modalService) {
          _classCallCheck(this, QuoteContainerComponent);

          this.quoteService = quoteService;
          this.modalService = modalService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isRefreshBtnClicked$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.isRefreshBtnClicked$ = this.isRefreshBtnClicked$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          this.quote$ = this.quoteService.quote$;
          this.isLoading$ = this.quoteService.isLoading$;
        }

        _createClass(QuoteContainerComponent, [{
          key: "handleDoubleClick",
          value: function handleDoubleClick() {
            this.getRandomQuote();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.quoteService.getRandom().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
            this.quote$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.isRefreshBtnClicked$$.next(false);
            })).subscribe();
            this.isRefreshBtnClicked$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this.quoteService.getRandom();
            })).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "getRandomQuote",
          value: function getRandomQuote() {
            this.isRefreshBtnClicked$$.next(true);
          }
        }, {
          key: "openShareModal",
          value: function openShareModal(quote) {
            this.listenToShareModalEvents(this.createAndOpenShareModalWithData(quote));
          }
        }, {
          key: "createAndOpenShareModalWithData",
          value: function createAndOpenShareModalWithData(quote) {
            return this.modalService.create(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare, _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__["QuoteShareModalComponent"], {
              customClass: 'share-modal'
            }).setData({
              quote: quote
            }).open();
          }
        }, {
          key: "listenToShareModalEvents",
          value: function listenToShareModalEvents(modal) {
            var _this2 = this;

            // Listen to modal result
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([modal.onClose, modal.onDataAdded]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  data = _ref2[1];

              if (data) {
                var quote = data.quote,
                    email = data.email,
                    phone = data.phone;
                return _this2.quoteService.share(quote, email ? {
                  email: email
                } : {
                  phone: phone
                });
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(); // Destroy modal after its close/dismiss to not duplicate its instances within modalService

            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(modal.onCloseFinished, modal.onDismissFinished).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this2.modalService.removeModal(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare);
            })).subscribe();
          }
        }]);

        return QuoteContainerComponent;
      }();

      QuoteContainerComponent.ɵfac = function QuoteContainerComponent_Factory(t) {
        return new (t || QuoteContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]));
      };

      QuoteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: QuoteContainerComponent,
        selectors: [["app-quote-container"]],
        hostBindings: function QuoteContainerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function QuoteContainerComponent_dblclick_HostBindingHandler() {
              return ctx.handleDoubleClick();
            });
          }
        },
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "quote"], [1, "quote-actions"], ["title", "Get another Quote", 1, "get-quote-btn", 3, "click"], ["title", "Share", 1, "share-quote-btn", 3, "click"]],
        template: function QuoteContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QuoteContainerComponent_ng_container_0_Template, 3, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QuoteContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.quote$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__["QuoteComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n}\n\n.quote-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  outline: none;\n  right: 80px;\n  top: 120px;\n}\n\n.get-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('refresh.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .get-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n\n.share-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('share.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .share-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1b3RlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NKYTtBREFmOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0F6QlM7RUEwQlQsWUExQlM7RUEyQlQsc0RBQUE7QUFKRjs7QUVMRTtFRkdGO0lBU0ksV0FBQTtJQUNBLFNBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBdkNTO0VBd0NULFlBeENTO0VBeUNULG9EQUFBO0FBSEY7O0FFcEJFO0VGaUJGO0lBU0ksV0FBQTtJQUNBLFNBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InF1b3RlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c2Nzcy92YXJpYWJsZXNcIjtcblxuJGJ0bi1zaXplOiAzNnB4O1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJGNvbG9yX193aGl0ZTtcbn1cblxuLnF1b3RlLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJpZ2h0OiA4MHB4O1xuICB0b3A6IDEyMHB4O1xufVxuXG4uZ2V0LXF1b3RlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6ICRidG4tc2l6ZTtcbiAgaGVpZ2h0OiAkYnRuLXNpemU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N0YXRpYy9yZWZyZXNoLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1kX3Mge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMjBweDtcbiAgfVxufVxuXG4uc2hhcmUtcXVvdGUtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogJGJ0bi1zaXplO1xuICBoZWlnaHQ6ICRidG4tc2l6ZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3RhdGljL3NoYXJlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuXG4gIEBpbmNsdWRlIG1kX3Mge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMjBweDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isClicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(360deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out'))])]
        },
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Lw4S":
    /*!***********************************************************!*\
      !*** ./src/app/quote/components/quote/quote.component.ts ***!
      \***********************************************************/

    /*! exports provided: QuoteComponent */

    /***/
    function Lw4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
        return QuoteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function QuoteComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "blockquote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.quote.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9", ctx_r0.quote.author, "");
        }
      }

      var QuoteComponent = function QuoteComponent() {
        _classCallCheck(this, QuoteComponent);
      };

      QuoteComponent.ɵfac = function QuoteComponent_Factory(t) {
        return new (t || QuoteComponent)();
      };

      QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuoteComponent,
        selectors: [["app-quote"]],
        inputs: {
          quote: "quote"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "quote"], [1, "quote__blockquote"]],
        template: function QuoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n.quote[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.quote__blockquote[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  padding: 190px 190px 190px;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 110px 110px 110px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 80px 15px 80px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n  font-family: \"icons\";\n  position: absolute;\n  font-size: 150px;\n  opacity: 0.5;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 120px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 60px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before {\n  content: \"\u275D\";\n  left: 0;\n  top: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]::after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: justify;\n  line-height: 50px;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 40px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 30px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 35px;\n  line-height: 60px;\n  text-align: right;\n  display: block;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    line-height: 40px;\n    font-size: 30px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1b3RlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBY2hCO0VBQ0UsaUJBWlU7QUFBWjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFaSjtBQ09FO0VERUE7SUFNSSwwQkFBQTtFQVhKO0FBQ0Y7QUNWRTtFRGNBO0lBVUksMEJBQUE7RUFWSjtBQUNGO0FDR0U7RURKQTtJQWNJLDBCQUFBO0VBVEo7QUFDRjtBQ0lFO0VEVkE7SUFrQkksdUJBQUE7RUFSSjtBQUNGO0FBVUk7RUFFRSxvQkVuQ1E7RUZvQ1Isa0JBQUE7RUFDQSxnQkFqQ21CO0VBa0NuQixZQUFBO0FBVE47QUNuQkU7RUR1QkU7SUFRSSxnQkFwQ2U7RUE0QnJCO0FBQ0Y7QUNsQkU7RURpQkU7SUFZSSxnQkF2Q2U7RUFnQ3JCO0FBQ0Y7QUNqQkU7RURXRTtJQWdCSSxlQTFDZTtFQW9DckI7QUFDRjtBQVNJO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBUE47QUFVSTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVJOO0FBYUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVhKO0FDN0RFO0VEcUVBO0lBTUksZUFBQTtJQUNBLGlCQUFBO0VBVko7QUFDRjtBQ2pERTtFRG1EQTtJQVdJLGVBQUE7SUFDQSxpQkFBQTtFQVRKO0FBQ0Y7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWEo7QUNoRkU7RURzRkE7SUFRSSxpQkFBQTtJQUNBLGVBQUE7RUFWSjtBQUNGO0FDcEVFO0VEb0VBO0lBYUksZUFBQTtJQUNBLGlCQUFBO0VBVEo7QUFDRiIsImZpbGUiOiJxdW90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c2Nzcy92YXJpYWJsZXNcIjtcblxuJG1heC13aWR0aDogMTEwMHB4O1xuXG4kcXVvdGVfZ2FwOiAxOTBweDtcbiRxdW90ZV9nYXBfbWQ6IDE1NXB4O1xuJHF1b3RlX2dhcF9tZF9zOiAxMTBweDtcblxuJHF1b3RlX21hcmtfc2l6ZV9ub3JtYWw6IDE1MHB4O1xuJHF1b3RlX21hcmtfc2l6ZV9tZF9sOiAxMjBweDtcbiRxdW90ZV9tYXJrX3NpemVfbWRfczogMTAwcHg7XG4kcXVvdGVfbWFya19zaXplX3NtX2w6IDYwcHg7XG5cbi5xdW90ZSB7XG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcblxuICAmX19ibG9ja3F1b3RlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogJHF1b3RlX2dhcCAkcXVvdGVfZ2FwICRxdW90ZV9nYXA7XG5cbiAgICBAaW5jbHVkZSBtZF9sIHtcbiAgICAgIHBhZGRpbmc6ICRxdW90ZV9nYXBfbWQgJHF1b3RlX2dhcF9tZCAkcXVvdGVfZ2FwX21kO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1kIHtcbiAgICAgIHBhZGRpbmc6ICRxdW90ZV9nYXBfbWQgJHF1b3RlX2dhcF9tZCAkcXVvdGVfZ2FwX21kO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1kX3Mge1xuICAgICAgcGFkZGluZzogJHF1b3RlX2dhcF9tZF9zICRxdW90ZV9nYXBfbWRfcyAkcXVvdGVfZ2FwX21kX3M7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgc21fbCB7XG4gICAgICBwYWRkaW5nOiA4MHB4IDE1cHggODBweDtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250X19pY29ucztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZvbnQtc2l6ZTogJHF1b3RlX21hcmtfc2l6ZV9ub3JtYWw7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIEBpbmNsdWRlIG1kX2wge1xuICAgICAgICBmb250LXNpemU6ICRxdW90ZV9tYXJrX3NpemVfbWRfbDtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgbWRfcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHF1b3RlX21hcmtfc2l6ZV9tZF9zO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBzbV9sIHtcbiAgICAgICAgZm9udC1zaXplOiAkcXVvdGVfbWFya19zaXplX3NtX2w7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDI3NWQnO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFxlODAwJztcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cblxuICB9XG5cbiAgJl9fYmxvY2txdW90ZSBwIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcblxuICAgIEBpbmNsdWRlIG1kIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1kX3Mge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gIH1cblxuICAmX19ibG9ja3F1b3RlIGNpdGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgQGluY2x1ZGUgbWQge1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWRfcyB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "OWr9":
    /*!***********************************************************************************!*\
      !*** ./src/app/quote/components/quote-share-modal/quote-share-modal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: QuoteShareModalComponent */

    /***/
    function OWr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function () {
        return QuoteShareModalComponent;
      });
      /* harmony import */


      var _view_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../view.models */
      "yHeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quote-preview/quote-preview.component */
      "6U+y");
      /* harmony import */


      var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../share-form/share-form.component */
      "VgV8");

      var QuoteShareModalComponent = /*#__PURE__*/function () {
        function QuoteShareModalComponent(modalService) {
          _classCallCheck(this, QuoteShareModalComponent);

          this.modalService = modalService;
        }

        _createClass(QuoteShareModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal = this.modalService.get(_view_models__WEBPACK_IMPORTED_MODULE_0__["ModalIds"].quoteShare);

            var _this$modal$getData = this.modal.getData(),
                quote = _this$modal$getData.quote;

            this.quote = quote;
          }
        }, {
          key: "onShareSubmit",
          value: function onShareSubmit(contactData) {
            this.modal.setData(Object.assign({
              quote: this.quote
            }, contactData), true);
            this.modal.close();
          }
        }, {
          key: "onShareCancel",
          value: function onShareCancel() {
            this.modal.setData(null, true);
            this.modal.close();
          }
        }]);

        return QuoteShareModalComponent;
      }();

      QuoteShareModalComponent.ɵfac = function QuoteShareModalComponent_Factory(t) {
        return new (t || QuoteShareModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"]));
      };

      QuoteShareModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuoteShareModalComponent,
        selectors: [["app-share-modal"]],
        decls: 2,
        vars: 1,
        consts: [[3, "quote"], [3, "shareSubmit", "shareCancel"]],
        template: function QuoteShareModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-quote-preview", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-share-form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("shareSubmit", function QuoteShareModalComponent_Template_app_share_form_shareSubmit_1_listener($event) {
              return ctx.onShareSubmit($event);
            })("shareCancel", function QuoteShareModalComponent_Template_app_share_form_shareCancel_1_listener() {
              return ctx.onShareCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("quote", ctx.quote);
          }
        },
        directives: [_quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"], _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n}\n  .share-modal {\n  max-width: 768px;\n}\n  .share-modal .nsm-content {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1b3RlLXNoYXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkY7QUNDRTtFREFGO0lBSUksc0JBQUE7RUFERjtBQUNGO0FBS0U7RUFDRSxnQkVjYTtBRmhCakI7QUFJSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBRk4iLCJmaWxlIjoicXVvdGUtc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfnNjc3MvbWl4aW5zJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBpbmNsdWRlIG1kIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5zaGFyZS1tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWQ7XG5cbiAgICAubnNtLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN2NiNmM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG4kY29sb3JfX2Vycm9yOiAjZmY3MzczO1xuJGNvbG9yX19kaXNhYmxlZDogIzk0YjJiOTtcbiRjb2xvcl9fbGlnaHRfZ3JheTogI2M3ZTZlZTtcbi8vI1xuXG4kYm9yZGVyX19zaXplOiAycHg7XG4kYm9yZGVyX19yYWRpdXM6IDEwcHg7XG5cbiRzaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "VgV8":
    /*!*********************************************************************!*\
      !*** ./src/app/quote/components/share-form/share-form.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ShareFormComponent */

    /***/
    function VgV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function () {
        return ShareFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/button/button.component */
      "VkHG");
      /* harmony import */


      var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/input/input.component */
      "QlUG");

      function ShareFormComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_ng_container_5_Template_app_button_clicked_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var shareOption_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectShareOption(shareOption_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var shareOption_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isShareOptionActive(shareOption_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", shareOption_r2.title);
        }
      }

      function ShareFormComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "share")("type", ctx_r1.selectedShareOption.inputType)("form", ctx_r1.form)("placeholder", ctx_r1.selectedShareOption.placeholder);
        }
      } // eslint-disable-next-line max-len


      var EMAIL_REG_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var ShareFormComponent = /*#__PURE__*/function () {
        function ShareFormComponent(fb) {
          _classCallCheck(this, ShareFormComponent);

          this.fb = fb;
          this.shareOptions = [{
            type: 'email',
            inputType: 'email',
            title: 'Email',
            placeholder: 'email@example.com',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAIL_REG_EX)]
          }, {
            type: 'phone',
            inputType: 'tel',
            title: 'Phone',
            placeholder: '+380999998877',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]
          }];
          this.selectedShareOption = this.shareOptions[0];
          this.shareSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.shareCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectShareOption(this.selectedShareOption);
        }

        _createClass(ShareFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group(_defineProperty({}, 'share', this.shareFormControl));
          }
        }, {
          key: "selectShareOption",
          value: function selectShareOption(shareOption) {
            this.selectedShareOption = shareOption;

            if (this.shareFormControl) {
              this.form.controls['share'].setValidators(shareOption.validators);
              this.shareFormControl.setValue('');
              return;
            }

            this.shareFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', shareOption.validators);
          }
        }, {
          key: "isShareOptionActive",
          value: function isShareOptionActive(shareOption) {
            return this.selectedShareOption === shareOption;
          }
        }, {
          key: "submit",
          value: function submit() {
            if (!this.isShareFormValid) {
              return;
            }

            this.shareSubmit.emit(_defineProperty({}, this.selectedShareOption.type, this.shareFormControl.value));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.shareCancel.emit();
          }
        }, {
          key: "isShareFormValid",
          get: function get() {
            return this.shareFormControl && this.shareFormControl.valid;
          }
        }]);

        return ShareFormComponent;
      }();

      ShareFormComponent.ɵfac = function ShareFormComponent_Factory(t) {
        return new (t || ShareFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ShareFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShareFormComponent,
        selectors: [["app-share-form"]],
        outputs: {
          shareSubmit: "shareSubmit",
          shareCancel: "shareCancel"
        },
        decls: 11,
        vars: 7,
        consts: [[1, "share-form-wrapper"], [1, "toggler-wrapper"], [1, "toggler-wrapper-options"], [4, "ngFor", "ngForOf"], ["class", "form-control-wrapper", 4, "ngIf"], [1, "button-wrapper"], ["type", "submit", 3, "disabled", "label", "clicked"], [3, "label", "clicked"], [1, "form-control-wrapper"], [3, "formGroup"], [3, "id", "type", "form", "placeholder"]],
        template: function ShareFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Share via:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShareFormComponent_ng_container_5_Template, 2, 3, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShareFormComponent_div_7_Template, 4, 5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_Template_app_button_clicked_9_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function ShareFormComponent_Template_app_button_clicked_10_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shareOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedShareOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isShareFormValid)("label", "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("cancel-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Dismiss");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  padding: 20px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-right: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]     app-button button {\n  border-radius: 0;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]     app-button.active button {\n  background: #64929E;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-end;\n}\n\n.button-wrapper[_ngcontent-%COMP%]     app-button:first-child {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NoYXJlLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47O0FBTVU7RUFDRSxnQkFBQTtBQUpaOztBQU9VO0VBQ0UsbUJDdkJPO0FEa0JuQjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFWRjs7QUFhSTtFQUNFLGtCQUFBO0FBWE4iLCJmaWxlIjoic2hhcmUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Nzcy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zaGFyZS1mb3JtLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuXG4gIC50b2dnbGVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgJi1vcHRpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgYXBwLWJ1dHRvbiB7XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hY3RpdmUgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX19ibHVlX2Rhcms7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gIDo6bmctZGVlcCB7XG4gICAgYXBwLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdjYjZjNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuJGNvbG9yX19lcnJvcjogI2ZmNzM3MztcbiRjb2xvcl9fZGlzYWJsZWQ6ICM5NGIyYjk7XG4kY29sb3JfX2xpZ2h0X2dyYXk6ICNjN2U2ZWU7XG4vLyNcblxuJGJvcmRlcl9fc2l6ZTogMnB4O1xuJGJvcmRlcl9fcmFkaXVzOiAxMHB4O1xuXG4kc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "trG8":
    /*!*******************************************!*\
      !*** ./src/app/quote/components/index.ts ***!
      \*******************************************/

    /*! exports provided: QuoteComponent, QuoteContainerComponent, QuoteShareModalComponent, QuotePreviewComponent, ShareFormComponent */

    /***/
    function trG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote/quote.component */
      "Lw4S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
        return _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__["QuoteComponent"];
      });
      /* harmony import */


      var _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./quote-container/quote-container.component */
      "I6y0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function () {
        return _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"];
      });
      /* harmony import */


      var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quote-share-modal/quote-share-modal.component */
      "OWr9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function () {
        return _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"];
      });
      /* harmony import */


      var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-preview/quote-preview.component */
      "6U+y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function () {
        return _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"];
      });
      /* harmony import */


      var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./share-form/share-form.component */
      "VgV8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function () {
        return _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=quote-quote-module-es5.js.map
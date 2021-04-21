(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-edit-quote-edit-module"], {
    /***/
    "8t4W":
    /*!************************************************!*\
      !*** ./src/app/quote-edit/components/index.ts ***!
      \************************************************/

    /*! exports provided: QuoteEditContainerComponent */

    /***/
    function t4W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_edit_container_quote_edit_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote-edit-container/quote-edit-container.component */
      "Q/Oh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteEditContainerComponent", function () {
        return _quote_edit_container_quote_edit_container_component__WEBPACK_IMPORTED_MODULE_0__["QuoteEditContainerComponent"];
      });
      /***/

    },

    /***/
    "CVSR":
    /*!*************************************************!*\
      !*** ./src/app/quote-edit/quote-edit.module.ts ***!
      \*************************************************/

    /*! exports provided: QuoteEditModule */

    /***/
    function CVSR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteEditModule", function () {
        return QuoteEditModule;
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
      "8t4W");
      /* harmony import */


      var _quote_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-edit-routing.module */
      "pC60");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteEditContainerComponent"]];

      var QuoteEditModule = function QuoteEditModule() {
        _classCallCheck(this, QuoteEditModule);
      };

      QuoteEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: QuoteEditModule
      });
      QuoteEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function QuoteEditModule_Factory(t) {
          return new (t || QuoteEditModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _quote_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteEditRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteEditModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteEditContainerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _quote_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteEditRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "Q/Oh":
    /*!**********************************************************************************************!*\
      !*** ./src/app/quote-edit/components/quote-edit-container/quote-edit-container.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: QuoteEditContainerComponent */

    /***/
    function QOh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteEditContainerComponent", function () {
        return QuoteEditContainerComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_routing_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../app-routing.config */
      "frgL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_quote_edit_form_quote_edit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/quote-edit-form/quote-edit-form.component */
      "QQ6w");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/loader/loader.component */
      "668k");

      function QuoteEditContainerComponent_ng_container_0_app_quote_edit_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-quote-edit-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submitted", function QuoteEditContainerComponent_ng_container_0_app_quote_edit_form_1_Template_app_quote_edit_form_submitted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r5.onSubmitted($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var quote_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initialData", quote_r3);
        }
      }

      function QuoteEditContainerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuoteEditContainerComponent_ng_container_0_app_quote_edit_form_1_Template, 1, 1, "app-quote-edit-form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r0.isLoading$))("ngIfElse", _r1);
        }
      }

      function QuoteEditContainerComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader");
        }
      }

      var QuoteEditContainerComponent = /*#__PURE__*/function () {
        function QuoteEditContainerComponent(activateRouter, quoteService, router) {
          _classCallCheck(this, QuoteEditContainerComponent);

          this.activateRouter = activateRouter;
          this.quoteService = quoteService;
          this.router = router;
          this.quote$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this.quote$ = this.quote$$.asObservable();
          this.isLoading$ = this.quoteService.isLoading$;
          var id = activateRouter.snapshot.params.id;
          this.getQuoteById(id).subscribe();
        }

        _createClass(QuoteEditContainerComponent, [{
          key: "onSubmitted",
          value: function onSubmitted(quote) {
            var _this = this;

            this.quoteService.edit(quote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
              return _this.getQuoteById(quote.id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
          }
        }, {
          key: "getQuoteById",
          value: function getQuoteById(id) {
            var _this2 = this;

            return this.quoteService.getById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (quote) {
              return _this2.quote$$.next(quote);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              _this2.router.navigate([_app_routing_config__WEBPACK_IMPORTED_MODULE_2__["RoutesPaths"].quotes]);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            }));
          }
        }]);

        return QuoteEditContainerComponent;
      }();

      QuoteEditContainerComponent.ɵfac = function QuoteEditContainerComponent_Factory(t) {
        return new (t || QuoteEditContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      QuoteEditContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: QuoteEditContainerComponent,
        selectors: [["app-quote-edit-container"]],
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], [3, "initialData", "submitted", 4, "ngIf", "ngIfElse"], [3, "initialData", "submitted"]],
        template: function QuoteEditContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, QuoteEditContainerComponent_ng_container_0_Template, 3, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, QuoteEditContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.quote$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_quote_edit_form_quote_edit_form_component__WEBPACK_IMPORTED_MODULE_7__["QuoteEditFormComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1b3RlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJxdW90ZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "pC60":
    /*!*********************************************************!*\
      !*** ./src/app/quote-edit/quote-edit-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: QuoteEditRoutingModule */

    /***/
    function pC60(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteEditRoutingModule", function () {
        return QuoteEditRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "8t4W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'edit/:id',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuoteEditContainerComponent"]
      }];

      var QuoteEditRoutingModule = function QuoteEditRoutingModule() {
        _classCallCheck(this, QuoteEditRoutingModule);
      };

      QuoteEditRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: QuoteEditRoutingModule
      });
      QuoteEditRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function QuoteEditRoutingModule_Factory(t) {
          return new (t || QuoteEditRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteEditRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=quote-edit-quote-edit-module-es5.js.map
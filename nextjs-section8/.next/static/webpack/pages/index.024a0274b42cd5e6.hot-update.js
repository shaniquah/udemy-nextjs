"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction HomePage() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const feedbackInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function submitFormHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        const enteredFeedback = feedbackInputRef.current.value;\n        const reqBody = {\n            email: enteredEmail,\n            text: enteredFeedback\n        };\n        fetch(\"/api/feedback\", {\n            method: \"POST\",\n            body: JSON.stringify(reqBody),\n            headers: {\n                \"Content-Type\": \"applicatioon/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>console.log(data));\n    }\n    function loadFeedbackHandler() {\n        fetch(\"/api/feedback\").then((response)=>response.json()).then((data)=>console.log(data));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"The Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Enter Your Email Address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                ref: emailInputRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"feedback\",\n                                children: \"Enter Your Feedback\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"feedback\",\n                                rows: 5,\n                                ref: feedbackInputRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Send Feedback\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onCl: true,\n                children: \"Load Feedback\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"auT82clE8KqX1s0Oj68b66LL32Y=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRWYsU0FBU0M7O0lBQ3RCLE1BQU1DLGdCQUFnQkYsNkNBQU1BO0lBQzVCLE1BQU1HLG1CQUFtQkgsNkNBQU1BO0lBRS9CLFNBQVNJLGtCQUFrQkMsS0FBSztRQUM5QkEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxlQUFlTCxjQUFjTSxPQUFPLENBQUNDLEtBQUs7UUFDaEQsTUFBTUMsa0JBQWtCUCxpQkFBaUJLLE9BQU8sQ0FBQ0MsS0FBSztRQUV0RCxNQUFNRSxVQUFVO1lBQUNDLE9BQU9MO1lBQWNNLE1BQU1IO1FBQWU7UUFFM0RJLE1BQU0saUJBQWlCO1lBRXJCQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7WUFDckJRLFNBQVM7Z0JBQ1AsZ0JBQWlCO1lBQ25CO1FBQ0YsR0FDQ0MsSUFBSSxDQUFDLENBQUNDLFdBQVlBLFNBQVNDLElBQUksSUFDL0JGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM1QjtJQUVBLFNBQVNHO1FBQ1BaLE1BQU0saUJBQ0xNLElBQUksQ0FBQyxDQUFDQyxXQUFZQSxTQUFTQyxJQUFJLElBQy9CRixJQUFJLENBQUNHLENBQUFBLE9BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7a0NBQ0MsOERBQUNGOzswQ0FDQyw4REFBQ0c7Z0NBQU1DLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFRQyxJQUFHO2dDQUFRQyxLQUFLakM7Ozs7Ozs7Ozs7OztrQ0FFdEMsOERBQUN5Qjs7MENBQ0MsOERBQUNHO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDSztnQ0FBU0YsSUFBRztnQ0FBV0csTUFBTTtnQ0FBR0YsS0FBS2hDOzs7Ozs7Ozs7Ozs7a0NBRXhDLDhEQUFDbUM7a0NBQU87Ozs7Ozs7Ozs7OzswQkFFViw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDRDtnQkFBT0UsSUFBSTswQkFBQzs7Ozs7Ozs7Ozs7O0FBR25CO0dBaER3QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBmZWVkYmFja0lucHV0UmVmID0gdXNlUmVmKClcblxuICBmdW5jdGlvbiBzdWJtaXRGb3JtSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZVxuICAgIGNvbnN0IGVudGVyZWRGZWVkYmFjayA9IGZlZWRiYWNrSW5wdXRSZWYuY3VycmVudC52YWx1ZVxuXG4gICAgY29uc3QgcmVxQm9keSA9IHtlbWFpbDogZW50ZXJlZEVtYWlsLCB0ZXh0OiBlbnRlcmVkRmVlZGJhY2t9XG5cbiAgICBmZXRjaChcIi9hcGkvZmVlZGJhY2tcIiwge1xuXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9vbi9qc29uXCJcbiAgICAgIH1cbiAgICB9KSBcbiAgICAudGhlbigocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkRmVlZGJhY2tIYW5kbGVyKCkge1xuICAgIGZldGNoKFwiL2FwaS9mZWVkYmFja1wiKSBcbiAgICAudGhlbigocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRoZSBIb21lIFBhZ2U8L2gxPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVudGVyIFlvdXIgRW1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZWY9e2VtYWlsSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmVlZGJhY2tcIj5FbnRlciBZb3VyIEZlZWRiYWNrPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJmZWVkYmFja1wiIHJvd3M9ezV9IHJlZj17ZmVlZGJhY2tJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24+U2VuZCBGZWVkYmFjazwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGhyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2w+TG9hZCBGZWVkYmFjazwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSG9tZVBhZ2UiLCJlbWFpbElucHV0UmVmIiwiZmVlZGJhY2tJbnB1dFJlZiIsInN1Ym1pdEZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRGZWVkYmFjayIsInJlcUJvZHkiLCJlbWFpbCIsInRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJkaXYiLCJoMSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlZiIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsImhyIiwib25DbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction HomePage() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const feedbackInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function submitFormHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        const enteredFeedback = feedbackInputRef.current.value;\n        const reqBody = {\n            email: enteredEmail,\n            text: enteredFeedback\n        };\n        fetch(\"/api/feedback\", {\n            method: \"POST\",\n            body: JSON.stringify(reqBody),\n            headers: {\n                \"Content-Type\": \"applicatioon/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>console.log(data));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"The Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Enter Your Email Address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                ref: emailInputRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Enter Your Feedback\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"auT82clE8KqX1s0Oj68b66LL32Y=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRWYsU0FBU0M7O0lBQ3RCLE1BQU1DLGdCQUFnQkYsNkNBQU1BO0lBQzVCLE1BQU1HLG1CQUFtQkgsNkNBQU1BO0lBRS9CLFNBQVNJLGtCQUFrQkMsS0FBSztRQUM5QkEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxlQUFlTCxjQUFjTSxPQUFPLENBQUNDLEtBQUs7UUFDaEQsTUFBTUMsa0JBQWtCUCxpQkFBaUJLLE9BQU8sQ0FBQ0MsS0FBSztRQUV0RCxNQUFNRSxVQUFVO1lBQUNDLE9BQU9MO1lBQWNNLE1BQU1IO1FBQWU7UUFFM0RJLE1BQU0saUJBQWlCO1lBRXJCQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7WUFDckJRLFNBQVM7Z0JBQ1AsZ0JBQWlCO1lBQ25CO1FBQ0YsR0FDQ0MsSUFBSSxDQUFDLENBQUNDLFdBQVlBLFNBQVNDLElBQUksSUFDL0JGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM1QjtJQUNBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDQyw4REFBQ0Y7OzBDQUNDLDhEQUFDRztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFDLElBQUc7Z0NBQVFDLEtBQUtoQzs7Ozs7Ozs7Ozs7O2tDQUV0Qyw4REFBQ3dCOzswQ0FDQyw4REFBQ0c7MENBQU07Ozs7OzswQ0FDUCw4REFBQ007Z0NBQVNGLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQXRDd0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKClcbiAgY29uc3QgZmVlZGJhY2tJbnB1dFJlZiA9IHVzZVJlZigpXG5cbiAgZnVuY3Rpb24gc3VibWl0Rm9ybUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWVcbiAgICBjb25zdCBlbnRlcmVkRmVlZGJhY2sgPSBmZWVkYmFja0lucHV0UmVmLmN1cnJlbnQudmFsdWVcblxuICAgIGNvbnN0IHJlcUJvZHkgPSB7ZW1haWw6IGVudGVyZWRFbWFpbCwgdGV4dDogZW50ZXJlZEZlZWRiYWNrfVxuXG4gICAgZmV0Y2goXCIvYXBpL2ZlZWRiYWNrXCIsIHtcblxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvb24vanNvblwiXG4gICAgICB9XG4gICAgfSkgXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5UaGUgSG9tZSBQYWdlPC9oMT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbnRlciBZb3VyIEVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+RW50ZXIgWW91ciBGZWVkYmFjazwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJIb21lUGFnZSIsImVtYWlsSW5wdXRSZWYiLCJmZWVkYmFja0lucHV0UmVmIiwic3VibWl0Rm9ybUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZEZlZWRiYWNrIiwicmVxQm9keSIsImVtYWlsIiwidGV4dCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
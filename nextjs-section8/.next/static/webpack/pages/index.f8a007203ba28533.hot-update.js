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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction HomePage() {\n    _s();\n    const [feedbackItems, setFeedbackItems] = react__WEBPACK_IMPORTED_MODULE_1__.useState;\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const feedbackInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function submitFormHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        const enteredFeedback = feedbackInputRef.current.value;\n        const reqBody = {\n            email: enteredEmail,\n            text: enteredFeedback\n        };\n        fetch(\"/api/feedback\", {\n            method: \"POST\",\n            body: JSON.stringify(reqBody),\n            headers: {\n                \"Content-Type\": \"applicatioon/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>console.log(data));\n    }\n    function loadFeedbackHandler() {\n        fetch(\"/api/feedback\").then((response)=>response.json()).then((data)=>console.log(data));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"The Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitFormHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Enter Your Email Address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                ref: emailInputRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"feedback\",\n                                children: \"Enter Your Feedback\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"feedback\",\n                                rows: 5,\n                                ref: feedbackInputRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Send Feedback\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: loadFeedbackHandler,\n                children: \"Load Feedback\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"auT82clE8KqX1s0Oj68b66LL32Y=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBRXpCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwyQ0FBUUE7SUFDbEQsTUFBTUksZ0JBQWdCTCw2Q0FBTUE7SUFDNUIsTUFBTU0sbUJBQW1CTiw2Q0FBTUE7SUFFL0IsU0FBU08sa0JBQWtCQyxLQUFLO1FBQzlCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLGVBQWVMLGNBQWNNLE9BQU8sQ0FBQ0MsS0FBSztRQUNoRCxNQUFNQyxrQkFBa0JQLGlCQUFpQkssT0FBTyxDQUFDQyxLQUFLO1FBRXRELE1BQU1FLFVBQVU7WUFBQ0MsT0FBT0w7WUFBY00sTUFBTUg7UUFBZTtRQUUzREksTUFBTSxpQkFBaUI7WUFFckJDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUNyQlEsU0FBUztnQkFDUCxnQkFBaUI7WUFDbkI7UUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0MsV0FBWUEsU0FBU0MsSUFBSSxJQUMvQkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQzVCO0lBRUEsU0FBU0c7UUFDUFosTUFBTSxpQkFDTE0sSUFBSSxDQUFDLENBQUNDLFdBQVlBLFNBQVNDLElBQUksSUFDL0JGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM1QjtJQUVBLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVMUI7O2tDQUNkLDhEQUFDdUI7OzBDQUNDLDhEQUFDSTtnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFDLElBQUc7Z0NBQVFDLEtBQUtsQzs7Ozs7Ozs7Ozs7O2tDQUV0Qyw4REFBQ3lCOzswQ0FDQyw4REFBQ0k7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNLO2dDQUFTRixJQUFHO2dDQUFXRyxNQUFNO2dDQUFHRixLQUFLakM7Ozs7Ozs7Ozs7OztrQ0FFeEMsOERBQUNvQztrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQUVWLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNEO2dCQUFPRSxTQUFTZjswQkFBcUI7Ozs7Ozs7Ozs7OztBQUc1QztHQWpEd0IzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2ZlZWRiYWNrSXRlbXMsIHNldEZlZWRiYWNrSXRlbXNdID0gdXNlU3RhdGVcbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGZlZWRiYWNrSW5wdXRSZWYgPSB1c2VSZWYoKVxuXG4gIGZ1bmN0aW9uIHN1Ym1pdEZvcm1IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlXG4gICAgY29uc3QgZW50ZXJlZEZlZWRiYWNrID0gZmVlZGJhY2tJbnB1dFJlZi5jdXJyZW50LnZhbHVlXG5cbiAgICBjb25zdCByZXFCb2R5ID0ge2VtYWlsOiBlbnRlcmVkRW1haWwsIHRleHQ6IGVudGVyZWRGZWVkYmFja31cblxuICAgIGZldGNoKFwiL2FwaS9mZWVkYmFja1wiLCB7XG5cbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb29uL2pzb25cIlxuICAgICAgfVxuICAgIH0pIFxuICAgIC50aGVuKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRGZWVkYmFja0hhbmRsZXIoKSB7XG4gICAgZmV0Y2goXCIvYXBpL2ZlZWRiYWNrXCIpIFxuICAgIC50aGVuKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGhlIEhvbWUgUGFnZTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybUhhbmRsZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbnRlciBZb3VyIEVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZlZWRiYWNrXCI+RW50ZXIgWW91ciBGZWVkYmFjazwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPVwiZmVlZGJhY2tcIiByb3dzPXs1fSByZWY9e2ZlZWRiYWNrSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uPlNlbmQgRmVlZGJhY2s8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxociAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkRmVlZGJhY2tIYW5kbGVyfT5Mb2FkIEZlZWRiYWNrPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwiZmVlZGJhY2tJdGVtcyIsInNldEZlZWRiYWNrSXRlbXMiLCJlbWFpbElucHV0UmVmIiwiZmVlZGJhY2tJbnB1dFJlZiIsInN1Ym1pdEZvcm1IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRGZWVkYmFjayIsInJlcUJvZHkiLCJlbWFpbCIsInRleHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVmIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwiaHIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
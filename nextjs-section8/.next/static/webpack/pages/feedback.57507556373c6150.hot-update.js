"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feedback",{

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ FeedbackPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nvar __N_SSG = true;\nfunction FeedbackPage(props) {\n    _s();\n    const [feedbackData, setFeedbackData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function loadFeedbackHandler(id) {\n        fetch(\"/api/\".concat(id)).then(response = response.json()).then((data)=>{\n            setFeedbackData(data.feedback);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            feedbackData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: feedbackData.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\feedback\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.feedbackItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.text,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: loadFeedbackHandler.bind(null, item.id),\n                                children: \"Show Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\feedback\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\feedback\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\feedback\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\softwaredeveloper50\\\\Desktop\\\\GitHub\\\\JSE\\\\BCL2302_OTSSET869_NextJsFSJ5-Projectudemy-nextjs\\\\nextjs-section8\\\\pages\\\\feedback\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(FeedbackPage, \"BwOV5us4vG60hlJRAywhcZUWCo4=\");\n_c = FeedbackPage;\nvar _c;\n$RefreshReg$(_c, \"FeedbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQzs7QUFHNUIsU0FBU0UsYUFBYUMsS0FBSzs7SUFDeEMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBO0lBRWhELFNBQVNLLG9CQUFvQkMsRUFBRTtRQUM3QkMsTUFBTSxRQUFXLE9BQUhELEtBQ1hFLElBQUksQ0FBRUMsV0FBV0EsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0xQLGdCQUFnQk8sS0FBS0MsUUFBUTtRQUMvQjtJQUNKO0lBRUEscUJBQ0UsOERBQUNiLDJDQUFRQTs7WUFDTkksOEJBQWdCLDhEQUFDVTswQkFBR1YsYUFBYVcsS0FBSzs7Ozs7OzBCQUN2Qyw4REFBQ0M7MEJBQ0ViLE1BQU1jLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUN4Qiw4REFBQ0M7OzRCQUNFRCxLQUFLRSxJQUFJOzBDQUNWLDhEQUFDQztnQ0FBT0MsU0FBU2pCLG9CQUFvQmtCLElBQUksQ0FBQyxNQUFNTCxLQUFLWixFQUFFOzBDQUFHOzs7Ozs7O3VCQUZuRFksS0FBS1osRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVUxQjtHQTFCd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzPzI0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGJ1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2sgfSBmcm9tIFwiLi4vYXBpL2ZlZWRiYWNrLy9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlZWRiYWNrUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtmZWVkYmFja0RhdGEsIHNldEZlZWRiYWNrRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkRmVlZGJhY2tIYW5kbGVyKGlkKSB7XHJcbiAgICBmZXRjaChgL2FwaS8ke2lkfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSA9IHJlc3BvbnNlLmpzb24oKSkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0RmVlZGJhY2tEYXRhKGRhdGEuZmVlZGJhY2spO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHtmZWVkYmFja0RhdGEgJiYgPHA+e2ZlZWRiYWNrRGF0YS5lbWFpbH08L3A+fVxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkRmVlZGJhY2tIYW5kbGVyLmJpbmQobnVsbCwgaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgIFNob3cgRGV0YWlsc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XHJcbiAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmZWVkYmFja0l0ZW1zOiBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwiRmVlZGJhY2tQYWdlIiwicHJvcHMiLCJmZWVkYmFja0RhdGEiLCJzZXRGZWVkYmFja0RhdGEiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVlZGJhY2siLCJwIiwiZW1haWwiLCJ1bCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwibGkiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n"));

/***/ })

});
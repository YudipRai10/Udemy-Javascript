"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktooling"] = self["webpackChunktooling"] || []).push([["src_App_ToolTip_js"],{

/***/ "./src/App/ToolTip.js":
/*!****************************!*\
  !*** ./src/App/ToolTip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tooltip: () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\r\n\r\nconsole.log(\"Tooltip running\");\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper {\r\n  constructor(closeNotifierFunction, text, hostElementId) {\r\n    super(hostElementId);\r\n    this.closeNotifier = closeNotifierFunction;\r\n    this.text = text;\r\n    this.create();\r\n  }\r\n\r\n  closeTooltip = () => {\r\n    this.detach();\r\n    this.closeNotifier();\r\n  };\r\n\r\n  create() {\r\n    const tooltipElement = document.createElement(\"div\");\r\n    tooltipElement.className = \"card\";\r\n    const tooltipTemplate = document.getElementById(\"tooltip\");\r\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n    tooltipBody.querySelector(\"p\").textContent = this.text;\r\n    tooltipElement.append(tooltipBody);\r\n\r\n    const hostElPosLeft = this.hostElement.offsetLeft;\r\n    const hostElPosTop = this.hostElement.offsetTop;\r\n    const hostElHeight = this.hostElement.clientHeight;\r\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n    const x = hostElPosLeft + 20;\r\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\r\n\r\n    tooltipElement.style.position = \"absolute\";\r\n    tooltipElement.style.left = x + \"px\"; // 500px\r\n    tooltipElement.style.top = y + \"px\";\r\n\r\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\r\n    this.element = tooltipElement;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tooling/./src/App/ToolTip.js?");

/***/ })

}]);
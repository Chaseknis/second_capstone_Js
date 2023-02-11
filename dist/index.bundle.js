/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Montserrat', sans-serif;\\n}\\n\\nbody {\\n  background-image: linear-gradient(-25deg, rgb(95, 9, 49) 0%, rgb(95, 9, 49) 100%);\\n}\\n\\nheader {\\n  width: 100%;\\n  padding: 0 20px;\\n  background-color: rgb(32, 26, 33);\\n  position: fixed;\\n  top: 0;\\n}\\n\\nnav a {\\n  text-decoration: none;\\n}\\n\\n.logo {\\n  font-size: 22px;\\n  color: white;\\n  font-family: 'Rubik Vinyl', cursive;\\n  cursor: pointer;\\n}\\n\\nsmall span {\\n  color: aliceblue;\\n  font-size: 19px;\\n  font-family: 'Rubik Vinyl', cursive;\\n  text-align: center;\\n}\\n\\n.logo span {\\n  font-size: 19px;\\n  color: rgb(95, 9, 49);\\n  font-family: 'Rubik Vinyl', cursive;\\n  cursor: pointer;\\n}\\n\\n.header_container {\\n  display: flex;\\n  flex-direction: column;\\n  padding-top: 70px;\\n  width: 100%;\\n}\\n\\nh1 {\\n  color: aliceblue;\\n  font-size: 39px;\\n  font-family: 'Rubik Vinyl', cursive;\\n  text-align: center;\\n}\\n\\nsmall {\\n  color: aliceblue;\\n  font-size: 19px;\\n  font-family: 'Rubik Vinyl', cursive;\\n  text-align: center;\\n}\\n\\n.movies_container_details span {\\n  color: white;\\n}\\n\\nnav {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 1rem 0;\\n}\\n\\nul {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 8px;\\n}\\n\\nnav ul li {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  list-style: none;\\n  border: 1px solid white;\\n  background-color: transparent;\\n  padding: 3px 10px;\\n}\\n\\nnav ul li a {\\n  font-size: 12px;\\n  color: white;\\n}\\n\\n.movies_container {\\n  width: 100%;\\n  padding: 0 20px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-auto-rows: auto;\\n  grid-gap: 10px;\\n  margin-bottom: 1rem;\\n  margin-top: 1rem;\\n}\\n\\n.movie_wrapper {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n  background-color: #201a21;\\n  padding: 5px;\\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\\n}\\n\\n.poster_wrapper {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n  padding-bottom: 0.5rem;\\n}\\n\\n.poster_wrapper img {\\n  width: 100%;\\n}\\n\\n.details_wrapper {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  padding-top: 1rem;\\n}\\n\\n.paragraph_container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\n.details_wrapper p {\\n  width: 85%;\\n  height: 16px;\\n  font-size: 12px;\\n  font-weight: 600;\\n  color: white;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n\\n.details_wrapper span {\\n  font-size: 10px;\\n  font-weight: 600;\\n  color: brown;\\n  border: 1px solid brown;\\n  padding: 0 1px;\\n}\\n\\n.buttons_wrapper {\\n  width: 100%;\\n}\\n\\nbutton {\\n  width: 100%;\\n  font-size: 10px;\\n  font-weight: 600;\\n  padding: 4px 12px;\\n  background-image: linear-gradient(-25deg, rgb(95, 9, 49) 0%, rgb(95, 9, 49) 100%);\\n  color: white;\\n  border: none;\\n  letter-spacing: 1px;\\n}\\n\\n.popup {\\n  position: fixed;\\n  display: none;\\n  width: 100%;\\n  justify-content: center;\\n  top: 40px;\\n}\\n\\n.semi-popup {\\n  width: 90%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n  padding: 1rem;\\n  background-color: #201a21;\\n}\\n\\n.image-arrow {\\n  height: 20px;\\n  width: 20px;\\n  background-color: #5f0931;\\n  align-self: flex-end;\\n}\\n\\n.pop_up_image_wrapper {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: center;\\n  background-color: #5f0931;\\n  padding: 5px;\\n  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;\\n}\\n\\n.pop_up_image_wrapper .likes_wrap {\\n  width: 100%;\\n  font-size: 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 5px;\\n}\\n\\n.pop_up_image_wrapper .likes_wrap span {\\n  border: none;\\n  color: white;\\n  padding-left: 5px;\\n}\\n\\n.likes_wrap .comment {\\n  width: 100%;\\n  font-size: 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 5px;\\n}\\n\\n.likes_wrap .comment p {\\n  border: none;\\n  color: white;\\n  padding-left: 5px;\\n  font-size: 10px;\\n}\\n\\n.pup_up_contents_wrapper {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n\\n.displaying img {\\n  object-fit: cover;\\n}\\n\\n.movies_container_details {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-top: 10px;\\n}\\n\\n.movies_container_details p {\\n  color: aliceblue;\\n  font-size: 12px;\\n  font-weight: 600;\\n}\\n\\n.likes {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  gap: 5px;\\n}\\n\\n.likes_wrap {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.likes_wrap span {\\n  border: none;\\n  color: white;\\n  padding-left: 5px;\\n}\\n\\n.likes .heart {\\n  width: 20px;\\n  padding-left: 5px;\\n}\\n\\n.comment img {\\n  width: 20px;\\n  padding-left: 5px;\\n}\\n\\n.comments_wrapper {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n  padding-top: 0.5rem;\\n}\\n\\n.comments_wrapper p {\\n  font-size: 20px;\\n  font-weight: 600;\\n  color: aliceblue;\\n}\\n\\n.comments_list {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.comments_list ul {\\n  width: 100%;\\n  max-height: 60px;\\n  display: flex;\\n  flex-direction: column;\\n  overflow-y: auto;\\n  gap: 5px;\\n  list-style: none;\\n}\\n\\n.comments_list ul li p {\\n  width: 100%;\\n  text-align: left;\\n  font-size: 10px;\\n  font-weight: 400;\\n  overflow-wrap: break-word;\\n  display: flex;\\n  background-color: aliceblue;\\n  color: #201a21;\\n  margin: 5px 0;\\n  padding: 5px;\\n  justify-content: space-around;\\n}\\n\\n.comments_wrapper form {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  padding-top: 1rem;\\n}\\n\\n.comments_wrapper form input,\\ntextarea {\\n  padding: 6px 12px;\\n}\\n\\n.comments_wrapper button {\\n  width: 100%;\\n  font-size: 10px;\\n  font-weight: 600;\\n  padding: 6px 12px;\\n  background-image: linear-gradient(-25deg, rgb(95, 9, 49) 0%, rgb(95, 9, 49) 100%);\\n  color: white;\\n  border: none;\\n  letter-spacing: 1px;\\n}\\n\\nfooter {\\n  width: 100%;\\n  background-color: black;\\n}\\n\\n.footer_contents {\\n  width: 100%;\\n  padding: 2rem 20px;\\n}\\n\\n.footer_contents p {\\n  width: 100%;\\n  color: aliceblue;\\n  font-size: 12px;\\n}\\n\\n.pop_up_blur_effect {\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  z-index: -1;\\n  top: 0;\\n  backdrop-filter: blur(5px);\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  header {\\n    padding: 0 10%;\\n  }\\n\\n  nav {\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    justify-content: space-between;\\n  }\\n\\n  .logo {\\n    font-size: 30px;\\n  }\\n\\n  .logo span {\\n    font-size: 30px;\\n  }\\n\\n  ul {\\n    gap: 20px;\\n  }\\n\\n  ul li a {\\n    font-size: 16px;\\n  }\\n\\n  .movie_wrapper {\\n    padding: 10px;\\n  }\\n\\n  .movies_container {\\n    display: flex;\\n    flex-wrap: wrap;\\n    width: 100%;\\n    padding: 0 20px;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  .main_card {\\n    margin: 5px;\\n    background-color: rgb(224, 250, 250);\\n    width: 20%;\\n  }\\n\\n  .details_wrapper {\\n    padding-top: 0;\\n  }\\n\\n  .details_wrapper p {\\n    width: 100%;\\n    font-size: 14px;\\n    padding-right: 5px;\\n  }\\n\\n  img {\\n    width: 100%;\\n  }\\n\\n  .comment {\\n    width: 100%;\\n    background-color: transparent;\\n    color: white;\\n    height: 35px;\\n    border: 0 solid red;\\n    cursor: pointer;\\n  }\\n\\n  .poster_wrapper {\\n    padding-bottom: 0;\\n  }\\n\\n  .likes_wrap {\\n    width: 35px;\\n    display: flex;\\n    align-items: center;\\n    background-color: transparent;\\n    border-radius: 5px;\\n    margin: 10px 0;\\n    padding: 2px 5px;\\n    cursor: pointer;\\n  }\\n\\n  .popup {\\n    top: 80px;\\n  }\\n\\n  .semi-popup {\\n    width: 80%;\\n    height: 90vh;\\n    box-shadow: rgb(155, 43, 110) 3px 3px 6px 0 inset, rgba(122, 31, 31, 0.5) -3px -3px 6px 1px inset;\\n  }\\n\\n  .pop_up_image_wrapper {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    background-color: #5f0931;\\n    padding: 5px;\\n  }\\n\\n  .displaying {\\n    width: 70%;\\n    object-fit: cover;\\n  }\\n\\n  .image-arrow {\\n    height: 40px;\\n    width: 40px;\\n    background-color: #5f0931;\\n    align-self: flex-end;\\n  }\\n\\n  .pup_up_contents_wrapper {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\\n  .displaying img {\\n    object-fit: contain;\\n  }\\n\\n  .movies_container_details {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    margin-top: 10px;\\n  }\\n  .comments_list {\\n    width: 100%;\\n    scroll-behavior: auto;\\n  }\\n\\n  .comments_list ul {\\n    width: 100%;\\n    max-height: 400px;\\n    display: flex;\\n    flex-direction: column;\\n    overflow-y: auto;\\n  }\\n\\n  .line {\\n    width: 80%;\\n    background-color: #5f0931;\\n    border: 1px solid #5f0931;\\n    margin: 2rem 0;\\n    align-self: center;\\n  }\\n  \\n  \\n\\n  .comments_list ul li {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    justify-content: flex-start;\\n\\n  }\\n\\n  button {\\n    font-size: 12px;\\n    padding: 4px 12px;\\n  }\\n\\n  footer {\\n    background-color: black;\\n  }\\n\\n  .footer_contents {\\n    padding: 2rem 150px;\\n  }\\n\\n  .footer_contents p {\\n    color: aliceblue;\\n    font-size: 16px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://second_capstone_js/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://second_capstone_js/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://second_capstone_js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/likesCounter.js */ \"./src/modules/likesCounter.js\");\n/* harmony import */ var _modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movies.js */ \"./src/modules/movies.js\");\n/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_movies_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/moviesCounter.js */ \"./src/modules/moviesCounter.js\");\n/* harmony import */ var _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n(0,_modules_movies_js__WEBPACK_IMPORTED_MODULE_2__.createApp)();\n\nconst container = document.querySelector('.movies_container');\n\nconst populateUI = (data, likes) => {\n  let like = likes.filter((like) => like.item_id === String(data.id));\n  like = like.length ? like[0].likes : 0;\n\n  const mainDiv = document.createElement('div');\n  mainDiv.classList.add('main_card');\n  const div = document.createElement('div');\n  div.classList.add('movie_wrapper');\n  div.innerHTML = `\n    <div class=\"poster_wrapper\">\n        <img src=${data.image.medium} alt=\"\">\n        <div class=\"details_wrapper\">\n          <div class=\"paragraph_container\">\n            <p>${data.name}</p>\n            <span>HD</span>\n          </div>\n          <div class=\"likes\">\n\n            <div id=${data.id} class=\"likes_wrap\">\n                <span class=\"counter\">${like}</span>\n                <img class=\"heart\" src=\"https://img.icons8.com/color/48/ffffff/hearts.png\"/>\n            </div>\n          </div>\n        </div>\n    </div>\n    <div class=\"buttons_wrapper\" id=${data.id}>\n        <button id=${data.id} class=\"comment\">Comments</button>\n    </div>\n    `;\n  mainDiv.appendChild(div);\n  return mainDiv;\n};\n\nconst popup = async (id, likes) => {\n  let results = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  localStorage.setItem('id', id);\n  let like = likes.filter((like) => like.item_id === String(id));\n  like = like.length ? like[0].likes : 0;\n  results = await results.json();\n  document.querySelector('.popup').style.display = 'flex';\n  document.querySelector('.displaying').setAttribute('src', results.image.medium);\n  document.querySelector('.like_counter').innerText = `${like}`;\n  document.querySelector('.image-arrow').addEventListener('click', () => {\n    document.querySelector('.popup').style.display = 'none';\n  });\n  (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__.getComments)();\n  document.querySelector('.movie_name').innerText = results.name;\n};\n\nconst comment = async () => {\n  const comments = document.querySelectorAll('.buttons_wrapper');\n  const likes = await (0,_modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_1__.getAllLikes)();\n  comments.forEach((element) => {\n    element.addEventListener('click', () => {\n      const id = element.getAttribute('id');\n      popup(id, likes);\n    });\n  });\n};\n\nconst insertToDom = async () => {\n  const results = await (0,_modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__.fetchMovies)();\n  const likes = await (0,_modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_1__.getAllLikes)();\n  results.forEach((element) => {\n    container.appendChild(populateUI(element, likes));\n  });\n  comment();\n  (0,_modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_1__.addLikeEvent)();\n  const count = await (0,_modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__.fetchMovies)();\n  document.querySelector('.movies_count').innerText = `${count.length}`;\n};\ninsertToDom();\n\ndocument.querySelector('.comments_form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const name = document.querySelector('.commenter').value;\n  const comment = document.querySelector('.comment_input').value;\n  (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__.postComment)(name, comment);\n});\n\n//# sourceURL=webpack://second_capstone_js/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((module) => {

eval("const fetchComments = async () => {\n  const id = localStorage.getItem('id');\n  const appKey = localStorage.getItem('apiKey');\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments?item_id=${id}`;\n  let rawResponse = await fetch(url);\n  rawResponse = await rawResponse.json();\n  return rawResponse;\n};\n\nconst getComments = async () => {\n  const commentsList = document.querySelector('.comments_list');\n  const ul = document.createElement('ul');\n  const rawResponse = await fetchComments();\n  document.querySelector('.comment_counter').innerText = rawResponse.length ? rawResponse.length : 0;\n  rawResponse.forEach((res) => {\n    const li = document.createElement('li');\n    li.innerHTML = `\n    <p><span>Date:</span>${res.creation_date}</p>\n    <p><span>User Name:</span> ${res.username}</p>\n    <p><span>Comment:</span>${res.comment}</p>\n    <hr class=\"line\">\n    `;\n    ul.appendChild(li);\n  });\n  commentsList.innerHTML = '';\n  commentsList.append(ul);\n  return rawResponse;\n};\n\nconst postComment = async (name, comment) => {\n  const appKey = localStorage.getItem('apiKey');\n  const id = localStorage.getItem('id');\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments/`;\n  const rawResponse = await fetch(url, {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(\n      {\n        item_id: id,\n        username: name,\n        comment,\n      },\n    ),\n  });\n  getComments();\n  return rawResponse;\n};\n\nmodule.exports = { postComment, getComments, fetchComments };\n\n//# sourceURL=webpack://second_capstone_js/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((module) => {

eval("const getAllLikes = async () => {\n  try {\n    const appKey = localStorage.getItem('apiKey');\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/likes/`;\n    const likes = await fetch(url);\n    return await likes.json();\n  } catch (error) {\n    return [];\n  }\n};\n\nconst addLike = async (id) => {\n  const appKey = localStorage.getItem('apiKey');\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/likes/`;\n  const rawResponse = await fetch(url, {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  });\n  return rawResponse;\n};\n\nconst addLikeEvent = () => {\n  const likebtn = document.querySelectorAll('.likes_wrap');\n  likebtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const id = btn.getAttribute('id');\n      addLike(id);\n      const num = btn.querySelector('.counter');\n      const newNum = parseInt(num.innerText, 10) + 1;\n      btn.querySelector('.counter').innerText = newNum;\n    });\n  });\n};\n\nmodule.exports = { addLikeEvent, getAllLikes };\n\n//# sourceURL=webpack://second_capstone_js/./src/modules/likesCounter.js?");

/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((module) => {

eval("const createApp = async () => {\n  const key = localStorage.getItem('apiKey');\n  if (key === null || key === undefined || key === '') {\n    const rawResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {\n      method: 'POST',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      // body: JSON.stringify({a: 1, b: 'Textual content'})\n    });\n    const data = await rawResponse.text();\n    localStorage.setItem('apiKey', data);\n  }\n};\n\nmodule.exports = { createApp };\n\n//# sourceURL=webpack://second_capstone_js/./src/modules/movies.js?");

/***/ }),

/***/ "./src/modules/moviesCounter.js":
/*!**************************************!*\
  !*** ./src/modules/moviesCounter.js ***!
  \**************************************/
/***/ ((module) => {

eval("const fetchMovies = async () => {\n  try {\n    let results = await fetch('https://api.tvmaze.com/shows');\n    results = await results.json();\n    return results;\n  } catch (error) {\n    return [];\n  }\n};\nmodule.exports = { fetchMovies };\n\n//# sourceURL=webpack://second_capstone_js/./src/modules/moviesCounter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
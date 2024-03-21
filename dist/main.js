/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  outline: black solid 1px;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: row;
}

nav {
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

content {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.to-do-list-container {
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: auto;
  align-items: center;
}

.todo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
  height: 5vh;
}

.todo > * {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo > .todo-title {
  width: 100%;
}

.todo > input[type="checkbox"] {
  width: 5%;
}

.complete {
  text-decoration: line-through;
}

.new-todo-button {
  width: 5vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 50vw;
}

.error-container {
  width: 70vw;
  height: 5vh;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;AACb","sourcesContent":["* {\n  outline: black solid 1px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n}\n\nnav {\n  width: 30vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.container {\n  width: 30vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\ncontent {\n  width: 70vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.to-do-list-container {\n  display: flex;\n  flex-direction: column;\n  width: 70vw;\n  height: auto;\n  align-items: center;\n}\n\n.todo {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 50vw;\n  height: 5vh;\n}\n\n.todo > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.todo > .todo-title {\n  width: 100%;\n}\n\n.todo > input[type=\"checkbox\"] {\n  width: 5%;\n}\n\n.complete {\n  text-decoration: line-through;\n}\n\n.new-todo-button {\n  width: 5vw;\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n}\n\n.error-container {\n  width: 70vw;\n  height: 5vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Data: () => (/* binding */ Data),
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


class Data {
  constructor() {
    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__.Storage();
    this.data = this.storage.get();
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].id = i;
    }
    this.labels = this.getAllLabels();
  }

  getAllLabels() {
    const labelsSet = new Set();
    this.data.forEach((todo) => {
      labelsSet.add(todo.label);
    });
    const labels = Array.from(labelsSet);
    return labels;
  }

  filterByLabel(label) {
    const result = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].label === label) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  addItem(item) {
    this.data.push(item);
    this.storage.set(this.data);
  }

  editItem(index, item) {
    this.data[index] = item;
    this.storage.set(this.data);
  }

  deleteItem(index) {
    this.data.splice(index, 1);
    this.storage.set(this.data);
  }
}

class Todo {
  constructor(title, description, priority, label, date, complete) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.label = label;
    this.date = date;
    this.complete = false;
  }
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Storage: () => (/* binding */ Storage)
/* harmony export */ });
const data = [
  {
    title: "Finish project",
    description: "",
    dueDate: "01-04-2024",
    priority: "High",
    label: "None",
    complete: true
  },

  {
    title: "Wash dishes",
    description: "Including pans",
    dueDate: "14-03-2024",
    priority: "Medium",
    label: "None",
    complete: true
  },

  {
    title: "Change brakes",
    description: "A lot of time has passed since last change",
    dueDate: "23-04-2024",
    priority: "Medium",
    label: "Car",
    complete: true
  },

  {
    title: "Check oil",
    description: "",
    dueDate: "25-03-2024",
    priority: "Low",
    label: "Car",
    complete: false
  },
];

class Storage {
  constructor() {
    // localStorage.setItem("data", JSON.stringify(data));
  }

  get() {
    if (!JSON.parse(localStorage.getItem("data") === null)) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  }

  set(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ui: () => (/* binding */ Ui)
/* harmony export */ });
class Ui {
  constructor() {}

  createContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
  }

  createSidebarButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("sidebar-button");
    return button;
  }

  createTodo() {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const title = document.createElement("div");
    title.classList.add("todo-title");
    todo.appendChild(title);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todo.appendChild(checkbox);
    return todo;
  }

  createNewTodoButton() {
    const button = document.createElement("div");
    button.classList.add("new-todo-button");
    button.innerText = "+";
    return button;
  }

  // not refactored:

  createNewTodoForm() {
    // container
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    // form
    const form = document.createElement("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    formContainer.appendChild(form);

    // title
    const title = document.createElement("input");
    title.type = "text";
    title.dataset.name = "title";
    title.placeholder = "Title";
    form.appendChild(title);

    // description
    const description = document.createElement("textarea");
    description.dataset.name = "description";
    description.placeholder = "Description";
    form.appendChild(description);

    // priority
    const priority = document.createElement("select");
    priority.dataset.name = "priority";
    const options = ["Low", "Medium", "High"];
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      priority.add(option);
    }
    form.appendChild(priority);

    // label
    const formLabelsContainer = document.createElement("div");
    formLabelsContainer.classList.add("form-labels-container");
    form.appendChild(formLabelsContainer);

    // new label button
    // close form button

    // due date?

    const submit = document.createElement("button");
    submit.type = "button";
    submit.id = "form-submit-button";
    submit.innerText = "Ok";
    form.appendChild(submit);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.id = "form-delete-button";
    deleteButton.innerText = "Delete";
    form.appendChild(deleteButton);

    return formContainer;
  }

  removeAllChildElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




const data = new _data__WEBPACK_IMPORTED_MODULE_1__.Data();
const ui = new _ui__WEBPACK_IMPORTED_MODULE_2__.Ui();

const nav = document.querySelector("nav");
const content = document.querySelector("content");

function showSidebar() {
  const labels = data.labels;
  const container = ui.createContainer();
  for (const label of labels) {
    const div = ui.createSidebarButton();
    div.innerText = label;
    container.appendChild(div);

    div.addEventListener("click", () => {
      ui.removeAllChildElements(content);
      showList(label);
    });
  }
  nav.appendChild(container);

  const newLabel = ui.createSidebarButton();
  newLabel.innerText = "+";
  container.appendChild(newLabel);

  newLabel.addEventListener("click", () => {
    const newLabelName = document.createElement("input");
    newLabelName.type = "text";

    newLabelName.addEventListener("blur", function (event) {
      if (newLabelName.value != "") {
        data.labels.push(newLabelName.value);
      } else {
      }
      ui.removeAllChildElements(nav);
      showSidebar();
    });
    container.appendChild(newLabelName);
  });
}
showSidebar();

function showList(label) {
  const todos = data.filterByLabel(label);
  const container = ui.createContainer();
  container.classList.add("to-do-list-container");
  for (const todo of todos) {
    const div = ui.createTodo();
    div.querySelector(".todo-title").innerText = todo.title;
    container.appendChild(div);

    div.querySelector(".todo-title").addEventListener("click", () => {
      showEditTodo(todo.id);
    });

    const checkbox = div.querySelector("input[type=checkbox]");
    // load stored states
    if (todo.complete) {
      div.classList.add("complete");
      checkbox.checked = true;
    } else if (!todo.complete) {
      div.classList.remove("complete");
      checkbox.checked = false;
    }

    // change state
    checkbox.addEventListener("click", () => {
      const itemIndex = data.data.findIndex((i) => i.id === todo.id);
      if (checkbox.checked) {
        data.data[itemIndex].complete = true;
        data.storage.set(data.data);
        div.classList.add("complete");
      } else {
        data.data[itemIndex].complete = false;
        data.storage.set(data.data);
        div.classList.remove("complete");
      }
    });
  }
  const newTodoButton = ui.createNewTodoButton();
  container.appendChild(newTodoButton);

  newTodoButton.addEventListener("click", () => {
    showCreateTodoForm(label);
    container.removeChild(newTodoButton);
  });
  content.appendChild(container);
}
// first init
showList("None");

function showCreateTodoForm(label) {
  const todoListContainer = document.querySelector(".to-do-list-container");
  const form = ui.createNewTodoForm();
  todoListContainer.appendChild(form);
  const errorContainer = ui.createContainer();
  form.appendChild(errorContainer);

  const submitButton = form.querySelector("#form-submit-button");
  submitButton.addEventListener("click", () => {
    const title = form.querySelector(`[data-name="title"]`).value;
    const description = form.querySelector(`[data-name="description"]`).value;
    const priority = form.querySelector(`[data-name="priority"]`).value;

    if (title === "") {
      errorContainer.innerText = "Please add a title";
      return;
    }

    data.addItem(
      new _data__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, priority, label, "placeholder", false)
    );

    // refresh screen
    ui.removeAllChildElements(nav);
    showSidebar();
    ui.removeAllChildElements(content);
    showList(label);
  });

  const cancelButton = form.querySelector("#form-delete-button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => {
    ui.removeAllChildElements(content);
    showList(label);
  });
}

function showEditTodo(id) {
  const todoListContainer = document.querySelector(".to-do-list-container");
  const form = ui.createNewTodoForm();
  const formLabelsContainer = form.querySelector(".form-labels-container");
  const labels = data.labels;

  ui.removeAllChildElements(todoListContainer);
  todoListContainer.appendChild(form);

  // const errorContainer = ui.createContainer();
  // errorContainer.classList.add("error-container")
  // form.appendChild(errorContainer);

  labels.forEach((element) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "form-label";
    radioButton.id = element;
    radioButton.value = element;
    formLabelsContainer.appendChild(radioButton);

    const labelElem = document.createElement("label");
    labelElem.htmlFor = element;
    labelElem.textContent = element;

    formLabelsContainer.appendChild(labelElem);
  });

  // find item in data array by id
  const itemIndex = data.data.findIndex((i) => i.id === id);

  // load current values
  form.querySelector(`[data-name="title"]`).value = data.data[itemIndex].title;
  form.querySelector(`[data-name="description"]`).value =
    data.data[itemIndex].description;
  form.querySelector(`[data-name="priority"]`).value =
    data.data[itemIndex].priority;
  const currentLabel = data.data[itemIndex].label;
  if (currentLabel) {
    form.querySelector(`input[value="${currentLabel}"]`).checked = true;
  }

  // submit new values
  const submitButton = form.querySelector("#form-submit-button");
  submitButton.addEventListener("click", () => {
    const title = form.querySelector(`[data-name="title"]`).value;
    const description = form.querySelector(`[data-name="description"]`).value;
    const priority = form.querySelector(`[data-name="priority"]`).value;
    const label = form.querySelector(`input[name="form-label"]:checked`).value;

    if (title === "") {
      errorContainer.innerText = "Please add a title";
      return;
    }

    data.editItem(itemIndex, new _data__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, priority, label));

    // refresh screen
    ui.removeAllChildElements(nav);
    showSidebar();
    ui.removeAllChildElements(content);
    showList(data.data[itemIndex].label);
  });

  const deleteButton = form.querySelector("#form-delete-button");
  deleteButton.addEventListener("click", () => {
    const lab = data.data[itemIndex].label;
    data.deleteItem(itemIndex);
    ui.removeAllChildElements(nav);
    showSidebar();
    ui.removeAllChildElements(content);
    showList(lab);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsNEJBQTRCLDZCQUE2QixjQUFjLGVBQWUsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsR0FBRyxTQUFTLGdCQUFnQixrQkFBa0Isa0JBQWtCLDJCQUEyQixHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLGtCQUFrQiwyQkFBMkIsR0FBRyxhQUFhLGdCQUFnQixrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRywyQkFBMkIsa0JBQWtCLDJCQUEyQixnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLFdBQVcsa0JBQWtCLHdCQUF3QixtQ0FBbUMsZ0JBQWdCLGdCQUFnQixHQUFHLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcsc0NBQXNDLGNBQWMsR0FBRyxlQUFlLGtDQUFrQyxHQUFHLHNCQUFzQixlQUFlLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxzQkFBc0IsZ0JBQWdCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUN0NUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1RjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYm9DOztBQUVwQztBQUNBO0FBQ0EsdUJBQXVCLDZDQUFPO0FBQzlCO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUMxRHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7OztBQ3hEbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVjOzs7Ozs7O1VDMUdkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlO0FBQ1Y7O0FBRTFCLGlCQUFpQix1Q0FBSTtBQUNyQixlQUFlLG1DQUFFOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsdUNBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsdUNBQUk7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG91dGxpbmU6IGJsYWNrIHNvbGlkIDFweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxubmF2IHtcbiAgd2lkdGg6IDMwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMzB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuY29udGVudCB7XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG8tZG8tbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNXZoO1xufVxuXG4udG9kbyA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8gPiAudG9kby10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kbyA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLmNvbXBsZXRlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5uZXctdG9kby1idXR0b24ge1xuICB3aWR0aDogNXZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTB2dztcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDV2aDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG91dGxpbmU6IGJsYWNrIHNvbGlkIDFweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuY29udGVudCB7XFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50by1kby1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4udG9kbyA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAudG9kby10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8gPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHdpZHRoOiA1JTtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9uIHtcXG4gIHdpZHRoOiA1dnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNTB2dztcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY2xhc3MgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yYWdlLmdldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRhdGFbaV0uaWQgPSBpO1xuICAgIH1cbiAgICB0aGlzLmxhYmVscyA9IHRoaXMuZ2V0QWxsTGFiZWxzKCk7XG4gIH1cblxuICBnZXRBbGxMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBsYWJlbHNTZXQuYWRkKHRvZG8ubGFiZWwpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVscyA9IEFycmF5LmZyb20obGFiZWxzU2V0KTtcbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZmlsdGVyQnlMYWJlbChsYWJlbCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2ldLmxhYmVsID09PSBsYWJlbCkge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLmRhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgZWRpdEl0ZW0oaW5kZXgsIGl0ZW0pIHtcbiAgICB0aGlzLmRhdGFbaW5kZXhdID0gaXRlbTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBkZWxldGVJdGVtKGluZGV4KSB7XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLmRhdGEpO1xuICB9XG59XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBsYWJlbCwgZGF0ZSwgY29tcGxldGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IHsgRGF0YSwgVG9kbyB9O1xuIiwiY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkZpbmlzaCBwcm9qZWN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgZHVlRGF0ZTogXCIwMS0wNC0yMDI0XCIsXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIGxhYmVsOiBcIk5vbmVcIixcbiAgICBjb21wbGV0ZTogdHJ1ZVxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJXYXNoIGRpc2hlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluY2x1ZGluZyBwYW5zXCIsXG4gICAgZHVlRGF0ZTogXCIxNC0wMy0yMDI0XCIsXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgbGFiZWw6IFwiTm9uZVwiLFxuICAgIGNvbXBsZXRlOiB0cnVlXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkNoYW5nZSBicmFrZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxvdCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgbGFzdCBjaGFuZ2VcIixcbiAgICBkdWVEYXRlOiBcIjIzLTA0LTIwMjRcIixcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICBsYWJlbDogXCJDYXJcIixcbiAgICBjb21wbGV0ZTogdHJ1ZVxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJDaGVjayBvaWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBkdWVEYXRlOiBcIjI1LTAzLTIwMjRcIixcbiAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICBsYWJlbDogXCJDYXJcIixcbiAgICBjb21wbGV0ZTogZmFsc2VcbiAgfSxcbl07XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIGlmICghSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIikgPT09IG51bGwpKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgc2V0KGRhdGEpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59XG5cbmV4cG9ydCB7IFN0b3JhZ2UgfTtcbiIsImNsYXNzIFVpIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNyZWF0ZUNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBjcmVhdGVTaWRlYmFyQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1idXR0b25cIik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8oKSB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICByZXR1cm4gdG9kbztcbiAgfVxuXG4gIGNyZWF0ZU5ld1RvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIC8vIG5vdCByZWZhY3RvcmVkOlxuXG4gIGNyZWF0ZU5ld1RvZG9Gb3JtKCkge1xuICAgIC8vIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgLy8gZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvLyB0aXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZS5kYXRhc2V0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uLmRhdGFzZXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIHByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5LmRhdGFzZXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBjb25zdCBvcHRpb25zID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25zW2ldO1xuICAgICAgb3B0aW9uLnRleHQgPSBvcHRpb25zW2ldO1xuICAgICAgcHJpb3JpdHkuYWRkKG9wdGlvbik7XG4gICAgfVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBmb3JtTGFiZWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtTGFiZWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVscy1jb250YWluZXJcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtTGFiZWxzQ29udGFpbmVyKTtcblxuICAgIC8vIG5ldyBsYWJlbCBidXR0b25cbiAgICAvLyBjbG9zZSBmb3JtIGJ1dHRvblxuXG4gICAgLy8gZHVlIGRhdGU/XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC50eXBlID0gXCJidXR0b25cIjtcbiAgICBzdWJtaXQuaWQgPSBcImZvcm0tc3VibWl0LWJ1dHRvblwiO1xuICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcIk9rXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZGVsZXRlQnV0dG9uLmlkID0gXCJmb3JtLWRlbGV0ZS1idXR0b25cIjtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgfVxuXG4gIHJlbW92ZUFsbENoaWxkRWxlbWVudHMoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgVWkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBEYXRhLCBUb2RvIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgVWkgfSBmcm9tIFwiLi91aVwiO1xuXG5jb25zdCBkYXRhID0gbmV3IERhdGEoKTtcbmNvbnN0IHVpID0gbmV3IFVpKCk7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIHNob3dTaWRlYmFyKCkge1xuICBjb25zdCBsYWJlbHMgPSBkYXRhLmxhYmVscztcbiAgY29uc3QgY29udGFpbmVyID0gdWkuY3JlYXRlQ29udGFpbmVyKCk7XG4gIGZvciAoY29uc3QgbGFiZWwgb2YgbGFiZWxzKSB7XG4gICAgY29uc3QgZGl2ID0gdWkuY3JlYXRlU2lkZWJhckJ1dHRvbigpO1xuICAgIGRpdi5pbm5lclRleHQgPSBsYWJlbDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdWkucmVtb3ZlQWxsQ2hpbGRFbGVtZW50cyhjb250ZW50KTtcbiAgICAgIHNob3dMaXN0KGxhYmVsKTtcbiAgICB9KTtcbiAgfVxuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBuZXdMYWJlbCA9IHVpLmNyZWF0ZVNpZGViYXJCdXR0b24oKTtcbiAgbmV3TGFiZWwuaW5uZXJUZXh0ID0gXCIrXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgbmV3TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdMYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3TGFiZWxOYW1lLnR5cGUgPSBcInRleHRcIjtcblxuICAgIG5ld0xhYmVsTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChuZXdMYWJlbE5hbWUudmFsdWUgIT0gXCJcIikge1xuICAgICAgICBkYXRhLmxhYmVscy5wdXNoKG5ld0xhYmVsTmFtZS52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgfVxuICAgICAgdWkucmVtb3ZlQWxsQ2hpbGRFbGVtZW50cyhuYXYpO1xuICAgICAgc2hvd1NpZGViYXIoKTtcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TGFiZWxOYW1lKTtcbiAgfSk7XG59XG5zaG93U2lkZWJhcigpO1xuXG5mdW5jdGlvbiBzaG93TGlzdChsYWJlbCkge1xuICBjb25zdCB0b2RvcyA9IGRhdGEuZmlsdGVyQnlMYWJlbChsYWJlbCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVpLmNyZWF0ZUNvbnRhaW5lcigpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvLWRvLWxpc3QtY29udGFpbmVyXCIpO1xuICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICBjb25zdCBkaXYgPSB1aS5jcmVhdGVUb2RvKCk7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2hvd0VkaXRUb2RvKHRvZG8uaWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkaXYucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xuICAgIC8vIGxvYWQgc3RvcmVkIHN0YXRlc1xuICAgIGlmICh0b2RvLmNvbXBsZXRlKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdG9kby5jb21wbGV0ZSkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZVwiKTtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2Ugc3RhdGVcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gZGF0YS5kYXRhLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gdG9kby5pZCk7XG4gICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICBkYXRhLmRhdGFbaXRlbUluZGV4XS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGRhdGEuc3RvcmFnZS5zZXQoZGF0YS5kYXRhKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuZGF0YVtpdGVtSW5kZXhdLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIGRhdGEuc3RvcmFnZS5zZXQoZGF0YS5kYXRhKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBuZXdUb2RvQnV0dG9uID0gdWkuY3JlYXRlTmV3VG9kb0J1dHRvbigpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dDcmVhdGVUb2RvRm9ybShsYWJlbCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld1RvZG9CdXR0b24pO1xuICB9KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuLy8gZmlyc3QgaW5pdFxuc2hvd0xpc3QoXCJOb25lXCIpO1xuXG5mdW5jdGlvbiBzaG93Q3JlYXRlVG9kb0Zvcm0obGFiZWwpIHtcbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWxpc3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBmb3JtID0gdWkuY3JlYXRlTmV3VG9kb0Zvcm0oKTtcbiAgdG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gdWkuY3JlYXRlQ29udGFpbmVyKCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Ym1pdC1idXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwidGl0bGVcIl1gKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cImRlc2NyaXB0aW9uXCJdYCkudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCJwcmlvcml0eVwiXWApLnZhbHVlO1xuXG4gICAgaWYgKHRpdGxlID09PSBcIlwiKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5pbm5lclRleHQgPSBcIlBsZWFzZSBhZGQgYSB0aXRsZVwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEuYWRkSXRlbShcbiAgICAgIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGxhYmVsLCBcInBsYWNlaG9sZGVyXCIsIGZhbHNlKVxuICAgICk7XG5cbiAgICAvLyByZWZyZXNoIHNjcmVlblxuICAgIHVpLnJlbW92ZUFsbENoaWxkRWxlbWVudHMobmF2KTtcbiAgICBzaG93U2lkZWJhcigpO1xuICAgIHVpLnJlbW92ZUFsbENoaWxkRWxlbWVudHMoY29udGVudCk7XG4gICAgc2hvd0xpc3QobGFiZWwpO1xuICB9KTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1kZWxldGUtYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdWkucmVtb3ZlQWxsQ2hpbGRFbGVtZW50cyhjb250ZW50KTtcbiAgICBzaG93TGlzdChsYWJlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RWRpdFRvZG8oaWQpIHtcbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWxpc3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBmb3JtID0gdWkuY3JlYXRlTmV3VG9kb0Zvcm0oKTtcbiAgY29uc3QgZm9ybUxhYmVsc0NvbnRhaW5lciA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtLWxhYmVscy1jb250YWluZXJcIik7XG4gIGNvbnN0IGxhYmVscyA9IGRhdGEubGFiZWxzO1xuXG4gIHVpLnJlbW92ZUFsbENoaWxkRWxlbWVudHModG9kb0xpc3RDb250YWluZXIpO1xuICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAvLyBjb25zdCBlcnJvckNvbnRhaW5lciA9IHVpLmNyZWF0ZUNvbnRhaW5lcigpO1xuICAvLyBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY29udGFpbmVyXCIpXG4gIC8vIGZvcm0uYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGxhYmVscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmFkaW9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcmFkaW9CdXR0b24udHlwZSA9IFwicmFkaW9cIjtcbiAgICByYWRpb0J1dHRvbi5uYW1lID0gXCJmb3JtLWxhYmVsXCI7XG4gICAgcmFkaW9CdXR0b24uaWQgPSBlbGVtZW50O1xuICAgIHJhZGlvQnV0dG9uLnZhbHVlID0gZWxlbWVudDtcbiAgICBmb3JtTGFiZWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQnV0dG9uKTtcblxuICAgIGNvbnN0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEVsZW0uaHRtbEZvciA9IGVsZW1lbnQ7XG4gICAgbGFiZWxFbGVtLnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuICAgIGZvcm1MYWJlbHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxFbGVtKTtcbiAgfSk7XG5cbiAgLy8gZmluZCBpdGVtIGluIGRhdGEgYXJyYXkgYnkgaWRcbiAgY29uc3QgaXRlbUluZGV4ID0gZGF0YS5kYXRhLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gaWQpO1xuXG4gIC8vIGxvYWQgY3VycmVudCB2YWx1ZXNcbiAgZm9ybS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwidGl0bGVcIl1gKS52YWx1ZSA9IGRhdGEuZGF0YVtpdGVtSW5kZXhdLnRpdGxlO1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCJkZXNjcmlwdGlvblwiXWApLnZhbHVlID1cbiAgICBkYXRhLmRhdGFbaXRlbUluZGV4XS5kZXNjcmlwdGlvbjtcbiAgZm9ybS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwicHJpb3JpdHlcIl1gKS52YWx1ZSA9XG4gICAgZGF0YS5kYXRhW2l0ZW1JbmRleF0ucHJpb3JpdHk7XG4gIGNvbnN0IGN1cnJlbnRMYWJlbCA9IGRhdGEuZGF0YVtpdGVtSW5kZXhdLmxhYmVsO1xuICBpZiAoY3VycmVudExhYmVsKSB7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7Y3VycmVudExhYmVsfVwiXWApLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgLy8gc3VibWl0IG5ldyB2YWx1ZXNcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VibWl0LWJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCJ0aXRsZVwiXWApLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiZGVzY3JpcHRpb25cIl1gKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cInByaW9yaXR5XCJdYCkudmFsdWU7XG4gICAgY29uc3QgbGFiZWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJmb3JtLWxhYmVsXCJdOmNoZWNrZWRgKS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSA9PT0gXCJcIikge1xuICAgICAgZXJyb3JDb250YWluZXIuaW5uZXJUZXh0ID0gXCJQbGVhc2UgYWRkIGEgdGl0bGVcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLmVkaXRJdGVtKGl0ZW1JbmRleCwgbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgbGFiZWwpKTtcblxuICAgIC8vIHJlZnJlc2ggc2NyZWVuXG4gICAgdWkucmVtb3ZlQWxsQ2hpbGRFbGVtZW50cyhuYXYpO1xuICAgIHNob3dTaWRlYmFyKCk7XG4gICAgdWkucmVtb3ZlQWxsQ2hpbGRFbGVtZW50cyhjb250ZW50KTtcbiAgICBzaG93TGlzdChkYXRhLmRhdGFbaXRlbUluZGV4XS5sYWJlbCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLWRlbGV0ZS1idXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGxhYiA9IGRhdGEuZGF0YVtpdGVtSW5kZXhdLmxhYmVsO1xuICAgIGRhdGEuZGVsZXRlSXRlbShpdGVtSW5kZXgpO1xuICAgIHVpLnJlbW92ZUFsbENoaWxkRWxlbWVudHMobmF2KTtcbiAgICBzaG93U2lkZWJhcigpO1xuICAgIHVpLnJlbW92ZUFsbENoaWxkRWxlbWVudHMoY29udGVudCk7XG4gICAgc2hvd0xpc3QobGFiKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
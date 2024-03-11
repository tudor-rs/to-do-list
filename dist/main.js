/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
class App {
  constructor() {
    this.storage = new Storage();
  }

  createTodo() {
    const test = new Todo(
      "Clean room",
      "Need to buy cleaner",
      "Medium",
      "Home",
      "15-03-2024"
    );

    this.storage.addItem(test);
    this.storage.saveChanges();
  }
}

class Todo {
  // all these really necessary?
  constructor(title, description, priority, category, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.category = category;
    this.dueDate = dueDate;
    this.complete = false;
  }
}

class Storage {
  constructor() {
    JSON.parse(localStorage.getItem("data")) === null
      ? (this.data = [])
      : (this.data = this.getData());
  }

  getData() {
    // what if no data is present?
    return JSON.parse(localStorage.getItem("data"));
  }

  addItem(todo) {
    this.data.push(todo);
  }

  deleteItem(index) {
    this.data.splice(index, 1);
  }

  saveChanges() {
    localStorage.setItem("data", JSON.stringify(this.data));
  }
}



// add edit function


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


const data = [

    {
        "title": "title-1-1",
        "description": "description-1-1",
        "dueDate": "date-1-1",
        "priority": "priority-1-1"
    },

    {
        "title": "title-1-2",
        "description": "description-1-2",
        "dueDate": "date-1-2",
        "priority": "priority-1-2"
    },

    {
        "title": "title-2-1",
        "description": "description-2-1",
        "dueDate": "date-2-1",
        "priority": "priority-2-1"
    },

    {
        "title": "title-2-2",
        "description": "description-2-2",
        "dueDate": "date-2-2",
        "priority": "priority-2-2"
    }
];

localStorage.setItem('data', JSON.stringify(data));

const app = new _logic__WEBPACK_IMPORTED_MODULE_0__.App(); 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTs7QUFFZjs7Ozs7OztVQzFEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsdUNBQUcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gIH1cblxuICBjcmVhdGVUb2RvKCkge1xuICAgIGNvbnN0IHRlc3QgPSBuZXcgVG9kbyhcbiAgICAgIFwiQ2xlYW4gcm9vbVwiLFxuICAgICAgXCJOZWVkIHRvIGJ1eSBjbGVhbmVyXCIsXG4gICAgICBcIk1lZGl1bVwiLFxuICAgICAgXCJIb21lXCIsXG4gICAgICBcIjE1LTAzLTIwMjRcIlxuICAgICk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYWRkSXRlbSh0ZXN0KTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2F2ZUNoYW5nZXMoKTtcbiAgfVxufVxuXG5jbGFzcyBUb2RvIHtcbiAgLy8gYWxsIHRoZXNlIHJlYWxseSBuZWNlc3Nhcnk/XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNhdGVnb3J5LCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSkgPT09IG51bGxcbiAgICAgID8gKHRoaXMuZGF0YSA9IFtdKVxuICAgICAgOiAodGhpcy5kYXRhID0gdGhpcy5nZXREYXRhKCkpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICAvLyB3aGF0IGlmIG5vIGRhdGEgaXMgcHJlc2VudD9cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIikpO1xuICB9XG5cbiAgYWRkSXRlbSh0b2RvKSB7XG4gICAgdGhpcy5kYXRhLnB1c2godG9kbyk7XG4gIH1cblxuICBkZWxldGVJdGVtKGluZGV4KSB7XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBzYXZlQ2hhbmdlcygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQXBwIH07XG5cbi8vIGFkZCBlZGl0IGZ1bmN0aW9uXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG5cbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJ0aXRsZS0xLTFcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImRlc2NyaXB0aW9uLTEtMVwiLFxuICAgICAgICBcImR1ZURhdGVcIjogXCJkYXRlLTEtMVwiLFxuICAgICAgICBcInByaW9yaXR5XCI6IFwicHJpb3JpdHktMS0xXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwidGl0bGUtMS0yXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbi0xLTJcIixcbiAgICAgICAgXCJkdWVEYXRlXCI6IFwiZGF0ZS0xLTJcIixcbiAgICAgICAgXCJwcmlvcml0eVwiOiBcInByaW9yaXR5LTEtMlwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcInRpdGxlLTItMVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb24tMi0xXCIsXG4gICAgICAgIFwiZHVlRGF0ZVwiOiBcImRhdGUtMi0xXCIsXG4gICAgICAgIFwicHJpb3JpdHlcIjogXCJwcmlvcml0eS0yLTFcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJ0aXRsZS0yLTJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImRlc2NyaXB0aW9uLTItMlwiLFxuICAgICAgICBcImR1ZURhdGVcIjogXCJkYXRlLTItMlwiLFxuICAgICAgICBcInByaW9yaXR5XCI6IFwicHJpb3JpdHktMi0yXCJcbiAgICB9XG5dO1xuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
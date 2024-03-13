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
/* harmony export */   Data: () => (/* binding */ Data),
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title) {
    this.title = title;
    this.description;
    this.priority;
    this.category;
    this.dueDate;
    this.complete = false;
  }
}

class Data {
  constructor() {
    this.storage = new Storage();
    this.data = storage.getData();
  }

  addItem(item) {
    this.data.push(item);
  }

  editItem(index) {
    
  }

  deleteItem(index) {
    this.data.splice(index, 1);
  }
}

class Storage {
  getData() {
    if (!JSON.parse(localStorage.getItem("data") === null)) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  }

  saveChanges() {
    localStorage.setItem("data", JSON.stringify(this.data));
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
    title: "title-1-1",
    description: "description-1-1",
    dueDate: "date-1-1",
    priority: "priority-1-1",
  },

  {
    title: "title-1-2",
    description: "description-1-2",
    dueDate: "date-1-2",
    priority: "priority-1-2",
  },

  {
    title: "title-2-1",
    description: "description-2-1",
    dueDate: "date-2-1",
    priority: "priority-2-1",
  },

  {
    title: "title-2-2",
    description: "description-2-2",
    dueDate: "date-2-2",
    priority: "priority-2-2",
  },
];

class App {
  constructor() {
    this.data = new _logic__WEBPACK_IMPORTED_MODULE_0__.Data();
    this.content = document.querySelector("content");
    this.nav = document.querySelector("nav");
    this.showMainScreen();
  }

  showMainScreen() {
    // nav
    const newTodo = document.createElement("button");
    newTodo.type = "button";
    newTodo.innerText = "New";
    this.nav.appendChild(newTodo);

    newTodo.addEventListener("click", () => {
      this.createTodo();
    });

    // ui init
    const container = document.createElement("div");
    container.classList.add("container");
    this.content.appendChild(container);

    for (const item of this.storage.data) {
      const todo = document.createElement("div");
      todo.classList.add("todo");
      todo.innerText = item.title;
      container.appendChild(todo);

      todo.addEventListener(
        "click",
        function () {
          this.storage.deleteItem(item);
          this.storage.saveChanges();
          container.removeChild(todo);
        }.bind(this)
      );
    }
  }

  createTodo() {
    const form = document.createElement("form");
    this.content.appendChild(form);

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Insert to-do title";
    form.appendChild(title);

    //rest
  }
}

localStorage.setItem("data", JSON.stringify(data));

const app = new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7OztVQzVDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgICB0aGlzLmNhdGVnb3J5O1xuICAgIHRoaXMuZHVlRGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cbn1cblxuY2xhc3MgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgdGhpcy5kYXRhID0gc3RvcmFnZS5nZXREYXRhKCk7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLmRhdGEucHVzaChpdGVtKTtcbiAgfVxuXG4gIGVkaXRJdGVtKGluZGV4KSB7XG4gICAgXG4gIH1cblxuICBkZWxldGVJdGVtKGluZGV4KSB7XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuY2xhc3MgU3RvcmFnZSB7XG4gIGdldERhdGEoKSB7XG4gICAgaWYgKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSA9PT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBzYXZlQ2hhbmdlcygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kbywgRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEYXRhLCBUb2RvIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcInRpdGxlLTEtMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uLTEtMVwiLFxuICAgIGR1ZURhdGU6IFwiZGF0ZS0xLTFcIixcbiAgICBwcmlvcml0eTogXCJwcmlvcml0eS0xLTFcIixcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwidGl0bGUtMS0yXCIsXG4gICAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb24tMS0yXCIsXG4gICAgZHVlRGF0ZTogXCJkYXRlLTEtMlwiLFxuICAgIHByaW9yaXR5OiBcInByaW9yaXR5LTEtMlwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJ0aXRsZS0yLTFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvbi0yLTFcIixcbiAgICBkdWVEYXRlOiBcImRhdGUtMi0xXCIsXG4gICAgcHJpb3JpdHk6IFwicHJpb3JpdHktMi0xXCIsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcInRpdGxlLTItMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uLTItMlwiLFxuICAgIGR1ZURhdGU6IFwiZGF0ZS0yLTJcIixcbiAgICBwcmlvcml0eTogXCJwcmlvcml0eS0yLTJcIixcbiAgfSxcbl07XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRhKCk7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNvbnRlbnRcIik7XG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgIHRoaXMuc2hvd01haW5TY3JlZW4oKTtcbiAgfVxuXG4gIHNob3dNYWluU2NyZWVuKCkge1xuICAgIC8vIG5hdlxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld1RvZG8udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgbmV3VG9kby5pbm5lclRleHQgPSBcIk5ld1wiO1xuICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVUb2RvKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1aSBpbml0XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnN0b3JhZ2UuZGF0YSkge1xuICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgdG9kby5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuXG4gICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGVJdGVtKGl0ZW0pO1xuICAgICAgICAgIHRoaXMuc3RvcmFnZS5zYXZlQ2hhbmdlcygpO1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiSW5zZXJ0IHRvLWRvIHRpdGxlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL3Jlc3RcbiAgfVxufVxuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
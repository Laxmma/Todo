/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.ts\");\n\r\nvar listObj = new _list__WEBPACK_IMPORTED_MODULE_0__[\"TodoList\"]();\r\nlistObj.getTodos();\r\n$(document).ready(function () {\r\n    console.log(\"Jquery is working now\");\r\n    $('.checkbox-input').on('click', function (e) {\r\n        $(this).parent('label').toggleClass('done');\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4vbGlzdCc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xyXG5cclxubGV0IGxpc3RPYmo6IFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XHJcbmxpc3RPYmouZ2V0VG9kb3MoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkpxdWVyeSBpcyB3b3JraW5nIG5vd1wiKTtcclxuXHJcbiAgICAkKCcuY2hlY2tib3gtaW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS50b2dnbGVDbGFzcygnZG9uZScpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/list.ts":
/*!*********************!*\
  !*** ./src/list.ts ***!
  \*********************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/service.ts\");\n\r\nvar TodoList = /** @class */ (function () {\r\n    function TodoList() {\r\n        this.todoListElem = document.getElementById('todo-list');\r\n        this.todoService = new _service__WEBPACK_IMPORTED_MODULE_0__[\"TodoService\"]();\r\n    }\r\n    Object.defineProperty(TodoList.prototype, \"todos\", {\r\n        get: function () {\r\n            return this._todos;\r\n        },\r\n        set: function (todoList) {\r\n            this._todos = todoList;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    TodoList.prototype.getTodos = function () {\r\n        this.todos = this.todoService.getTodos();\r\n        this.updateList();\r\n    };\r\n    TodoList.prototype.updateList = function () {\r\n        console.log(this.todos);\r\n        var html = '';\r\n        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {\r\n            var todo = _a[_i];\r\n            html += \"<li>\\n                <div class=\\\"checkbox\\\">\\n                    <label class='\" + (todo.done ? 'done' : '') + \"'>\\n                        <input type=\\\"checkbox\\\" class=\\\"checkbox-input\\\" todo-id=\" + todo.id + \" \" + (todo.done ? 'checked' : '') + \"> \" + todo.description + \"\\n                    </label>\\n                </div>    \\n            </li>\";\r\n        }\r\n        this.todoListElem.innerHTML = html;\r\n    };\r\n    return TodoList;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saXN0LnRzP2Y3OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbyc7XHJcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgICBwcml2YXRlIF90b2RvczogVG9kb1tdO1xyXG4gICAgcHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRvZG9MaXN0RWxlbTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG9kb1NlcnZpY2UgPSBuZXcgVG9kb1NlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b2Rvcyh0b2RvTGlzdDogVG9kb1tdKSB7XHJcbiAgICAgICAgdGhpcy5fdG9kb3MgPSB0b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2RvU2VydmljZS5nZXRUb2RvcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpc3QoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2Rvcyk7XHJcbiAgICAgICAgbGV0IGh0bWw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IobGV0IHRvZG8gb2YgdGhpcy50b2Rvcykge1xyXG4gICAgICAgICAgICBodG1sICs9IGA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9JyR7dG9kby5kb25lPydkb25lJzonJ30nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveC1pbnB1dFwiIHRvZG8taWQ9JHt0b2RvLmlkfSAke3RvZG8uZG9uZT8nY2hlY2tlZCc6Jyd9PiAke3RvZG8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgPC9saT5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2RvTGlzdEVsZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/list.ts\n");

/***/ }),

/***/ "./src/service.ts":
/*!************************!*\
  !*** ./src/service.ts ***!
  \************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoService\", function() { return TodoService; });\nvar TodoService = /** @class */ (function () {\r\n    function TodoService() {\r\n        this.todos = [\r\n            { id: 1, description: \"Pay Powerbill\", done: false },\r\n            { id: 2, description: \"Check credit card bill\", done: false },\r\n            { id: 3, description: \"Call dad\", done: false },\r\n            { id: 4, description: \"Call bank callcenter\", done: true },\r\n            { id: 5, description: \"Go to super market\", done: true }\r\n        ];\r\n    }\r\n    TodoService.prototype.getTodos = function () {\r\n        return this.todos;\r\n    };\r\n    return TodoService;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlLnRzP2JhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSB7XHJcbiAgdG9kb3M6IFRvZG9bXTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudG9kb3MgPSBbXHJcbiAgICAgIHsgaWQ6IDEsIGRlc2NyaXB0aW9uOiBcIlBheSBQb3dlcmJpbGxcIiwgZG9uZTogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMiwgZGVzY3JpcHRpb246IFwiQ2hlY2sgY3JlZGl0IGNhcmQgYmlsbFwiLCBkb25lOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCBkZXNjcmlwdGlvbjogXCJDYWxsIGRhZFwiLCBkb25lOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiA0LCBkZXNjcmlwdGlvbjogXCJDYWxsIGJhbmsgY2FsbGNlbnRlclwiLCBkb25lOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDUsIGRlc2NyaXB0aW9uOiBcIkdvIHRvIHN1cGVyIG1hcmtldFwiLCBkb25lOiB0cnVlIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service.ts\n");

/***/ })

/******/ });
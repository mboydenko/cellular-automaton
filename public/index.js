/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
const automation_1 = __webpack_require__(/*! ./models/automation */ "./src/models/automation.ts");
const automation_view_1 = __webpack_require__(/*! ./views/automation.view */ "./src/views/automation.view.ts");
const sleep = (ms) => {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms);
    });
};
exports.sleep = sleep;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 800;
    if (!canvas)
        throw new Error("Unable load canvas");
    const context = canvas.getContext('2d');
    if (!context)
        throw new Error("Unable load context");
    const automation = new automation_1.Automation(250, 250);
    automation.randomFill(5000);
    const automationView = new automation_view_1.AutomationView(automation);
    while (true) {
        context.fill();
        automationView.print(context, canvas.width, canvas.height);
        yield (0, exports.sleep)(100);
        automation.nextTick();
    }
}))();


/***/ }),

/***/ "./src/models/automation.ts":
/*!**********************************!*\
  !*** ./src/models/automation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Automation = void 0;
const functions_1 = __webpack_require__(/*! ../tools/functions */ "./src/tools/functions.ts");
class Automation {
    constructor(rows, colums) {
        this.rows = rows;
        this.colums = colums;
        this._cells = Array.from(Array(rows).keys()).map(e => {
            return Array.from(Array(colums).keys()).map(e => false);
        });
    }
    addCell(rowIndex, colIndex) {
        this._cells[rowIndex][colIndex] = true;
    }
    removeCell(rowIndex, colIndex) {
        this._cells[rowIndex][colIndex] = false;
    }
    randomFill(countCells) {
        for (let i = 0; i < countCells; i++) {
            let rowIndex = (0, functions_1.randomIntBetween)(0, this.rows - 1);
            let colIndex = (0, functions_1.randomIntBetween)(0, this.colums - 1);
            this._cells[rowIndex][colIndex] = true;
        }
    }
    nextTick() {
        this._cells = this._cells.map((row, rowIndex) => {
            return row.map((el, colIndex) => {
                let neightborsAmount = this.amountCellNeightbors(rowIndex, colIndex);
                if (neightborsAmount > 3 || neightborsAmount < 2) {
                    return false;
                }
                if (neightborsAmount == 3) {
                    return true;
                }
                return el;
            });
        });
    }
    amountCellNeightbors(rowIndex, colIndex) {
        let counter = 0;
        if (this._cells[rowIndex + 1] && this._cells[rowIndex + 1][colIndex]) {
            counter++;
        }
        if (this._cells[rowIndex - 1] && this._cells[rowIndex - 1][colIndex]) {
            counter++;
        }
        if (this._cells[rowIndex] && this._cells[rowIndex][colIndex + 1]) {
            counter++;
        }
        if (this._cells[rowIndex] && this._cells[rowIndex][colIndex - 1]) {
            counter++;
        }
        if (this._cells[rowIndex - 1] && this._cells[rowIndex - 1][colIndex + 1]) {
            counter++;
        }
        if (this._cells[rowIndex - 1] && this._cells[rowIndex - 1][colIndex - 1]) {
            counter++;
        }
        if (this._cells[rowIndex + 1] && this._cells[rowIndex + 1][colIndex - 1]) {
            counter++;
        }
        if (this._cells[rowIndex + 1] && this._cells[rowIndex + 1][colIndex + 1]) {
            counter++;
        }
        return counter;
    }
    get cells() {
        return [...this._cells];
    }
}
exports.Automation = Automation;


/***/ }),

/***/ "./src/tools/functions.ts":
/*!********************************!*\
  !*** ./src/tools/functions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomIntBetween = exports.randomBetween = void 0;
const randomBetween = (min, max) => {
    return Math.random() * (max - min + 1) + min;
};
exports.randomBetween = randomBetween;
const randomIntBetween = (min, max) => {
    return Math.floor((0, exports.randomBetween)(min, max));
};
exports.randomIntBetween = randomIntBetween;


/***/ }),

/***/ "./src/views/automation.view.ts":
/*!**************************************!*\
  !*** ./src/views/automation.view.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutomationView = void 0;
class AutomationView {
    constructor(automation) {
        this.automation = automation;
    }
    print(context, contextWidth, contextHeight) {
        let aliveColor = "blue";
        let deadColor = "white";
        for (let i = 0; i < this.automation.cells.length; i++) {
            for (let j = 0; j < this.automation.cells[0].length; j++) {
                context.fillStyle = this.automation.cells[i][j] ? aliveColor : deadColor;
                context.fillRect(i * Math.floor(contextWidth / this.automation.rows), j * Math.floor(contextHeight / this.automation.colums), Math.floor(contextWidth / this.automation.rows), Math.floor(contextHeight / this.automation.colums));
            }
        }
    }
}
exports.AutomationView = AutomationView;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhO0FBQ2IscUJBQXFCLG1CQUFPLENBQUMsdURBQXFCO0FBQ2xELDBCQUEwQixtQkFBTyxDQUFDLCtEQUF5QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUN0Q1k7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCLG9CQUFvQixtQkFBTyxDQUFDLG9EQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUN2RUw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCLEdBQUcscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7O0FDVlg7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRCw0QkFBNEIscUNBQXFDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7OztVQ2xCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NlbGx1bGFyLWF1dG9tYXRvbi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jZWxsdWxhci1hdXRvbWF0b24vLi9zcmMvbW9kZWxzL2F1dG9tYXRpb24udHMiLCJ3ZWJwYWNrOi8vY2VsbHVsYXItYXV0b21hdG9uLy4vc3JjL3Rvb2xzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly9jZWxsdWxhci1hdXRvbWF0b24vLi9zcmMvdmlld3MvYXV0b21hdGlvbi52aWV3LnRzIiwid2VicGFjazovL2NlbGx1bGFyLWF1dG9tYXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZWxsdWxhci1hdXRvbWF0b24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZWxsdWxhci1hdXRvbWF0b24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NlbGx1bGFyLWF1dG9tYXRvbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNsZWVwID0gdm9pZCAwO1xyXG5jb25zdCBhdXRvbWF0aW9uXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvYXV0b21hdGlvblwiKTtcclxuY29uc3QgYXV0b21hdGlvbl92aWV3XzEgPSByZXF1aXJlKFwiLi92aWV3cy9hdXRvbWF0aW9uLnZpZXdcIik7XHJcbmNvbnN0IHNsZWVwID0gKG1zKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0cy5zbGVlcCA9IHNsZWVwO1xyXG4oKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSA4MDA7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gODAwO1xyXG4gICAgaWYgKCFjYW52YXMpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIGxvYWQgY2FudmFzXCIpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKCFjb250ZXh0KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSBsb2FkIGNvbnRleHRcIik7XHJcbiAgICBjb25zdCBhdXRvbWF0aW9uID0gbmV3IGF1dG9tYXRpb25fMS5BdXRvbWF0aW9uKDI1MCwgMjUwKTtcclxuICAgIGF1dG9tYXRpb24ucmFuZG9tRmlsbCg1MDAwKTtcclxuICAgIGNvbnN0IGF1dG9tYXRpb25WaWV3ID0gbmV3IGF1dG9tYXRpb25fdmlld18xLkF1dG9tYXRpb25WaWV3KGF1dG9tYXRpb24pO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgICAgICBhdXRvbWF0aW9uVmlldy5wcmludChjb250ZXh0LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHlpZWxkICgwLCBleHBvcnRzLnNsZWVwKSgxMDApO1xyXG4gICAgICAgIGF1dG9tYXRpb24ubmV4dFRpY2soKTtcclxuICAgIH1cclxufSkpKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXV0b21hdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgZnVuY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vdG9vbHMvZnVuY3Rpb25zXCIpO1xyXG5jbGFzcyBBdXRvbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtcykge1xyXG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XHJcbiAgICAgICAgdGhpcy5jb2x1bXMgPSBjb2x1bXM7XHJcbiAgICAgICAgdGhpcy5fY2VsbHMgPSBBcnJheS5mcm9tKEFycmF5KHJvd3MpLmtleXMoKSkubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShjb2x1bXMpLmtleXMoKSkubWFwKGUgPT4gZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2VsbChyb3dJbmRleCwgY29sSW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9jZWxsc1tyb3dJbmRleF1bY29sSW5kZXhdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlbW92ZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fY2VsbHNbcm93SW5kZXhdW2NvbEluZGV4XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmFuZG9tRmlsbChjb3VudENlbGxzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudENlbGxzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvd0luZGV4ID0gKDAsIGZ1bmN0aW9uc18xLnJhbmRvbUludEJldHdlZW4pKDAsIHRoaXMucm93cyAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgY29sSW5kZXggPSAoMCwgZnVuY3Rpb25zXzEucmFuZG9tSW50QmV0d2VlbikoMCwgdGhpcy5jb2x1bXMgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5fY2VsbHNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV4dFRpY2soKSB7XHJcbiAgICAgICAgdGhpcy5fY2VsbHMgPSB0aGlzLl9jZWxscy5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdy5tYXAoKGVsLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5laWdodGJvcnNBbW91bnQgPSB0aGlzLmFtb3VudENlbGxOZWlnaHRib3JzKHJvd0luZGV4LCBjb2xJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2h0Ym9yc0Ftb3VudCA+IDMgfHwgbmVpZ2h0Ym9yc0Ftb3VudCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2h0Ym9yc0Ftb3VudCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYW1vdW50Q2VsbE5laWdodGJvcnMocm93SW5kZXgsIGNvbEluZGV4KSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsc1tyb3dJbmRleCArIDFdICYmIHRoaXMuX2NlbGxzW3Jvd0luZGV4ICsgMV1bY29sSW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxzW3Jvd0luZGV4IC0gMV0gJiYgdGhpcy5fY2VsbHNbcm93SW5kZXggLSAxXVtjb2xJbmRleF0pIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY2VsbHNbcm93SW5kZXhdICYmIHRoaXMuX2NlbGxzW3Jvd0luZGV4XVtjb2xJbmRleCArIDFdKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxzW3Jvd0luZGV4XSAmJiB0aGlzLl9jZWxsc1tyb3dJbmRleF1bY29sSW5kZXggLSAxXSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsc1tyb3dJbmRleCAtIDFdICYmIHRoaXMuX2NlbGxzW3Jvd0luZGV4IC0gMV1bY29sSW5kZXggKyAxXSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsc1tyb3dJbmRleCAtIDFdICYmIHRoaXMuX2NlbGxzW3Jvd0luZGV4IC0gMV1bY29sSW5kZXggLSAxXSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsc1tyb3dJbmRleCArIDFdICYmIHRoaXMuX2NlbGxzW3Jvd0luZGV4ICsgMV1bY29sSW5kZXggLSAxXSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsc1tyb3dJbmRleCArIDFdICYmIHRoaXMuX2NlbGxzW3Jvd0luZGV4ICsgMV1bY29sSW5kZXggKyAxXSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNlbGxzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fY2VsbHNdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXV0b21hdGlvbiA9IEF1dG9tYXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmFuZG9tSW50QmV0d2VlbiA9IGV4cG9ydHMucmFuZG9tQmV0d2VlbiA9IHZvaWQgMDtcclxuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW47XHJcbn07XHJcbmV4cG9ydHMucmFuZG9tQmV0d2VlbiA9IHJhbmRvbUJldHdlZW47XHJcbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCgwLCBleHBvcnRzLnJhbmRvbUJldHdlZW4pKG1pbiwgbWF4KSk7XHJcbn07XHJcbmV4cG9ydHMucmFuZG9tSW50QmV0d2VlbiA9IHJhbmRvbUludEJldHdlZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXV0b21hdGlvblZpZXcgPSB2b2lkIDA7XHJcbmNsYXNzIEF1dG9tYXRpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRpb24pIHtcclxuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBhdXRvbWF0aW9uO1xyXG4gICAgfVxyXG4gICAgcHJpbnQoY29udGV4dCwgY29udGV4dFdpZHRoLCBjb250ZXh0SGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGFsaXZlQ29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICBsZXQgZGVhZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdXRvbWF0aW9uLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hdXRvbWF0aW9uLmNlbGxzWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYXV0b21hdGlvbi5jZWxsc1tpXVtqXSA/IGFsaXZlQ29sb3IgOiBkZWFkQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGkgKiBNYXRoLmZsb29yKGNvbnRleHRXaWR0aCAvIHRoaXMuYXV0b21hdGlvbi5yb3dzKSwgaiAqIE1hdGguZmxvb3IoY29udGV4dEhlaWdodCAvIHRoaXMuYXV0b21hdGlvbi5jb2x1bXMpLCBNYXRoLmZsb29yKGNvbnRleHRXaWR0aCAvIHRoaXMuYXV0b21hdGlvbi5yb3dzKSwgTWF0aC5mbG9vcihjb250ZXh0SGVpZ2h0IC8gdGhpcy5hdXRvbWF0aW9uLmNvbHVtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXV0b21hdGlvblZpZXcgPSBBdXRvbWF0aW9uVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
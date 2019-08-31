(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <button mat-button routerLink=\"\">Torrently</button>\r\n    <button mat-button routerLink=\"movies\">Movies</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/four-oh-four/four-oh-four.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/four-oh-four/four-oh-four.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n  Could not find what you are looking for :'(\n</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  id=\"portal\"\n  class=\"d-flex flex-column align-items-center justify-content-center\"\n>\n  <img src=\"assets/images/family-watching.png\" />\n  <h6 id=\"catchy\">Watch movies online without hassle!</h6>\n  <button routerLink=\"movies\" mat-raised-button class>Explore Movies</button>\n  <br />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-details/movie-details.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-details/movie-details.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <br />\n  <div class=\"d-flex flex-wrap align-content-center justify-content-start\">\n    <div class=\"movie__thumbnails\">\n      <img src=\"assets/images/movie-covers/{{ movie.img }}\" />\n    </div>\n    <div class=\"movie__headline align-self-end\">\n      <b>{{ movie.name }}</b>\n      <br />\n      <i>{{ movie.length }}</i>\n\n      <app-rating [rating]=\"movie.rate\"></app-rating>\n      <button mat-raised-button (click)=\"showTrailer(movie.trailer)\">\n        <mat-icon style=\"margin-bottom:4px;\">play_circle_outline</mat-icon>\n        Watch Trailer\n      </button>\n    </div>\n  </div>\n  <hr />\n  <div>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let genre of movie.genres\">{{ genre }}</mat-chip>\n    </mat-chip-list>\n    <p>\n      <b>Story: </b>\n      {{ movie.description }}\n    </p>\n  </div>\n  <br />\n  <br />\n  <button mat-raised-button routerLink=\"/movies\">find another movie</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-list/movies-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-list/movies-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"panel\">\n  <mat-form-field>\n    <input\n      type=\"tel\"\n      matInput\n      placeholder=\"Look for...\"\n      [(ngModel)]=\"filters.name\"\n      name=\"name\"\n    />\n    <mat-icon matSuffix>search</mat-icon>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Genre</mat-label>\n    <mat-select [(ngModel)]=\"filters.genre\" name=\"genre\">\n      <mat-option value=\"\">All</mat-option>\n      <mat-option *ngFor=\"let genre of genres | keyvalue\" [value]=\"genre.value\">\n        {{ genre.key }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div\n  class=\"movie-list\"\n  class=\"d-flex flex-wrap align-content-center justify-content-center\"\n>\n  <div class=\"movie-item\" *ngFor=\"let movie of movies\">\n    <a routerLink=\"/movies/{{ movie.id }}\" *ngIf=\"canShow(movie)\">\n      <mat-card>\n        <img\n          mat-card-image\n          src=\"assets/images/movie-covers/{{ movie.img }}\"\n          alt=\"movie.title\"\n        />\n        <mat-card-content>\n          <p>\n            <b>\n              {{ movie.name }}\n            </b>\n            <br />\n            <i> {{ movie.length }}</i>\n            <app-rating [rating]=\"movie.rate\"></app-rating>\n          </p>\n        </mat-card-content>\n        <!-- <mat-card-actions> </mat-card-actions> -->\n      </mat-card></a\n    >\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rating\">\n  <mat-icon *ngFor=\"let rate of rates\">{{ rate }}</mat-icon>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/youtube-embed/youtube-embed.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/youtube-embed/youtube-embed.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content style=\"width:100%;height:100%\">\n  <iframe\n    *ngIf=\"safeURL\"\n    [src]=\"safeURL\"\n    frameborder=\"0\"\n    width=\"100%\"\n    height=\"100%\"\n    allowfullscreen\n    allow=\"autoplay\"\n    autoplay\n  ></iframe>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./four-oh-four/four-oh-four.component */ "./src/app/four-oh-four/four-oh-four.component.ts");





const routes = [
    {
        path: 'movies',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./movies/movies.module */ "./src/app/movies/movies.module.ts")).then(mod => mod.MoviesModule)
    },
    {
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        path: ''
    },
    { path: 'fourohfour', component: _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_4__["FourOhFourComponent"] },
    { path: '**', redirectTo: 'fourohfour' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'torrently';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movies.module */ "./src/app/movies/movies.module.ts");
/* harmony import */ var _domains_domains_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domains/domains.module */ "./src/app/domains/domains.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./four-oh-four/four-oh-four.component */ "./src/app/four-oh-four/four-oh-four.component.ts");
/* harmony import */ var _shared_components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/youtube-embed/youtube-embed.component */ "./src/app/shared/components/youtube-embed/youtube-embed.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_13__["FourOhFourComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__["MoviesModule"],
            _domains_domains_module__WEBPACK_IMPORTED_MODULE_7__["DomainsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        entryComponents: [_shared_components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_14__["YoutubeEmbedComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/domains/domains.module.ts":
/*!*******************************************!*\
  !*** ./src/app/domains/domains.module.ts ***!
  \*******************************************/
/*! exports provided: DomainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsModule", function() { return DomainsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _movie_movie_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie/movie.module */ "./src/app/movie/movie.module.ts");




let DomainsModule = class DomainsModule {
};
DomainsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _movie_movie_module__WEBPACK_IMPORTED_MODULE_3__["MovieModule"]
        ]
    })
], DomainsModule);



/***/ }),

/***/ "./src/app/domains/movie/movie-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/domains/movie/movie-api.service.ts ***!
  \****************************************************/
/*! exports provided: MovieApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieApiService", function() { return MovieApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _movie_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie.mock-data */ "./src/app/domains/movie/movie.mock-data.ts");





let MovieApiService = class MovieApiService {
    constructor() { }
    getMovieList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_movie_mock_data__WEBPACK_IMPORTED_MODULE_4__["movies"]);
    }
    getMovieById(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_movie_mock_data__WEBPACK_IMPORTED_MODULE_4__["movies"].find(item => item.id === id));
    }
    // Imagine we have database of movies, we rather than query the movies by filter,
    getMovieListByGenre(genreType) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_movie_mock_data__WEBPACK_IMPORTED_MODULE_4__["movies"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(movieList => movieList.filter(movie => movie.genres.findIndex(genre => genre === genreType))));
    }
};
MovieApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieApiService);



/***/ }),

/***/ "./src/app/domains/movie/movie.mock-data.ts":
/*!**************************************************!*\
  !*** ./src/app/domains/movie/movie.mock-data.ts ***!
  \**************************************************/
/*! exports provided: movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movies", function() { return movies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.model */ "./src/app/domains/movie/movie.model.ts");


const movies = [
    {
        id: 1,
        key: 'deadpool',
        name: 'Deadpool',
        description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].comedy],
        rate: '8.6',
        length: '1hr 48mins',
        trailer: 'https://www.youtube.com/embed/ONHBaC-pfsk',
        img: 'deadpool.jpg'
    },
    {
        id: 2,
        key: 'we-are-the-millers',
        name: "We're the Millers",
        description: 'A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].comedy, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime],
        rate: '7.0',
        length: '1hr 50mins',
        trailer: 'https://www.youtube.com/embed/ONHBaC-pfsk',
        img: 'we-are-the-millers.jpg'
    },
    {
        id: 3,
        key: 'straight-outta-compton',
        name: 'Straight Outta Compton',
        description: 'The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].history],
        rate: '8.0',
        length: '2hr 27mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'straight-outta-compton.jpg'
    },
    {
        id: 4,
        key: 'gridiron-gang',
        name: 'Gridiron Gang',
        description: 'Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].sport],
        rate: '6.9',
        length: '2hr 5mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'gridiron-gang.jpg'
    },
    {
        id: 5,
        key: 'american-gangster',
        name: 'American Gangster',
        description: 'In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama],
        rate: '7.8',
        length: '2hr 37mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'american-gangster.jpg'
    },
    {
        id: 6,
        key: 'gangster-squad',
        name: 'Gangster Squad',
        description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama],
        rate: '6.8',
        length: '1hr 53mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'gangster-squad.jpg'
    },
    {
        id: 7,
        key: 'now-you-see-me',
        name: 'Now You See Me',
        description: 'An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].mystery, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '7.3',
        length: '1hr 55mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'now-you-see-me.jpg'
    },
    {
        id: 8,
        key: 'jurassic-world',
        name: 'Jurassic World',
        description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].scifi],
        rate: '7.1',
        length: '2hr 4mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'jurassic-world.jpg'
    },
    {
        id: 9,
        key: 'mission-impossible-rogue-nation',
        name: 'Mission: Impossible: Rogue Nation',
        description: 'Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '7.5',
        length: '2hr 11mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'mission-impossible-rogue-nation.jpg'
    },
    {
        id: 10,
        key: 'the-man-from-uncle',
        name: 'The Man from U.N.C.L.E.',
        description: 'In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '7.3',
        length: '1hr 56mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'the-man-from-uncle.jpg'
    },
    {
        id: 10,
        key: 'spectre',
        name: 'Spectre',
        description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '6.9',
        length: '2hr 28mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'spectre.jpg'
    },
    {
        id: 11,
        key: 'legend',
        name: 'Legend',
        description: 'The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama],
        rate: '7.0',
        length: '2hr 28mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'legend.jpg'
    },
    {
        id: 12,
        key: 'southpaw',
        name: 'Southpaw',
        description: 'Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].sport],
        rate: '7.5',
        length: '2hr 4mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'southpaw.jpg'
    },
    {
        id: 13,
        key: 'bridge-of-spies',
        name: 'Bridge of Spies',
        description: 'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].biography, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '7.7',
        length: '2hr 22mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'bridge-of-spies.jpg'
    },
    {
        id: 14,
        key: 'ant-man',
        name: 'Ant-Man',
        description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].adventure, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].scifi],
        rate: '7.4',
        length: '1hr 57mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'ant-man.jpg'
    },
    {
        id: 15,
        key: 'fast-and-furious-7',
        name: 'Fast & Furious 7',
        description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '7.3',
        length: '2hr 17mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'fast-and-furious-7.jpg'
    },
    {
        id: 16,
        key: 'tracers',
        name: 'Tracers',
        description: 'Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama],
        rate: '5.6',
        length: '1hr 34mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'tracers.jpg'
    },
    {
        id: 17,
        key: 'running-scared',
        name: 'Running Scared',
        description: 'A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama],
        rate: '7.4',
        length: '2hr 2mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'running-scared.jpg'
    },
    {
        id: 18,
        key: 'the-hangover',
        name: 'The Hangover',
        description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].comedy],
        rate: '7.8',
        length: '1hr 40mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'the-hangover.jpg'
    },
    {
        id: 19,
        key: 'project-x',
        name: 'Project X',
        description: '3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].comedy, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime],
        rate: '6.7',
        length: '1hr 28mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'project-x.jpg'
    },
    {
        id: 20,
        key: 'the-dark-knight',
        name: 'The Dark Knight',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].drama],
        rate: '9.0',
        length: '2hr 32mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'the-dark-knight.jpg'
    },
    {
        id: 21,
        key: 'the-tournament',
        name: 'The Tournament',
        description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].thriller],
        rate: '6.1',
        length: '1hr 35mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'the-tournament.jpg'
    },
    {
        id: 22,
        key: 'the-matrix',
        name: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].scifi],
        rate: '8.7',
        length: '2hr 16mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'the-matrix.jpg'
    },
    {
        id: 23,
        key: 'bad-boys',
        name: 'Bad Boys',
        description: 'Two hip detectives protect a murder witness while investigating a case of stolen heroin.',
        genres: [_movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].action, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].comedy, _movie_model__WEBPACK_IMPORTED_MODULE_1__["genreType"].crime],
        rate: '6.8',
        length: '1hr 59mins',
        trailer: 'https://www.youtube.com/embed/RIwyv7CNhoc',
        img: 'bad-boys.jpg'
    }
];


/***/ }),

/***/ "./src/app/domains/movie/movie.model.ts":
/*!**********************************************!*\
  !*** ./src/app/domains/movie/movie.model.ts ***!
  \**********************************************/
/*! exports provided: genreType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genreType", function() { return genreType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const genreType = {
    action: 'action',
    adventure: 'adventure',
    biography: 'biography',
    comedy: 'comedy',
    crime: 'crime',
    drama: 'drama',
    history: 'history',
    mystery: 'mystery',
    scifi: 'scifi',
    sport: 'sport',
    thriller: 'thriller'
};


/***/ }),

/***/ "./src/app/four-oh-four/four-oh-four.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/four-oh-four/four-oh-four.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdXItb2gtZm91ci9mb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/four-oh-four/four-oh-four.component.ts":
/*!********************************************************!*\
  !*** ./src/app/four-oh-four/four-oh-four.component.ts ***!
  \********************************************************/
/*! exports provided: FourOhFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourOhFourComponent", function() { return FourOhFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FourOhFourComponent = class FourOhFourComponent {
    constructor() { }
    ngOnInit() {
    }
};
FourOhFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-four-oh-four',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./four-oh-four.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/four-oh-four/four-oh-four.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./four-oh-four.component.scss */ "./src/app/four-oh-four/four-oh-four.component.scss")).default]
    })
], FourOhFourComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#portal #catchy {\n  color: white;\n  text-align: center;\n}\n#portal img {\n  max-width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcbXNxYWRkdXJhXFx0b3JyZW50bHkvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9ydGFsIHtcclxuICAjY2F0Y2h5IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4iLCIjcG9ydGFsICNjYXRjaHkge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNwb3J0YWwgaW1nIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/movie/movie.module.ts":
/*!***************************************!*\
  !*** ./src/app/movie/movie.module.ts ***!
  \***************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let MovieModule = class MovieModule {
};
MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], MovieModule);



/***/ }),

/***/ "./src/app/movies/movie-details/movie-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-details.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".movie__headline {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWRldGFpbHMvRDpcXG1zcWFkZHVyYVxcdG9ycmVudGx5L3NyY1xcYXBwXFxtb3ZpZXNcXG1vdmllLWRldGFpbHNcXG1vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllX19oZWFkbGluZSB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiIsIi5tb3ZpZV9faGVhZGxpbmUge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/movies/movie-details/movie-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_domains_movie_movie_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/domains/movie/movie-api.service */ "./src/app/domains/movie/movie-api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/youtube-embed/youtube-embed.component */ "./src/app/shared/components/youtube-embed/youtube-embed.component.ts");







let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(route, movieService, dialog) {
        this.route = route;
        this.movieService = movieService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((params) => this.movieService.getMovieById(+params.get('id'))))
            .subscribe(movie => {
            this.movie = movie;
        });
    }
    showTrailer(trailer) {
        this.dialog.open(src_app_shared_components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_6__["YoutubeEmbedComponent"], {
            width: '60%',
            height: '60%',
            data: { videoURL: trailer }
        });
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_domains_movie_movie_api_service__WEBPACK_IMPORTED_MODULE_4__["MovieApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-details/movie-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/movies/movie-details/movie-details.component.scss")).default]
    })
], MovieDetailsComponent);



/***/ }),

/***/ "./src/app/movies/movies-list/movies-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/movies/movies-list/movies-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  text-align: center;\n  border-radius: 0px 0px 20% 20%;\n  background: #f5f5f5;\n}\n#panel mat-form-field {\n  padding: 0 10px;\n}\n.movie-item {\n  margin: 5px;\n}\n.movie-item img {\n  -webkit-animation: fadein 0.5s ease-in-out;\n          animation: fadein 0.5s ease-in-out;\n}\n.movie-item mat-card {\n  width: 200px;\n}\n.movie-item mat-card:hover {\n  cursor: pointer;\n  box-shadow: 0 0 10px 4px #b53bb0;\n}\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0.1;\n    transform: scale(0.1);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0.1;\n    transform: scale(0.1);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy1saXN0L0Q6XFxtc3FhZGR1cmFcXHRvcnJlbnRseS9zcmNcXGFwcFxcbW92aWVzXFxtb3ZpZXMtbGlzdFxcbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllcy9tb3ZpZXMtbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0FDRUo7QURDQTtFQUNFLFdBQUE7QUNFRjtBRERFO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0FDR0o7QURGSTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ0lOO0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxxQkFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNFRjtBQUNGO0FEVkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxxQkFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhbmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMCUgMjAlO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxufVxyXG4ubW92aWUtaXRlbSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaW1nIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDRweCAjYjUzYmIwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuIiwiI3BhbmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwJSAyMCU7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG4jcGFuZWwgbWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5tb3ZpZS1pdGVtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4ubW92aWUtaXRlbSBpbWcge1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm1vdmllLWl0ZW0gbWF0LWNhcmQge1xuICB3aWR0aDogMjAwcHg7XG59XG4ubW92aWUtaXRlbSBtYXQtY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggNHB4ICNiNTNiYjA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/movies/movies-list/movies-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/movies/movies-list/movies-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_domains_movie_movie_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domains/movie/movie-api.service */ "./src/app/domains/movie/movie-api.service.ts");
/* harmony import */ var src_app_domains_movie_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domains/movie/movie.model */ "./src/app/domains/movie/movie.model.ts");




let MoviesListComponent = class MoviesListComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.movies = [];
        this.genres = src_app_domains_movie_movie_model__WEBPACK_IMPORTED_MODULE_3__["genreType"];
        this.filters = {
            name: '',
            genre: ''
        };
    }
    ngOnInit() {
        this.movieService.getMovieList().subscribe(movies => {
            this.movies = movies;
        });
    }
    canShow(movie) {
        return (movie.name
            .toLocaleLowerCase()
            .indexOf(this.filters.name.toLocaleLowerCase()) !== -1 &&
            movie.genres.findIndex(genre => genre.indexOf(this.filters.genre)));
    }
};
MoviesListComponent.ctorParameters = () => [
    { type: src_app_domains_movie_movie_api_service__WEBPACK_IMPORTED_MODULE_2__["MovieApiService"] }
];
MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movies-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-list/movies-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/movies/movies-list/movies-list.component.scss")).default]
    })
], MoviesListComponent);



/***/ }),

/***/ "./src/app/movies/movies-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/movies-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies/movies-list/movies-list.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movies/movie-details/movie-details.component.ts");





const routes = [
    { path: '', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__["MoviesListComponent"] },
    { path: ':id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"] }
];
let MoviesRoutingModule = class MoviesRoutingModule {
};
MoviesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MoviesRoutingModule);



/***/ }),

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/movies/movies-routing.module.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies/movies-list/movies-list.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movies/movie-details/movie-details.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");


















let MoviesModule = class MoviesModule {
};
MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"], _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"]
        ]
    })
], MoviesModule);



/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rating {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmF0aW5nL0Q6XFxtc3FhZGR1cmFcXHRvcnJlbnRseS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxyYXRpbmdcXHJhdGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nIHtcclxuICBjb2xvcjogZ29sZDtcclxufVxyXG4iLCIucmF0aW5nIHtcbiAgY29sb3I6IGdvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() {
        this.rates = []; //coming from icon names
    }
    ngOnInit() {
        this.calculateRates(Number(this.rating));
    }
    // we calculate rate by approximation, and give it icon id
    calculateRates(rating) {
        this.rates = [];
        for (let i = 0; i < 5; i++) {
            if (rating <= i * 2) {
                this.rates.push('star_border');
            }
            else if (rating >= i * 2 + 2) {
                this.rates.push('star');
            }
            else {
                this.rates.push('star_half');
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RatingComponent.prototype, "rating", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rating/rating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.scss */ "./src/app/shared/components/rating/rating.component.scss")).default]
    })
], RatingComponent);



/***/ }),

/***/ "./src/app/shared/components/youtube-embed/youtube-embed.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/youtube-embed/youtube-embed.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3lvdXR1YmUtZW1iZWQveW91dHViZS1lbWJlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/youtube-embed/youtube-embed.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/youtube-embed/youtube-embed.component.ts ***!
  \****************************************************************************/
/*! exports provided: YoutubeEmbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeEmbedComponent", function() { return YoutubeEmbedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let YoutubeEmbedComponent = class YoutubeEmbedComponent {
    constructor(sanitizer, dialogRef, data) {
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.data = data;
        this.safeURL = null;
    }
    ngOnInit() {
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.data.videoURL}?autoplay=1`);
    }
};
YoutubeEmbedComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YoutubeEmbedComponent.prototype, "videoURL", void 0);
YoutubeEmbedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-youtube-embed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./youtube-embed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/youtube-embed/youtube-embed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./youtube-embed.component.scss */ "./src/app/shared/components/youtube-embed/youtube-embed.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], YoutubeEmbedComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/shared/components/rating/rating.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/youtube-embed/youtube-embed.component */ "./src/app/shared/components/youtube-embed/youtube-embed.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__["RatingComponent"], _components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeEmbedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]],
        exports: [_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__["RatingComponent"], _components_youtube_embed_youtube_embed_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeEmbedComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\msqaddura\torrently\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
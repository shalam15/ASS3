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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/components/aboutpage/aboutpage.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/components/aboutpage/aboutpage.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"allcards\">\n        <div class=\"cards\">\n                <h1>About Page Here </h1>\n                <p>This is my assignment 3</p>\n                <button (click)=\"goBack()\" type=\"button\">GO Back</button>\n            </div>\n        \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"navbar\">\n        <a href=\"/\">Home</a>\n        <a href=\"/about\">About</a>\n      </div>\n\n\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/usercard/usercard.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/usercard/usercard.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"allcards\">\n\n    <div class=\"cards\">\n        <h3>{{user[0].firstName+ ' ' + user[0].lastName}} </h3>\n        <p>{{ user[0].email }}</p>\n        <button (click)=\"gotoUser(user[0].id)\" type=\"button\">GO</button>\n    </div>\n\n    <div class=\"cards\">\n        <h3>{{user[1].firstName+ ' ' + user[1].lastName}} </h3>\n        <p>{{ user[1].email }}</p>\n        <button (click)=\"gotoUser(user[1].id)\" type=\"button\">GO</button>\n    </div>\n\n    <div class=\"cards\">\n        <h3>{{user[2].firstName+ ' ' + user[2].lastName}} </h3>\n        <p>{{ user[2].email }}</p>\n        <button (click)=\"gotoUser(user[2].id)\" type=\"button\">GO</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/userlist/userlist.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/userlist/userlist.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <div id=\"middle\" >\n                <h1>USER LISTS</h1>\n              <app-usercard  [user]=\"users\"></app-usercard>\n              \n            </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/userpage/userpage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/userpage/userpage.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\"></div>\n\n<div *ngIf=\"user\" class=\"cards\">\n    <h3>{{user.firstName+ ' ' + user.lastName}} </h3>\n    <p>{{ user.email }}</p>\n    <div class=\"addressCard\">\n        <div class=\"eachAddress\">\n            <h1>Address Line 1</h1>\n            <h3>{{ user.addresses[0].addressLine1 }}</h3>\n            <p>{{ user.addresses[0].state }}</p>\n            <p>{{ user.addresses[0].zip }}</p>\n        </div>\n\n        <div class=\"eachAddress\">\n            <h1>Address Line 2</h1>\n            <h3>{{ user.addresses[1].addressLine2 }}</h3>\n            <p>{{ user.addresses[1].state }}</p>\n            <p>{{ user.addresses[1].zip }}</p>\n        </div>\n    </div>\n\n\n\n    <button (click)=goBack()>GO Back</button>\n</div>\n<div *ngIf=\"!user\">\n    <div class=\"cards\">\n        <h1>NO USER OF THAT ID</h1>\n        <button (click)=goBack()>GO Back</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/aboutpage/aboutpage.component */ "./src/app/about/components/aboutpage/aboutpage.component.ts");




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_3__["AboutpageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/components/aboutpage/aboutpage.component.css":
/*!********************************************************************!*\
  !*** ./src/app/about/components/aboutpage/aboutpage.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#allcards{\n    background-color: aliceblue;\n    margin: auto;\n    margin-top:100px;\n    max-width: 500px;\n}\n.cards{\n    color: azure;\n    margin: 5px;\n    padding: 20px;\n    background-color: #0039A6;\n}\nbutton{\n    width: 100px;\n    height: 35px;\n    background-color: black;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvY29tcG9uZW50cy9hYm91dHBhZ2UvYWJvdXRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2NvbXBvbmVudHMvYWJvdXRwYWdlL2Fib3V0cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FsbGNhcmRze1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDoxMDBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmNhcmRze1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM5QTY7XG59XG5idXR0b257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/about/components/aboutpage/aboutpage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/about/components/aboutpage/aboutpage.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageComponent", function() { return AboutpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AboutpageComponent = /** @class */ (function () {
    function AboutpageComponent(router) {
        this.router = router;
    }
    AboutpageComponent.prototype.ngOnInit = function () {
    };
    AboutpageComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    AboutpageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AboutpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutpage',
            template: __webpack_require__(/*! raw-loader!./aboutpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/components/aboutpage/aboutpage.component.html"),
            styles: [__webpack_require__(/*! ./aboutpage.component.css */ "./src/app/about/components/aboutpage/aboutpage.component.css")]
        })
    ], AboutpageComponent);
    return AboutpageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/components/userpage/userpage.component */ "./src/app/users/components/userpage/userpage.component.ts");
/* harmony import */ var _users_components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/components/userlist/userlist.component */ "./src/app/users/components/userlist/userlist.component.ts");
/* harmony import */ var _about_components_aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/components/aboutpage/aboutpage.component */ "./src/app/about/components/aboutpage/aboutpage.component.ts");






var routes = [
    // be default we show Todo list component
    { path: '', component: _users_components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__["UserlistComponent"] },
    { path: 'users', component: _users_components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__["UserpageComponent"] },
    { path: 'user/:id', component: _users_components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_3__["UserpageComponent"] },
    { path: 'about', component: _about_components_aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_5__["AboutpageComponent"] },
    { path: '**', component: _users_components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__["UserlistComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    overflow: hidden;\n    background-color: #333;\n    position: fixed;\n    top: 0;\n    width: 100%;\n  }\n  \n  .navbar a {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n  }\n  \n  .navbar a:hover {\n    background: #ddd;\n    color: black;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmF2YmFyIGEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICBcbiAgLm5hdmJhciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'assthree';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/components/userlist/userlist.component */ "./src/app/users/components/userlist/userlist.component.ts");









var routes = [
    {
        path: '',
        component: _users_components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _users_users_module__WEBPACK_IMPORTED_MODULE_3__["UsersModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_4__["AboutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/users/components/usercard/usercard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/users/components/usercard/usercard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#allcards{\n    background-color: aliceblue;\n    margin: auto;\n    max-width: 500px;\n}\n.cards{\n    color: azure;\n    margin: 5px;\n    padding: 20px;\n    background-color: #0039A6;\n}\nbutton{\n    width: 100px;\n    height: 35px;\n    background-color: black;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy91c2VyY2FyZC91c2VyY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcmNhcmQvdXNlcmNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGxjYXJkc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG4uY2FyZHN7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzlBNjtcbn1cbmJ1dHRvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/components/usercard/usercard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/users/components/usercard/usercard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsercardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercardComponent", function() { return UsercardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UsercardComponent = /** @class */ (function () {
    function UsercardComponent(router) {
        this.router = router;
    }
    UsercardComponent.prototype.ngOnInit = function () {
    };
    UsercardComponent.prototype.gotoUser = function (id) {
        console.log(id);
        this.router.navigate(['/user', id]);
    };
    UsercardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UsercardComponent.prototype, "user", void 0);
    UsercardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usercard',
            template: __webpack_require__(/*! raw-loader!./usercard.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/usercard/usercard.component.html"),
            styles: [__webpack_require__(/*! ./usercard.component.css */ "./src/app/users/components/usercard/usercard.component.css")]
        })
    ], UsercardComponent);
    return UsercardComponent;
}());



/***/ }),

/***/ "./src/app/users/components/userlist/userlist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/users/components/userlist/userlist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n    padding: 16px;\n    margin-top: 30px;\n    \n}\n#middle{\n    text-align: center;\n    margin: auto;\n    \n}\nuserlists{\n    text-decoration: none;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jb21wb25lbnRzL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIFxufVxuI21pZGRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufVxudXNlcmxpc3Rze1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/users/components/userlist/userlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/users/components/userlist/userlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/users/user.service.ts");



var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(userservice) {
        this.userservice = userservice;
        this.users = [];
    }
    UserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userservice.seeLength();
        var usersObservable = this.userservice.getUsers();
        usersObservable.subscribe(function (usersData) {
            _this.users = usersData;
            console.log(_this.users.length);
        });
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/users/components/userlist/userlist.component.css")]
        })
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/users/components/userpage/userpage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/users/components/userpage/userpage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n    margin-top: 50px;\n}\n\n\n#allcards{\n    background-color: aliceblue;\n    margin: auto;\n    max-width: 500px;\n}\n\n\n.cards{\n    color: azure;\n    margin: 5px;\n    padding: 20px;\n    background-color: #0039A6;\n}\n\n\nbutton{\n    width: 100px;\n    height: 35px;\n    background-color: black;\n    color: white;\n}\n\n\n.addressCard{\n\n    display: -webkit-box;\n\n    display: flex;\n    clear: both;\n    \n\n\n}\n\n\n.eachAddress{\n    color: black;\n    margin: auto;\n    background-color: white;\n    padding:10px;\n    float: left;\n   \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvY29tcG9uZW50cy91c2VycGFnZS91c2VycGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7QUFDQTs7SUFFSSxvQkFBYTs7SUFBYixhQUFhO0lBQ2IsV0FBVzs7OztBQUlmOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXOzs7QUFHZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuXG4jYWxsY2FyZHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmNhcmRze1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM5QTY7XG59XG5idXR0b257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWRkcmVzc0NhcmR7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIFxuXG5cbn1cbi5lYWNoQWRkcmVzc3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgIFxuXG59Il19 */"

/***/ }),

/***/ "./src/app/users/components/userpage/userpage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/users/components/userpage/userpage.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/user.service */ "./src/app/users/user.service.ts");




var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.id = route.snapshot.paramMap.get("id");
        this.user = this.userService.getUser(this.id);
    }
    UserpageComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    UserpageComponent.prototype.ngOnInit = function () {
    };
    UserpageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! raw-loader!./userpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/users/components/userpage/userpage.component.css")]
        })
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            {
                id: 1,
                firstName: 'Abdulsalam',
                lastName: 'Ajayi',
                email: 'aajayi2@student.gsu.edu',
                addresses: [
                    {
                        addressLine1: '100 white house',
                        state: 'WA',
                        zip: '30321'
                    },
                    {
                        addressLine2: '200 congress road',
                        state: 'NY',
                        zip: '40111'
                    }
                ]
            },
            {
                id: 2,
                firstName: 'Abdulmumin',
                lastName: 'Olayinka',
                email: 'oyinka3@student.gsu.edu',
                addresses: [
                    {
                        addressLine1: '99 wassup bro street',
                        state: 'GA',
                        zip: '30156'
                    },
                    {
                        addressLine2: '811 house road',
                        state: 'NY',
                        zip: '31246'
                    }
                ]
            },
            {
                id: 3,
                firstName: 'Ousman',
                lastName: 'Diallo',
                email: 'doiallo4@student.gsu.edu',
                addresses: [
                    {
                        addressLine1: '990 hey there bro street',
                        state: 'GA',
                        zip: '56721'
                    },
                    {
                        addressLine2: '911 fire road',
                        state: 'NJ',
                        zip: '12904'
                    }
                ]
            },
            {
                id: 4,
                firstName: 'Ousman',
                lastName: 'Diallo',
                email: 'doiallo4@student.gsu.edu',
                addresses: [
                    {
                        addressLine1: '990 hey there bro street',
                        state: 'GA',
                        zip: '56721'
                    },
                    {
                        addressLine2: '911 fire road',
                        state: 'NJ',
                        zip: '12904'
                    }
                ]
            },
        ];
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        var usersObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(_this.users);
            }, 10);
        });
        return usersObservable;
    };
    UserService.prototype.getUser = function (id) {
        var user = this.users.find(function (t) { return t.id == parseInt(id); });
        console.log(user);
        return user;
    };
    UserService.prototype.seeLength = function () {
        console.log(this.users.length);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/userlist/userlist.component */ "./src/app/users/components/userlist/userlist.component.ts");
/* harmony import */ var _components_usercard_usercard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/usercard/usercard.component */ "./src/app/users/components/usercard/usercard.component.ts");
/* harmony import */ var _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/userpage/userpage.component */ "./src/app/users/components/userpage/userpage.component.ts");






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_3__["UserlistComponent"],
                _components_usercard_usercard_component__WEBPACK_IMPORTED_MODULE_4__["UsercardComponent"],
                _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_5__["UserpageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Seagate/GSU/WEB DEVELOPMENT /ASSIGNMENTS/ASS3/assthree/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
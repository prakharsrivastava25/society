webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopicsComponent = (function () {
    function TopicsComponent() {
    }
    return TopicsComponent;
}());
TopicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(234),
        styles: [__webpack_require__(224)]
    })
], TopicsComponent);

//# sourceMappingURL=topics.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrendingComponent = (function () {
    function TrendingComponent() {
    }
    return TrendingComponent;
}());
TrendingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(235),
        styles: [__webpack_require__(225)]
    })
], TrendingComponent);

//# sourceMappingURL=trending.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 129;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(161);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trending_trending_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__populartools_populartools_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topics_topics_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__communitypage_communitypage_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'trending',
        component: __WEBPACK_IMPORTED_MODULE_2__trending_trending_component__["a" /* TrendingComponent */]
    },
    {
        path: 'topics',
        component: __WEBPACK_IMPORTED_MODULE_5__topics_topics_component__["a" /* TopicsComponent */]
    },
    {
        path: 'populartools',
        component: __WEBPACK_IMPORTED_MODULE_4__populartools_populartools_component__["a" /* PopularToolsComponent */]
    },
    {
        path: 'communitypage',
        component: __WEBPACK_IMPORTED_MODULE_7__communitypage_communitypage_component__["a" /* CommunityPageComponent */]
    },
    { path: '**', redirectTo: '/dashboard' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.navigation = [
            { link: 'dashboard', label: 'Dashboard' },
            { link: 'trending', label: 'Trending Communities' },
            { link: 'topics', label: 'Common Topics' },
            { link: 'populartools', label: 'Popular Tools' },
            { link: 'search', label: 'Search(temporary)' },
            { link: 'community page', label: 'communitypage' },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'calvin-root',
        template: __webpack_require__(226),
        styles: [__webpack_require__(216)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_content_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trending_trending_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__populartools_populartools_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topics_topics_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notify_notify_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__managecommunity_managecommunity_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__communitypage_communitypage_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__trending_trending_component__["a" /* TrendingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__populartools_populartools_component__["a" /* PopularToolsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topics_topics_component__["a" /* TopicsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__managecommunity_managecommunity_component__["a" /* ManageCommunityComponent */],
            __WEBPACK_IMPORTED_MODULE_12__notify_notify_component__["a" /* NotifyComponent */],
            __WEBPACK_IMPORTED_MODULE_6__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_17__communitypage_communitypage_component__["a" /* CommunityPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = (function () {
    function ContentComponent(dialog) {
        this.dialog = dialog;
    }
    ContentComponent.prototype.openDialog = function () {
        var MdDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */], {
            width: '90%',
            height: '90%'
        });
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'calvin-content',
        template: __webpack_require__(228),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCommunityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ManageCommunityComponent = (function () {
    function ManageCommunityComponent() {
    }
    return ManageCommunityComponent;
}());
ManageCommunityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(230),
        styles: [__webpack_require__(220)]
    })
], ManageCommunityComponent);

//# sourceMappingURL=managecommunity.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotifyComponent = (function () {
    function NotifyComponent() {
    }
    return NotifyComponent;
}());
NotifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(231),
        styles: [__webpack_require__(221)]
    })
], NotifyComponent);

//# sourceMappingURL=notify.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "md-sidenav {\n\twidth: 300px;\n  max-width: 300px;\n}\n\n.logo {\n\tmargin-left: 20px;\n\theight: 60%;\n}\n\n\n#sidebar-logo {\n\theight: 60%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".search {\n\tmargin-top: 20px;\n\ttext-align: center;\n\twidth: 100%;\n\tmin-height: 100px;\n}\n\n.search > a {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.container {\n\tmargin-top: 1px;\n}\n\nbutton {\n\tmin-height: 50px;\n\twidth: 100%;\n\ttext-align: left;\n\tfont-weight: bold;\n\n}\n\n.column-2, .column-1, md-nav-list {\n\tbackground-color: #2d3e4e;\n\tcolor: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".search {\n\tmargin-top: 20px;\n\ttext-align: center;\n\twidth: 100%;\n\tmin-height: 100px;\n}\n\n.search > a {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.container {\n\tmargin-top: 1px;\n}\n\nbutton {\n\tmin-height: 50px;\n\twidth: 100%;\n\ttext-align: left;\n\tfont-weight: bold;\n\n}\n\n.column-2, .column-1, md-nav-list {\n\tbackground-color: #2d3e4e;\n\tcolor: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".top-gap {\n\tmargin-top: 30px;\n}\n\n.full-width {\n\twidth: 100%;\n}\n\n.community-card {\n\twidth: 30%;\n\tmargin: 10px;\n}\nmd-card {\n\tmargin: 10px;\n}\n\n.content-container {\n\tpadding: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen class=\"sidenav-container\">\n  <md-sidenav #sidenav mode=\"push\" opened=\"false\">\n    <md-toolbar color=\"primary\">\n    <img routerLink=\"/dashboard\" src=\"/assets/logo/logo.png\" id=\"sidebar-logo\" /> <span class=\"logo\">Calvin</span>\n\t\t</md-toolbar>\n\t\t<md-nav-list>\n\t\t<a md-list-item *ngFor=\"let item of navigation\" (click)=\"sidenav.close()\"\n           [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\n          {{item.label}}\n        </a>\n                </md-nav-list>\n  </md-sidenav>\n<md-toolbar color=\"primary\">\n <button md-icon-button (click)=\"sidenav.toggle()\"><md-icon>menu</md-icon></button>\n <img routerLink=\"/dashboard\" src=\"/assets/logo/logo.png\" class=\"logo\" />\n\n          <button md-button class=\"nav-button\" *ngFor=\"let item of navigation\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\n            {{item.label}}\n          </button>\n</md-toolbar>\n<router-outlet></router-outlet>\n</md-sidenav-container>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<h1>Welcome To The Community Page</h1>"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"2px\" fxLayoutGap.xs=\"0\">\n    <div class=\"column-1\" fxFlex=\"15%\">\n        <md-sidenav>\n            <md-nav-list>\n            <div class=\"search\">\n                <a md-button (click)=\"openDialog()\"><img src=\"/assets/icons/search_white.png\"/></a>\n                </div>\n                <button md-button routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</button>\n                <button md-button routerLink=\"/trending\" routerLinkActive=\"active\">Trending Communities</button>\n                <button md-button routerLink=\"/topics\" routerLinkActive=\"active\">Common Topics</button>\n                <button md-button routerLink=\"/populartools\" routerLinkActive=\"active\">Popular Tools</button>\n            </md-nav-list>\n        </md-sidenav>\n    </div>\n    <div class=\"column-2\" fxFlex>\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "hiii!!! i'm dashboard! i'll show all the analytical details about your app in sometime soon"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "community management module"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "all socket based recent notification"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "most commonly used tools here!"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n       <div class=\"item item-3\" fxFlex=\"25%\" ></div>\n  <div class=\"item item-3\" fxFlex >\n  <md-input-container class=\"full-width top-gap\">\n    <input mdInput placeholder=\"Search for a community...\" >\n  </md-input-container>\n  </div>\n  <div class=\"item item-3\" fxFlex=\"25%\" ></div>\n</div>\n<div *ngIf=\"tiles\" fxFlex=\"100%\" fxLayoutGap=\"2%\" fxLayoutWrap >\n<div class=\"list-communities\" fxFlex=\"31%\" *ngFor=\"let data of tiles\" fx-flex-fill >\n<md-card>{{data.title}}</md-card>\n</div>\n</div>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "here we'll display popular topics, issues etc."

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "This component is for displaying all the trending/ popular communities in our app."

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.tiles = [
            { title: "checrsg\n    sdgsgs\n    sdgsdgs\n    sdgsgd\n    sdgking", text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { title: 'others', text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
            { title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { title: 'checking', text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { title: 'others', text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
            { title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { title: 'checking', text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
        ];
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(233),
        styles: [__webpack_require__(223)]
    })
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommunityPageComponent = (function () {
    function CommunityPageComponent() {
        this.tiles = [
            { title: "COMMUNITYPAGE", text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { title: 'others', text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
            { title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { title: 'checking', text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { title: 'others', text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
            { title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { title: 'checking', text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
        ];
    }
    return CommunityPageComponent;
}());
CommunityPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(227),
        styles: [__webpack_require__(217)]
    })
], CommunityPageComponent);

//# sourceMappingURL=communitypage.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(229),
        styles: [__webpack_require__(219)]
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PopularToolsComponent = (function () {
    function PopularToolsComponent() {
    }
    return PopularToolsComponent;
}());
PopularToolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(232),
        styles: [__webpack_require__(222)]
    })
], PopularToolsComponent);

//# sourceMappingURL=populartools.component.js.map

/***/ })

},[272]);
//# sourceMappingURL=main.bundle.js.map
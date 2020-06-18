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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _component_teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/teacher-dashboard/teacher-dashboard.component */ "./src/app/component/teacher-dashboard/teacher-dashboard.component.ts");
/* harmony import */ var _component_teacher_graded_dashboard_teacher_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/teacher-graded-dashboard/teacher-graded-dashboard.component */ "./src/app/component/teacher-graded-dashboard/teacher-graded-dashboard.component.ts");
/* harmony import */ var _component_teacher_grade_dashboard_teacher_grade_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/teacher-grade-dashboard/teacher-grade-dashboard.component */ "./src/app/component/teacher-grade-dashboard/teacher-grade-dashboard.component.ts");
/* harmony import */ var _component_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/student-dashboard/student-dashboard.component */ "./src/app/component/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _component_student_graded_dashboard_student_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/student-graded-dashboard/student-graded-dashboard.component */ "./src/app/component/student-graded-dashboard/student-graded-dashboard.component.ts");
/* harmony import */ var _component_student_completed_dashboard_student_completed_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/student-completed-dashboard/student-completed-dashboard.component */ "./src/app/component/student-completed-dashboard/student-completed-dashboard.component.ts");
/* harmony import */ var _component_student_take_dashboard_student_take_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/student-take-dashboard/student-take-dashboard.component */ "./src/app/component/student-take-dashboard/student-take-dashboard.component.ts");
/* harmony import */ var _component_teacher_create_dashboard_teacher_create_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/teacher-create-dashboard/teacher-create-dashboard.component */ "./src/app/component/teacher-create-dashboard/teacher-create-dashboard.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _component_student_view_completed_student_view_completed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/student-view-completed/student-view-completed.component */ "./src/app/component/student-view-completed/student-view-completed.component.ts");
/* harmony import */ var _component_view_graded_view_graded_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/view-graded/view-graded.component */ "./src/app/component/view-graded/view-graded.component.ts");
/* harmony import */ var _component_teacher_grade_completed_teacher_grade_completed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/teacher-grade-completed/teacher-grade-completed.component */ "./src/app/component/teacher-grade-completed/teacher-grade-completed.component.ts");

















const routes = [
    { path: "teacher-dashboard", component: _component_teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["TeacherDashboardComponent"] },
    { path: "student-dashboard", component: _component_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["StudentDashboardComponent"] },
    { path: "teacher-graded-dashboard", component: _component_teacher_graded_dashboard_teacher_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TeacherGradedDashboardComponent"] },
    { path: "student-graded-dashboard", component: _component_student_graded_dashboard_student_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["StudentGradedDashboardComponent"] },
    { path: "student-completed-dashboard", component: _component_student_completed_dashboard_student_completed_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["StudentCompletedDashboardComponent"] },
    { path: "student-take-dashboard", component: _component_student_take_dashboard_student_take_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["StudentTakeDashboardComponent"] },
    { path: "teacher-grade-dashboard", component: _component_teacher_grade_dashboard_teacher_grade_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["TeacherGradeDashboardComponent"] },
    { path: "teacher-create-dashboard", component: _component_teacher_create_dashboard_teacher_create_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["TeacherCreateDashboardComponent"] },
    { path: "student-view-completed", component: _component_student_view_completed_student_view_completed_component__WEBPACK_IMPORTED_MODULE_12__["StudentViewCompletedComponent"] },
    { path: "teacher-grade-completed", component: _component_teacher_grade_completed_teacher_grade_completed_component__WEBPACK_IMPORTED_MODULE_14__["TeacherGradeCompletedComponent"] },
    { path: "view-graded", component: _component_view_graded_view_graded_component__WEBPACK_IMPORTED_MODULE_13__["ViewGradedComponent"] },
    { path: "login", component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "register", component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: "", redirectTo: "/login", pathMatch: "full" }
    // { path: "", redirectTo: "/teacher-dashboard", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'AngularAMS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/teacher-dashboard/teacher-dashboard.component */ "./src/app/component/teacher-dashboard/teacher-dashboard.component.ts");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _component_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/content/content.component */ "./src/app/component/content/content.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/student-dashboard/student-dashboard.component */ "./src/app/component/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_student_graded_dashboard_student_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/student-graded-dashboard/student-graded-dashboard.component */ "./src/app/component/student-graded-dashboard/student-graded-dashboard.component.ts");
/* harmony import */ var _component_teacher_graded_dashboard_teacher_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/teacher-graded-dashboard/teacher-graded-dashboard.component */ "./src/app/component/teacher-graded-dashboard/teacher-graded-dashboard.component.ts");
/* harmony import */ var _component_student_completed_dashboard_student_completed_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/student-completed-dashboard/student-completed-dashboard.component */ "./src/app/component/student-completed-dashboard/student-completed-dashboard.component.ts");
/* harmony import */ var _component_teacher_create_dashboard_teacher_create_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/teacher-create-dashboard/teacher-create-dashboard.component */ "./src/app/component/teacher-create-dashboard/teacher-create-dashboard.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _component_teacher_grade_dashboard_teacher_grade_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/teacher-grade-dashboard/teacher-grade-dashboard.component */ "./src/app/component/teacher-grade-dashboard/teacher-grade-dashboard.component.ts");
/* harmony import */ var _component_student_take_dashboard_student_take_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/student-take-dashboard/student-take-dashboard.component */ "./src/app/component/student-take-dashboard/student-take-dashboard.component.ts");
/* harmony import */ var _component_create_content_create_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/create-content/create-content.component */ "./src/app/component/create-content/create-content.component.ts");
/* harmony import */ var _component_take_content_take_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/take-content/take-content.component */ "./src/app/component/take-content/take-content.component.ts");
/* harmony import */ var _component_student_view_completed_student_view_completed_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/student-view-completed/student-view-completed.component */ "./src/app/component/student-view-completed/student-view-completed.component.ts");
/* harmony import */ var _component_view_graded_view_graded_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/view-graded/view-graded.component */ "./src/app/component/view-graded/view-graded.component.ts");
/* harmony import */ var _component_teacher_grade_completed_teacher_grade_completed_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/teacher-grade-completed/teacher-grade-completed.component */ "./src/app/component/teacher-grade-completed/teacher-grade-completed.component.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _component_teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["TeacherDashboardComponent"],
        _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
        _component_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
        _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _component_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["StudentDashboardComponent"],
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _component_student_graded_dashboard_student_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["StudentGradedDashboardComponent"],
        _component_teacher_graded_dashboard_teacher_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["TeacherGradedDashboardComponent"],
        _component_student_completed_dashboard_student_completed_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["StudentCompletedDashboardComponent"],
        _component_teacher_create_dashboard_teacher_create_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["TeacherCreateDashboardComponent"],
        _component_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
        _component_teacher_grade_dashboard_teacher_grade_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["TeacherGradeDashboardComponent"],
        _component_student_take_dashboard_student_take_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["StudentTakeDashboardComponent"],
        _component_create_content_create_content_component__WEBPACK_IMPORTED_MODULE_18__["CreateContentComponent"],
        _component_take_content_take_content_component__WEBPACK_IMPORTED_MODULE_19__["TakeContentComponent"],
        _component_student_view_completed_student_view_completed_component__WEBPACK_IMPORTED_MODULE_20__["StudentViewCompletedComponent"],
        _component_view_graded_view_graded_component__WEBPACK_IMPORTED_MODULE_21__["ViewGradedComponent"],
        _component_teacher_grade_completed_teacher_grade_completed_component__WEBPACK_IMPORTED_MODULE_22__["TeacherGradeCompletedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _component_teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["TeacherDashboardComponent"],
                    _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                    _component_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                    _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _component_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["StudentDashboardComponent"],
                    _component_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _component_student_graded_dashboard_student_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["StudentGradedDashboardComponent"],
                    _component_teacher_graded_dashboard_teacher_graded_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["TeacherGradedDashboardComponent"],
                    _component_student_completed_dashboard_student_completed_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["StudentCompletedDashboardComponent"],
                    _component_teacher_create_dashboard_teacher_create_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["TeacherCreateDashboardComponent"],
                    _component_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                    _component_teacher_grade_dashboard_teacher_grade_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["TeacherGradeDashboardComponent"],
                    _component_student_take_dashboard_student_take_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["StudentTakeDashboardComponent"],
                    _component_create_content_create_content_component__WEBPACK_IMPORTED_MODULE_18__["CreateContentComponent"],
                    _component_take_content_take_content_component__WEBPACK_IMPORTED_MODULE_19__["TakeContentComponent"],
                    _component_student_view_completed_student_view_completed_component__WEBPACK_IMPORTED_MODULE_20__["StudentViewCompletedComponent"],
                    _component_view_graded_view_graded_component__WEBPACK_IMPORTED_MODULE_21__["ViewGradedComponent"],
                    _component_teacher_grade_completed_teacher_grade_completed_component__WEBPACK_IMPORTED_MODULE_22__["TeacherGradeCompletedComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/content/content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/content/content.component.ts ***!
  \********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ContentComponent_li_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", assignment_r1.course, " ", assignment_r1.assignmentType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", assignment_r1.assignmentName, " \u25CF ", assignment_r1.teacherName, "");
} }
function ContentComponent_li_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", assignment_r1.course, " ", assignment_r1.assignmentType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", assignment_r1.assignmentName, " \u25CF ", assignment_r1.studentName, "");
} }
function ContentComponent_li_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", assignment_r1.dueDate.date, " ", assignment_r1.dueDate.time, "");
} }
function ContentComponent_li_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Completion Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", assignment_r1.completionDate.date, " ", assignment_r1.completionDate.time, "");
} }
function ContentComponent_li_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](assignment_r1.grade);
} }
function ContentComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentComponent_li_5_div_1_Template, 5, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentComponent_li_5_div_2_Template, 5, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentComponent_li_5_div_3_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContentComponent_li_5_div_4_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContentComponent_li_5_div_5_Template, 5, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignment_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewer === "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewer === "Teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", assignment_r1.assignmentStatus === "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", assignment_r1.assignmentStatus === "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", assignment_r1.assignmentStatus === "Graded");
} }
class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], inputs: { name: "name", listOfAssignments: "listOfAssignments", viewer: "viewer" }, decls: 6, vars: 2, consts: [["id", "content"], ["id", "content-greeting"], ["id", "list"], [4, "ngFor", "ngForOf"], ["class", "left-info", 4, "ngIf"], ["class", "right-info", 4, "ngIf"], [1, "left-info"], [1, "name"], [1, "detail"], [1, "right-info"], [1, "label"], [1, "value"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContentComponent_li_5_Template, 6, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.name, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfAssignments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#content[_ngcontent-%COMP%] {\n \n}\n\n#content-greeting[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;  \n}\n\n#content-greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(39, 39, 39);\n  font-size: 2rem;\n}\n\n#list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0rem 2rem 2rem 2rem;\n  margin: 0;\n}\n\n#list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  margin: 1rem 0rem;\n  padding: 1rem 1rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: rgba(146, 146, 146, 0.884); \n}\n\n#list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-color:#63351E;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 300;\n  margin-bottom: 0.5rem;\n}\n\n.detail[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-indent: 1rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.left-info[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  text-align: left;\n}\n\n.right-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XG4gXG59XG5cbiNjb250ZW50LWdyZWV0aW5nIHtcbiAgcGFkZGluZzogMnJlbSAycmVtOyAgXG59XG5cbiNjb250ZW50LWdyZWV0aW5nIHAge1xuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbiNsaXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwcmVtIDJyZW0gMnJlbSAycmVtO1xuICBtYXJnaW46IDA7XG59XG5cbiNsaXN0IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQ2LCAxNDYsIDE0NiwgMC44ODQpOyBcbn1cblxuI2xpc3QgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjojNjMzNTFFO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWluZGVudDogMXJlbTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubGVmdC1pbmZvIHtcbiAgZmxleDogMSAxIDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmlnaHQtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfAssignments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/create-content/create-content.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/create-content/create-content.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContentComponent", function() { return CreateContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CreateContentComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateContentComponent_div_46_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const i_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeQuestion(i_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "question", i_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "point", i_r1, "");
} }
class CreateContentComponent {
    constructor(fb) {
        this.fb = fb;
        this.questions = [0];
        this.createAssignmentForm = this.fb.group({
            assignmentType: [''],
            assignmentTitle: [''],
            assignToClass: [''],
            assignToSchool: [''],
            dueDate: [''],
            dueTime: [''],
            question0: [''],
            point0: ['']
        });
    }
    ngOnInit() {
    }
    addQuestion() {
        let newQuestion;
        if (this.questions.length === 0) {
            newQuestion = 0;
        }
        else {
            newQuestion = this.questions[this.questions.length - 1] + 1;
        }
        let label = "question" + newQuestion;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.createAssignmentForm.addControl(label, formControl);
        label = "point" + newQuestion;
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.createAssignmentForm.addControl(label, formControl);
        this.questions.push(newQuestion);
    }
    removeQuestion(i) {
        let index = this.questions.indexOf(i);
        this.questions.splice(index, 1);
        this.createAssignmentForm.removeControl("question" + i);
        this.createAssignmentForm.removeControl("point" + i);
    }
    onSubmit() {
        let submitObject = {
            questions: this.questions,
            form: this.createAssignmentForm.value
        };
        console.log(submitObject);
    }
}
CreateContentComponent.ɵfac = function CreateContentComponent_Factory(t) { return new (t || CreateContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateContentComponent, selectors: [["app-create-content"]], decls: 53, vars: 10, consts: [["id", "content-container"], ["id", "content-form", 3, "formGroup"], [1, "form-element"], ["formControlName", "assignmentType", 1, "select"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["type", "text", "placeholder", "Enter Assignment Title", "formControlName", "assignmentTitle", 1, "text-input"], ["formControlName", "assignToClass", 1, "select"], ["for", "dueDate"], ["type", "date", "formControlName", "dueDate", "name", "dueDate"], ["for", "time", "id", "time"], ["type", "time", "formControlName", "dueDate", "name", "time"], ["class", "form-element", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "text", "placeholder", "Enter Your Question Here", 1, "question", 3, "formControlName"], ["type", "text", "placeholder", "Points", 1, "point", 3, "formControlName"]], template: function CreateContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose Assignment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose Assignment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Homework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Assignment Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Assign To Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Choose Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1-201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2-201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "4-201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Due Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Select a time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateContentComponent_div_46_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateContentComponent_Template_button_click_48_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Add Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateContentComponent_Template_button_click_51_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Create Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createAssignmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "Homework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "1-201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "2-201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "4-201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#content-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n#content-form[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color:#63351E;\n  text-align: center;\n  overflow: auto;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-top: 1rem;\n  font-weight: bold;\n}\n\n#time[_ngcontent-%COMP%]{\n  padding-left: 2em;\n}\n\n.form-element[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n}\n\n.select[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem; \n  font-size: 1rem;\n  width: 22rem;\n}\n\n.text-input[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem; \n  font-size: 1rem;\n  width: 20rem;\n}\n\n.question[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem; \n  font-size: 1rem;\n  flex: 1 1 0%;  \n}\n\n.point[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem; \n  margin-left: 1rem; \n  font-size: 1rem;\n  width: 5rem;   \n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 1.25rem;\n  background-color: #eeeeee;\n  border-style: solid;\n  border-color: #dddddd;\n  border-radius: 0.5rem;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder { \n  color: rgb(109, 109, 109);\n  opacity: 1; \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder { \n  color: rgb(109, 109, 109);\n  opacity: 1; \n}\n\n[_ngcontent-%COMP%]::placeholder { \n  color: rgb(109, 109, 109);\n  opacity: 1; \n}\n\nselect[_ngcontent-%COMP%]:required:invalid {\n  color: #666;\n}\n\noption[value=\"\"][disabled][_ngcontent-%COMP%] {\n  display: none;\n  color: gray;\n}\n\n[_ngcontent-%COMP%]::-webkit-datetime-edit { padding: 1em 5em 1em 5em};\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button { display: none; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NyZWF0ZS1jb250ZW50L2NyZWF0ZS1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEscUJBQWdCLHlDQUF5QztFQUN2RCx5QkFBeUI7RUFDekIsVUFBVSxFQUFFLFlBQVk7QUFDMUI7O0FBSEEsMEJBQWdCLHlDQUF5QztFQUN2RCx5QkFBeUI7RUFDekIsVUFBVSxFQUFFLFlBQVk7QUFDMUI7O0FBSEEsZ0JBQWdCLHlDQUF5QztFQUN2RCx5QkFBeUI7RUFDekIsVUFBVSxFQUFFLFlBQVk7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUdBLDBCQUEwQix3QkFBd0IsQ0FBQTs7QUFDbEQsOEJBQThCLGFBQWEsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jcmVhdGUtY29udGVudC9jcmVhdGUtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuI2NvbnRlbnQtZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiM2MzM1MUU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RpbWV7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xufVxuXG5cbi5mb3JtLWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNXJlbTsgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDIycmVtO1xufVxuXG4udGV4dC1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW07IFxuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAyMHJlbTtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNXJlbTsgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZmxleDogMSAxIDAlOyAgXG59XG5cbi5wb2ludCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW07IFxuICBtYXJnaW4tbGVmdDogMXJlbTsgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDVyZW07ICAgXG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG59XG5cbnNlbGVjdDpyZXF1aXJlZDppbnZhbGlkIHtcbiAgY29sb3I6ICM2NjY7XG59XG5vcHRpb25bdmFsdWU9XCJcIl1bZGlzYWJsZWRdIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IGdyYXk7XG59XG5cblxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQgeyBwYWRkaW5nOiAxZW0gNWVtIDFlbSA1ZW19OyBcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7IGRpc3BsYXk6IG5vbmU7IH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-content',
                templateUrl: './create-content.component.html',
                styleUrls: ['./create-content.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function HeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor() {
        this.headerTitle = "Dashboard";
        this.headerLogout = true;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { headerTitle: "headerTitle", headerLogout: "headerLogout" }, decls: 5, vars: 2, consts: [["id", "header"], ["id", "header-title"], ["id", "header-account", 4, "ngIf"], ["id", "header-account"], ["id", "logout"], ["src", "../../../assets/Pictures/logout.png", "alt", "Log Out", "routerLink", "/login", 2, "height", "70px", "width", "70px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerLogout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n  background-color: #BAABD4;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: rgb(115, 30, 141); \n}\n\n  \n#header-account[_ngcontent-%COMP%] {\n  \n  text-align: center;\n}\n\n  \n#header-account[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n  \n#header-account[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n  \n#header-title[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  padding: 1.5rem 1rem;\n  text-align: center;\n}\n\n  \n#header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n  \n#logout[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkZBQTJGO0VBQzNGLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsc0NBQXNDO0FBQ3hDOzs7QUFHQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kueWEtd2ViZGVzaWduLmNvbS9pbWFnZXMvcGluay10cmFuc3BhcmVudC1wbmctNi5wbmdcIik7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQUFCRDQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMTE1LCAzMCwgMTQxKTsgXG59XG5cbiAgXG4jaGVhZGVyLWFjY291bnQge1xuICAvKiBwYWRkaW5nOiAycmVtIDEuNXJlbTsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbiNoZWFkZXItYWNjb3VudCBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jaGVhZGVyLWFjY291bnQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNoZWFkZXItdGl0bGUge1xuICBmbGV4OiAxIDEgMCU7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNoZWFkZXItdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI2xvZ291dCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { headerTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerLogout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");






class LoginComponent {
    constructor(sidebarOptionsService, fb) {
        this.sidebarOptionsService = sidebarOptionsService;
        this.fb = fb;
        this.loginForm = this.fb.group({
            userId: [''],
            userPassword: ['']
        });
        this.headerTitle = "Welcome";
        this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions("/login");
    }
    submit() {
        console.log(this.loginForm.value);
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], [3, "headerTitle", "headerLogout"], ["id", "content-div"], ["id", "login", 3, "formGroup"], ["for", "userId"], ["type", "text", "placeholder", "Enter ID", "formControlName", "userId", "required", ""], ["for", "userPassword"], ["type", "password", "placeholder", "Enter Password", "formControlName", "userPassword", "required", ""], ["type", "submit", "value", "Login", "id", "login-button-container", 1, "button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerTitle", ctx.headerTitle)("headerLogout", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["#root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n    \n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;   \n    display: flex;\n    justify-content: center;\n  }\n  \n  #login-button-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    font-size: 1.25rem;\n    background-color:#63351E;\n    border: none;\n    border-radius: 12px;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin: 8px 15px;\n    cursor: pointer;\n  }\n  \n  #login-button-container[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n  \n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n  \n  #login[_ngcontent-%COMP%]{\n    color: white;\n    font-size:  1.25rem;\n    background-image: url(\"https://sun9-66.userapi.com/85A6KdSxu1wR5UD_xBdIqtT3u2E45__ngGB57w/z3k3nfC4n2o.jpg\");\n    background-repeat: no-repeat;\n  background-size: 100% 100%;\n    margin-top: 2rem;\n    background-color: white;\n    padding: 3rem;\n    border-style: solid;\n    border-radius: 0.5rem;\n    border-color: black;\n    width: 450px;\n  }\n  \n  #login[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRJQUE0STtHQUM3SSw0QkFBNEI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBOztFQUVBOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7O0VBR0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJHQUEyRztJQUMzRyw0QkFBNEI7RUFDOUIsMEJBQTBCO0lBQ3hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFRDtFQUNDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0NBQ3hCOztFQUVDO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb290LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gICNtYWluLWRpdiB7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Zpc21lLmNvL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDcvNTAtQmVhdXRpZnVsLWFuZC1NaW5pbWFsaXN0LVByZXNlbnRhdGlvbi1CYWNrZ3JvdW5kcy0wMjMuanBnXCIpOyAqL1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAjaGVhZGVyLWRpdiB7XG4gICAgXG4gIH1cbiAgXG4gICNjb250ZW50LWRpdiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICNsb2dpbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MzM1MUU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDhweCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICNsb2dpbi1idXR0b24tY29udGFpbmVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG5cbiAgI2xvZ2lue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6ICAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vc3VuOS02Ni51c2VyYXBpLmNvbS84NUE2S2RTeHUxd1I1VURfeEJkSXF0VDN1MkU0NV9fbmdHQjU3dy96M2szbmZDNG4yby5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG4gIFxuICNsb2dpbiA+IGRpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIH1cblxuICAjc2lkZWJhci1kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMzM7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH0gXG4gIFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function RegisterComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "School");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_18_Template_input_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.registerStudentForm);
} }
function RegisterComponent_form_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "School");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_19_Template_input_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.registerTeacherForm);
} }
class RegisterComponent {
    constructor(sidebarOptionsService, fb) {
        this.sidebarOptionsService = sidebarOptionsService;
        this.fb = fb;
        this.isStudent = true;
        this.registerTeacherForm = this.fb.group({
            teacherId: [''],
            teacherFirstName: [''],
            teacherLastName: [''],
            teacherEmail: [''],
            teacherPassword: [''],
            teacherSubject: [''],
            teacherSchool: [''],
        });
        this.registerStudentForm = this.fb.group({
            studentId: [''],
            studentFirstName: [''],
            studentLastName: [''],
            studentEmail: [''],
            studentPassword: [''],
            studentClass: [''],
            studentSchool: [''],
        });
        this.headerTitle = "Welcome";
        this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions('/register');
    }
    submit() {
        if (this.isStudent) {
            console.log(this.registerStudentForm.value);
        }
        else {
            console.log(this.registerTeacherForm.value);
        }
    }
    setUser(userType) {
        this.isStudent = userType;
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 5, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], [3, "headerTitle", "headerLogout"], ["id", "content-div"], ["id", "register"], [1, "onoffswitch"], ["type", "checkbox", "name", "onoffswitch", "id", "myonoffswitch", "tabindex", "0", "checked", "", 1, "onoffswitch-checkbox"], ["for", "myonoffswitch", 1, "onoffswitch-label"], [1, "onoffswitch-inner", 3, "click"], [1, "onoffswitch-switch"], [3, "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["id", "input-items"], ["id", "left-items"], ["for", "studentFirstName"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "studentFirstName", "required", ""], ["for", "studentId"], ["type", "text", "placeholder", "Enter ID", "formControlName", "studentId", "required", ""], ["for", "studentSchool"], ["type", "text", "placeholder", "Enter School", "formControlName", "studentSchool", "required", ""], ["for", "studentClass"], ["type", "text", "placeholder", "Enter Class", "formControlName", "studentEmail", "required", ""], ["id", "right-items"], ["for", "studentLastName"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "studentLastName", "required", ""], ["for", "studentEmail"], ["type", "email", "placeholder", "Enter Email", "formControlName", "studentEmail", "required", ""], ["for", "studentPassword"], ["type", "password", "placeholder", "Enter Password", "formControlName", "studentPassword", "required", ""], ["type", "submit", "value", "Register", "id", "login-button-container", 1, "button", 3, "click"], ["for", "teacherFirstName"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "teacherFirstName", "required", ""], ["for", "teacherId"], ["type", "text", "placeholder", "Enter ID", "formControlName", "teacherId", "required", ""], ["for", "teacherSchool"], ["type", "text", "placeholder", "Enter School", "formControlName", "teacherSchool", "required", ""], ["for", "teacherSubject"], ["type", "text", "placeholder", "Enter Subject", "formControlName", "teacherSubject", "required", ""], ["for", "teacherLastName"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "teacherLastName", "required", ""], ["for", "teacherEmail"], ["type", "email", "placeholder", "Enter Email", "formControlName", "teacherEmail", "required", ""], ["for", "teacherPassword"], ["type", "password", "placeholder", "Enter Password", "formControlName", "teacherPassword", "required", ""]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_11_listener() { return ctx.setUser(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_14_listener() { return ctx.setUser(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_16_listener() { return ctx.setUser(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_form_18_Template, 48, 1, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_form_19_Template, 48, 1, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerTitle", ctx.headerTitle)("headerLogout", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStudent);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["#root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n    background-color: white;\n    text-align: center;\n    color: #000033;\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;   \n    padding: 1rem 10rem;\n  }\n  \n  #login-button-container[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    font-size: 1.25rem;\n    background-color:#63351E;\n    border: none;\n    border-radius: 12px;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin: 8px 15px;\n    cursor: pointer;\n  }\n  \n  #login-button-container[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n  \n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    margin: 8px 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n  \n  #register[_ngcontent-%COMP%] {\n    color: white;\n    font-size:  1.25rem;\n    background-image: url(\"https://sun9-66.userapi.com/85A6KdSxu1wR5UD_xBdIqtT3u2E45__ngGB57w/z3k3nfC4n2o.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    background-color: white;\n    padding: 3rem;\n    border-style: solid;\n    border-radius: 0.5rem;\n    border-color: black;\n  }\n  \n  #register[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 1rem 0rem;\n  }\n  \n  #input-items[_ngcontent-%COMP%]  {\n    display: flex;\n    justify-content: center;\n  }\n  \n  #input-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 0rem 3rem;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n  \n  \n  \n  .onoffswitch[_ngcontent-%COMP%] {\n  position: relative; width: 200px;\n  -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\n}\n  \n  .onoffswitch-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n  \n  .onoffswitch-label[_ngcontent-%COMP%] {\n  display: block; overflow: hidden; cursor: pointer;\n  border: 2px solid #999999; border-radius: 12px;\n}\n  \n  .onoffswitch-inner[_ngcontent-%COMP%] {\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n  \n  .onoffswitch-inner[_ngcontent-%COMP%]:before, .onoffswitch-inner[_ngcontent-%COMP%]:after {\n  display: block; float: left; width: 50%; height: 52px; padding: 0; line-height: 52px;\n  font-size: 20px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\n  box-sizing: border-box;\n}\n  \n  .onoffswitch-inner[_ngcontent-%COMP%]:before {\n  content: \"STUDENT\";\n  padding-left: 18px;\n  background-color: #C4C4C4; color: #FFFFFF;\n}\n  \n  .onoffswitch-inner[_ngcontent-%COMP%]:after {\n  content: \"TEACHER\";\n  padding-right: 18px;\n  background-color: #C4C4C4; color: #FFFFFF;\n  text-align: right;\n}\n  \n  .onoffswitch-switch[_ngcontent-%COMP%] {\n  display: block; width: 30px; margin: 11px;\n  background: #FFFFFF;\n  position: absolute; top: 0; bottom: 0;\n  right: 144px;\n  border: 2px solid #999999; border-radius: 12px;\n  transition: all 0.3s ease-in 0s; \n}\n  \n  .onoffswitch-checkbox[_ngcontent-%COMP%]:checked    + .onoffswitch-label[_ngcontent-%COMP%]   .onoffswitch-inner[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n  \n  .onoffswitch-checkbox[_ngcontent-%COMP%]:checked    + .onoffswitch-label[_ngcontent-%COMP%]   .onoffswitch-switch[_ngcontent-%COMP%] {\n  right: 0px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRJQUE0STtHQUM3SSw0QkFBNEI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7O0VBR0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJHQUEyRztJQUMzRyw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFRixZQUFZOztFQUVaO0VBQ0Usa0JBQWtCLEVBQUUsWUFBWTtFQUNoQyx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUI7QUFDeEU7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlO0VBQ2pELHlCQUF5QixFQUFFLG1CQUFtQjtBQUNoRDs7RUFDQTtFQUNFLGNBQWMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCO0VBQy9DLGtDQUFrQztBQUNwQzs7RUFDQTtFQUNFLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCO0VBQ3BGLGVBQWUsRUFBRSxZQUFZLEVBQUUseUNBQXlDLEVBQUUsaUJBQWlCO0VBQzNGLHNCQUFzQjtBQUN4Qjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUUsY0FBYztBQUMzQzs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUUsY0FBYztFQUN6QyxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVk7RUFDekMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxTQUFTO0VBQ3JDLFlBQVk7RUFDWix5QkFBeUIsRUFBRSxtQkFBbUI7RUFDOUMsK0JBQStCO0FBQ2pDOztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7RUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jvb3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgI21haW4tZGl2IHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdmlzbWUuY28vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy81MC1CZWF1dGlmdWwtYW5kLU1pbmltYWxpc3QtUHJlc2VudGF0aW9uLUJhY2tncm91bmRzLTAyMy5qcGdcIik7ICovXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICNoZWFkZXItZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMzM7XG4gIH1cbiAgXG4gICNjb250ZW50LWRpdiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87ICAgXG4gICAgcGFkZGluZzogMXJlbSAxMHJlbTtcbiAgfVxuXG4gICNsb2dpbi1idXR0b24tY29udGFpbmVyLCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzYzMzUxRTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgI2xvZ2luLWJ1dHRvbi1jb250YWluZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG5cbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuXG4gICNyZWdpc3RlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogIDEuMjVyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdW45LTY2LnVzZXJhcGkuY29tLzg1QTZLZFN4dTF3UjVVRF94QmRJcXRUM3UyRTQ1X19uZ0dCNTd3L3ozazNuZkM0bjJvLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgfVxuIFxuICAjcmVnaXN0ZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDByZW07XG4gIH1cblxuICAjaW5wdXQtaXRlbXMgIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgI2lucHV0LWl0ZW1zIGRpdiB7XG4gICAgbWFyZ2luOiAwcmVtIDNyZW07XG4gIH1cbiAgXG4gICNzaWRlYmFyLWRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfSBcbiAgXG4vKiBUT0dHTEUgICovXG5cbi5vbm9mZnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDIwMHB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7IC1tb3otdXNlci1zZWxlY3Q6bm9uZTsgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuLm9ub2Zmc3dpdGNoLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5vbm9mZnN3aXRjaC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk5OTk7IGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ub25vZmZzd2l0Y2gtaW5uZXIge1xuICBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDIwMCU7IG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwcztcbn1cbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUsIC5vbm9mZnN3aXRjaC1pbm5lcjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MnB4OyBwYWRkaW5nOiAwOyBsaW5lLWhlaWdodDogNTJweDtcbiAgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiBUcmVidWNoZXQsIEFyaWFsLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlNUVURFTlRcIjtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0OyBjb2xvcjogI0ZGRkZGRjtcbn1cbi5vbm9mZnN3aXRjaC1pbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiVEVBQ0hFUlwiO1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0OyBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ub25vZmZzd2l0Y2gtc3dpdGNoIHtcbiAgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAzMHB4OyBtYXJnaW46IDExcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBib3R0b206IDA7XG4gIHJpZ2h0OiAxNDRweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzk5OTk5OTsgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwczsgXG59XG4ub25vZmZzd2l0Y2gtY2hlY2tib3g6Y2hlY2tlZCArIC5vbm9mZnN3aXRjaC1sYWJlbCAub25vZmZzd2l0Y2gtaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5vbm9mZnN3aXRjaC1jaGVja2JveDpjaGVja2VkICsgLm9ub2Zmc3dpdGNoLWxhYmVsIC5vbm9mZnN3aXRjaC1zd2l0Y2gge1xuICByaWdodDogMHB4OyBcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function SidebarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", option_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", option_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.name);
} }
class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { sidebarOptions: "sidebarOptions" }, decls: 4, vars: 1, consts: [["id", "sidebar"], ["id", "logo"], ["src", "../../../assets/Pictures/download (7).gif", "alt", "Revature School", 2, "height", "108.4px"], ["class", "sidebar-option", 3, "routerLink", "selected", 4, "ngFor", "ngForOf"], [1, "sidebar-option", 3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#sidebar[_ngcontent-%COMP%] {\n  \n  \n  background: #312450;\n  height: 100%;\n  width: 18rem;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-right-color: violet;\n  \n} \n  \n#sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n} \n  \n#logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  cursor: pointer;\n} \n  \n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5.5rem;\n  width: 18rem;\n} \n  \n.sidebar-option[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 2rem;\n  border-left-style: solid;\n  border-left-width: 3px;\n  \n  \n} \n  \n.sidebar-option[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%] {\n  background-color: #202020;\n  opacity: 0.7;\n  border-left-style: solid;\n  border-left-width: 3px;\n  border-left-color: #eeeeff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUdBQXFHO0VBQ3JHLDJHQUEyRztFQUMzRyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCOztBQUU1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsZ0NBQWdDOztBQUVsQzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIHtcbiAgLyogYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2MzLzM5L2JmL2MzMzliZjg0ZmVkNjU0OWJlNTM3ZTlhMDA2ODM4MDVkLmpwZ1wiKTsgKi9cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzIzLzc3LzFjLzIzNzcxYzVjZmE4NzY0NzcyYTFjZDU2MGM4N2E4ZmFmLmpwZ1wiKTsgKi9cbiAgYmFja2dyb3VuZDogIzMxMjQ1MDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMThyZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZpb2xldDtcbiAgXG59IFxuICBcbiNzaWRlYmFyIGgxLCAjc2lkZWJhciBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2xvZ28gaW1nIHtcbiAgaGVpZ2h0OiA1LjVyZW07XG4gIHdpZHRoOiAxOHJlbTtcbn1cbiAgXG4uc2lkZWJhci1vcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHg7XG4gIC8qIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDMzOyAqL1xuICBcbn1cblxuXG4uc2lkZWJhci1vcHRpb246aG92ZXIsIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIG9wYWNpdHk6IDAuNztcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdC13aWR0aDogM3B4O1xuICBib3JkZXItbGVmdC1jb2xvcjogI2VlZWVmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, { sidebarOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/student-completed-dashboard/student-completed-dashboard.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/component/student-completed-dashboard/student-completed-dashboard.component.ts ***!
  \************************************************************************************************/
/*! exports provided: StudentCompletedDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCompletedDashboardComponent", function() { return StudentCompletedDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/component/content/content.component.ts");






class StudentCompletedDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'John Doe';
        this.viewer = 'Student';
        this.listOfAssignments = [
            {
                course: "History",
                assignmentType: "Exam",
                assignmentStatus: "Completed",
                assignmentName: "US History (1600s-1776)",
                teacherName: "Mrs. Jane Doe",
                studentName: "John Doe",
                dueDate: {
                    date: "06-10-2020",
                    time: "5:00 PM"
                },
                completionDate: {
                    date: "06-10-2020",
                    time: "4:45 PM"
                },
                gradedDate: {
                    date: "06-11-2020",
                    time: "7:45 PM"
                },
                grade: null
            }
        ];
        this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-completed-dashboard");
    }
    ngOnInit() {
    }
}
StudentCompletedDashboardComponent.ɵfac = function StudentCompletedDashboardComponent_Factory(t) { return new (t || StudentCompletedDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
StudentCompletedDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCompletedDashboardComponent, selectors: [["app-student-completed-dashboard"]], decls: 8, vars: 4, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], [3, "name", "listOfAssignments", "viewer"]], template: function StudentCompletedDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("listOfAssignments", ctx.listOfAssignments)("viewer", ctx.viewer);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n     overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQtY29tcGxldGVkLWRhc2hib2FyZC9zdHVkZW50LWNvbXBsZXRlZC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNElBQTRJO0dBQzdJLDRCQUE0QjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0tBQ3pCLGdCQUFnQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7RUFDQTs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBR0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdHVkZW50LWNvbXBsZXRlZC1kYXNoYm9hcmQvc3R1ZGVudC1jb21wbGV0ZWQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAjbWFpbi1kaXYge1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aXNtZS5jby9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3LzUwLUJlYXV0aWZ1bC1hbmQtTWluaW1hbGlzdC1QcmVzZW50YXRpb24tQmFja2dyb3VuZHMtMDIzLmpwZ1wiKTsgKi9cbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICNoZWFkZXItZGl2IHtcbiAgfVxuICBcbiAgI2NvbnRlbnQtZGl2IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgXG4gICNzaWRlYmFyLWRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfSBcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentCompletedDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-completed-dashboard',
                templateUrl: './student-completed-dashboard.component.html',
                styleUrls: ['./student-completed-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/student-dashboard/student-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/student-dashboard/student-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: StudentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function() { return StudentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/component/content/content.component.ts");






class StudentDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'John Doe';
        this.viewer = 'Student';
        this.listOfAssignments = [
            {
                course: "History",
                assignmentType: "Exam",
                assignmentStatus: "New",
                assignmentName: "US History (1600s-1776)",
                teacherName: "Mrs. Jane Doe",
                studentName: "John Doe",
                dueDate: {
                    date: "06-10-2020",
                    time: "5:00 PM"
                },
                completionDate: {
                    date: null,
                    time: null
                },
                gradedDate: {
                    date: "06-11-2020",
                    time: "7:45 PM"
                },
                grade: null
            }
        ];
        this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-dashboard");
    }
    ngOnInit() {
    }
}
StudentDashboardComponent.ɵfac = function StudentDashboardComponent_Factory(t) { return new (t || StudentDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
StudentDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 8, vars: 4, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], [3, "name", "listOfAssignments", "viewer"]], template: function StudentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("listOfAssignments", ctx.listOfAssignments)("viewer", ctx.viewer);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n   \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0dBQ3ZCLDRJQUE0STtHQUM1SSw0QkFBNEI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0VBQ0E7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb290LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gICNtYWluLWRpdiB7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdmlzbWUuY28vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy81MC1CZWF1dGlmdWwtYW5kLU1pbmltYWxpc3QtUHJlc2VudGF0aW9uLUJhY2tncm91bmRzLTAyMy5qcGdcIik7ICovXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICNoZWFkZXItZGl2IHtcbiAgfVxuICBcbiAgI2NvbnRlbnQtZGl2IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgXG4gICNzaWRlYmFyLWRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfSBcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-dashboard',
                templateUrl: './student-dashboard.component.html',
                styleUrls: ['./student-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/student-graded-dashboard/student-graded-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/student-graded-dashboard/student-graded-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StudentGradedDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGradedDashboardComponent", function() { return StudentGradedDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/component/content/content.component.ts");






class StudentGradedDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'John Doe';
        this.viewer = 'Student';
        this.listOfAssignments = [
            {
                course: "History",
                assignmentType: "Exam",
                assignmentStatus: "Graded",
                assignmentName: "US History (1600s-1776)",
                teacherName: "Mrs. Jane Doe",
                studentName: "John Doe",
                dueDate: {
                    date: "06-10-2020",
                    time: "5:00 PM"
                },
                completionDate: {
                    date: "06-10-2020",
                    time: "4:45 PM"
                },
                gradedDate: {
                    date: "06-11-2020",
                    time: "7:45 PM"
                },
                grade: 80
            }
        ];
        this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-graded-dashboard");
    }
    ngOnInit() {
    }
}
StudentGradedDashboardComponent.ɵfac = function StudentGradedDashboardComponent_Factory(t) { return new (t || StudentGradedDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
StudentGradedDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentGradedDashboardComponent, selectors: [["app-student-graded-dashboard"]], decls: 8, vars: 4, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], [3, "name", "listOfAssignments", "viewer"]], template: function StudentGradedDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("listOfAssignments", ctx.listOfAssignments)("viewer", ctx.viewer);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#main-div[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  display: flex;\n  flex-direction: column;\n  \n  background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  overflow: hidden;\n  height: 100%;\n}\n\n#header-div[_ngcontent-%COMP%] {\n}\n\n#content-div[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n#sidebar-div[_ngcontent-%COMP%] {\n  background-color: #000033;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQtZ3JhZGVkLWRhc2hib2FyZC9zdHVkZW50LWdyYWRlZC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNElBQTRJO0VBQzVJLDRCQUE0QjtJQUMxQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0VBQzVCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdHVkZW50LWdyYWRlZC1kYXNoYm9hcmQvc3R1ZGVudC1ncmFkZWQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbWFpbi1kaXYge1xuICBmbGV4OiAxIDEgMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdmlzbWUuY28vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy81MC1CZWF1dGlmdWwtYW5kLU1pbmltYWxpc3QtUHJlc2VudGF0aW9uLUJhY2tncm91bmRzLTAyMy5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaGVhZGVyLWRpdiB7XG59XG5cbiNjb250ZW50LWRpdiB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbiNzaWRlYmFyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMzM7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0gXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGradedDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-graded-dashboard',
                templateUrl: './student-graded-dashboard.component.html',
                styleUrls: ['./student-graded-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/student-take-dashboard/student-take-dashboard.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/component/student-take-dashboard/student-take-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentTakeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTakeDashboardComponent", function() { return StudentTakeDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _take_content_take_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../take-content/take-content.component */ "./src/app/component/take-content/take-content.component.ts");






class StudentTakeDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'John Doe';
        this.viewer = 'Student';
        this.sidebarOptions = sidebarOptionsService.studentSideOptions('/student-dashboard');
    }
    ngOnInit() {
    }
}
StudentTakeDashboardComponent.ɵfac = function StudentTakeDashboardComponent_Factory(t) { return new (t || StudentTakeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
StudentTakeDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentTakeDashboardComponent, selectors: [["app-student-take-dashboard"]], decls: 8, vars: 1, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"]], template: function StudentTakeDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-take-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _take_content_take_content_component__WEBPACK_IMPORTED_MODULE_4__["TakeContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#main-div[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  display: flex;\n  flex-direction: column;\n  \n  background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  overflow: hidden;\n  height: 100%;\n}\n\n#header-div[_ngcontent-%COMP%] {\n}\n\n#content-div[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n#sidebar-div[_ngcontent-%COMP%] {\n  background-color: #000033;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQtdGFrZS1kYXNoYm9hcmQvc3R1ZGVudC10YWtlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0SUFBNEk7RUFDNUksNEJBQTRCO0lBQzFCLDRCQUE0QjtJQUM1QiwwQkFBMEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQtdGFrZS1kYXNoYm9hcmQvc3R1ZGVudC10YWtlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jvb3QtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI21haW4tZGl2IHtcbiAgZmxleDogMSAxIDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Zpc21lLmNvL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDcvNTAtQmVhdXRpZnVsLWFuZC1NaW5pbWFsaXN0LVByZXNlbnRhdGlvbi1CYWNrZ3JvdW5kcy0wMjMuanBnXCIpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2hlYWRlci1kaXYge1xufVxuXG4jY29udGVudC1kaXYge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4jc2lkZWJhci1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDMzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59IFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentTakeDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-take-dashboard',
                templateUrl: './student-take-dashboard.component.html',
                styleUrls: ['./student-take-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/student-view-completed/student-view-completed.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/component/student-view-completed/student-view-completed.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentViewCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentViewCompletedComponent", function() { return StudentViewCompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");





class StudentViewCompletedComponent {
    constructor(sidebarOptionsService) {
        this.assignment = {
            course: "History",
            assignmentType: "Exam",
            assignmentStatus: "COMPLETED",
            assignmentName: "US History (1600s-1776)",
            teacherName: "Mrs. Jane Doe",
            studentName: "John Doe",
            dueDate: {
                date: "06-10-2020",
                time: "5:00 PM"
            },
            completionDate: {
                date: "06-10-2020",
                time: "4:45 PM"
            },
            gradedDate: {
                date: "06-11-2020",
                time: "7:45 PM"
            },
            grade: 80
        };
        this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-completed-dashboard");
    }
    ngOnInit() {
    }
}
StudentViewCompletedComponent.ɵfac = function StudentViewCompletedComponent_Factory(t) { return new (t || StudentViewCompletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
StudentViewCompletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentViewCompletedComponent, selectors: [["app-student-view-completed"]], decls: 54, vars: 8, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], ["id", "content-container"], ["id", "take-form"], [1, "form-item"], [1, "heading"], [1, "subheading"], [1, "form-item", "questions-div"], [1, "question"], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Some answer..."], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Enter Answer Here."]], template: function StudentViewCompletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assignment.assignmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.assignment.course, " ", ctx.assignment.assignmentType, " by ", ctx.assignment.teacherName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Student: ", ctx.assignment.studentName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Please complete by ", ctx.assignment.dueDate.date, " ", ctx.assignment.dueDate.time, "");
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], styles: ["#content-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  \n  #take-form[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 1rem;\n    border-style: solid;\n    border-width: 2px;\n    border-color:#63351E;\n    text-align: center;\n    overflow: auto;\n  }\n  \n  .heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .subheading[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  \n  .form-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0.5rem;\n  }\n  \n  .questions-div[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  \n  .question[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    text-align: left;\n  }\n  \n  textarea[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.5rem;\n    overflow-y: scroll;\n    width: 60rem;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 1.25rem;\n    background-color: #eeeeee;\n    border-style: solid;\n    border-color: #dddddd;\n    border-radius: 0.5rem;\n    margin-left: 1rem;\n    cursor: pointer;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    background-color: #cccccc;\n  }\n  \n  #root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0dWRlbnQtdmlldy1jb21wbGV0ZWQvc3R1ZGVudC12aWV3LWNvbXBsZXRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRJQUE0STtHQUM3SSw0QkFBNEI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0VBQ0E7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc3R1ZGVudC12aWV3LWNvbXBsZXRlZC9zdHVkZW50LXZpZXctY29tcGxldGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgXG4gICN0YWtlLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6IzYzMzUxRTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5zdWJoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG4gIFxuICAucXVlc3Rpb25zLWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuICBcbiAgLnF1ZXN0aW9uIHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiA2MHJlbTtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICB9XG5cbiAgI3Jvb3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgI21haW4tZGl2IHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdmlzbWUuY28vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy81MC1CZWF1dGlmdWwtYW5kLU1pbmltYWxpc3QtUHJlc2VudGF0aW9uLUJhY2tncm91bmRzLTAyMy5qcGdcIik7ICovXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICNoZWFkZXItZGl2IHtcbiAgfVxuICBcbiAgI2NvbnRlbnQtZGl2IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgXG4gICNzaWRlYmFyLWRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfSBcbiAgXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentViewCompletedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-view-completed',
                templateUrl: './student-view-completed.component.html',
                styleUrls: ['./student-view-completed.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/take-content/take-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/take-content/take-content.component.ts ***!
  \******************************************************************/
/*! exports provided: TakeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeContentComponent", function() { return TakeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TakeContentComponent {
    constructor() {
        this.assignment = {
            course: "History",
            assignmentType: "Exam",
            assignmentStatus: "NEW",
            assignmentName: "US History (1600s-1776)",
            teacherName: "Mrs. Jane Doe",
            studentName: "John Doe",
            dueDate: {
                date: "06-10-2020",
                time: "5:00 PM"
            },
            completionDate: {
                date: "06-10-2020",
                time: "4:45 PM"
            },
            gradedDate: {
                date: "06-11-2020",
                time: "7:45 PM"
            },
            grade: 80
        };
    }
    ngOnInit() {
    }
}
TakeContentComponent.ɵfac = function TakeContentComponent_Factory(t) { return new (t || TakeContentComponent)(); };
TakeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TakeContentComponent, selectors: [["app-take-content"]], decls: 44, vars: 6, consts: [["id", "content-container"], ["id", "take-form"], [1, "form-item"], [1, "heading"], [1, "subheading"], [1, "form-item", "questions-div"], [1, "question"], ["rows", "10", "columns", "100", "placeholder", "Enter Answer Here."]], template: function TakeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Submit Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assignment.assignmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.assignment.course, " ", ctx.assignment.assignmentType, " by ", ctx.assignment.teacherName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Please complete by ", ctx.assignment.dueDate.date, " ", ctx.assignment.dueDate.time, "");
    } }, styles: ["#content-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n#take-form[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color:#63351E;\n  text-align: center;\n  overflow: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.form-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n}\n\n.questions-div[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.question[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  text-align: left;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0.5rem;\n  overflow-y: scroll;\n  width: 60rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 1.25rem;\n  background-color: #eeeeee;\n  border-style: solid;\n  border-color: #dddddd;\n  border-radius: 0.5rem;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Rha2UtY29udGVudC90YWtlLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Rha2UtY29udGVudC90YWtlLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbiN0YWtlLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjojNjMzNTFFO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnN1YmhlYWRpbmcge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5mb3JtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucXVlc3Rpb25zLWRpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5xdWVzdGlvbiB7XG4gIGZsZXg6IDEgMSAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogNjByZW07XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TakeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-take-content',
                templateUrl: './take-content.component.html',
                styleUrls: ['./take-content.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/teacher-create-dashboard/teacher-create-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/teacher-create-dashboard/teacher-create-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TeacherCreateDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherCreateDashboardComponent", function() { return TeacherCreateDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _create_content_create_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-content/create-content.component */ "./src/app/component/create-content/create-content.component.ts");






class TeacherCreateDashboardComponent {
    constructor(sidebarOptionsService) {
        this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-create-dashboard");
    }
    ngOnInit() {
    }
}
TeacherCreateDashboardComponent.ɵfac = function TeacherCreateDashboardComponent_Factory(t) { return new (t || TeacherCreateDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
TeacherCreateDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherCreateDashboardComponent, selectors: [["app-teacher-create-dashboard"]], decls: 8, vars: 1, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"]], template: function TeacherCreateDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-create-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _create_content_create_content_component__WEBPACK_IMPORTED_MODULE_4__["CreateContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXItY3JlYXRlLWRhc2hib2FyZC90ZWFjaGVyLWNyZWF0ZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNElBQTRJO0dBQzdJLDRCQUE0QjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7RUFDQTs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBR0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90ZWFjaGVyLWNyZWF0ZS1kYXNoYm9hcmQvdGVhY2hlci1jcmVhdGUtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAjbWFpbi1kaXYge1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aXNtZS5jby9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3LzUwLUJlYXV0aWZ1bC1hbmQtTWluaW1hbGlzdC1QcmVzZW50YXRpb24tQmFja2dyb3VuZHMtMDIzLmpwZ1wiKTsgKi9cbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgI2hlYWRlci1kaXYge1xuICB9XG4gIFxuICAjY29udGVudC1kaXYge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICBcbiAgI3NpZGViYXItZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDMzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherCreateDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-create-dashboard',
                templateUrl: './teacher-create-dashboard.component.html',
                styleUrls: ['./teacher-create-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/teacher-dashboard/teacher-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/teacher-dashboard/teacher-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: TeacherDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherDashboardComponent", function() { return TeacherDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/component/content/content.component.ts");






class TeacherDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'Mrs. Jane Doe';
        this.viewer = 'Teacher';
        this.listOfAssignments = [
            {
                course: "History",
                assignmentType: "Exam",
                assignmentStatus: "Completed",
                assignmentName: "US History (1600s-1776)",
                teacherName: "Mrs. Jane Doe",
                studentName: "John Doe",
                dueDate: {
                    date: "06-10-2020",
                    time: "5:00 PM"
                },
                completionDate: {
                    date: "06-10-2020",
                    time: "4:45 PM"
                },
                gradedDate: {
                    date: "06-11-2020",
                    time: "7:45 PM"
                },
                grade: null
            }
        ];
        this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-dashboard");
    }
    ngOnInit() {
    }
}
TeacherDashboardComponent.ɵfac = function TeacherDashboardComponent_Factory(t) { return new (t || TeacherDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
TeacherDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherDashboardComponent, selectors: [["app-teacher-dashboard"]], decls: 8, vars: 4, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], [3, "name", "listOfAssignments", "viewer"]], template: function TeacherDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("listOfAssignments", ctx.listOfAssignments)("viewer", ctx.viewer);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#main-div[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  display: flex;\n  flex-direction: column;\n  \n  background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  overflow: hidden;\n  height: 100%;\n}\n\n#header-div[_ngcontent-%COMP%] {\n}\n\n#content-div[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n#sidebar-div[_ngcontent-%COMP%] {\n  background-color: #000033;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXItZGFzaGJvYXJkL3RlYWNoZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRJQUE0STtFQUM1SSw0QkFBNEI7SUFDMUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtFQUM1QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGVhY2hlci1kYXNoYm9hcmQvdGVhY2hlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb290LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNtYWluLWRpdiB7XG4gIGZsZXg6IDEgMSAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aXNtZS5jby9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3LzUwLUJlYXV0aWZ1bC1hbmQtTWluaW1hbGlzdC1QcmVzZW50YXRpb24tQmFja2dyb3VuZHMtMDIzLmpwZ1wiKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNoZWFkZXItZGl2IHtcbn1cblxuI2NvbnRlbnQtZGl2IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuI3NpZGViYXItZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-dashboard',
                templateUrl: './teacher-dashboard.component.html',
                styleUrls: ['./teacher-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/teacher-grade-completed/teacher-grade-completed.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/teacher-grade-completed/teacher-grade-completed.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TeacherGradeCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGradeCompletedComponent", function() { return TeacherGradeCompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");





class TeacherGradeCompletedComponent {
    constructor(sidebarOptionsService) {
        this.assignment = {
            course: "History",
            assignmentType: "Exam",
            assignmentStatus: "COMPLETED",
            assignmentName: "US History (1600s-1776)",
            teacherName: "Mrs. Jane Doe",
            studentName: "John Doe",
            dueDate: {
                date: "06-10-2020",
                time: "5:00 PM"
            },
            completionDate: {
                date: "06-10-2020",
                time: "4:45 PM"
            },
            gradedDate: {
                date: "06-11-2020",
                time: "7:45 PM"
            },
            grade: 80
        };
        this.sidebarOptions = sidebarOptionsService.studentSideOptions('/teacher-dashboard');
    }
    ngOnInit() {
    }
}
TeacherGradeCompletedComponent.ɵfac = function TeacherGradeCompletedComponent_Factory(t) { return new (t || TeacherGradeCompletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
TeacherGradeCompletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherGradeCompletedComponent, selectors: [["app-teacher-grade-completed"]], decls: 62, vars: 8, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], ["id", "content-container"], ["id", "take-form"], [1, "header-item"], [1, "heading"], [1, "subheading"], [1, "form-item", "questions-div"], [1, "question"], ["type", "number", "placeholder", "Points", "min", "0", "step", "0.1", "ng-model", "q1"], [1, "form-item"], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Some answer..."], ["rows", "5", "columns", "100", "placeholder", "Type Your Comment..", "id", "comment"], ["type", "number", "placeholder", "Points", "min", "0", "step", "0.1", "ng-model", "q2"], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Enter Answer Here."], ["type", "number", "placeholder", "Points", "min", "0", "step", "0.1", "ng-model", "q3"]], template: function TeacherGradeCompletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " / 100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " / 100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " / 100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " WHY THIS IS NOT WORKING ??????????/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Submit Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assignment.assignmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.assignment.course, " ", ctx.assignment.assignmentType, " by ", ctx.assignment.teacherName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Student: ", ctx.assignment.studentName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Completed on ", ctx.assignment.completionDate.date, " ", ctx.assignment.completionDate.time, "");
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], styles: ["#content-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  \n  #take-form[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 1rem;\n    border-style: solid;\n    border-width: 2px;\n    border-color:#63351E;\n    text-align: center;\n    overflow: auto;\n  }\n  \n  .heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .subheading[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  \n  .form-item[_ngcontent-%COMP%] {\n    display: flex;\n    \n    padding: 0.5rem;\n  }\n  \n  .header-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0.5rem;\n  }\n  \n  .questions-div[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  \n  .question[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    text-align: left;\n  }\n  \n  textarea[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.5rem;\n    overflow-y: scroll;\n    width: 30rem;\n    \n  }\n  \n  textarea#comment[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    width: 20rem;\n    \n  }\n  \n  #grade[_ngcontent-%COMP%] {\n    color:red;\n    \n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 1.25rem;\n    background-color: #eeeeee;\n    border-style: solid;\n    border-color: #dddddd;\n    border-radius: 0.5rem;\n    margin-left: 1rem;\n    cursor: pointer;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    background-color: #cccccc;\n  }\n  \n  #root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n  \n  input[type=number][_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    margin: 8px 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXItZ3JhZGUtY29tcGxldGVkL3RlYWNoZXItZ3JhZGUtY29tcGxldGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZOztFQUVkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxTQUFTOztFQUVYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRJQUE0STtHQUM3SSw0QkFBNEI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0VBQ0E7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGVhY2hlci1ncmFkZS1jb21wbGV0ZWQvdGVhY2hlci1ncmFkZS1jb21wbGV0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICBcbiAgI3Rha2UtZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjojNjMzNTFFO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgLnN1YmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cblxuICAuaGVhZGVyLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG4gIFxuICAucXVlc3Rpb25zLWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuICBcbiAgLnF1ZXN0aW9uIHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBcbiAgfVxuXG4gIHRleHRhcmVhI2NvbW1lbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBcbiAgfVxuXG4gICNncmFkZSB7XG4gICAgY29sb3I6cmVkO1xuICAgIFxuICB9XG4gIFxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIH1cblxuICAjcm9vdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAjbWFpbi1kaXYge1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aXNtZS5jby9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3LzUwLUJlYXV0aWZ1bC1hbmQtTWluaW1hbGlzdC1QcmVzZW50YXRpb24tQmFja2dyb3VuZHMtMDIzLmpwZ1wiKTsgKi9cbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgI2hlYWRlci1kaXYge1xuICB9XG4gIFxuICAjY29udGVudC1kaXYge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICBcbiAgI3NpZGViYXItZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDMzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9IFxuICBcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherGradeCompletedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-grade-completed',
                templateUrl: './teacher-grade-completed.component.html',
                styleUrls: ['./teacher-grade-completed.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/teacher-grade-dashboard/teacher-grade-dashboard.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/teacher-grade-dashboard/teacher-grade-dashboard.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TeacherGradeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGradeDashboardComponent", function() { return TeacherGradeDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");





class TeacherGradeDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'Mrs. Jane Doe';
        this.viewer = 'Teacher';
        this.sidebarOptions = sidebarOptionsService.teacherSideOptions("");
    }
    ngOnInit() {
    }
}
TeacherGradeDashboardComponent.ɵfac = function TeacherGradeDashboardComponent_Factory(t) { return new (t || TeacherGradeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
TeacherGradeDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherGradeDashboardComponent, selectors: [["app-teacher-grade-dashboard"]], decls: 7, vars: 1, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"]], template: function TeacherGradeDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#main-div[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  display: flex;\n  flex-direction: column;\n  \n  background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  overflow: hidden;\n  height: 100%;\n}\n\n#header-div[_ngcontent-%COMP%] {\n}\n\n#content-div[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n#sidebar-div[_ngcontent-%COMP%] {\n  background-color: #000033;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXItZ3JhZGUtZGFzaGJvYXJkL3RlYWNoZXItZ3JhZGUtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRJQUE0STtFQUM1SSw0QkFBNEI7SUFDMUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtFQUM1QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGVhY2hlci1ncmFkZS1kYXNoYm9hcmQvdGVhY2hlci1ncmFkZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb290LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNtYWluLWRpdiB7XG4gIGZsZXg6IDEgMSAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aXNtZS5jby9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3LzUwLUJlYXV0aWZ1bC1hbmQtTWluaW1hbGlzdC1QcmVzZW50YXRpb24tQmFja2dyb3VuZHMtMDIzLmpwZ1wiKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNoZWFkZXItZGl2IHtcbn1cblxuI2NvbnRlbnQtZGl2IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuI3NpZGViYXItZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherGradeDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-grade-dashboard',
                templateUrl: './teacher-grade-dashboard.component.html',
                styleUrls: ['./teacher-grade-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/teacher-graded-dashboard/teacher-graded-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/teacher-graded-dashboard/teacher-graded-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TeacherGradedDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGradedDashboardComponent", function() { return TeacherGradedDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.component */ "./src/app/component/content/content.component.ts");






class TeacherGradedDashboardComponent {
    constructor(sidebarOptionsService) {
        this.name = 'Mrs. Jane Doe';
        this.viewer = 'Teacher';
        this.listOfAssignments = [
            {
                course: "History",
                assignmentType: "Exam",
                assignmentStatus: "Graded",
                assignmentName: "US History (1600s-1776)",
                teacherName: "Mrs. Jane Doe",
                studentName: "John Doe",
                dueDate: {
                    date: "06-10-2020",
                    time: "5:00 PM"
                },
                completionDate: {
                    date: "06-10-2020",
                    time: "4:45 PM"
                },
                gradedDate: {
                    date: "06-11-2020",
                    time: "7:45 PM"
                },
                grade: 80
            }
        ];
        this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-graded-dashboard");
    }
    ngOnInit() {
    }
}
TeacherGradedDashboardComponent.ɵfac = function TeacherGradedDashboardComponent_Factory(t) { return new (t || TeacherGradedDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
TeacherGradedDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherGradedDashboardComponent, selectors: [["app-teacher-graded-dashboard"]], decls: 8, vars: 4, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], [3, "name", "listOfAssignments", "viewer"]], template: function TeacherGradedDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("listOfAssignments", ctx.listOfAssignments)("viewer", ctx.viewer);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]], styles: ["#root-div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#main-div[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n  display: flex;\n  flex-direction: column;\n  \n  background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  overflow: hidden;\n  height: 100%;\n}\n\n#header-div[_ngcontent-%COMP%] {\n}\n\n#content-div[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n#sidebar-div[_ngcontent-%COMP%] {\n  background-color: #000033;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlYWNoZXItZ3JhZGVkLWRhc2hib2FyZC90ZWFjaGVyLWdyYWRlZC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNElBQTRJO0VBQzVJLDRCQUE0QjtJQUMxQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0VBQzVCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90ZWFjaGVyLWdyYWRlZC1kYXNoYm9hcmQvdGVhY2hlci1ncmFkZWQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbWFpbi1kaXYge1xuICBmbGV4OiAxIDEgMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdmlzbWUuY28vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy81MC1CZWF1dGlmdWwtYW5kLU1pbmltYWxpc3QtUHJlc2VudGF0aW9uLUJhY2tncm91bmRzLTAyMy5qcGdcIik7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaGVhZGVyLWRpdiB7XG59XG5cbiNjb250ZW50LWRpdiB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbiNzaWRlYmFyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMzM7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0gXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherGradedDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-graded-dashboard',
                templateUrl: './teacher-graded-dashboard.component.html',
                styleUrls: ['./teacher-graded-dashboard.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/view-graded/view-graded.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/view-graded/view-graded.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewGradedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGradedComponent", function() { return ViewGradedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/sidebar-options.service */ "./src/app/service/sidebar-options.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");





class ViewGradedComponent {
    constructor(sidebarOptionsService) {
        this.assignment = {
            course: "History",
            assignmentType: "Exam",
            assignmentStatus: "GRADED",
            assignmentName: "US History (1600s-1776)",
            teacherName: "Mrs. Jane Doe",
            studentName: "John Doe",
            dueDate: {
                date: "06-10-2020",
                time: "5:00 PM"
            },
            completionDate: {
                date: "06-10-2020",
                time: "4:45 PM"
            },
            gradedDate: {
                date: "06-11-2020",
                time: "7:45 PM"
            },
            grade: 80
        };
        this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-graded-dashboard");
        this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-graded-dashboard");
    }
    ngOnInit() {
    }
}
ViewGradedComponent.ɵfac = function ViewGradedComponent_Factory(t) { return new (t || ViewGradedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"])); };
ViewGradedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewGradedComponent, selectors: [["app-view-graded"]], decls: 66, vars: 9, consts: [["id", "root-div"], ["id", "sidebar-div"], [3, "sidebarOptions"], ["id", "main-div"], ["id", "header-div"], ["id", "content-div"], ["id", "content-container"], ["id", "take-form"], [1, "header-item"], [1, "heading"], [1, "subheading"], [1, "form-item", "questions-div"], [1, "question"], ["id", "grade"], [1, "form-item"], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Some answer..."], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Some comment...", "id", "comment"], ["readonly", "", "rows", "5", "columns", "100", "placeholder", "Enter Answer Here."]], template: function ViewGradedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " / 100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " / 100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "List and explain the four pillars of Object Oriented Programming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " / 100 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidebarOptions", ctx.sidebarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assignment.assignmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.assignment.course, " ", ctx.assignment.assignmentType, " by ", ctx.assignment.teacherName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Student: ", ctx.assignment.studentName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Graded on ", ctx.assignment.gradedDate.date, " ", ctx.assignment.gradedDate.time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Grade ", ctx.assignment.grade, "");
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], styles: ["#content-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  \n  #take-form[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 1rem;\n    border-style: solid;\n    border-width: 2px;\n    border-color:#63351E;\n    text-align: center;\n    overflow: auto;\n  }\n  \n  .heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .subheading[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  \n  .form-item[_ngcontent-%COMP%] {\n    display: flex;\n    \n    padding: 0.5rem;\n  }\n  \n  .header-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0.5rem;\n  }\n  \n  .questions-div[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  \n  .question[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    text-align: left;\n  }\n  \n  textarea[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.5rem;\n    overflow-y: scroll;\n    width: 30rem;\n    \n  }\n  \n  textarea#comment[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    width: 20rem;\n    \n  }\n  \n  #grade[_ngcontent-%COMP%] {\n    color:red;\n    \n  }\n  \n  button[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 1.25rem;\n    background-color: #eeeeee;\n    border-style: solid;\n    border-color: #dddddd;\n    border-radius: 0.5rem;\n    margin-left: 1rem;\n    cursor: pointer;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    background-color: #cccccc;\n  }\n  \n  #root-div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  #main-div[_ngcontent-%COMP%] {\n    flex: 1 1 0%;\n    display: flex;\n    flex-direction: column;\n    \n   background-color: whitesmoke;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  \n  #header-div[_ngcontent-%COMP%] {\n  }\n  \n  #content-div[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  \n  #sidebar-div[_ngcontent-%COMP%] {\n    background-color: #000033;\n    height: 100%;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZXctZ3JhZGVkL3ZpZXctZ3JhZGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZOztFQUVkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxTQUFTOztFQUVYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRJQUE0STtHQUM3SSw0QkFBNEI7SUFDM0IsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0VBQ0E7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdmlldy1ncmFkZWQvdmlldy1ncmFkZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICBcbiAgI3Rha2UtZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjojNjMzNTFFO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgLnN1YmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cblxuICAuaGVhZGVyLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG4gIFxuICAucXVlc3Rpb25zLWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuICBcbiAgLnF1ZXN0aW9uIHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBcbiAgfVxuXG4gIHRleHRhcmVhI2NvbW1lbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBcbiAgfVxuXG4gICNncmFkZSB7XG4gICAgY29sb3I6cmVkO1xuICAgIFxuICB9XG4gIFxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIH1cblxuICAjcm9vdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAjbWFpbi1kaXYge1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly92aXNtZS5jby9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3LzUwLUJlYXV0aWZ1bC1hbmQtTWluaW1hbGlzdC1QcmVzZW50YXRpb24tQmFja2dyb3VuZHMtMDIzLmpwZ1wiKTsgKi9cbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgI2hlYWRlci1kaXYge1xuICB9XG4gIFxuICAjY29udGVudC1kaXYge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICBcbiAgI3NpZGViYXItZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDMzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9IFxuICBcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewGradedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-graded',
                templateUrl: './view-graded.component.html',
                styleUrls: ['./view-graded.component.css']
            }]
    }], function () { return [{ type: _service_sidebar_options_service__WEBPACK_IMPORTED_MODULE_1__["SidebarOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/sidebar-options.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/sidebar-options.service.ts ***!
  \****************************************************/
/*! exports provided: SidebarOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOptionsService", function() { return SidebarOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidebarOptionsService {
    constructor() { }
    studentSideOptions(selectedLink) {
        let sidebarOptions = [
            {
                name: "New Assignments",
                link: "/student-dashboard",
                selected: selectedLink === "/student-dashboard"
            },
            {
                name: "Completed Assignments",
                link: "/student-completed-dashboard",
                selected: selectedLink === "/student-completed-dashboard"
            },
            {
                name: "Graded Assignments",
                link: "/student-graded-dashboard",
                selected: selectedLink === "/student-graded-dashboard"
            },
        ];
        return sidebarOptions;
    }
    teacherSideOptions(selectedLink) {
        let sidebarOptions = [
            {
                name: "Completed Assignments",
                link: "/teacher-dashboard",
                selected: selectedLink === "/teacher-dashboard"
            },
            {
                name: "Graded Assignments",
                link: "/teacher-graded-dashboard",
                selected: selectedLink === "/teacher-graded-dashboard"
            },
            {
                name: "Create an Assignment",
                link: "/teacher-create-dashboard",
                selected: selectedLink === "/teacher-create-dashboard"
            }
            // ADD CREATE AN ASSIGNMENT!!!!!!!!!!!!
        ];
        return sidebarOptions;
    }
    loginRegisterSideOptions(selectedLink) {
        let sidebarOptions = [
            {
                name: "Login",
                link: "/login",
                selected: selectedLink === "/login"
            },
            {
                name: "Register",
                link: "/register",
                selected: selectedLink === "/register"
            },
        ];
        return sidebarOptions;
    }
}
SidebarOptionsService.ɵfac = function SidebarOptionsService_Factory(t) { return new (t || SidebarOptionsService)(); };
SidebarOptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarOptionsService, factory: SidebarOptionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarOptionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gautam/Documents/msc/revature/revature-gitrepo/jose_anastasia_gautam_p2/AngularAMS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
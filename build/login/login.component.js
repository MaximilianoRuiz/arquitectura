"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LOGIN_REQUIREMENTS = [
    "Email is required",
    "Password is required",
];
var PASSWORDS_NOT_EQUALS = [
    "Passwords not equals",
];
var REGISTER_REQUIREMENTS = [
    "First Name is required",
    "Last Name is required",
    "Email is required",
    "Password is required",
    "Confirm Password is required",
    "Bouth passwords should be equals"
];
var LoginComponent = (function () {
    function LoginComponent() {
        this.reset();
    }
    LoginComponent.prototype.checkLoginForm = function () {
        var _this = this;
        this.requirenments = LOGIN_REQUIREMENTS;
        if (this.email == '' || this.password == '') {
            this.isRequirementsShows = true;
        }
        else {
            this.reset();
            this.isLoginSuccesss = true;
            setTimeout(function () { return _this.isLoginSuccesss = false; }, 3000);
        }
    };
    LoginComponent.prototype.checkRegisterForm = function () {
        var _this = this;
        this.requirenments = REGISTER_REQUIREMENTS;
        if (this.firstName == '' || this.lastName == '' || this.email == '' || this.password == '' || this.passwordRepeated == '') {
            this.isRequirementsShows = true;
        }
        else if (this.password != this.passwordRepeated) {
            this.requirenments = PASSWORDS_NOT_EQUALS;
            this.isRequirementsShows = true;
        }
        else {
            this.reset();
            this.isLoginSuccesss = true;
            setTimeout(function () { return _this.isLoginSuccesss = false; }, 3000);
        }
    };
    LoginComponent.prototype.closeAlerts = function () {
        this.isRequirementsShows = false;
        this.isLoginSuccesss = false;
    };
    LoginComponent.prototype.reset = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordRepeated = '';
        this.isRequirementsShows = false;
        this.isLoginSuccesss = false;
        this.requirenments = LOGIN_REQUIREMENTS;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: 'app/login/login.html',
            styleUrls: ['app/login/login.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
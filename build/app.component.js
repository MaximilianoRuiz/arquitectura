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
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.name = 'Angular';
        this.resetTimer();
        setInterval(function () { return _this.tick(); }, 1000);
    }
    AppComponent.prototype.resetTimer = function () {
        this.min = 24;
        this.seg = 59;
        this.buttonLabel = "Empezar";
        this.tooglePause();
    };
    AppComponent.prototype.tick = function () {
        if (!this.isPaused) {
            this.buttonLabel = "Detener";
            if (--this.seg < 0) {
                this.seg = 59;
                if (--this.min < 0) {
                    this.resetTimer();
                }
            }
        }
    };
    AppComponent.prototype.tooglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.min < 24 || this.seg < 59) {
            this.buttonLabel = this.isPaused ? "Reanudar" : "Pausar";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t\t\t<h1>Hello {{name}}</h1>\n  \t\t\t<h2>{{min}}:{{seg}}</h2>\n  \t\t\t<p>\n  \t\t\t\t<button (click)=\"tooglePause()\">\n  \t\t\t\t\t{{buttonLabel}}\n  \t\t\t\t</button>\n  \t\t\t</p>\n  \t\t\t<login-component></login-component>\n  \t\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
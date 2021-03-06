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
var core_2 = require('@angular/core');
var die_component_1 = require('./die.component');
// Parent interacts with child via ViewChild
// so it can update its own property total, based on childs value
var AppComponent = (function () {
    function AppComponent() {
        this.rollCount = 0;
        this.total = 0;
    }
    AppComponent.prototype.roll = function () {
        this.die.roll();
        this.rollCount++;
        this.total += this.die.value;
    };
    __decorate([
        core_2.ViewChild(die_component_1.DieComponent), 
        __metadata('design:type', die_component_1.DieComponent)
    ], AppComponent.prototype, "die", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<h1>Check this potatoDie die</h1>\n  \t<p>Number of rolls: {{ rollCount }}</p>\n  \t<p>Average: {{ rollCount ? total/rollCount : \"-\"}}</p>\n  \t<my-die></my-die>\n  \t<button (click)=\"roll()\">Roll</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

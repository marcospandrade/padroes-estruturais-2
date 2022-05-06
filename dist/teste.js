"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logProperty(target, key) {
    const newKey = `_${key}`;
    Object.defineProperty(target, key, {
        get() {
            console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newVal) {
            console.log(`Set: ${key} => ${newVal}`);
            this[newKey] = newVal;
        },
        enumerable: true,
        configurable: true
    });
}
class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
__decorate([
    logProperty
], Task.prototype, "id", void 0);
__decorate([
    logProperty
], Task.prototype, "title", void 0);
const task = new Task(1, 'Write more articles');
console.log(task.id, task.title);

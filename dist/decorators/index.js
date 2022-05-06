"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryValidate = void 0;
function queryValidate(target, propertyKey, descriptor) {
    console.log('target', target);
    console.log('key', propertyKey);
    console.log('descriptor', descriptor);
    const newKey = `_${propertyKey}`;
    Object.defineProperty(target, propertyKey, {
        set(newVal) {
            console.log(`Set: ${propertyKey} => ${newVal}`);
            this[newKey] = newVal;
        },
        enumerable: true
    });
}
exports.queryValidate = queryValidate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareUserValue = void 0;
// проверяем свойства пользователей и фильтра
function compareUserValue(value1, value2, key) {
    var isTrue = true;
    if (key === "role") {
        if (typeof value2.role === "undefined") {
            return isTrue;
        }
        for (var _i = 0, _a = value2.role; _i < _a.length; _i++) {
            var item = _a[_i];
            if (value1.role.indexOf(item) === -1) {
                isTrue = false;
            }
        }
    }
    else if (key === "active") {
        return value1.getActive() === value2[key];
    }
    else {
        return value1[key] === value2[key];
    }
    return isTrue;
}
exports.compareUserValue = compareUserValue;

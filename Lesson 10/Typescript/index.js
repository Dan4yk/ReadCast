"use strict";
function genericGetter(data) {
    return data;
}
var newGenericFunction = genericGetter;
//=========================================================
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * +this.b;
    };
    return Multiply;
}());
var mNum = new Multiply(10, 5);
console.log('Number is: ', mNum.getResult());
var mStr = new Multiply('40', '50');
console.log('String is: ', mStr.getResult());
//# sourceMappingURL=index.js.map
"use strict";
var Util;
(function (Util) {
    function isEmpty(data) {
        return !data; //!-boolean tip
    }
    Util.isEmpty = isEmpty;
    function isUndefined(data) {
        return typeof data === "undefined";
    }
    Util.isUndefined = isUndefined;
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
var EXP = 'Testing';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sa'));
console.log(Util.PI);
console.log(Util.EXP);
console.log(EXP);
//# sourceMappingURL=index.js.map
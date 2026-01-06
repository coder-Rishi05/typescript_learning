// Access modifiers (public, private, protected)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public : is property ko class me khin bhi acess kr lo, khin bhi change kr lo
// constructor method and inheritance me value change ho jaaegi
// private : is property ko class me use kr skte han, method me use kr skte han pr inheritance krke nhi kr skte.
// 
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    return BottleMaker;
}());
var Metal = /** @class */ (function (_super) {
    __extends(Metal, _super);
    function Metal(name) {
        return _super.call(this, name) || this;
    }
    Metal.prototype.getValue = function () {
        console.log(this.name);
    };
    return Metal;
}(BottleMaker));
var b1 = new Metal("rishi");
b1.getValue(); // the value acessible in public also will be in private but with warning.

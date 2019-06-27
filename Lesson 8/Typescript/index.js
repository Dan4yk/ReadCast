var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age + '';
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(job) {
        var _this = _super.call(this, 'Admin', job) || this;
        _this.age = 100;
        return _this;
    }
    Admin.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return Admin;
}(User));
var user = new User('Danu', 'Frontend');
var admin = new Admin('Frontend');
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);

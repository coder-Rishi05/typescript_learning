// - Getters and setters
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        return this.name = name;
    };
    User.prototype.setAge = function (age) {
        return this.age = age;
    };
    return User;
}());
var u1 = new User("Rishi", 45);
u1.getName();
u1.getAge();
// u1.setName("Rishabh")
// u1.setAge(20)
// getter : class ke ander ka ek esa method jo class ke  value nikal ke de.
// setter : class ke ander ka ek esa method jo class ke  value nikal set kre de.
// - Static members
// - Abstract classes and methods

// Classes and Objects
// •Class definition
// •Constructors
// •Access modifiers (public, private, protected)
// •Readonly properties
// •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
// •Abstract classes and methods
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    return Device;
}());
var device_One = new Device();

var device_two = new Device();
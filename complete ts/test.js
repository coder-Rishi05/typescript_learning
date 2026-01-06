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
// ek esi machine jo ki produce kr rhi hai final consumer product esi machine ko hm constructure kehte han.
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var obj = new BottleMaker("Milton", 3000);
// jb bhi class ko chalaenge constructor pehle chalega.
// 
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandSome) {
        this.name = name;
        this.isHandSome = isHandSome;
        this.age = 0;
    }
    return HumanMaker;
}());
var hm = new HumanMaker("rishi", true);
hm.age = 20;
// class MusicDevice {
//     public name;
// public singer;
// public thumbnail;
// public length;
//     constructor( name:string,  singer:string,  thumbnail:string,  length:number ) {
//         this.name = name;
//         this.singer = singer;
//         this.thumbnail = thumbnail;
//         this.length = length;
//     }
// }
var MusicDevice = /** @class */ (function () {
    function MusicDevice(name, singer, thumbnail, length) {
        this.name = name;
        this.singer = singer;
        this.thumbnail = thumbnail;
        this.length = length;
    }
    return MusicDevice;
}());
var MusicDevice_one = new MusicDevice("saiyara", "imran", "maksad", 45);
var MusicDevice_Twp = new MusicDevice("sai", "imranew", "mksad", 15);

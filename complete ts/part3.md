# classes and objects (oops)

- topic

- Class definition & Objects

```txt
A class is a blueprint or template used to create objects.
It defines the structure (properties) and behavior (methods) that the objects created from it will have.

In JavaScript, classes are syntactic sugar over prototype-based inheritance, while in TypeScript, classes additionally provide static type checking and access control at compile time.

🎯 Interview Point

JavaScript internally still uses prototypes; classes just make OOP syntax cleaner and more readable.
```

it is basically structure.

```js
class Device {
  name = "lg";
  price = 12000;
  category = "digital";
}

let device_One = new Device();
```

- Constructors

```md
A constructor is a special method that is automatically invoked when a new object is created from a class.
It is mainly used to initialize object properties and set the initial state of an instance.

In both JavaScript and TypeScript, the constructor runs exactly once per object creation.

🎯 Interview Point

Constructors help ensure that an object is always created in a valid state.


```

```js

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



class Device {
    name="lg";
    price=12000
    category = "digital"
}

let device_One = new Device()

// ek esi machine jo ki produce kr rhi hai final consumer product esi machine ko hm constructure kehte han.

class BottleMaker {

    constructor(public name:string, public price:number) {
        
    }

}
 
const obj = new BottleMaker("Milton",3000)

// jb bhi class ko chalaenge constructor pehle chalega.
// 
class HumanMaker {
    age = 0;
    constructor (public name:string, public isHandSome:boolean){

    }
}

const hm = new HumanMaker("rishi",true)
hm.age = 20

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

class MusicDevice {
    constructor(public name:string, public singer:string, public thumbnail:string, public length:number ) {
        
    }
}

let MusicDevice_one = new MusicDevice("saiyara","imran","maksad",45);
let MusicDevice_Twp = new MusicDevice("sai","imranew","mksad",15);


```

- Access modifiers (public, private, protected)

- Readonly properties

- Optional properties

- Parameter properties

- Getters and setters

- Static members

- Abstract classes and methods

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

- this keyword

```js
// this keyword

// jb bhi hm kisi class ke ander han or uske alag alag methods hote han to uske ander hme kisi method ko touch krna hai to this keyword ka use krenge.

class A {
  name = "rishi";

  // class ke ander bne function ko method kehte han
  changeName() {
    // class ke ander bne hue kisi bhi variable ko acess krne ke liye this keyword lagana compulsory hai jo ki us method ka part nhi hai. jaise yhan name changeName ka nhi hai pr iske khud ke local variabes ko acess krne ke liye this ki need nhi hoti
    // also method ke ander koi property nhi bna skte sirf bahr wali ko access kr skte han.
    let a;
    a = 12;
    this.name;
  }
}

let a1 = new A();

console.log(typeof a1.changeName);

class a {
    constructor(public a : string){
        this.a = a
    }
}

let z = new a("rishi")

console.log(z.a)
```

- Access modifiers (public, private, protected)

```js

// Access modifiers (public, private, protected)

// public : is property ko class me khin bhi acess kr lo, khin bhi change kr lo
// constructor method and inheritance me value change ho jaaegi

// private : is property ko class me use kr skte han, method me use kr skte han pr inheritance krke nhi kr skte.

// protected : usi class me or inherited class me hi use ho paaega bahar nhi main and only subclasses

class BottleMaker{
    protected achi : string = "new"
    constructor(private name:string) {

    }
}

class Metal extends BottleMaker {

    constructor(name:string){
        super(name)
    }

    getValue(){
        console.log(this.name, this.achi)
    }

}

let b1 = new Metal("rishi")

b1.getValue() // the value acessible in public also will be in private but with warning.

b1.achi

```

- Readonly properties

- Optional properties

- Parameter properties

- Getters and setters

- Static members

- Abstract classes and methods

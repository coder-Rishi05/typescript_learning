# Functions

```js
// function types
function login(): string {
  return "";
}
function login2(): void {}

// callback function in typescript
function abc(name: string, cb: (value: string) => void) {}

abc("rishi", (value: string) => {
  console.log(value);
});
```

### optional and default parameters in typescript

```js
function abc(name: string, gender?: string) {
  // by writing gender? like this it becpme optional and does not necessary to give.
}

abc("rishi", "M");
abc("rishi2");
```

### default parameters

```js
// optional and default parameters in typescript

function abc(name: string, gender: string = "other") {
  // by writing gender? like this it becpme optional and does not necessary to give.

  console.log(name, gender);
}

abc("rishi", "M");
abc("rishi2");

// basically hm definine ke time hi value de skte han phir calling ke time argument deni ki jarurat nhi hoti
```

### rest and spread

```js
// rest parameter

// yhi rest operator hai basically calling ke time bhut sare argiuments pass krte han function parameter ko array bna skte han
function abc(...args: number[]) {
  console.log(args);
}

abc(1, 2, 3, 5, 67, 8, 6);

function fri(...fr: string[]) {
  console.log(fr);
}

fri("rishi", "mishi", "krish");

// spread operator
let arr = [1, 2, 3, 4];

let arr2 = [...arr];

// ...  jb function me use hoga to rest and jb array and object me use hoga to spread
```

### function overloading

```js
// function signature and

function abcd(a:string):void

function abcd(a:number):number

function abcd(a:any){
    if(typeof a === 'string' ){
        console.log("hey")
    }else if(typeof a === 'number')
       return 124
}

abcd("rishi")

abcd(200)
```

### generics

- generaic functions
- generaic interfaces
- generaic class

- hme ek function bnana hai koi bhi value and print it
- hm ek function ko use krte vkt bta skte han ki function arguments ko kis type se create kre.-

```js
function logger(cal: any): void {
  console.log(cal);
}

logger("rishi");

logger(12);

logger(null);

// template class | template functions

// function abcd<T>(a){

// }

// abcd<string>("rishi");

// abcd<number>(12)

// this is a generic function

function abc<H>(a: H, b: string, c: number) {}

abc < string > ("rishi", "rawat", 20);

// we can also create custom console.log function.

function log<H>(val: H) {
  console.log(val);
}

log("rishi");
log(123);
log(null);
log(undefined);
```

- interface generics

```js
interface shape<h> {
  name: string;
  age: number;
  key: h;
}

function abcd(obj: shape<string>) {}

abcd({ name: "rishi", age: 20, key: "pta nhi kya hai ye" });
```

- generaic class

```js
class generaic <T> {

    constructor(public key:T) {

    }

}


let b1 = new generaic<string>("rishi");
let b2 = new generaic<number>(20);

```

## generic funciton return

```ts
// now here hm define kr rhe han generic ka return type as T so ki abhi string define hai pr jb hm return krenge string to ye error de dega.

function abc<T>(a: T, b: T): T {
  return "hey";
}

abc<string>("hey", "hello");

// koi bhi is in typescript inside " " is not only string but string literal. and iska type T nhi hai return ke time isliye error dega to fix

function abc<T>(a: T, b: T): T {
  return "hey" as T;
  or;
  return <T>"hey";
}

abc<string>("hey", "hello");
```

## imports and exports

payment.ts

```js
export function getPaymentDetails(val: number): void {
  console.log(val);
}
export function addPaymentDetails() {}

// app.ts

// Modules

// exporting and importing
// default exports

import { getPaymentDetails, addPaymentDetails } from "./payment";

getPaymentDetails(20);

// exporting class

class BottleMaker {
  constructor(name: string) {
    console.log(name);
  }
}

export default BottleMaker;

// importing and using class
import { getPaymentDetails, addPaymentDetails } from "./payment";

import BottleMaker from "./payment";

getPaymentDetails(20);

let a = new BottleMaker("heoo");
```

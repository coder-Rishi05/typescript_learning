### Typescript course + Practice projects
```bash
This repo contains learning of typescript courses and projects.
typescript github : https://github.com/microsoft/TypeScript/#readme
typescript github web repo : https://github.com/microsoft/TypeScript-Website
typescript docs : https://www.typescriptlang.org/docs/
```
### Need of typescript

js missed some fetures and typescript because it is dynamically typed language means variable are changabel

```js
var a = 12;
a = "hello";
```

this is allowed in javascript but typescript will throgh the error
ts is just a improved version of javscript.

---

install typescript globally

npm i typescript -g

run typescript code

tsc test.ts
it will compile the file and create test.js

---

Setup of typescript

- setting up typescript project
  - create a file
- configure typescript.json

  - typescript ki setting ese variable nhi chalenge jinki value define na ho.
    to create a tsc config file

  ```bash
       tsc --init
  ```

- compiling typescript
  - just run the file tsc

```bash
        ./tets.ts

       or
   agr baar baar compile nhi krna to ye command apne aap file ko compile krta rhega changes pe
       tsc --watch
    nodemon ki tarah kaam krega
```

koi bhi js code inside typescript file is valid typescript code ye error nhi denge ye bs warning denge. even if error bhi honge tb bhi js me compile ho jaaega and convert ho jaaega.

---

Basic types in typescript

- Primitive types
- Arrays
- Tuple
- Enum
- Any, Unknown, Void, null, Undefined, Never

data ka type => datatype

in refrence and primitive the main diffrence is how they handle copying the value

```ts
// primitive
const a = 20;
let b = a + 2;

console.log(b);
console.log(a);

// refrence
let c = [21];
let d = c;
d.push(20);

console.log(c);
console.log(d);
```

### Arrays

```ts
let a = [1,2,43]

let a = [1,2,4,5] // this is number array

let b = [1,2,3,"hey", {name:"rishi"},{name:23}] // this is number or string array. the ts is fixing and defining all the types we are using in the array.

// to fix the types

let arr : number[] = [1,2,3,4,5] // now its value here is fixed if i try now to give a sting value in the array it will give the error as it is predefined here

```

### tuples

isme hm btate han hamre pass do element honge or unke type kya hoga

```js

let arr: [number,string] = [12,"harsh"]

// yhan hmne pehle hi value bta di ki kis position pe kya kya value hogi and then agr hm value ki position change bhi to error aaega

// now it will give me the error
// let arr1:[string,number] = [1,"rishi"]

let arr : [number, string, object] = [1,"this is best example of tuples",{value:"it include all pf them"}]

```

### enums

enumaration means jb value ko key value pair me rkhna.

```ts
// we predefined the properties and setup their values
// isko basically pehle set kr dete han use krne ke liye

enum userRoles{
    ADMIN="admin",
    GUEST="guest",
    SUPER_ADMIN="super_admin"
}
enum StatusCode{
        ABANDONED=" abandoned status code 500",
        NOTFOUND=" not found status code 404",

}

console.log(StatusCode.ABANDONED,
StatusCode.NOTFOUND
)
// userRoles.SUPER_ADMIN
```

after converting we get this in js

```js

// we predefined the properties and setup their values
// isme 
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));

var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = " abandoned status code 500";
    StatusCode["NOTFOUND"] = " not found status code 404";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.ABANDONED, StatusCode.NOTFOUND);
// userRoles.SUPER_ADMIN


```
### Some keywords

- Any unknown Void null Undefined Never

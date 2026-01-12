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

jb koi variable create krte han or uska type na btaye to use any kehte han.

- any

```js
// here we have not defined the type of a1 so it is any by default. esa koi bhi dataset jiska type define nhi hai by default any hoga.
// isme koi value btane ki jrurat nhi kuch bhi rkh skte han kbhi bhi use kr skte han

let a1; // any
```

- unknown

```ts
// it is advanced version of unkown it helps in type narrowing it also allow any type of value but jb hm use krenge tb btana pdega ki kya value hai
let a: unknown;

a = 12;
a = "harsh";

if (typeof a === "string") {
  // return a.charAt()
} else if (typeof a === Number) {
}
```

- Void

this keyword used on a function which return nothing

```js

function abcd : void(){
  console.log("hey")
}
function abcd : Number(){
  console.log("hey")
  return 12
}
function abcd : String(){
  console.log("hey")
  return "Hey"
}

```

- Null

jb bhi koi cheez find krte han pr nhi milti use null kehte han

```js
// yhan null type nhi hota agr value null hoti hai to uska type any set hota hai bydefault
let a1 = null; // yhan a1 type any hogi
let a: null = null;
```

- Undefined
a variable with no value.

- Never

it is used where kuch bhi return nhi hoga

```js

function ab():never{
  while(true)
}
ab()
console.log("run it")

// ye block kr deta hai execution ko iske baad wala code kbhi run nho hota

```
basics complete
---

# Type interface & Type annotation

-  yhan hm nhi btate variable ka type typescript apne aap calue dekh ke variable ka type set krti hai
```js 
let a = "the type  of variable a is string"
```

- type annotation

 basically kisi varibale ka type pehle hi bta dene ko type anootation kehte han.

```ts
let b : number |  string | boolean;
b = 12
b = "string"
b = true

// it is of multiple types
// can be defined for a variable
let c : number;
// can be defined for a function and its parameters.

function abcd(a:string,b:number):void{
    console.log("This is function type anootation")
}

```

## Interfaces & type alias

- Interfaces and Type Aliases

• Defining interfaces

• Using interfaces to define object shapes

```js

// Interface  basically object ki body hai jise hm define krte han and function ko pass krte han taki bta paayen ki kya method us object pe use krna hai.


// ex: i have a object

const obj1 = {
    name:"rishi",
    email:"rishi12@gmail.com",
    password:"12345678"
}

// now i want to define its key's types.

interface User {
    name:string,
    email:string,
    password:string,
    gender?:string // ? this makes it optional like if user pass this or not it will not give the error.
}

// now i can use this User type as my object type in a function
// now i can acess and use the specific methods based on the defiend structure in interface
function abcd(obj:User){
    obj.name
    obj.email
}

// because now typescript know that if this funciton will run the user must have to give object here and therefore allowing to use these values.

/*
abcd({})

Type {} is missing the following properties from type 
:
name
email
password
*/
abcd(obj1)

```

• Extending interfaces

• Type aliases

```js

// •Extending interfaces

// extend means taking properities of previous object into new object
// here we already create User with 3 properties name, email and password
// then create a admin which extends User and a admin properity.
// now when we will use Admin it will have 4 properties 1 itself and 3 of the User which it was inheriting.
// 
interface User {
    name:string,
    email:string,
    password:string,
}

interface Admin extends User{
    admin:boolean
}

function abcd(obj:User){
 console.log(obj.email)
    console.log(obj.name)
    console.log(obj.password)
}

function abcd2(obj1:Admin){
    console.log(obj1.admin)
    console.log(obj1.email)
    console.log(obj1.name)
    console.log(obj1.password)

}



// agr mai same name se interface bnata hun to vo merge ho jaaenge
interface Abcd {
    name:string
}
interface Abcd {
    email:string
}


function a(obj:Abcd){
    console.log(obj.name)
    console.log(obj.email)
}




```
- Type aliases

```js
// type alias

// hm khud ke bhi types bna skte han

type rishi = number

let a : rishi ;
// now a's type will automatically be number
a = 45

type numStrNull = number | string | null | {} | []

let b : numStrNull; 
b = 1
b = "this is string"
b = null


// now b can have 3 types or ab ek hi varible me ye likhne ki jrurat nhi hai  number | string | null basically shorthand ki tarah kaam krega
```


- Intersection types

```js



// union
let a : string | null ; // this | is called union
// Intersection 
let b : string | null ; // this | is called union

// Intersection types
type User = {
    name:string,
    email:string
}

type Admin  = User & {
    getDetails(user:string):void
}

function abcd(a:Admin){
    a.name
    a.getDetails
    a.email
}

// the type works almost same as interface and instead extend we use & operator
// but there are some diffrences which are : 
// type abcd = number 
// type abcd = string

// here duplicate variables will give error but in interafce it was merging

// type ka kaam hai type create krna datatypes use krna
// interface ka kaam hai object ke type define krna

```

# DOM speacial

📄 TypeScript DOM Cheat Sheet
🔹 DOM Selection
✅ Best Practice (Generic Selector)
const btn = document.querySelector<HTMLButtonElement>(".btn");

⚠️ Type Assertion (Use Carefully)
const btn = document.querySelector(".btn") as HTMLButtonElement;

🔹 Common DOM Element Types
HTML	TypeScript
h1 – h6	HTMLHeadingElement
button	HTMLButtonElement
input	HTMLInputElement
form	HTMLFormElement
div	HTMLDivElement
span	HTMLSpanElement
p	HTMLParagraphElement
🔹 Null Safety (VERY IMPORTANT)
✅ Safe Check
if (btn) {
  btn.innerText = "Click";
}

✅ Optional Chaining
btn?.addEventListener("click", handler);


❌ Never ignore null

btn.innerText = "Click"; // Error

🔹 Working With Text
❌ Wrong
h2.innerText = 5;

✅ Correct
h2.innerText = count.toString();
h2.textContent = `${count}`;

🔹 Numbers & Primitives
❌ Don’t Use
let count: Number;

✅ Use
let count: number = 0;

🔹 Event Listeners
btn?.addEventListener("click", (event: MouseEvent) => {
  console.log("Clicked");
});

🔹 Input Values
const input = document.querySelector<HTMLInputElement>("input");

if (input) {
  const value: string = input.value;
}


⚠️ Input values are always strings

🔹 Casting event.target
btn?.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;
  target.disabled = true;
});

🔹 Mini Example: Counter
const h2 = document.querySelector<HTMLHeadingElement>("h2");
let count = 0;

if (h2) {
  h2.innerText = count.toString();
}

🚫 Common Mistakes
Mistake	Fix
Using Number	Use number
Ignoring null	Add checks
Assigning number to DOM	Convert to string
Using any	Use DOM types
✅ Golden Rules

✔ DOM elements have specific types
✔ querySelector can return null
✔ Convert numbers → strings
✔ Prefer generic selectors
✔ TypeScript errors = protection


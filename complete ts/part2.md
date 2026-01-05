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


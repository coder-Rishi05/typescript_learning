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

• Intersection types


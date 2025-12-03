# typescript

typescript is basically javascript + types. in js we dont have types in javasccript there for we use typescript it fix js this problem of types.


cons of js
js have loose docs means if we write documentation for sprcific code the docs 

developer tooling : 

ai

pros of typescript

it is addon of javascript.
it does not run its code is processed and give js
it give typechecking option make code more readable and consistensy.

ex: 


```js

function greet1(name:string) {
  console.log("Hello, " + name + "!");
}

greet1(4);


// here we are getting error because we are passing number instead of string
// to fix this error we need to pass string value
// greet("World");
// OR we can change the parameter type to any

function greet2(name:any) {
  console.log("Hello, " + name + "!");
}   

// also we can specify function return type
function greet3(name:string):string { // specifying return type as string
  return "Hello, " + name + "!";
} 

```
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

# How TS works

1. ts code : 

it firts goes to 

2. lexer : it tokernize the language basically the whole code get scanned and passed throgh tokens.

then move to  

3. Parser : it create a tree syntax or abstract syntax tree or concrete syntax tree. poori language ke through ek tree banaya jata hai for visualization of the code.

then move to Binder

4. Binder : it take syntax tree and create specialized symbol tree, also create Parent pointer and flow node.

then 

5. Checker : it go throgh the program 2 types it is of 2 typesstructuaral chekcking and syntax check.all the ids use this. 

then 

5. Emmiter : it generate files and strip off. it remove the additional stuff of js code which was added by typescript. node also do the same thing. 

and the emitter convert the ts code to js .map or .t.ds 


# Setting up typescript

1. Globally
2. Project-wise


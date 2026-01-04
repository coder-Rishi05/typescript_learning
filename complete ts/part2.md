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


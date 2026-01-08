# Functions

```js
// function types
function login():string{
    return ""
}
function login2():void{
 
}

// callback function in typescript
function abc(name:string, cb:(value:string)=>void){

}

abc("rishi",(value:string)=>{
    console.log(value)
})

```

### optional and default parameters in typescript

```js
function abc(name:string, gender?:string){
     // by writing gender? like this it becpme optional and does not necessary to give.



}

abc("rishi","M")
abc("rishi2",)

```
### default parameters

```js
// optional and default parameters in typescript

function abc(name:string, gender:string="other"){ // by writing gender? like this it becpme optional and does not necessary to give.

console.log(name,gender)

}

abc("rishi","M")
abc("rishi2")

// basically hm definine ke time hi value de skte han phir calling ke time argument deni ki jarurat nhi hoti 


```

### rest and spread

```js
// rest parameter


// yhi rest operator hai basically calling ke time bhut sare argiuments pass krte han function parameter ko array bna skte han 
function abc(...args:number[]){
    console.log(args)
}


abc(1,2,3,5,67,8,6)

function fri(...fr:string[]){
    console.log(fr)
}

fri("rishi","mishi","krish")

// spread operator
let arr = [1,2,3,4]

let arr2 = [...arr] 


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
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
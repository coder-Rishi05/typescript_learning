# Type assertions

// type assertion
// type casting
// Non null assertion operator
// type assertion operator

// type assertion ka mtlb type script  ko btana ki particular cheez ka type kya hai ye aap tb krte hn jb aap us value ka type typescript se jyada jaante ho.

let a : any = 12;

// (a as string).at(0) // ese likhne se mughe string ke methods access krne ko milenge.
(a as number).valueOf() // ese likhne se mughe numbers ke methods access krne ko milenge.
    
//ese bhi likh skte han.
<number>a;

// type casting

let a1 = Number("20")

### Non-null assertion operator

let variable:null | undefined | number;

variable = 30

variable!
// ese likhne pe variable ka type null and undefined nhi ho skta

### Type gaurds

// type gaurds

// type gaurds & typescript utility types
// Using typeof and instanceof
// Partial, Required, Readonly

// this is called typegaurd -> type narrowing


function a(num:number|string){
    if(typeof num === 'number'){

    }else{
        typeof num === 'string'
    }
}

// instanceof

class A{
    print(){
        console.log("this is a")
    }
}
class B{
    print(){
        console.log("This is b")
    }
}

const c = new A();
const d = new B();

function e(f:A|B){
    if(f instanceof A){
    console.log(c.print())
    }else if(f instanceof B){
        console.log(d.print)
    }
}



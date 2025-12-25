function getItem (kind:string | number){
    if(typeof kind === 'string'){
        return `this is ${kind} : string`
    }
    return `this is ${kind} : number`



}

function setItem(msg ?: string){
    if(msg){
        return `getting ${msg}`
    }
    return `setting deafult message ${msg} `
}

// now yhan pe types badal jaaenge on value to now basically we will get specific methods related to types in suggetions.

// 

function order(size: "small" | "medium" | 'large' | number ){
    if (size === 'medium') {
        return "medium"
    }else
        return "large"
}

class kill {
    server(){

    }
}
class cut {
    server(){

    }
}

// creating user defined types

type chaiOrder = {
    type:string,
    sugar:number
}
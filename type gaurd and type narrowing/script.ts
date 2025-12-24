function getItem (kind:string | number){
    if(typeof kind === 'string'){
        return `this is ${kind} : number`
    }
    return `this is ${kind} : string`
}

// now yhan pe types badal jaaenge
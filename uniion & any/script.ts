// union and any


// union
let subs:number | string= '10' // now it can accept 2 types of values number and union.

// it is user 

let apireq : 'pending' | 'success' | 'error' = 'pending'

apireq :'done'

let orders = ['12','20','28','42']
let currentOrder : string | undefined;

for (let order of orders){
    if(order !== '28'){
        currentOrder = order
        break
    }
}

console.log(currentOrder)

// any
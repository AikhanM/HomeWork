const sum = (a,b) => { 
    if(typeof a !== "number" || typeof b !== "number" ){
        throw new Error ("Both arguments must be numbers")
    }

    return a + b
}

const subtract = (a,b) => { 
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error ("Both arguments must be numbers")
    }
    
    return a - b 
}

const multiply = (a,b) => { 
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error ("Both arguments must be numbers")
    }
    
    return   a * b
 }
const divide = (a,b) => { 
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Both arguments must be numbers");
    }

    if(b === 0){
        throw new Error("The number can't divide to zero")
    }

   return a / b 
}


module.exports = { sum, subtract, multiply, divide }
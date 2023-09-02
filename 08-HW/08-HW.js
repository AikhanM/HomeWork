function convertCurrency(amount, exchangeRate){
    if(typeof amount !== "number" || typeof exchangeRate !== "number" || amount === "" || exchangeRate === ""){
        throw new Error("Both values must be numbers");
    } 
    

    if(amount === null || exchangeRate === null){
        throw new Error('Values cant be empty')
    }

    if(amount <= 0 || exchangeRate <= 0){
        throw new Error("Values can't be zero and negative")
    }

    return amount * exchangeRate
}

module.exports = { convertCurrency }
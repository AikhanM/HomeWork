const reverseString = ( string ) => {
   if(typeof string !== 'string'){
      throw new Error("Input must be an string")
   }

   if(string === ""){
      throw new Error("String doesn't have to be empty")
   }

   return string.split('').reverse().join('')
}

module.exports = { reverseString }
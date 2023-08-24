function calculateTriangleArea(a, b, c){
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
        throw new Error('All the values must be numbers')
    }

    if( a <= 0 || b <= 0 || c <=0 ){
        throw new Error('Side of triangle cant be less than 1')
    }

    if( a + b <= c || a + c <= b || b + c <= a ){
        throw new Error('The sum of two sides of a triangle cannot be smaller than the other side')
    }

    let s = (a + b + c)/2 

    return Math.sqrt(s * (s - a)*(s - b)*(s - c))
}

module.exports = { calculateTriangleArea }
function getEvenNumbers(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Array doesn't have to be empty");
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            throw new Error("All array elements must be numbers");
        }
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }

    return result;
}

module.exports = { getEvenNumbers };

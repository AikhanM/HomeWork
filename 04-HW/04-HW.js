function validateEmail(string) {
    const email = ['@gmail.com', '@mail.ru', '@outlook.com', '@example.com'];
    let isEmail = false; 

    if (typeof string !== "string") {
        throw new Error('Input must be a string');
    }

    if(string === ""){
        throw new Error('String cant be empty')
    }

    for (let i = 0; i < email.length; i++) {
        if (string.includes(email[i])) {
            isEmail = true; 
            break; 
        }
    }

    return isEmail; 
}

module.exports = { validateEmail };

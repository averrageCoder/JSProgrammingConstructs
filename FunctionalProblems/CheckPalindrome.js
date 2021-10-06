//2.
function validatePalin(string) {  
    const len = string.length;  
    for (let i = 0; i < len / 2; i++) {  
        if (string[i] !== string[len - 1 - i]) {  
            console.log( '2. It is not a palindrome');
            return  false;
        }  
    }  
    console.log( '2. It is a palindrome');  
    return true;
} 
let number = 1991;
validatePalin(number.toString())
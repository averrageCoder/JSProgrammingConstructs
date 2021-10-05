//1.
function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  console.log(cToFahr);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  console.log(fToCel);
} 
cToF(60);
fToC(45);

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

//3.
function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
if(validatePalin(number.toString())) {
    if(isPrime(number)) {
        console.log("3. It is palindrome and prime")
    }
    else {
        console.log("3. It is palindrome and NOT prime")
    }
}

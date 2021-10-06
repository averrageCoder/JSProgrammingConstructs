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

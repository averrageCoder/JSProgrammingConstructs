'use strict';

let n = Math.floor(Math.random() * 10);
for(let i=0; Math.pow(2,n) > Math.pow(2,i); i++){
    console.log("1. 2^",i," = ",Math.pow(2,i));
}

let N = Math.floor(Math.random() * 10);
let harmonic = 1;
for (let i = 2; i <= N; i++)
{
    harmonic += parseFloat(1) / i;
}
console.log("2. Nth (",N,") harmonic number: ", harmonic);

let num = Math.floor(Math.random() * 10)+1;
let flag = false;
for(let i = 2; i < num; i++) {
    if(num % i === 0) flag = true;
}
if(!flag) console.log("3. ",num," is a prime number");
else console.log("3. ",num," is NOT a prime number");

let lowerNumber = Math.floor(Math.random() * 10);
let higherNumber = lowerNumber + Math.floor(Math.random() * 10);

console.log(`4. The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

const factors = [];
let divisor = 2;
n = Math.floor(Math.random() * 10000);
console.log('5. Prime factors of ', n );
while (n >= 2) {
    if (n % divisor == 0) {
    factors.push(divisor);
    n = n / divisor;
    } else {
    divisor++;
    }
}
for (let k = 0; k < factors.length; k++) {
    console.log(factors[k]);
}
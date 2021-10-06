'use strict';

let numbers = new Array();
for(let i=0; i<10; i++) {
    numbers.push(Math.floor(Math.random() * (999-100+1)+100));
}
console.log("Array: ", numbers)

let secondSmallest = numbers.sort()[1]; 
let secondLargest = numbers.sort()[numbers.length-2]; 

console.log(`Second largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);
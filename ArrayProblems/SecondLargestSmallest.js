'use strict';

let numbers = new Array();
for(let i=0; i<10; i++) {
    numbers.push(Math.floor(Math.random() * (999-100+1)+100));
}
console.log("Array: ", numbers)

let max = Math.max.apply(null, numbers); // get the max of the array
let temp_numbers = numbers
temp_numbers.splice(temp_numbers.indexOf(max), 1); // remove max from the array
let secondLargest =  Math.max.apply(null, temp_numbers);

let min = Math.min.apply(null, numbers); // get the max of the array
numbers.splice(numbers.indexOf(min), 1); // remove max from the array
let secondSmallest =  Math.min.apply(null, numbers);

console.log(`Second largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);
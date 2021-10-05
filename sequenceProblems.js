'use strict';

let singleDigit = Math.floor(Math.random() * 10) % 10;
console.log("1. Single digit: ", singleDigit);

let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("2. Random dice number(1-6): ", diceNumber);

let firstDiceNumber = Math.floor(Math.random() * 10) % 6 + 1;
let secondDiceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("3. Addition of 2 random dice numbers(1-6): ", firstDiceNumber+secondDiceNumber);

let n1 = Math.floor(Math.random() * (99-10+1)+10);
let n2 = Math.floor(Math.random() * (99-10+1)+10);
let n3 = Math.floor(Math.random() * (99-10+1)+10);
let n4 = Math.floor(Math.random() * (99-10+1)+10);
let n5 = Math.floor(Math.random() * (99-10+1)+10);
let sum = n1+n2+n3+n4+n5;
let avg = sum/5;
console.log("n1 : ", n1);
console.log("n2 : ", n2);
console.log("n3 : ", n3);
console.log("n4 : ", n4);
console.log("n5 : ", n5);

console.log("4. Sum: ",sum," Average: ", avg);

console.log("5a. 42inch = ", 42/12, " ft.")
console.log("5b. 2400 sq. ft = ", 2400*0.092903, "sq. m")
console.log("5c. Area of 25 such plots = ", 25*40*60, "sq. acres")
let n1 = Math.floor(Math.random() * (999-100+1)+100);
let n2 = Math.floor(Math.random() * (999-100+1)+100);
let n3 = Math.floor(Math.random() *(999-100+1)+100);
let n4 = Math.floor(Math.random() *(999-100+1)+100);
let n5 = Math.floor(Math.random() *(999-100+1)+100);
let min=n1, max=n1;

console.log("n1 : ", n1);
console.log("n2 : ", n2);
console.log("n3 : ", n3);
console.log("n4 : ", n4);
console.log("n5 : ", n5);

if (n2 > max) 
    max = n2;
if (n3 > max) 
    max = n3;
if (n4 > max) 
    max = n4;
if (n5 > max) 
    max = n5;

if (n2 < min) 
    min = n2;
if (n3 < min) 
    min = n3;
if (n4 < min) 
    min = n4;
if (n5 < min) 
    min = n5;

console.log("1. MAX: ",max," MIN: ", min);
let a = Math.floor(Math.random() * (999-100+1)+100);
let b = Math.floor(Math.random() * (999-100+1)+100);
let c = Math.floor(Math.random() *(999-100+1)+100);

let eq1 = a+b*c;
let eq2 = a%b+c;
let eq3 = c+a/b;
let eq4 = a*b+c;

console.log("EQ1: ",eq1);
console.log("EQ2: ",eq2);
console.log("EQ3: ",eq3);
console.log("EQ4: ",eq4);
let largest = smallest = eq1;

if ( largest < eq2 )
    largest = eq2;
else if ( eq2 < smallest )
    smallest = eq2;
if ( largest < eq3 )
    largest = eq3;
else if ( eq3 < smallest )
    smallest = eq3;
if ( largest < eq4 )
    largest = eq4;
else if ( eq4 < smallest )
    smallest = eq4;

console.log("4. Smallest: ",smallest," Largest: ",largest)
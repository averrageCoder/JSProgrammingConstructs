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
else if (n2 < min) 
    min = n2;
if (n3 > max) 
    max = n3;
else if (n3 < min) 
    min = n3;
if (n4 > max) 
    max = n4;
else if (n4 < min) 
    min = n4;
if (n5 > max) 
    max = n5;
else if (n5 < min) 
    min = n5;

console.log("1. MAX: ",max," MIN: ", min);

let day = 21, month = 5, year=2000;
let userDate = new Date(year, month, day);
let march20 = new Date(year, 3, 20);
let june20 = new Date(year, 6, 20);

if(userDate >= march20 && userDate<june20)
    console.log("2. Date: ",userDate, " is in between march 20 and june 20");
else
    console.log("2. Date: ",userDate, " NOT in between march 20 and june 20");

let leapYear = Math.floor(Math.random() *(1999-1900+1)+1900);
if(((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0))
    console.log("3. ",leapYear," is a leap year.")
else
    console.log("3. ",leapYear," is not a leap year.")

if(Math.random() > 0.5)
    console.log("4. Its a TAILS!")
else
    console.log("4. Its a HEADS!")
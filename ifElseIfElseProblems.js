let singleDigitNumber = Math.floor(Math.random() * 10) % 10;
if(singleDigitNumber==0)
    console.log("1. Zero")
else if(singleDigitNumber==1)
    console.log("1. One")
else if(singleDigitNumber==2)
    console.log("1. Two")
else if(singleDigitNumber==3)
    console.log("1. Three")
else if(singleDigitNumber==4)
    console.log("1. Four")
else if(singleDigitNumber==5)
    console.log("1. Five")
else if(singleDigitNumber==6)
    console.log("1. Six")
else if(singleDigitNumber==7)
    console.log("1. Seven")
else if(singleDigitNumber==8)
    console.log("1. Eight")
else
    console.log("1. Nine")

let weekNumber = Math.floor(Math.random() * 7) % 7 + 1;
if(weekNumber==1)
    console.log("2. Monday")
else if(weekNumber==2)
    console.log("2. Tuesday")
else if(weekNumber==3)
    console.log("2. Wednesday")
else if(weekNumber==4)
    console.log("2. Thursday")
else if(weekNumber==5)
    console.log("2. Friday")
else if(weekNumber==6)
    console.log("2. Saturday")
else
    console.log("2. Sunday")

let number = Math.floor(Math.random() * 10000);
console.log("3. Number: ",number," Units: ",  ~~(number%10), " Tens: ", ~~((number%100)/10)," Hundreds: " ,~~((number%1000)/100));

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
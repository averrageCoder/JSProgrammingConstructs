let leapYear = Math.floor(Math.random() *(1999-1900+1)+1900);
if(((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0))
    console.log("3. ",leapYear," is a leap year.")
else
    console.log("3. ",leapYear," is not a leap year.")
let day = 21, month = 5, year=2000;
let userDate = new Date(year, month, day);
let march20 = new Date(year, 3, 20);
let june20 = new Date(year, 6, 20);

if(userDate >= march20 && userDate<june20)
    console.log("2. Date: ",userDate, " is in between march 20 and june 20");
else
    console.log("2. Date: ",userDate, " NOT in between march 20 and june 20");
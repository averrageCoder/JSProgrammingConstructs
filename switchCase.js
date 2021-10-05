let singleDigitNumber = Math.floor(Math.random() * 10) % 10;
switch(singleDigitNumber) {
    case 0: console.log("1. zero"); break;
        case 1: console.log("1. one"); break;
        case 2: console.log("1. two"); break;
        case 3: console.log("1. three"); break;
        case 4: console.log("1. four"); break;
        case 5: console.log("1. five"); break;
        case 6: console.log("1. six"); break;
        case 7: console.log("1. seven"); break;
        case 8: console.log("1. eight"); break;
        case 9: console.log("1. nine"); break;
}

let weekNumber = Math.floor(Math.random() * 7) % 7 + 1;
let day = '';
switch (weekNumber) {
    case 7:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
        day = "Invalid";
  }
  console.log("2.", day)

let number = Math.floor(Math.random() * 10000);
console.log("3. Number: ",number," Units: ",  ~~(number%10), " Tens: ", ~~((number%100)/10)," Hundreds: " ,~~((number%1000)/100));

let numberToConvert = Math.floor(Math.random() * 100);
let conversionChoice = Math.floor(Math.random() * 4) % 4 +1;
switch(conversionChoice) {
    case 1:
        console.log("4. Feet to inch: ")
        console.log("Feet: ",numberToConvert+"ft. Inch = ", numberToConvert*12,"inch")
        break;
    case 2:
        console.log("4. Feet to meter: ")
        console.log("Feet: ",numberToConvert+"ft. Meter = ",  numberToConvert*0.3048,"m")
        break;
    case 3:
        console.log("4. inch to feet: ")
        console.log("Inch: ",numberToConvert+"inch. Feet = ", numberToConvert*0.0833,"ft")
        break;
    case 4:
        console.log("4. meter to feet: ")
        console.log("Meter: ",numberToConvert+"m. Feet = ", numberToConvert*3.28084,"ft")
        break; 
}
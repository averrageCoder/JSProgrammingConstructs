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
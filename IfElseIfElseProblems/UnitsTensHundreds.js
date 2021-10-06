let number = Math.floor(Math.random() * 10000);
console.log("3. Number: ",number," Units: ",  ~~(number%10), " Tens: ", ~~((number%100)/10)," Hundreds: " ,~~((number%1000)/100));

//1.
let number1 = Math.floor(Math.random() * 10);
let i=0;
while(Math.pow(2,number1) > Math.pow(2,i)){
    i++;
    console.log("1. 2^",i," = ",Math.pow(2,i));
}

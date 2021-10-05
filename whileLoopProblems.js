//1.
let number1 = Math.floor(Math.random() * 10);
let i=0;
while(Math.pow(2,number1) > Math.pow(2,i)){
    i++;
    console.log("1. 2^",i," = ",Math.pow(2,i));
}


//2.
let tailCount=0, headCount=0;
while(tailCount<11 && headCount<11) {
    if(Math.random() > 0.5) {
        //console.log("4. Its a TAILS!")
        tailCount++;
    }
    else {
        headCount++;
        //console.log("4. Its a HEADS!")
    }
}
console.log("2. Head count: ",headCount, " tail count: ",tailCount);

//3.
let amount = 100;
while(amount > 0 && amount < 200) {
    if(Math.random() > 0.5) {
        amount+=1;
    }
    else {
        amount-=1;
    }
}
console.log("3. Final amount: ", amount);
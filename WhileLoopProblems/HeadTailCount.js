//3.
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
//4..
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
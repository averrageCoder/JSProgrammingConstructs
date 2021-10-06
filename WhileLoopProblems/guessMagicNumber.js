//2. 
let magicNumber = Math.floor(Math.random() * 100);
let low=0, high=100, middle;
while(low <= high) {
    middle = ~~((low+high)/2);
    if(middle==magicNumber) break;
    if(middle > magicNumber) {
        console.log(`${middle} is grEater than ${magicNumber}`)
        low = low; high= middle;
    }
    else {
        console.log(`${middle} is LESSER than ${magicNumber}`)
        low = middle; high= high;
    }
}
if(middle!=magicNumber) console.log("MATCH FOUND");
else console.log("MATCH NOT FOUND");
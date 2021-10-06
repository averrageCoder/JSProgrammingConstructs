let arr = new Array();

for(let i=1; i<=100; i++) {
    if(i%10 == ~~((i%100)/10)) {
        arr.push(i);
    }
}

console.log("Twins: ", arr)

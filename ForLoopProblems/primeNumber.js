let num = Math.floor(Math.random() * 10)+1;
let flag = false;
for(let i = 2; i < num; i++) {
    if(num % i === 0) flag = true;
}
if(!flag) console.log("3. ",num," is a prime number");
else console.log("3. ",num," is NOT a prime number");
const factors = [];
let divisor = 2;
n = Math.floor(Math.random() * 10000);
console.log('5. Prime factors of ', n );
while (n >= 2) {
    if (n % divisor == 0) {
    factors.push(divisor);
    n = n / divisor;
    } else {
    divisor++;
    }
}
for (let k = 0; k < factors.length; k++) {
    console.log(factors[k]);
} 
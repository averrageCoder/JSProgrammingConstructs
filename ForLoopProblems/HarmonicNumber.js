let N = Math.floor(Math.random() * 10);
let harmonic = 1;
for (let i = 2; i <= N; i++)
{
    harmonic += parseFloat(1) / i;
}
console.log("2. Nth (",N,") harmonic number: ", harmonic);

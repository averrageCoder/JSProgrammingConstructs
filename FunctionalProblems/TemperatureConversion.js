//1.
function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  console.log(cToFahr);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  console.log(fToCel);
} 
cToF(60);
fToC(45);

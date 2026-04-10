const luckyNumber = 7; 
let guess = Math.floor(Math.random() * 10) + 1;
// So it has a range of 1 to 10 inclusive. 
while (luckyNumber !== guess)
{
  console.log("Nope, it isn't ", guess);
  guess = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is ", luckyNumber,"!");
let firstFib = 0; 
let secondFib = 1;
console.log(firstFib);
console.log(secondFib);
for (let i = 1; i <= 8; i++) // as 0 and 1 are printed already and we only want it for 8 iterations so there are 10 total outputs numbers. 
{
  let nextFib = firstFib + secondFib; 
  console.log(nextFib);
  firstFib = secondFib; 
  secondFib = nextFib; 
}
let limit = 7; 
let total = 0; 
for (let i = 1; i<= limit; i+=2) // To print the odd numbers only as it was included in the instructions. 
{
  if (i%2 === 1)
  {
    let num;
    num = i ** 3;
    total += num;
  }
}
console.log(total);
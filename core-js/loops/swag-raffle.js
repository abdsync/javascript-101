let count = 0;
let targetNumber = Math.floor(Math.random() * 100); // For each iteration the value of target number remains the same 
while (count < 10)
{
  let drawNumber = Math.floor(Math.random() * 100); // While the value of drawNumber changes each time when the 
  if (drawNumber == targetNumber)
  {
    count = count + 1;
    console.log("Match");
  }
  else 
  {
    console.log("No Match");
  }
}
console.log("The number" + targetNumber  + "was found 10 times"); // , before and after target number wasn't being accepted so we used + to concatenate i.e include the targetNumber value. 
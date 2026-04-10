let myNumber = 9; 
let binary = "";
while (myNumber > 0)
{
  if (myNumber % 2 === 0)
  {
    console.log(binary = myNumber % 2);
  }
  else if (myNumber % 2 !== 0)
  {
    console.log(binary = myNumber % 2);
  }
  myNumber = Math.floor(myNumber / 2); // Reassigning the value to myNumber i.e now it becomes 9/2 which is 4 i.e floor value 
  // After the condition is checked the new value is assigned and then again if the while is true it agains reads inside the conditionals and so on. 
}
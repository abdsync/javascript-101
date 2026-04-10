var randomNumber = Math.floor(Math.random() * 4);
// Here *4 limits its range to 0 to 3.99 i.e 0 inclusive and 4 exclusive. 
if (randomNumber == 0)
{
  console.log("10 Push-ups");
}
else if (randomNumber == 1)
{
  console.log("10 Sit-ups");
}
else if (randomNumber == 2)
{
  console.log("10 Squats");
}
else if (randomNumber == 3)
{
  console.log("10 Jumping Jacks");
}
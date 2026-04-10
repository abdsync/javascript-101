// When the player chose rock 
let player = 0; // Rock 
let computer = Math.floor(Math.random());
if (computer == 0)
{
  console.log("Player Picked: Rock")
  console.log("Computer Picked: Rock")
  console.log("Try Again");
}
else if (computer == 1)
{
  console.log("Player Picked: Rock");
  console.log("Computer Picked: Paper");
  console.log("The computer won!")
}
else if (computer == 2)
{
  console.log("Player Picked: Rock");
  console.log("Computer Picked: Scissors");
  console.log("The player won!")
}

player = 1; // When the player chose paper
computer = Math.floor(Math.random());
if (computer == 0)
{
  console.log("Player Picked: Paper")
  console.log("Computer Picked: Rock")
  console.log("The player won!");
}
else if (computer == 1)
{
  console.log("Player Picked: Paper");
  console.log("Computer Picked: Paper");
  console.log("Try Again!")
}
else if (computer == 2)
{
  console.log("Player Picked: Paper");
  console.log("Computer Picked: Scissors");
  console.log("The computer won!");
}

player = 2; // // When the player chose scissors
computer = Math.floor(Math.random());
if (computer == 0)
{
  console.log("Player Picked: Scissors")
  console.log("Computer Picked: Rock")
  console.log("The computer won!");
}
else if (computer == 1)
{
  console.log("Player Picked: Scissors");
  console.log("Computer Picked: Paper");
  console.log("The player won!")
}
else if (computer == 2)
{
  console.log("Player Picked: Scissors");
  console.log("Computer Picked: Scissors");
  console.log("Try Again!");
}



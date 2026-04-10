pokemon = {
    name: "Pickachu",
    type: "Electric ⚡️",
    level: 25
  }
  
  pokemon.isCaught = false;// Added iscaught property 
  console.log(pokemon); 
  pokemon.isCaught = true;
  pokemon.name = "Zappy"; // After changing name and changing the iscaught property. 
  console.log(pokemon);
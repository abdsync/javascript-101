const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
  ];
  const captionsArray = [
    "When the Promise finally resolves, but the payload is literally just undefined.",
    "Me explaining the intricacies of Prototypal Inheritance to my rubber duck at 3 AM.",
    "Junior devs looking at their first React dependency array infinite loop.",
    "The exact moment you realize you mutated the state directly instead of using a setter."
  ];
  
  let imgdiv = document.getElementById("random-meme");
  let imgcaption = document.getElementById("random-caption");
  let memeButton = document.getElementById("generator-button");

  memeButton.addEventListener("click", function() 
  {
    let randomIndex1 = Math.floor(Math.random() * memeArray.length);
    let randomIndex2 = Math.floor(Math.random() * memeArray.length);
    imgdiv.src = memeArray[randomIndex1]; 
    imgcaption.innerText = captionsArray[randomIndex2];
  });

  /* Crux of the story: Whenever the button is clicked the funciton invokes
  that sets the value of two randomIndex variables to some values which are
  used to navigate change the images and captions randomly */ 
  
  


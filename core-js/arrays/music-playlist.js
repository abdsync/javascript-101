const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];
  
  const ShiftedElement = musicPlaylist.shift();
  const PoppedElement = musicPlaylist.pop();
  
  musicPlaylist.push("For the love of");
  musicPlaylist.unshift("Basant Day");
  musicPlaylist.unshift("Kashmir Day");
  
  console.log(musicPlaylist);
  
  
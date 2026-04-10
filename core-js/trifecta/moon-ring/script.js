const arbitrary = document.getElementById("stone");
const randomNumber = Math.floor(Math.random() * 9 ) + 1;
    if (randomNumber === 1)
    {
        arbitrary.style.backgroundColor = "red";
    }
    else if (randomNumber === 2)
    {
        arbitrary.style.backgroundColor = "orange";
    }
    else if (randomNumber === 3)
    {
        arbitrary.style.backgroundColor = "yellow";
    }
    else if (randomNumber === 4)
    {
        arbitrary.style.backgroundColor = "green";
    }
    else if (randomNumber === 5)
    {
        arbitrary.style.backgroundColor = "blue";
    }
    else if (randomNumber === 6)
    {
        arbitrary.style.backgroundColor = "#4169e1";
    }
    else if (randomNumber === 7)
    {
        arbitrary.style.backgroundColor = "#00008b";
    }
    else if (randomNumber === 8)
    {
        arbitrary.style.backgroundColor = "purple";
    }
    else if (randomNumber === 9)
    {
        arbitrary.style.backgroundColor = "black";
    }

    // What really is happening; 
    // 1. We are selecting the ring part i.e stone and storing in variable. 
    // 2. Then we are generating a random number between 1 and 9. 
    // 3. Based on that number produced we are changing the colors of the ring. 
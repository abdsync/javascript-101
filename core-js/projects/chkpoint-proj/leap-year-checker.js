for (let i = 2000; i <= 3000; i++)
    {
      if ( i % 4 === 0 && i % 100 !== 0)
      {
        console.log("Leap year is:" + i);
      }
      else if ( i % 400 === 0)
      {
        console.log("Leap year is:" + i);
      }
    }
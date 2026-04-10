for (let i = 1; i <= 50; i++)
    {
      if (i%2 !== 0)
      {
        continue; // If the mod is not equal to 0 means it is odd, so skip the iteration. 
      }
      console.log(i); // When the iteration is skipped it logs out the current value 
      if ( i == 42)   // and then checks if the value is == 42 then break i.e stop the entire loop there.
        {
          break;
        }              
    }
const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

// Mean Function
function mean(viewsArray)
{
  let totalViews = 0;
  for (let i = 0; i < viewsArray.length; i++)
  {
    totalViews = totalViews + viewsArray[i];
  }
  return "Mean: " + totalViews / viewsArray.length;
}

// Bubble Sort & Median
function median(viewsArray)
{
  for (let i = 0; i < viewsArray.length -1 ; i++) // Bubble sort is being used here alhtough slower to implement but is beginner friendly. 
  {
    for ( let j = 0; j < viewsArray.length - 1; j++)
    {
      if (viewsArray[j] > viewsArray[j+1])
      {
        let temp = viewsArray[j];
        viewsArray[j] = viewsArray[j + 1];
        viewsArray[j + 1] = temp;
      }
    }
  }
  let middleIndex = Math.floor(viewsArray.length / 2.0);
  let sortedStats = viewsArray[middleIndex];
  return "Median: " + sortedStats; // Calculating median from the sorted array. 
}

// Outputs using console.log
console.log("TikTok");
console.log(mean(recentTikTokViews));
console.log(median(recentTikTokViews));
console.log("");
console.log("");
console.log("Instagram");
console.log(mean(recentInstagramViews));
console.log(median(recentInstagramViews));
console.log("");
console.log("");
console.log("Youtube");
console.log(mean(recentYouTubeViews));
console.log(median(recentYouTubeViews));

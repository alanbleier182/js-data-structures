// The most obvious solution to this problem calls for two nested arrays
// Time complexity becomes quadratic. A more efficient solution is found at ./capturingRainwaterEfficient.js

function capturingRainwater(heights) {
  let totalWater = 0;
  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0;
    let rightBound = 0;
    // We only want to look at the elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j <= i; j++) { 
      leftBound = Math.max(leftBound, heights[j]);
    }
    // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
    for (let j = i; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j]);
    }
    totalWater += Math.min(leftBound, rightBound) - heights[i];
  }
  return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(capturingRainwater(testArray));

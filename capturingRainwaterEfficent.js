// An optimized, two-pointer approach to the classical 'Capturing Rainwater' problem
// Time copmlexity is O(n), while the naive solution performs at O(n^2)

function capturingRainwater(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;
  
  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      if (heights[leftPointer] > leftBound) {
        leftBound = heights[leftPointer];
      }
      totalWater += leftBound - heights[leftPointer];
      leftPointer++;
    } else {
      if (heights[rightPointer] > rightBound) {
        rightBound = heights[rightPointer];
      }
      totalWater += rightBound - heights[rightPointer];
      rightPointer--;
    }
  }

  return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(capturingRainwter(testArray));

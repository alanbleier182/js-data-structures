// A recursive solution to the classical knapsack problem with a O(2^n) runtime
// An optimized solution is found at ./dynamicKnapsack.js

const recursiveKnapsack = function(weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
    const excludeItem = recursiveKnapsack(weightCap), weights, values, i - 1);
    return Math.max(includeItem, excludeItem);
  }
};

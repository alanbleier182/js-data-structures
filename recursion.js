const recursiveFactorial = (n) => {
  // base case
  if (n === 0) {
    return 1;
  // recursive case
  } else if (n > 0) {
    return n * recursiveFactorial(n - 1);
  }
}

const iterativeFactorial = (n) => {
  result = 1;
  while(n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
}

const n = 5;

// Both should print 120
console.log(recursiveFactorial(n));
console.log(iterativeFactorial(n));

module.exports = {
  recursiveFactorial,
  iterativeFactorial
};

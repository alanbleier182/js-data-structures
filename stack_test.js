const Stack = require('./Stack');

const pizzaStack = new Stack(6);

for( let i = 1; i <= pizzaStack.maxSize; i++) {
  pizzaStack.push('Pizza #' + i);
}

try {
  pizzaStack.push('Pizza #7');
} catch(e) {
  console.log(e);
}

console.log('The first pizza to deliver is ' + pizzaStack.peek());

for( let i = 1; i <= pizzaStack.maxSize; i++) {
  pizzaStack.pop();
}

try {
  pizzaStack.pop();
} catch(e) {
  console.log(e);
}

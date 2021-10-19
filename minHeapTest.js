// Testing a Min Heap
// This script creates a min-heap one element at a time from a random collection of numbers
// It then removes the minimum value from the min-heap one at a time

// import MinHeap class
const MinHeap = require('./MinHeap');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
const randomize = () => Math.floor(Math.random() * 40); 

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
  const num = randomize();
  console.log(`.. Adding value ${num}`);
  minHeap.add(num);
  console.log('Content of min-heap', minHeap.heap);
}

// return the minimum value in the heap until heap is empty
console.log('\n');
for (let i = 0; i < 6; i++) {
  console.log(`.. Removing minimum value ${minHeap.popMin()}`);
  console.log('Content of min-heap', minHeap.heap);
}

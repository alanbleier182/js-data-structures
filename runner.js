const LinkedList = require('./LinkedList');
const testLinkedList = require('./testLinkedList.js');

// An implementation of the runners technique to find the nth Last Node in a list
const nthLastNode = ( linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;

};

// Test
console.log(nthLastNode(testLinkedList, 4));

module.exports = nthLastNode;

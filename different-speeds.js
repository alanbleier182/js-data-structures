const generateTestLinkedList = require('./generateTestLinkedList');

// Two pointers running at different speeds to find the middle of the list
const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast !== null) {
    fast = fast.getNextNode();
    if (fast !== null) {
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  return slow;
};

console.log(findMiddle(generateTestLinkedList(7)));

// Leave this so that we can test your code:
module.exports = findMiddle;

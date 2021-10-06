// Node Class with setter and getter
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}

// 3 nodes to test methods
const vanillaNode = new Node('Vanilla');
const strawberryNode = new Node('Berry Tasty');
const coconutNode = new Node('Coconuts for Coconut');

// Link the three nodes
vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

// Loop through them in order
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;

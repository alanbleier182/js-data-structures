const testGraph = require('./testGraph.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  start.edges.forEach( edge => {
    const neighbor = edge.end;
    if(!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
  }
  });
  console.log(visitedVertices);
};

breadthFirstTraversal(testGraph.vertices[0]);

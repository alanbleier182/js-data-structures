const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);

  if(start.edges.length) {
    let neighbor = start.edges[0].end;
    // console.log(neighbor.data);
    if(!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  }


};

depthFirstTraversal(testGraph.vertices[0]);

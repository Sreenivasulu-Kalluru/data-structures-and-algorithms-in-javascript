const Stack = require('./stack');

function depthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  const visited = {};
  const stack = new Stack();
  const result = [];

  stack.push(startingVertex);
  visited[startingVertex] = true;

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        stack.push(neighbour);
      }
    });
  }

  return result;
}

module.exports = depthFirstTraversal;

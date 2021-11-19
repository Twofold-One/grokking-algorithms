// graph visualization
const body = document.getElementsByTagName("body")[0];
const graphImg = document.createElement("img");
graphImg.src = "graph_for_dijkstra_algorithm.png";
body.appendChild(graphImg);

// graph hash table
let graph = {};

graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["finish"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["finish"] = 5;

graph["finish"] = {};

// costs hash table
let costs = {};

costs["a"] = 6;
costs["b"] = 2;
costs["finish"] = Infinity;

// parents hash table
let parents = {};

parents["a"] = "start";
parents["b"] = "start";
parents["finish"] = null;

// processed nodes array
let processed = [];

// function to find lowest cost node
function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

// dijkstra algorithm code function
function dijkstraAlgorithm() {
  let node = findLowestCostNode(costs);
  while (node) {
    let cost = costs[node];
    let neighbors = graph[node];
    for (let n of Object.keys(neighbors)) {
      let newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
  }
}

dijkstraAlgorithm();

console.log(parents);

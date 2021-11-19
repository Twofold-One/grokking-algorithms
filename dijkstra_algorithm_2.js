// graph hash table
let graph = {};

graph["start"] = {};
graph["start"]["a"] = 2;
graph["start"]["b"] = 5;

graph["a"] = {};
graph["a"]["b"] = 8;
graph["a"]["d"] = 7;

graph["b"] = {};
graph["b"]["c"] = 4;
graph["b"]["d"] = 2;

graph["c"] = {};
graph["c"]["d"] = 6;
graph["c"]["finish"] = 3;

graph["d"] = {};
graph["d"]["finish"] = 1;

graph["finish"] = {};

// costs hash table
let costs = {};

costs["a"] = 6;
costs["b"] = 2;
costs["c"] = Infinity;
costs["d"] = Infinity;
costs["finish"] = Infinity;

// parents hash table
let parents = {};

parents["a"] = "start";
parents["b"] = "start";
parents["c"] = null;
parents["d"] = null;
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

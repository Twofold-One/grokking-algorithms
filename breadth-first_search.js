// Breadth-first search (BFS)

// graph
let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

//function to define seller
function personIsSeller(name) {
  // return name.charAt(name.length - 1) === "m";
  return name.endsWith("m");
}

// search function
function search(name) {
  let searched = [];
  let searchQueue = [];
  searchQueue = [...graph[name]];
  while (searchQueue.length > 0) {
    let person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(person + " is a mango seller");
        return true;
      } else {
        searchQueue = searchQueue.concat(graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
}

search("you");

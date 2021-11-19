// list of states
// using new Set() here
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// hash table list of stations
let stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

// set of final stations
let finalStations = new Set();

function greedy() {
  while (statesNeeded.size > 0) {
    let bestStation = null;
    let statesCovered = new Set();
    for (let [station, states] of Object.entries(stations)) {
      //   sets intersection
      let covered = new Set([...statesNeeded].filter((x) => states.has(x)));
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
        // subraction of sets
        statesNeeded = new Set(
          [...statesNeeded].filter((x) => !statesCovered.has(x))
        );
        finalStations.add(bestStation);
      }
    }
  }
  return finalStations;
}

console.log(greedy());

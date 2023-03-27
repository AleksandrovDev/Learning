// Create graph from nodes and edges

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes: [from: string, to: string][] = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

const airportsGraph = new Map();

function addNode(node: string) {
  airportsGraph.set(node, []);
}

function addRoute(from: string, to: string) {
  airportsGraph.get(from).push(to);
  airportsGraph.get(to).push(from);
}

airports.forEach(addNode);
routes.forEach((route) => addRoute(...route));

console.debug(airportsGraph);

// allows to find all cases
function bfs(start: string) {
  const queue = [start];
  const visited = new Set();

  while (queue.length) {
    const origin = queue.shift();
    // console.log(origin);
    const destinations = airportsGraph.get(origin);

    for (const d of destinations) {
      if (d === 'BKK') {
        console.log('Found!');
        // return;
      }
      if (!visited.has(d)) {
        console.log(d);
        queue.push(d);
        visited.add(d);
      }
    }
  }
}

// Find if there is a route PHX -> BKK
bfs('PHX');

// allows to find faster
function dfs(start: string, visited = new Set<string>()) {
  console.log(start);

  visited.add(start);

  for (const d of airportsGraph.get(start)) {
    if (d === 'BKK') {
      console.log(`Found in ${visited.size} steps`);
      return;
    }

    if (!visited.has(d)) {
      dfs(d, visited);
    }
  }
}

dfs('PHX');
// Time complexity for both O(Vertexes + Nodes) => O(n)

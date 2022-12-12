const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const visited = [];
let needVisit = [];

// while문 사용
// const dfs = (graph, startNode) => {
//   needVisit.push(startNode);

//   while (needVisit.length !== 0) {
//     const node = needVisit.shift();
//     if (!visited.includes(node)) {
//       visited.push(node);
//       needVisit = [...graph[node], ...needVisit];
//     }
//   }
//   return visited;
// };

// console.log(dfs(graph, "A"));

// 재귀 사용

const dfs = (startNode, graph) => {
  if (visited.length === 10) {
    return console.log(visited);
  }
  needVisit.push(startNode);
  const node = needVisit.shift();
  if (!visited.includes(node)) {
    visited.push(node);
    needVisit = [...graph[node], ...needVisit];
  }
  dfs(node, graph);
};

dfs("A", graph);

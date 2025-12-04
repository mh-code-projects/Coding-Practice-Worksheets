///////////////////////////////////////////////////////////////
// PHASE 3 — ADVANCED PATTERNS WORKSHEET
// Backtracking, Divide & Conquer, Dynamic Programming,
// Advanced Graph Techniques, Recursion Mastery
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// SECTION 1 — SAMPLE DATA
///////////////////////////////////////////////////////////////

const nums       = [1, 2, 3, 4];
const numsLarge  = [2, 3, 5, 6, 8, 10];
const grid = [
  [1,0,0,1],
  [0,1,1,0],
  [0,0,1,0],
  [1,1,0,1]
];
const wordsList = ["cat","dog","car","cart","dart","art"];


///////////////////////////////////////////////////////////////
// SECTION 2 — ADVANCED PATTERN MODULES
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// 1. BACKTRACKING
///////////////////////////////////////////////////////////////

//// Reference:
// Backtracking = exploring all possible decisions by branching,
// then undoing that decision (“backtrack”) and trying the next.
// Used for: subsets, permutations, combinations, pathfinding,
// string building, puzzles.

//// Syntax:
// function backtrack(path, choices) {
//   if (finished) { /* record path */ }
//   for (choice of choices) {
//     path.push(choice);
//     backtrack(path, choices);
//     path.pop();
//   }
// }

//// Example:
// Generating subsets: include or exclude each number.

//// Challenges:

// 1) Using nums, generate all subsets (the power set).

// 2) Using nums, generate all permutations (order matters).

// 3) From wordsList, generate all words that start with 'c'
//    by building character-by-character with backtracking.

// 4) Solve a grid pathfinding task where you can move
//    up/down/left/right and must avoid 1s in grid.
//    New concept: backtracking with a 2D board and visited set.

// 5) Implement combination-sum: using numsLarge,
//    generate all unique combinations that sum to target = 10.
//    New concept: pruning branches when the partial sum exceeds target.



///////////////////////////////////////////////////////////////
// 2. DIVIDE & CONQUER
///////////////////////////////////////////////////////////////

//// Reference:
// Strategy: split into halves, solve each recursively,
// combine results.
// Used for sorting, searching, merging intervals, tree problems.

//// Syntax:
// function divideAndConquer(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = divideAndConquer(arr.slice(0, mid));
//   const right = divideAndConquer(arr.slice(mid));
//   return merge(left, right);
// }

//// Example:
// Merge sort uses divide & conquer (split → sort → merge).

//// Challenges:

// 6) Implement merge sort for numsLarge.

// 7) Implement a recursive algorithm to find the maximum number
//    in numsLarge using divide & conquer.

// 8) Using divide & conquer, count how many times a target value
//    appears in a sorted array (split and search both halves).

// 9) Implement quickselect logic to find the k-th smallest element
//    in numsLarge.
//    New concept: partitioning (like quicksort).



///////////////////////////////////////////////////////////////
// 3. DYNAMIC PROGRAMMING (DP)
///////////////////////////////////////////////////////////////

//// Reference:
// DP is optimization of recursion via memoization or tabulation.
// Key idea: break a complex problem into overlapping subproblems,
// store results, reuse them.

//// Syntax (memoization):
// const memo = {};
// function dp(n) {
//   if (memo[n]) return memo[n];
//   memo[n] = /* recursive solution */;
//   return memo[n];
// }

//// Syntax (tabulation):
// const table = Array(n+1).fill(0);
// table[0] = base;
// for (let i=1; i<=n; i++) {
//   table[i] = ...;
// }

//// Example:
// Fibonacci with memoization vs naive recursion.

//// Challenges:

// 10) Compute fibonacci(n) using memoization.

// 11) Compute fibonacci(n) using tabulation.

// 12) Given numsLarge, compute the maximum sum of a subsequence
//     where no two elements are adjacent.
//     New concept: DP recurrence dp[i] = max(dp[i-1], dp[i-2] + nums[i]).

// 13) Given a target sum = 10 and array numsLarge,
//     determine if the target can be formed using any combination
//     of numbers (unbounded). Use tabulation.
//     New concept: classic "canSum" DP.

// 14) Build a DP to count number of paths through a 2D grid,
//     moving only right or down, avoiding 1s in grid.



///////////////////////////////////////////////////////////////
// 4. ADVANCED GRAPH PATTERNS
///////////////////////////////////////////////////////////////

//// Reference:
// Build on DFS/BFS to handle more complex tasks:
// - Topological sort
// - Cycle detection in directed graphs
// - Connected components
// - Shortest path in weighted graphs (Dijkstra intro)

//// Syntax (topological sort – DFS-based):
// function dfs(node) {
//   visited.add(node);
//   for (next of graph[node]) if (!visited.has(next)) dfs(next);
//   order.push(node);
// }

//// Syntax (cycle detection, directed graph):
// Colors: 0 = unvisited, 1 = visiting, 2 = done.

//// Example:
// Detecting cycles in a dependency graph.

//// Sample small directed graph:
const directedGraph = {
  A: ["B"],
  B: ["C"],
  C: ["E"],
  D: ["A"],
  E: []
};

//// Challenges:

// 15) Using DFS, count how many connected components exist
//     in the undirected version of directedGraph.

// 16) Implement topological sort on directedGraph.
//     New concept: reverse post-order.

// 17) Detect if directedGraph has a cycle using 3-color marking.

// 18) Implement BFS shortest-path on weighted graph by converting
//     each weight to repeated edges (simple intro technique).

// 19) Build a BFS that finds the shortest transformation sequence
//     between two words in wordsList, if one letter change is allowed
//     between steps (word graph construction).



///////////////////////////////////////////////////////////////
// 5. RECURSION MASTERY
///////////////////////////////////////////////////////////////

//// Reference:
// Many advanced techniques depend on deep recursion understanding.
// Focus: stack frames, base cases, implicit tree expansion,
// eliminating loops via recursive branching.

//// Syntax:
// function recurse(n) {
//   if (base) return;
//   recurse(n-1);
// }

//// Example:
// Recursively printing a list.

//// Challenges:

// 20) Write a recursive function to sum all elements in numsLarge.

// 21) Recursively flatten a deeply nested array you construct manually.

// 22) Recursively reverse a string (no loops).

// 23) Recursively compute all paths from top-left to bottom-right
//     in grid (avoid 1s). This is a precursor to backtracking + DP hybrids.

// 24) Recursively generate all valid parentheses of length n=3.
//     New concept: recursion state with counts (open < max, close < open).

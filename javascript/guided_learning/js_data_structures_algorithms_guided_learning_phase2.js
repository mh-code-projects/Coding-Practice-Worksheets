///////////////////////////////////////////////////////////////
// BASIC PATTERNS WORKSHEET
// Core Algorithm Patterns for Practical Problem Solving
//
// Patterns:
// 1. Two Pointers
// 2. Sliding Window
// 3. Hash Map / Frequency Counters
// 4. Fast & Slow Pointers
// 5. Binary Search Pattern
// 6. Stack-Based Parsing
// 7. DFS Pattern
// 8. BFS Pattern
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// SECTION 2 — SAMPLE DATA (Used Across Patterns)
///////////////////////////////////////////////////////////////

const nums      = [1, 2, 3, 4, 6, 8, 9, 11];
const numsMixed = [4, 7, 1, 2, 5, 3, 8];
const words     = ["a", "b", "c", "a", "b", "d", "e"];
const text      = "abccabbdef";
const tree = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, left: { val: 6 }, right: { val: 7 } }
};
const graphAdjList = {
  A: ["B","C"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: ["F"],
  F: []
};


///////////////////////////////////////////////////////////////
// SECTION 3 — PATTERN MODULES
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// 1. TWO POINTERS
///////////////////////////////////////////////////////////////

//// Reference:
// Use when scanning inward/outward, or when working with sorted arrays.
// Ideal for pair-sum, comparisons, deduplication, narrowing search time.

//// Syntax:
// let left = 0;
// let right = arr.length - 1;
// while (left < right) {
//   // logic
//   // move left++ or right--
// }

//// Example:
// Given a sorted array, find if any pair sums to 10:
// left = 0, right = arr.length - 1
// Move pointers based on sum comparison.

//// Challenges:

// 1) From nums (sorted), determine if any pair adds up to 10.

// 2) Using nums, find the pair whose sum is closest to 12.

// 3) Remove duplicates from a sorted array in-place using two pointers.
//    New concept: "write pointer" technique (moves slower than read pointer).


///////////////////////////////////////////////////////////////
// 2. SLIDING WINDOW
///////////////////////////////////////////////////////////////

//// Reference:
// Use for problems involving contiguous subarrays/substrings: longest, shortest,
// or matching conditions.

//// Syntax:
// let left = 0;
// for (let right = 0; right < arr.length; right++) {
//    // expand window using right
//    // shrink while some condition fails using left++
// }

//// Example:
// Longest substring without repeating characters uses a window that expands
// until a duplicate is found, then shrinks from the left.

//// Challenges:

// 4) Find the longest substring in text with all unique characters.

// 5) From numsMixed, find the maximum sum of any window of size 3.

// 6) Given text, find the shortest substring that contains "abc" at least once.
//    New concept: window validity check using frequency maps.


///////////////////////////////////////////////////////////////
// 3. HASH MAP / FREQUENCY COUNTER
///////////////////////////////////////////////////////////////

//// Reference:
// Use when counting, checking membership quickly, or comparing content.
// Great for duplicates, anagrams, frequency analysis.

//// Syntax:
// const map = {};
// for (const item of arr) {
//   map[item] = (map[item] || 0) + 1;
// }

//// Example:
// Counting occurrences of each letter in a string.

//// Challenges:

// 7) Build a frequency map of words using the words array.

// 8) Determine if two strings are anagrams (use sample text fragments you create).

// 9) Create a map from numsMixed where each key is the number
//    and the value is the count of how many times it appears.
//    Then produce an array of keys that appear only once.


///////////////////////////////////////////////////////////////
// 4. FAST & SLOW POINTERS
///////////////////////////////////////////////////////////////

//// Reference:
// Used for cycle detection, finding midpoints, or multi-speed scans.

//// Syntax:
// let slow = head;
// let fast = head;
// while (fast && fast.next) {
//   slow = slow.next;
//   fast = fast.next.next;
// }

//// Example:
// Finding middle of linked list: slow ends at center when fast reaches end.

//// Challenges:

// 10) Given a linked list you construct manually,
//     use fast/slow pointers to locate the middle value.

// 11) Detect a cycle in a linked list you create (add a cycle manually).

// 12) For an array representing a circular movement pattern (positive = forward,
//     negative = backward), determine if a cycle exists.
//     Introduce the idea of using indices as "next" pointers.


///////////////////////////////////////////////////////////////
// 5. BINARY SEARCH PATTERN
///////////////////////////////////////////////////////////////

//// Reference:
// Use when data is sorted OR when searching within a monotonic condition.

//// Syntax:
// let left = 0;
// let right = arr.length - 1;
// while (left <= right) {
//   const mid = Math.floor((left + right)/2);
//   if (condition) right = mid - 1;
//   else left = mid + 1;
// }

//// Example:
// Searching for a boundary: first value >= target.

//// Challenges:

// 13) Using nums (sorted), find the index of target = 6 via binary search.

// 14) Find the first index in nums where value >= 5.
//     New concept: boundary search.

// 15) Given a function isValid(x), binary search the smallest x
//     for which isValid(x) returns true.
//     (Create a simple isValid for practice.)


///////////////////////////////////////////////////////////////
// 6. STACK-BASED PARSING PATTERN
///////////////////////////////////////////////////////////////

//// Reference:
// Use when parsing nested structures: parentheses, HTML-like tags,
// undo/redo, evaluating expressions.

//// Syntax:
// const stack = [];
// for (const ch of input) {
//   if (opening) stack.push(ch);
//   if (closing) stack.pop();
// }

//// Example:
// Balanced parentheses checker.

//// Challenges:

// 16) Check if the parentheses in a string are balanced: "(()())()".

// 17) Use a stack to reverse the characters of a string.

// 18) Evaluate a simple expression containing + and * with single-digit numbers.
//     New concept: operator precedence stack.


///////////////////////////////////////////////////////////////
// 7. DFS (DEPTH-FIRST SEARCH)
///////////////////////////////////////////////////////////////

//// Reference:
// Use DFS for recursion tasks, exploring depth, processing all branches.

//// Syntax (tree):
// function dfs(node) {
//   if (!node) return;
//   dfs(node.left);
//   dfs(node.right);
// }

//// Syntax (graph adjacency list):
// function dfs(node, visited) {
//   visited.add(node);
//   for (const next of graph[node]) dfs(next, visited);
// }

//// Example:
// Traversing all nodes in a binary tree.

//// Challenges:

// 19) Perform DFS on tree and produce an array of visited values in pre-order.

// 20) Perform DFS on graphAdjList and collect the order visited.

// 21) Count how many leaf nodes exist in tree using DFS.


///////////////////////////////////////////////////////////////
// 8. BFS (BREADTH-FIRST SEARCH)
///////////////////////////////////////////////////////////////

//// Reference:
// Use BFS for shortest paths, level-order traversal, wave-like expansion.

//// Syntax:
// const queue = [];
// queue.push(start);
// while (queue.length) {
//   const node = queue.shift();
//   for (const neighbor of adj[node]) queue.push(neighbor);
// }

//// Example:
// Level-order traversal of a tree, or shortest path in a graph.

//// Challenges:

// 22) Using BFS, perform a level-order traversal of tree.

// 23) Using BFS on graphAdjList, find the shortest number of steps
//     from A to F.

// 24) Create a grid (2D array) and perform BFS to compute the shortest path
//     from top-left to bottom-right.
//     New concept: BFS on a matrix (row/col moves).

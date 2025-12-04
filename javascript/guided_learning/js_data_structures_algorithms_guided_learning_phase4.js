///////////////////////////////////////////////////////////////
// FINAL INTEGRATED MASTER WORKSHEET
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// SECTION 1 — ONE-LINE PATTERN REMINDERS (REFERENCE ONLY)
///////////////////////////////////////////////////////////////

// Two Pointers: left++ , right-- (inward scanning on sorted or relational arrays)
// Sliding Window: expand right, shrink left while condition invalid
// Hash Map / Frequency Counter: map[val] = (map[val] || 0) + 1
// Fast & Slow Pointers: slow += 1 step, fast += 2 steps
// Binary Search Pattern: compare mid, eliminate half
// Stack Parsing: push on open, pop on close
// DFS: recursive depth-first exploration
// BFS: queue-based breadth-first exploration


///////////////////////////////////////////////////////////////
// SECTION 2 — SAMPLE DATA
///////////////////////////////////////////////////////////////

const arrNums       = [2, 4, 7, 1, 9, 3, 12, 5, 8];
const sortedNums    = [1, 3, 4, 6, 8, 9, 11, 14, 18];
const arrStrings    = ["alpha","beta","gamma","beta","theta","alpha","zeta"];
const bigString     = "abcbacbbabcbbacdefgabc";
const graphA = {
  A: ["B","C"],
  B: ["D"],
  C: ["E","F"],
  D: [],
  E: ["G"],
  F: ["G"],
  G: []
};
const treeA = {
  val: 10,
  left: {
    val: 6,
    left: { val: 3 },
    right: { val: 8 }
  },
  right: {
    val: 14,
    left: { val: 12 },
    right: { val: 16 }
  }
};
const gridA = [
  [0,0,1,0],
  [1,0,0,0],
  [0,0,0,1],
  [0,1,0,0]
];



///////////////////////////////////////////////////////////////
// SECTION 3 — INTEGRATED PROBLEM SET (UNLABELED)
// Each challenge corresponds to exactly one algorithmic pattern,
// but NONE are marked or hinted. Student must determine the pattern
// based solely on structural behavior.
///////////////////////////////////////////////////////////////


// 1) Find a pair in sortedNums whose sum equals 15.

// 2) Return all unique pairs in sortedNums whose difference is exactly 5.

// 3) From arrNums, determine the length of the longest substring of bigString
//    with all unique characters.

// 4) Build a frequency table for arrStrings.

// 5) Reverse bigString without using built-in reverse.

// 6) Determine if bigString contains any substring of length 3
//    that is an anagram of "abc".

// 7) Identify the middle element of a linked list built from arrNums.

// 8) Detect whether a manually created cycle exists in your linked list.

// 9) Return the first number in arrNums that appears more than once,
//    without sorting.

// 10) From sortedNums, find the index of the first element greater than or equal to 9.

// 11) Find all pairs in arrNums that multiply to an even number
//     after sorting the array.

// 12) Find the smallest substring in bigString that contains
//     the letters "abc".

// 13) Evaluate an arithmetic expression containing digits, +, -, *, and
//     parentheses that you define.

// 14) Perform a traversal of treeA and collect values into an array.

// 15) Find the shortest path from A to G in graphA.

// 16) Return the maximum sum of any contiguous subarray of size 4
//     in arrNums.

// 17) From sortedNums, find the smallest value whose square exceeds 100.

// 18) Using gridA, compute a path from top-left to bottom-right
//     ignoring cells with value 1.

// 19) Determine whether any three numbers in arrNums sum to exactly 20.

// 20) Find the longest substring in bigString containing at most
//     two distinct characters.

// 21) Convert graphA to undirected form and count how many
//     connected components exist.

// 22) Generate all subsets of arrNums whose elements sum to an even number.

// 23) Determine whether bigString can be constructed by repeating
//     one of its substring segments.

// 24) Determine if any path exists from C to D in graphA,
//     then return all such paths.

// 25) Evaluate an expression twice: once with recursion,
//     once with a stack-based approach.

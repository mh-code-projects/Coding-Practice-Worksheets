///////////////////////////////////////////////////////////////
// Phase 1 — Core Data Structures (Arrays, Hash Maps, Sets,
// Stacks, Queues)
//
// SECTION 1: REFERENCE — Quick Guide
///////////////////////////////////////////////////////////////
/*
//// Arrays
// Purpose: Ordered lists of elements. Fast random access by index.
// Common operations: push, pop, shift, unshift, slice, splice, index access.
// Useful for: iteration patterns, two-pointer techniques, sequence processing.

//// Hash Maps (Object / Map)
// Purpose: Key-value storage with fast lookups.
// Useful for: counting, quick membership tests, memoization, deduplication.
// Syntax example:
/// const map = {};
/// map[key] = value;
/// const value = map[key];

//// Sets
// Purpose: Store unique values with fast existence checks.
// Useful for: removing duplicates, tracking visited items.
// Syntax:
/// const s = new Set();
/// s.add(val);
/// s.has(val);

//// Stacks
// Purpose: LIFO (last-in-first-out). Works like a “pile of plates”.
// Useful for: parsing, undo/redo, call simulation, parentheses problems.
// Syntax:
/// const stack = [];
/// stack.push(x);
/// stack.pop();

//// Queues
// Purpose: FIFO (first-in-first-out). Works like a line of people.
// Useful for: breadth-first search, rate-limiting, scheduling.
// Syntax:
/// const queue = [];
/// queue.push(x);   // enqueue
/// queue.shift();   // dequeue
*/

///////////////////////////////////////////////////////////////
// SECTION 2: SAMPLE DATA (Use for exercises below)
///////////////////////////////////////////////////////////////

const sampleNumbers = [4, 2, 9, 1, 7, 3, 8];
const sampleWords   = ["alpha", "beta", "gamma", "beta", "alpha", "delta"];
const sampleNested  = [ [1,2], [3,4], [5,6] ];

///////////////////////////////////////////////////////////////
// SECTION 3: CHALLENGE PROMPTS
///////////////////////////////////////////////////////////////


//////////////////////
// ARRAY CHALLENGES
//////////////////////

// 1) Challenge: Retrieve the second largest number in sampleNumbers.
//    Make sure your approach works even if the array is not sorted.


// If current < Highest, and if current > second, then make current second
// if current > highest, make current the highest AND make the current highest the second
// if current < highest AND second, skip it

const findSecondLargest = (numberArray) => {
	let largest = 0;
	let secondLargest = 0;
	for (let i=0; i < numberArray.length; i++) {
		let current = numberArray[i]
		if (current > largest && current > secondLargest) {			
			secondLargest = largest
			largest = current;
		} else if ((current > secondLargest && current < largest ) ) {
			secondLargest = current;
		}
	}
	return secondLargest;
}
console.log(`Second largest: ${findSecondLargest(sampleNumbers)}`);

// 2) Challenge: Create a new array containing only the even numbers
//    from sampleNumbers.

const onlyEven = (numberArray) => {
	let evenNumbers = []
	for (let i = 0; i < numberArray.length; i++) {
		let current = numberArray[i];
		if (current % 2 === 0) {
			evenNumbers.push(current);
		}
	};
	return evenNumbers;
};
console.log(`Only even numbers: ${onlyEven(sampleNumbers)}`);

// 3) Challenge: Flatten sampleNested into a single array of numbers.
//    New concept: Array flattening
//    Example syntax:
/// const flat = arr.flat();



let newArray = []

console.log(`Highest number is ${Math.max(...sampleNested.flat())}`);



// 4) Challenge: Remove duplicate words from sampleWords while preserving order.
//    No Set allowed for this challenge.
//    Practice fundamental iteration and membership checks using arrays.



////////////////////////
// HASH MAP CHALLENGES
////////////////////////

// 5) Challenge: Using an Object as a frequency map,
//    count how many times each word appears in sampleWords.

// 6) Challenge: Build a lookup table from sampleNumbers
//    where each key is a number and the value is true.
//    Purpose: foundation for fast membership checking.

// 7) Challenge: Invert a simple key-value structure:
//    Given this object:
//       const userToId = { alice: 1, bob: 2, charlie: 3 };
//    Produce a new map: { 1: "alice", 2: "bob", 3: "charlie" }
//    New concept: Inversion of mappings (commonly used in parsing + algorithms)



///////////////////////
// SET CHALLENGES
///////////////////////

// 8) Challenge: Create a Set containing all unique words from sampleWords.
//    Then produce an array of the unique words.

// 9) Challenge: Determine if sampleNumbers contains duplicate values
//    using a Set membership check.


// 10) Challenge: Given two arrays:
//        const a = [1,2,3,4];
//        const b = [3,4,5,6];
//     Find the intersection using a Set.
//     New concept: Set intersection
//     Example syntax:
/// for (const val of someSet) { /* membership checking */ }



////////////////////////
// STACK CHALLENGES
////////////////////////

// 11) Challenge: Using a stack, reverse the elements of sampleWords
//     without using the built-in reverse() method.

// 12) Challenge: Using a stack, check if a string of parentheses is balanced.
//     Example string:
//        const parens = "(()())()";
//     New concept: Stack-based parsing
//     Useful for: syntax validation, parsing, evaluating expressions.



////////////////////////
// QUEUE CHALLENGES
////////////////////////

// 13) Challenge: Simulate a queue process:
//     Given:
//        const tasks = ["a","b","c","d"];
//     Insert all tasks into a queue, then remove them one by one,
//     building a new array representing the order processed.

// 14) Challenge: Using a queue, rotate an array by N positions.
//     Example:
//       rotate [1,2,3,4] by 2 -> [3,4,1,2]
//     New concept: Circular processing using FIFO behavior.


// 15) Challenge: Model a simple message-processing buffer using a queue.
//     For each word in sampleWords, enqueue it.
//     When the queue reaches size 3, dequeue one element.
//     Build an array representing the order items were released.
//     Purpose: Understand real-world queue flow (stream processing).

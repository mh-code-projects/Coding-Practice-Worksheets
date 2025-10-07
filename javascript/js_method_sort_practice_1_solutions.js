/*
  ================================================================================
  SECTION 1: Reference - Quick Guide for .sort()
  ================================================================================

  The .sort() method sorts the elements of an array and returns the sorted array. The default sort order is ascending.

  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Syntax:
  array.sort(compareFunction)

  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Use Cases & What It Does:
  - Without a compare function:
    - Sorts elements as strings. "10" comes before "2".
    - Example: [10, 2, 5].sort() will result in [10, 2, 5].

  - With a compare function:
    - Allows for numerical sorting or other custom sorting logic.
    - The compare function (a, b) { ... } takes two elements, 'a' and 'b', from the array.
    - The function should return:
      - A negative value if 'a' should come before 'b'.
      - A positive value if 'b' should come before 'a'.
      - Zero if the order of 'a' and 'b' should not change.

  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Common Numerical Sorting:
  - Ascending (smallest to largest):
    array.sort((a, b) => a - b);
  - Descending (largest to smallest):
    array.sort((a, b) => b - a);

*/

/*
  ================================================================================
  SECTION 2: Sample Data
  ================================================================================
*/
const fruitBasket = ['banana', 'apple', 'orange', 'kiwi', 'grape'];
const numbers = [40, 100, 1, 5, 25, 10];
const mixedData = [8, 'cat', 4, 'dog', 1, 'apple', 3];
const inventory = [
  { name: 'laptop', price: 1200, stock: 15 },
  { name: 'mouse', price: 25, stock: 150 },
  { name: 'keyboard', price: 75, stock: 40 },
  { name: 'monitor', price: 300, stock: 5 }
];
const users = [
  { name: 'Alice', score: 85, rank: 3 },
  { name: 'Charlie', score: 92, rank: 1 },
  { name: 'Bob', score: 85, rank: 2 }
];

/*
  ================================================================================
  SECTION 3: Challenge Prompts
  ================================================================================
*/

// Challenge 1:
// Sort the 'numbers' array in ascending order (smallest to largest).
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

// Challenge 2:
// Sort the 'fruitBasket' array in alphabetical order.
let sortedFruit = fruitBasket.sort();
console.log(sortedFruit);

// Challenge 3:
// Sort the 'numbers' array in descending order (largest to smallest).
let descendingNumbers = numbers.sort((a, b) => b - a);
console.log(descendingNumbers);

// Challenge 4:
// Sort the 'inventory' array by 'price' in ascending order.
let sortedInventoryCopy = [...inventory]
let sortedInventory = sortedInventoryCopy.sort((a, b) => a.price - b.price);
console.log(sortedInventory);

// Challenge 5:
// Sort the 'inventory' array by 'name' in alphabetical order.
let sortedInventoryCopy2 = [...inventory]
let alphabeticalInventory = sortedInventoryCopy2.sort((a, b) => {
		if (a.name < b.name) {
			return -1;}
		else if (a.name === b.name) {
			return 0;}
		else {
			return 1;}
		}
);
console.log(alphabeticalInventory);

// Challenge 6:
// Sort the 'mixedData' array so that all the numbers come first, sorted in ascending order, followed by the strings, sorted alphabetically.
// This is an advanced challenge to really test your understanding of compare functions.
// To determine if a value is a string or a number, you can use the 'typeof' operator.
// `typeof 8` would return `'number'`.
// `typeof 'cat'` would return `'string'`.

// Challenge 7:
// Sort the 'inventory' array by 'stock' in descending order.

// Challenge 8:
// Sort the 'users' array by their 'score' in descending order.

// Challenge 9:
// Sort the 'users' array by 'score' in descending order. If two users have the same score, sort them by their 'rank' in ascending order.
// This requires a multi-level sort. You will need to use an if/else if statement inside your compare function.
// For example:
// if a.score is greater than b.score, return a negative number.
// if a.score is less than b.score, return a positive number.
// if a.score is equal to b.score, then compare their ranks (a.rank - b.rank).

// Challenge 10:
// Sort the 'inventory' array by 'name' in reverse alphabetical order.

// Challenge 11:
// Use the .sort() method with the .reverse() method to sort the 'numbers' array in descending order.
// This is an alternative to using the compare function.
// HINT: The .reverse() method reverses the order of the elements in an array.

// Challenge 12:
// Sort the `fruitBasket` array by the length of each string, from shortest to longest.
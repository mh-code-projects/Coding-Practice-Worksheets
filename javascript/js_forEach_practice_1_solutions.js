/*
================================================================================
Section 1: Reference: Quick Guide for the Array.prototype.forEach() method
================================================================================
*/

/*
Syntax:
array.forEach(callback(currentValue, index, array))

Use and Purpose:
The forEach() method executes a provided function once for each array element.
It's a clean, built-in way to iterate over an array without needing to manage
an index variable like in a traditional 'for' loop.

Callback Function Parameters (Optional but commonly used):
1. currentValue: The value of the current element being processed in the array.
2. index: The index of the current element being processed.
3. array: The array forEach() was called upon.

Example:
const colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  // This function runs for 'red', then 'green', then 'blue'
  // 'color' will be 'red', then 'green', then 'blue'
  // console.log(color);
});
// Output:
// red
// green
// blue
*/

/*
================================================================================
Section 2: Sample Data to be used throughout the worksheet
================================================================================
*/

const inventory = [
  { name: 'Laptop', price: 1200, stock: 5 },
  { name: 'Mouse', price: 25, stock: 25 },
  { name: 'Keyboard', price: 75, stock: 10 },
  { name: 'Monitor', price: 300, stock: 3 },
  { name: 'Webcam', price: 50, stock: 12 }
];

const customerNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

const numbers = [10, 20, 5, 35, 15, 40, 50, 2];

const primeCandidates = [2, 3, 4, 5, 6, 7, 8, 9, 10];


/*
================================================================================
Section 3: Challenge Prompts/Questions
================================================================================
*/

// ------------------------------------------------------------------------------
// Challenge 1: The Basics (Iterating over simple values)
// ------------------------------------------------------------------------------
// Task: Use the forEach method on the 'customerNames' array to print a greeting
// for each person. The greeting should be in the format: "Hello, [Name]!"
customerNames.forEach(function(name){
  console.log(name);
});

// ------------------------------------------------------------------------------
// Challenge 2: Using the 'index' parameter
// ------------------------------------------------------------------------------
// Task: Use the forEach method on the 'numbers' array. For each number, print a
// message that includes its position (index) in the array.
// Example for the first number: "Value at position 0 is 10"
numbers.forEach(function(number, index){
  console.log(`Value at position ${index} is ${number}`);
})

// ------------------------------------------------------------------------------
// Challenge 3: Working with Objects (A common real-world use case)
// ------------------------------------------------------------------------------
// Task: Use the forEach method on the 'inventory' array. For each item (object),
// print its name and its price.
// Example for the first item: "Laptop costs $1200"
inventory.forEach(function(item){
  console.log(`${item.name} costs $${item.price}`);
});

// ------------------------------------------------------------------------------
// Challenge 4: Conditional Logic within forEach
// ------------------------------------------------------------------------------
// Task: Use the forEach method on the 'numbers' array. Print *only* the numbers
// that are greater than 20. This requires using an 'if' statement inside the
// callback function.
numbers.forEach(function(number){
  if (number > 20) {
    console.log(number);
  };
});

// ------------------------------------------------------------------------------
// Challenge 5: Performing Calculations and Aggregation
// ------------------------------------------------------------------------------
// Task: Calculate the total value of all stock for all items in the 'inventory'.
// You must declare a variable *outside* the forEach loop (e.g., 'totalInventoryValue')
// to hold the running total, and then update it inside the loop.



// ------------------------------------------------------------------------------
// Challenge 6: Storing Filtered Data in a New Array
// ------------------------------------------------------------------------------
// Task: Create a new array called 'lowStockItems'. Use forEach on the 'inventory'
// array to find all items where the 'stock' is less than 10. Add (push) these
// items to the 'lowStockItems' array.


// ------------------------------------------------------------------------------
// Challenge 7: Counting Occurrences
// ------------------------------------------------------------------------------
// Task: Use forEach on the 'customerNames' array. Count how many names start with
// the letter 'A'.

// New Concept: String Method 'startsWith()'
// Syntax: string.startsWith(searchString) -> Returns true or false.
// Example: "Apple".startsWith("A") // true


// ------------------------------------------------------------------------------
// Challenge 8: Using the Third Parameter ('array')
// ------------------------------------------------------------------------------
// Task: Use the forEach method on the 'numbers' array. Print each number, but
// also print the total number of items in the array for context.
// Use the third parameter of the callback function to access the original array
// and find its length.
// Example for the first number: "10 is item 1 of 8 total."


// ------------------------------------------------------------------------------
// Challenge 9: Formatting Output
// ------------------------------------------------------------------------------
// Task: Use forEach on the 'inventory' array to generate a single, combined
// string listing all item names, separated by a comma and a space.
//
// You will need an external variable (e.g., 'itemListString') initialized to an
// empty string. Remember to handle the final comma if you want a clean list!


// ------------------------------------------------------------------------------
// Challenge 10: Nested Logic (Advanced Iteration)
// ------------------------------------------------------------------------------
// Task: Use forEach on the 'primeCandidates' array. For each number, determine
// if it is even or odd and print the result.
//
// Concept: Modulo Operator (%)
// The modulo operator returns the remainder of a division.
// Example: 10 % 2 // 0 (10 is even)
// Example: 11 % 2 // 1 (11 is odd)

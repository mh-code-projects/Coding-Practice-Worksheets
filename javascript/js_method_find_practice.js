/*
  The `.find()` method is a powerful tool for searching through arrays.

  Syntax: `array.find(callbackFunction)`

  It executes a **callback function** once for each element in the array.
  - The callback function should return a **truthy** or **falsy** value.
  - As soon as the callback function returns a **truthy** value for an element, `.find()` immediately stops and returns **that element**.
  - If the callback never returns a truthy value for any element, `.find()` returns **undefined**.
*/

// --- Sample Data ---
const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "A" },
  { id: 4, name: "Diana", grade: "C" },
  { id: 5, name: "Eve", grade: "B" },
];

const products = [
  { id: "p1", name: "Laptop", price: 1200, category: "electronics" },
  { id: "p2", name: "Mouse", price: 25, category: "electronics" },
  { id: "p3", name: "Keyboard", price: 75, category: "electronics" },
  { id: "p4", name: "Notebook", price: 3, category: "stationery" },
  { id: "p5", name: "Pen", price: 1, category: "stationery" },
];

// --- Challenge 1: Finding a Student ---
// Goal: Find the student with an ID of 3.
// Remember, `.find()` returns the entire object, not just a value.

// --- Challenge 2: Checking for Existence ---
// Goal: Check if there is a product with the name "Keyboard".
// Hint: You can use `.find()` for this! What does `.find()` return if it doesn't find a match?

// --- Challenge 3: Finding Based on a Condition ---
// Goal: Find the first student who has a grade of "B".
// What happens if there are multiple students with a grade of "B"?
// How is `.find()` different from `.filter()` in this case?

// --- Challenge 4: Combining Conditions ---
// Goal: Find a product that costs more than $50 and is in the "electronics" category.
// Hint: You can use logical operators like `&&` (AND) inside your callback function.

// --- Challenge 5: Find a student by a function ---
// Goal: Create a function that takes an ID and returns the student object.
// This is a common pattern for creating reusable "lookup" functions.

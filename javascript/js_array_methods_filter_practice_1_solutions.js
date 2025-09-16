// ===================
// Section 1: Reference
// ===================

// The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Syntax:
// array.filter(callback(element, index, array))

// - callback: A function to test each element of the array. It should return true to keep the element, or false otherwise.
// - element: The current element being processed in the array.
// - index (optional): The index of the current element.
// - array (optional): The array that .filter() was called upon.

// Example:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// // evenNumbers will be [2, 4]

// ===================
// Section 2: Sample Data
// ===================

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, stock: 5 },
  { id: 2, name: 'Keyboard', category: 'Electronics', price: 75, stock: 20 },
  { id: 3, name: 'T-shirt', category: 'Apparel', price: 25, stock: 50 },
  { id: 4, name: 'Coffee Maker', category: 'Appliances', price: 150, stock: 10 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 100, stock: 0 },
  { id: 6, name: 'Jeans', category: 'Apparel', price: 60, stock: 35 },
  { id: 7, name: 'Blender', category: 'Appliances', price: 80, stock: 15 },
  { id: 8, name: 'Monitor', category: 'Electronics', price: 300, stock: 8 },
  { id: 9, name: 'Sweater', category: 'Apparel', price: 45, stock: 20 },
  { id: 10, name: 'Microwave', category: 'Appliances', price: 200, stock: 5 }
];

const students = [
  { name: 'Alice', grade: 85, major: 'Computer Science', year: 'Senior' },
  { name: 'Bob', grade: 92, major: 'Biology', year: 'Junior' },
  { name: 'Charlie', grade: 78, major: 'History', year: 'Sophomore' },
  { name: 'Diana', grade: 95, major: 'Computer Science', year: 'Senior' },
  { name: 'Eve', grade: 88, major: 'Physics', year: 'Junior' },
  { name: 'Frank', grade: 80, major: 'Computer Science', year: 'Sophomore' },
  { name: 'Grace', grade: 91, major: 'Biology', year: 'Senior' },
  { name: 'Heidi', grade: 75, major: 'Art', year: 'Freshman' }
];

const numbers = [10, 25, 40, 55, 70, 85, 100, 115, 130];

const mixedData = [1, 'apple', 2, 'banana', 3, 'cherry', 4, 'date'];

// ========================
// Section 3: Challenge Prompts
// ========================

// Challenge 1: Find all products in the 'Electronics' category.
const onlyElectronics = products.filter(product => products.category === "Electronics");
console.log(onlyElectronics);

// Challenge 2: Get all products with a price less than $100.

// Challenge 3: Find all students who have a grade greater than or equal to 90.

// Challenge 4: Filter for products that are currently out of stock (stock is 0).

// Challenge 5: Find all students majoring in 'Computer Science'.

// Challenge 6: Get all products with a price between $50 and $200 (inclusive).

// Challenge 7: Find all products that are either 'Apparel' or have a stock of more than 40.

// Challenge 8: Get all students who are NOT majoring in 'Computer Science'.

// Challenge 9: Filter for products that contain the letter 'e' (case-insensitive) in their name.

// Challenge 10: Find all products with a 'price' that, when divided by 25, has a remainder of 0.

// Challenge 11: Get all students who are 'Seniors' AND have a grade of 90 or above.

// Challenge 12: From the 'numbers' array, find all numbers that are multiples of both 5 AND 10.

// Challenge 13: Filter for students whose name starts with the letter 'D'.

// Challenge 14: Use the optional 'index' parameter to find every other product in the 'products' array (the items at index 0, 2, 4, etc.).

// Challenge 15: Find all students whose name has more than 5 letters.

// Challenge 16: From the 'products' array, get all products that have a 'stock' count less than 10 but are NOT in the 'Apparel' category.

// Challenge 17: From the 'mixedData' array, filter out all elements that are not a number.

// Challenge 18: Use chaining to first filter for products that are 'Electronics' and then, from that new array, filter for products with a 'price' less than $500.

// Challenge 19: Filter for students who are either a 'Senior' OR a 'Junior', and who also have a grade less than 85.

// Challenge 20: From the 'products' array, find all products whose id is an odd number AND are in stock (stock > 0).
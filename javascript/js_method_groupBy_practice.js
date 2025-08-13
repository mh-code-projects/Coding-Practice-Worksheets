/*
  ----------------------------------------------------------------------------------------------------------------
  --- Reference: Quick Guide for .groupBy() ---

  .groupBy()
  - Syntax: Object.groupBy(array, callbackFunction)
  - What it does: Groups the elements of an array into an object.
  - The keys of the new object are the values returned by the callback function.
  - The values are arrays containing the elements that correspond to that key.
  - The callback function receives each element of the array as an argument.
  
  Example:
  const evenAndOdd = Object.groupBy([1, 2, 3, 4], (num) => {
    return num % 2 === 0 ? 'even' : 'odd';
  });
  
  // evenAndOdd will be:
  // {
  //   'odd': [1, 3],
  //   'even': [2, 4]
  // }
  ----------------------------------------------------------------------------------------------------------------
*/

// --- Sample Data: A list of products with various properties ---
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
  { id: 2, name: 'Keyboard', category: 'Electronics', price: 75 },
  { id: 3, name: 'T-Shirt', category: 'Apparel', price: 25 },
  { id: 4, name: 'Mouse', category: 'Electronics', price: 50 },
  { id: 5, name: 'Jeans', category: 'Apparel', price: 60 },
  { id: 6, name: 'Socks', category: 'Apparel', price: 10 },
  { id: 7, name: 'Monitor', category: 'Electronics', price: 300 },
  { id: 8, name: 'Hat', category: 'Apparel', price: 20 },
  { id: 9, name: 'Tablet', category: 'Electronics', price: 500 },
];


// --- Challenge 1: Group products by category ---
// Use .groupBy() to group all the products by their 'category'.

// --- Challenge 2: Group products by price range ---
// Create a callback function that returns one of three strings: 'low-end', 'mid-range', or 'high-end'.
// - 'low-end' for prices under $50
// - 'mid-range' for prices between $50 and $500 (inclusive)
// - 'high-end' for prices over $500

// --- Challenge 3: Group by first letter of the name ---
// Use .groupBy() to group the products by the first letter of their 'name'.
// The keys of the resulting object should be 'L', 'K', 'T', etc.

// --- Challenge 4: Group products by whether they are affordable ---
// A product is considered "affordable" if its price is less than $100.
// Use .groupBy() to create an object with two keys: 'affordable' and 'expensive'.
// Hint: Your callback function should return one of two strings.

// --- Challenge 5: Find the most expensive product in each category ---
// This is a more advanced challenge that combines .groupBy() with other array methods.
// First, group the products by 'category' (similar to Challenge 1).
// Then, for each category, find the single product with the highest price.
// Hint: You will need to iterate through the grouped object and use another array method to find the highest price.
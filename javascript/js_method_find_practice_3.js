/*
  Section 1: Reference: Quick Guide for Array.prototype.groupBy()

  Syntax:
  Object.groupBy(items, callbackFn)

  Use and Purpose:
  The `groupBy()` method is a static method that groups the elements of an iterable (like an array)
  according to the string value returned by a provided callback function. It returns an object
  where the keys are the grouping values, and the values are arrays of the elements that
  belong to that group. It's incredibly useful for organizing data based on a common property.
*/

/*
  Section 2: Sample Data
*/
const people = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 25, city: 'New York' },
  { name: 'David', age: 35, city: 'Chicago' },
  { name: 'Eve', age: 30, city: 'Los Angeles' },
  { name: 'Frank', age: 35, city: 'New York' },
];

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'T-Shirt', category: 'Apparel' },
  { id: 3, name: 'Mouse', category: 'Electronics' },
  { id: 4, name: 'Jeans', category: 'Apparel' },
  { id: 5, name: 'Keyboard', category: 'Electronics' },
  { id: 6, name: 'Hat', category: 'Apparel' },
];

const students = [
  { name: 'Alex', grade: 'A' },
  { name: 'Beth', grade: 'B' },
  { name: 'Chris', grade: 'A' },
  { name: 'Dana', grade: 'C' },
  { name: 'Ethan', grade: 'B' },
];

/*
  Section 3: Challenge Prompts

  Instructions:
  Use the `Array.prototype.groupBy()` method to solve the following problems.
  Do not provide any other methods or solutions other than the use of `groupBy()`
  and its required callback function.
*/

// Challenge 1: Group people by their city
// Use the `people` array to create a new object where each key is a city, and the value is an array of people from that city.

// Challenge 2: Group people by their age
// Use the `people` array to create a new object where the keys are ages, and the values are the people who are that age.
// Hint: The callback function should return a string, so you might need to convert the age to a string.

// Challenge 3: Group products by their category
// Use the `products` array to create an object where products are grouped by their category.

// Challenge 4: Group students by their grade
// Use the `students` array to create an object where students are grouped by the grade they received.

// Challenge 5: Find the most common age group
// Use the `people` array. First, group the people by their age. Then, determine which age group has the most people. The final output should be the age as a string.
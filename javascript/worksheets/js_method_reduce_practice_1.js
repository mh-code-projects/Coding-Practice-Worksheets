/*
=========================================================
💻 Practice Worksheet: JavaScript Array .reduce() Method
=========================================================
Focus: Mastering the .reduce() method for data aggregation and summarization.

-----------------------------------------------------
Section 1: Reference: Quick Guide for .reduce()
-----------------------------------------------------
* Purpose: Executes a **reducer** callback function on each element of the array, resulting 
    in a **single output value** (a number, object, string, or array).
* Syntax: finalResult = array.reduce(callbackFunction, initialValue)
* Callback Arguments: 
    1. accumulator (The result of the previous call) **(Crucial)**
    2. currentValue (The current element)
    3. index (The index of the current element)
    4. array (The array reduce was called upon)
* Initial Value: The starting point for the accumulator. Highly recommended.

*/

// -----------------------------------------------------
// Section 2: Sample Data
// -----------------------------------------------------
const salesData = [15.50, 42.75, 100.00, 5.25, 33.50];

const inventory = [
  { name: "Laptop", category: "Electronics", price: 1200, stock: 5 },
  { name: "T-shirt", category: "Apparel", price: 25, stock: 50 },
  { name: "Keyboard", category: "Electronics", price: 75, stock: 15 },
  { name: "Jeans", category: "Apparel", price: 80, stock: 10 },
  { name: "Monitor", category: "Electronics", price: 300, stock: 2 },
  { name: "Hat", category: "Apparel", price: 20, stock: 0 }
];

/*
-----------------------------------------------------
Section 3: Challenge Prompts (10 Problems)
-----------------------------------------------------
*/

/*
🚀 Challenge 1: Simple Summation (Numeric Reduction)
A) Create a variable that holds the total sum of all sales in the 'salesData' array.
B) Ensure you provide an initial value of 0.
*/


/*
🚀 Challenge 2: Finding the Maximum Value
A) Create a variable to find the highest sale amount in the 'salesData' array.
B) Hint: Your accumulator should hold the highest number found so far.
*/


/*
🚀 Challenge 3: Counting Items by Category
A) Create a variable that is an **object** which counts the number of items in each 'category' 
   in the 'inventory' array.
B) Your final result should look like: { Electronics: 3, Apparel: 3 }
C) Hint: Your initial value must be an empty object: {}.
*/


/*
🚀 Challenge 4: Concatenating and Formatting Strings
A) Create a variable that holds a single string listing all the product names from 'inventory',
   separated by a comma and a space.
B) Example output format: "Laptop, T-shirt, Keyboard, Jeans, Monitor, Hat"
C) Hint: The initial value should be an empty string "". Use a conditional check to avoid a 
   leading comma on the first item.
*/


/*
🚀 Challenge 5: Calculating Total Inventory Value
A) Create a variable for the total monetary value of all items currently in stock.
B) The value of one item is calculated as: price * stock.
C) You need to sum this calculated value for every item in the 'inventory'.
*/


/*
🚀 Challenge 6: Aggregating Data into a Single Object
A) Create a variable that is a single object containing two properties: 
   'totalProducts' (the total count of products in the array) 
   and 'totalStock' (the sum of all 'stock' numbers).
B) Hint: Your initial value is the structure you want to return, e.g., { totalProducts: 0, totalStock: 0 }.
*/


/*
🚀 Challenge 7: Grouping Items by Price Range
A) Create a variable that is an **object** grouping items based on price: 
   - 'High-End' (> 100) 
   - 'Budget' (<= 100)
B) The values should be **arrays** of the item names that fall into that category.
C) Initial Value Hint: { 'High-End': [], 'Budget': [] }
*/


/*
🚀 Challenge 8: Implementing map() with reduce() (Advanced)
A) Demonstrate that reduce can be used to replicate the map method.
B) Create a new array where every element in 'salesData' is multiplied by 3 (tripled).
C) Hint: Your accumulator must start as an empty array [] and you must use .push() or 
   the spread operator inside your reducer.
*/


/*
🚀 Challenge 9: Implementing filter() with reduce() (Advanced)
A) Demonstrate that reduce can be used to replicate the filter method.
B) Create a new array containing only the names of products in the 'inventory' 
   that have a 'price' greater than 50.
C) Hint: Your accumulator must start as an empty array []. Only push to the accumulator 
   if the condition is met.
*/


/*
🚀 Challenge 10: Finding the Most Expensive Item in Stock (Returning an Object)
A) Create a variable that holds the **object** of the single most expensive item 
   that is **currently in stock** (stock > 0).
B) **Logic:** The accumulator must store the entire *object* of the currently most expensive item found.
C) Try solving this without an explicit initial value (letting the accumulator start as the first array item). 
   Remember to handle the edge case where the first item might be out of stock.
*/
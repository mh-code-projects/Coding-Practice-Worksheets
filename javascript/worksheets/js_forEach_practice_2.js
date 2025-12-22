/*
================================================================================
Section 1: Reference: Mental Model for forEach Parameters
================================================================================
*/

/*
Think of forEach as saying:

"For every item in this array, give me:
  1) the current item
  2) where it lives (index)
  3) the whole array for context
and I will decide what to do with it."

Signature (always the same order):
array.forEach((value, index, array) => { })

Key Mental Anchors:
- value  → "What am I looking at right now?"
- index  → "Where am I?"
- array  → "What does the whole collection look like?"

If you ever forget:
value = item
index = position
array = source
*/

/*
================================================================================
Section 2: Sample Data
================================================================================
*/

const scores = [88, 92, 76, 81, 95, 67];

const products = [
  { name: "Phone", category: "electronics", price: 699 },
  { name: "Shirt", category: "clothing", price: 40 },
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "Shoes", category: "clothing", price: 90 }
];

const letters = ["a", "b", "c", "d", "e"];


/*
================================================================================
Section 3: Reinforcement Challenges (Parameter-Focused)
================================================================================
*/

// ------------------------------------------------------------------------------
// Challenge 1: Parameter Awareness (Value Only)
// ------------------------------------------------------------------------------
// Task: Use forEach on 'scores'.
// Inside the callback, work ONLY with the current value.
// Describe whether each score is passing (>= 70) or failing.
//
// Purpose: Build confidence using the first parameter alone.


// ------------------------------------------------------------------------------
// Challenge 2: Value + Index (Position Matters)
// ------------------------------------------------------------------------------
// Task: Use forEach on 'scores'.
// For each score, include its position number starting from 1 (not 0).
//
// Purpose: Reinforce how index relates to real-world ordering.


// ------------------------------------------------------------------------------
// Challenge 3: Index as Control Logic
// ------------------------------------------------------------------------------
// Task: Use forEach on 'letters'.
// Only perform an action for letters at EVEN indexes.
//
// Purpose: Teach index as a decision-making tool.


// ------------------------------------------------------------------------------
// Challenge 4: Using the Array Parameter for Context
// ------------------------------------------------------------------------------
// Task: Use forEach on 'scores'.
// For each score, determine whether it is the first, last, or a middle value
// in the array.
//
// Purpose: Understand why the third parameter exists.


// ------------------------------------------------------------------------------
// Challenge 5: Comparing Current Value to the Whole Array
// ------------------------------------------------------------------------------
// Task: Use forEach on 'scores'.
// Determine whether each score is above or below the average score.
//
// New Concept: Calculating an average
// You may need:
// 1) a variable outside the loop
// 2) a loop to compute the total
// 3) division using array.length
//
// Purpose: Use the array parameter to reason globally.


// ------------------------------------------------------------------------------
// Challenge 6: Tracking State Across Iterations
// ------------------------------------------------------------------------------
// Task: Use forEach on 'scores'.
// Keep track of the highest score seen so far.
//
// Purpose: Learn how forEach works with external variables.


// ------------------------------------------------------------------------------
// Challenge 7: Object + Index + Array Together
// ------------------------------------------------------------------------------
// Task: Use forEach on 'products'.
// For each product, include:
// - its name
// - its category
// - its position out of the total number of products
//
// Purpose: Combine all three parameters naturally.


// ------------------------------------------------------------------------------
// Challenge 8: Conditional Grouping Using forEach
// ------------------------------------------------------------------------------
// Task: Create two empty arrays:
// - electronics
// - clothing
//
// Use forEach on 'products' to place each product into the correct array.
//
// Purpose: Reinforce forEach as a classification tool.


// ------------------------------------------------------------------------------
// Challenge 9: Manual Recreation of map()-Like Behavior
// ------------------------------------------------------------------------------
// Task: Create a new array that contains ONLY the prices from 'products'.
//
// Constraint:
// - You MUST use forEach
// - You MUST push values manually
//
// Purpose: Understand what higher-order array methods automate.


// ------------------------------------------------------------------------------
// Challenge 10: Index-Based Formatting Logic (Advanced)
// ------------------------------------------------------------------------------
// Task: Use forEach on 'letters'.
// Build a single string where:
// - Letters are separated by a dash ("-")
// - No dash appears at the end
//
// Purpose: Train index-based formatting instincts.


// ------------------------------------------------------------------------------
// Challenge 11: Explain It to Yourself (Critical Thinking)
// ------------------------------------------------------------------------------
// Task: Write a comment explaining:
// - When you would choose forEach over a regular for loop
// - When you would NOT use forEach
//
// Purpose: Cement conceptual understanding beyond syntax.

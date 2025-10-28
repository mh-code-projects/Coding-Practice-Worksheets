// ====================================================================================
// Section 1: Reference: Quick Guide for the 'typeof' Operator
// ====================================================================================

/*
* 'typeof' Operator Syntax:
* typeof operand
*
* Use and Purpose:
* - 'typeof' is a **unary operator** (like '!' or '-') placed BEFORE a value or variable.
* - It returns a **string** indicating the data type of the operand.
* - It is critical for **data validation** and writing **flexible functions** that need to handle different types of input.
*
* Common 'typeof' Return Values:
* 1. "number"  (e.g., 5, 3.14, NaN, Infinity)
* 2. "string"  (e.g., "hello")
* 3. "boolean" (e.g., true, false)
* 4. "undefined" (e.g., a variable declared but not assigned, or an unassigned array index)
* 5. "object"  (e.g., null, arrays, plain objects, dates - NOTE: 'null' is a known historical error that returns "object"!)
* 6. "function" (e.g., a declared function)
*/

// ====================================================================================
// Section 2: Sample Data
// ====================================================================================

const mixedItems = [
    42, "CodeCoach", true, null, undefined, { name: "Bob" }, [1, 2, 3], function() { return "test"; }
];
const inventory = {
    'itemA': 5,
    'itemB': 'out of stock',
    'itemC': 12,
    'itemD': null, // Indicates awaiting stock information
};

// ====================================================================================
// Section 3: Challenge Prompts
// ====================================================================================

/*
* Challenge 1: Simple Type Check
* Task: Check the type of the value at index 3 in the 'mixedItems' array. Store the resulting string in a variable called 'typeOfNull'.
* What type do you expect it to be, and what type does 'typeof' actually return?
*/

// Challenge 1 Code Here:


/*
* Challenge 2: Checking for a Function
* Task: Use an 'if' statement to check if the item at index 7 in 'mixedItems' is a "function". If it is, print: "Index 7 is executable!"
*/

// Challenge 2 Code Here:


/*
* Challenge 3: Looping and Counting Primitives
* Task: Use a 'for' loop to iterate through the 'mixedItems' array. Count how many items are a "string" or a "boolean". Store the final count in a variable called 'primitiveCount'.
* Hint: Use the Logical OR operator (||) in your 'if' condition.
*/

// Challenge 3 Code Here:


/*
* Challenge 4: Identifying Undefined Variables
* Task: Check the type of a variable named 'tempVar' which has NOT been declared yet. Store the type in 'typeOfUndeclared'.
* Goal: See how 'typeof' can check a variable without causing an error, even if the variable doesn't exist.
*/

// Challenge 4 Code Here:


// --- Realistic Use Cases ---

/*
* Challenge 5: Basic Data Validation (Inventory Check)
* Task: Loop through the keys (property names) of the 'inventory' object. Use 'typeof' to check the type of the VALUE associated with each key.
* If the value is NOT a "number" (meaning the stock is either a string or null), print: "[Key] requires manual check."
* Hint: To loop through object keys, use the syntax: 'for (let key in inventory) { ... }'
*/

// Challenge 5 Code Here:


/*
* Challenge 6: Input Sanitization
* Task: Write a loop that iterates from 1 to 5. For each iteration, define a variable called 'userInput'.
* - In the first 3 iterations, assign it a number (e.g., 10, 20, 30).
* - In the last 2 iterations, assign it a string (e.g., "ten", "twenty").
* Inside the loop, check the type of 'userInput'. If it is a "string", change the value of 'userInput' to 0 (a default value). Print the final value of 'userInput' in each iteration.
*/

// Challenge 6 Code Here:


/*
* Challenge 7: Building a Typed List
* Task: Create a new empty array called 'validNumbers'. Loop through 'mixedItems' and use 'typeof' to push ONLY the true "number" types (ignore "object", "string", etc.) into 'validNumbers'.
*/

// Challenge 7 Code Here:


/*
* Challenge 8: Safe Function Execution (The Power of 'typeof')
* Reference: A 'callback' is a function passed as an argument to another function, intended to be executed later.
* Task: Create a function called 'runIfFunction' that accepts one argument: 'callback'.
* Inside the function, use an 'if' statement with 'typeof' to check if 'callback' is a "function".
* - If it is a "function", call the 'callback' argument (e.g., 'callback()') and print the result.
* - If it is NOT a "function", print: "Error: No valid function provided."
* Test the function by calling it with both a real function and a string.
*/

// Challenge 8 Code Here:


/*
* Challenge 9: Dealing with the 'Null' Anomaly
* Task: Check the type of a variable containing the value 'null'.
* Use an 'if/else if' chain that checks:
* 1. If the value is STRICTLY EQUAL to 'null' (using '=== null'), print: "Found a true null value."
* 2. ELSE IF the 'typeof' the value is "object", print: "It's an object (or the null anomaly)."
* Goal: Show how to correctly distinguish 'null' from true objects, despite the 'typeof' result.
*/

// Challenge 9 Code Here:


/*
* Challenge 10: Advanced Validation (Refining Inventory Check)
* Task: Re-examine the 'inventory' object. Loop through its keys.
* This time, print a status message based on a refined type check:
* - If the value is a "number" and greater than 0, print: "[Key]: IN STOCK"
* - If the value is a "string" (like 'out of stock'), print: "[Key]: ORDER PENDING"
* - If the value is 'null' (use '=== null' for the check), print: "[Key]: AWAITING INFO"
*/

// Challenge 10 Code Here:
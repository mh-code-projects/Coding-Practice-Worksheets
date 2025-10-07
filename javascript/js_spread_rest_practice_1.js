// ====================================================================================
// Section 1: Reference: Quick Guide for Spread and Rest Operators
// ====================================================================================

/*
 * The Spread Operator (...)
 *
 * Syntax: ...iterable
 * Use Cases:
 * 1. Array/String Spreading: To expand an iterable (like an array or string) into its
 * individual elements.
 * 2. Array Copying: To create a shallow copy of an array.
 * 3. Array Concatenation: To combine multiple arrays into a new one.
 * 4. Object Spreading: To copy properties from one object into a new object.
 * 5. Function Calls: To pass an array's elements as arguments to a function.
 *
 * The Rest Operator (...)
 *
 * Syntax: ...variableName
 * Use Cases:
 * 1. Function Parameters: To collect an indefinite number of arguments into an array.
 * (Must be the last parameter in the function definition)
 * 2. Array Destructuring: To collect the remaining elements of an array into a new array.
 * 3. Object Destructuring: To collect the remaining properties of an object into a new object.
*/

// ====================================================================================
// Section 2: Sample Data
// ====================================================================================

const starterColors = ['red', 'green'];
const primaryColors = ['yellow', 'blue'];
const rgbColors = ['red', 'green', 'blue'];
const favoriteDessert = ['ice cream', 'cake', 'brownie'];
const inventory = { apples: 50, bananas: 100 };
const newItems = { oranges: 75, grapes: 90 };
const userProfile = { id: 1, username: 'coder_24', theme: 'dark', notifications: true };
const updateDetails = { theme: 'light', lastLogin: new Date().toLocaleDateString() };

// ====================================================================================
// Section 3: Challenge Prompts/Questions
// ====================================================================================

// --- Part 1: Spread Operator Challenges (Array) ---

// 1. Array Concatenation Challenge:
// Create a new array called 'allColors' that combines 'starterColors', 'rgbColors', and 'primaryColors'.
// Use the Spread Operator for this.

// 2. Array Copying Challenge:
// Create a new array called 'dessertCopy' that is a **shallow copy** of 'favoriteDessert'.
// Modify the first element of 'dessertCopy' to be 'pie' and verify that 'favoriteDessert' remains unchanged.

// 3. String Spreading Challenge:
// Create a new array called 'wordLetters' where each letter of the string "CODE" is a separate element in the array.

// --- Part 2: Spread Operator Challenges (Object) ---

// 4. Object Merging Challenge:
// Create a new object called 'fullInventory' that combines the properties from 'inventory' and 'newItems'.

// 5. Object Updating Challenge:
// Create a new object called 'updatedProfile' that starts with all properties from 'userProfile', but then
// overrides/adds the properties from 'updateDetails'.

// 6. Function Argument Challenge:
// Use the Spread Operator to pass all elements of 'rgbColors' as arguments to the 'console.log' function
// so that each color is logged on its own, separated by a space (e.g., 'red green blue').
// Note: console.log can take multiple arguments.

// --- Part 3: Rest Operator Challenges (Function) ---

// 7. Dynamic Sum Function Challenge:
// Write a function called 'sumAll' that uses the Rest Operator to accept any number of arguments,
// and then returns the sum of all those numbers.

// 8. Named and Rest Parameters Challenge:
// Write a function called 'registerUser' that takes the first two arguments as 'username' and 'email',
// and uses the Rest Operator to collect all subsequent arguments into an array called 'details'.
// Have the function return an object like: { username: '...', email: '...', otherDetails: [...] }

// --- Part 4: Rest Operator Challenges (Destructuring) ---

// 9. Array Destructuring Challenge:
// Destructure the 'rgbColors' array. Assign the first element to a variable 'firstColor' and use the
// Rest Operator to collect the remaining elements into a new array called 'otherColors'.

// 10. Object Destructuring Challenge:
// Destructure the 'userProfile' object. Assign 'username' and 'theme' to their own variables,
// and use the Rest Operator to collect all remaining properties into a new object called 'metadata'.
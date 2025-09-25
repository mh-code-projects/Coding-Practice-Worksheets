// ===================
// Section 1: Reference
// ===================

// The push() method adds one or more elements to the end of an array. It returns the new length of the array.
// Syntax: array.push(element1, element2, ...)

// The pop() method removes the last element from an array and returns that element.
// Syntax: array.pop()

// The shift() method removes the first element from an array and returns that element.
// Syntax: array.shift()

// The unshift() method adds one or more elements to the beginning of an array. It returns the new length of the array.
// Syntax: array.unshift(element1, element2, ...)

// ===================
// Section 2: Sample Data
// ===================

let colors = ['red', 'green', 'blue', 'yellow'];
let numbers = [10, 20, 30, 40, 50];
let dailyTasks = ['wake up', 'get dressed', 'eat breakfast'];
let shoppingList = ['milk', 'bread', 'eggs'];
let queue = []; // an empty array to be used as a queue

// =========================
// Section 3: Challenge Prompts
// =========================

// Challenge 1: Add a new color, 'purple', to the end of the colors array.
colors.push("purple");

// Challenge 2: Remove the last element from the numbers array.
numbers.pop();

// Challenge 3: Remove the first element from the dailyTasks array.
dailyTasks.shift();

// Challenge 4: Add 'butter' to the beginning of the shoppingList array.
shoppingList.unshift("butter");

// Challenge 5: Add 'orange' and 'grape' to the end of the colors array in one go.
colors.push("orange", "grape");

// Challenge 6: Remove the last item from shoppingList and store the removed item in a variable called removedItem.
const removedItem = shoppingList.pop();

// Challenge 7: Remove the first item from numbers and store the result in a variable called firstNumber.
const firstNumber = numbers.shift();

// Challenge 8: Add the number 5 to the beginning of the numbers array.
numbers.unshift(5);

// Challenge 9: Add 'pay bills' and 'go to gym' to the beginning of the dailyTasks array.
dailyTasks.unshift("pay bills", "go to gym");

// Challenge 10: Remove the last two elements from the colors array.
colors.pop();
colors.pop();

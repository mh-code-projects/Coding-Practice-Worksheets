/*
==================================================
Section 1: Reference: Quick Guide for Functions
==================================================
*/

/*
Standard Function Syntax:
    The classic way to declare a reusable block of code.
    Syntax:
        function functionName(parameter1, parameter2) {
          // code to be executed
          return result;
        }
    Example:
        function greet(name) {
            return "Hello, " + name + "!";
        }
    Use and Purpose:
        Creates a named function that can be called later. Essential for organizing code.
*/

/*
Arrow Function Syntax:
    A more concise way to write functions, often favored in modern JavaScript for brevity and how it handles the 'this' keyword (a more advanced topic).
    Syntax (Basic):
        const functionName = (parameter1, parameter2) => {
          // code to be executed
          return result;
        };
    Example (Basic):
        const greetArrow = (name) => {
            return "Hello, " + name + "!";
        };

    Syntax (Concise Body - IMPLICIT RETURN):
        If the function body is a single expression, you can omit the curly braces '{}' and the 'return' keyword.
    Example (Concise):
        const double = (num) => num * 2; // Automatically returns num * 2

    Syntax (Single Parameter):
        If there is only one parameter, the parentheses '()' around the parameter can be omitted.
    Example (Single Param):
        const square = num => num * num;

    Use and Purpose:
        Quickly defining function expressions, especially useful for callbacks in array methods (like map, filter, etc.).
*/

/*
==================================================
Section 2: Sample Data
==================================================
*/

const inventory = [
    { item: "Laptop", price: 1200, quantity: 5 },
    { item: "Mouse", price: 25, quantity: 50 },
    { item: "Monitor", price: 300, quantity: 10 },
    { item: "Keyboard", price: 75, quantity: 20 }
];

const msg = "This is a test";

const users = [
	{ name: "Jordan", id: 001 },
	{ name: "Mike", id: 002 },
];

const newUser = {name: "Jim", id: 003 };


/*
==================================================
Section 3: Challenge Prompts/Questions
==================================================
*/

// --- CONVERSION CHALLENGES (Function -> Arrow Function) ---

// Prompt 1: Convert the 'calculateArea' standard function below into an arrow function.
function calculateArea(width, height) {
    return width * height;
}

// Prompt 2: Convert the 'isPositive' function into a **concise body** arrow function (omitting {} and 'return').
// Reminder: This function has only ONE parameter.
function isPositive(number) {
    return number >= 0;
}

// Prompt 3: Convert the 'formatGreeting' function to a standard arrow function.
// B) This function takes a 'users' object and returns a formatted string.
function formatGreeting(users) {
    return "Welcome back, " + users.name + "! Your ID is " + users.id + ".";
}

// Prompt 4: Convert the 'logMessage' function to an arrow function.
// B) This function takes one parameter and simply logs a message; it does **not** return a value.
function logMessage(msg) {
    console.log("LOG: " + msg);
}

// Prompt 5: Convert the 'getInventoryCount' function to an arrow function.
// B) This function takes no parameters and returns the length of the 'inventory' array.
function getInventoryCount() {
    return inventory.length;
}

// --- CONVERSION CHALLENGES (Arrow Function -> Standard Function) ---

// Prompt 6: Convert the 'getFinalPrice' arrow function back into a standard function declaration.
const getFinalPrice = (base, taxRate) => base * (1 + taxRate);

// Prompt 7: Convert the 'addItem' arrow function back into a standard function declaration.
// B) This function takes an array (arr) and an item (newItem) and pushes the item to the array.
const addItem = (arr, newItem) => {
    arr.push(newItem);
    return arr;
};

// Prompt 8: Convert the 'checkAvailability' arrow function back into a standard function declaration.
// Reminder: This function takes only ONE parameter.
const checkAvailability = inventory => inventory.quantity > 0;


// Prompt 9: Convert the 'createTag' arrow function back into a standard function declaration.
// B) This function returns an object literal. For arrow functions, returning an object literal directly requires parentheses around the object: '() => ({ key: value })'.
const createTag = (text) => ({ tag: text, created: new Date() });

// Prompt 10: Convert the 'sumAllItems' arrow function back into a standard function declaration.
const sumAllItems = (a, b, c) => a + b + c;


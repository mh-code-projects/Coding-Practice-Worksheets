p/*
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

const calculateAreaArrow = (height, width) => (width * height);

// Prompt 2: Convert the 'isPositive' function into a **concise body** arrow function (omitting {} and 'return').
// Reminder: This function has only ONE parameter.
function isPositive(number) {
    return number >= 0;
}

const isPositiveArrow = (number) => (number >= 0);

// Prompt 3: Convert the 'formatGreeting' function to a standard arrow function.
// B) This function takes a 'users' object and returns a formatted string.
function formatGreeting(users) {
    return "Welcome back, " + users.name + "! Your ID is " + users.id + ".";
}

const formatGreetingArrow = (user) => (`Welcome back, ${users.name}! Your ID id ${users.id}.`);

// Prompt 4: Convert the 'logMessage' function to an arrow function.
// B) This function takes one parameter and simply logs a message; it does **not** return a value.
function logMessage(msg) {
    console.log("LOG: " + msg);
}

const logMessageArrow = (msg) => ("LOG :" + msg);

// Prompt 5: Convert the 'getInventoryCount' function to an arrow function.
// B) This function takes no parameters and returns the length of the 'inventory' array.
function getInventoryCount() {
    return inventory.length;
}

const getInventoryCountArrow = () => (inventory.length);

// --- CONVERSION CHALLENGES (Arrow Function -> Standard Function) ---

// Prompt 6: Convert the 'getFinalPrice' arrow function back into a standard function declaration.
const getFinalPrice = (base, taxRate) => base * (1 + taxRate);

function getFinalPriceStnd(base, taxRate){
		return base * (1 + taxRate);
};

// Prompt 7: Convert the 'addItem' arrow function back into a standard function declaration.
// B) This function takes an array (arr) and an item (newItem) and pushes the item to the array.
const addItem = (arr, newItem) => {
    arr.push(newItem);
    return arr;
};

function addItemStnd(arr, newItem) {
		arr.push(newItem);
		return arr;
};

// Prompt 8: Convert the 'checkAvailability' arrow function back into a standard function declaration.
// Reminder: This function takes only ONE parameter.
const checkAvailability = inventory => inventory.quantity > 0;
console.log(checkAvailability(inventory[0]));

function checkAvailabilityStnd(inventory) {
		return inventory.quantity > 0;
};

// Prompt 9: Convert the 'createTag' arrow function back into a standard function declaration.
// B) This function returns an object literal. For arrow functions, returning an object literal directly requires parentheses around the object: '() => ({ key: value })'.
const createTag = (text) => ({ tag: text, created: new Date() });

function createTagStnd(text) {
	return	({ tag: text, created: new Date() });
		
};

// Prompt 10: Convert the 'sumAllItems' arrow function back into a standard function declaration.
const sumAllItems = (a, b, c) => a + b + c;

function sumAllItemsStnd(a, b, c) {
	return a + b + c;
};

// --- APPLICATION CHALLENGES (Formulating New Functions) ---

// Prompt 11: Create a standard function named 'getItemPrice' that takes two parameters: the 'inventory' array and an 'itemName' (string).
// B) The function should find and return the price of the item whose 'item' property matches 'itemName'. If not found, return 0.
// C) New Concept: **Array.prototype.find()**: Finds and returns the first element in an array that satisfies a testing function.
//    Syntax: array.find(callbackFunction)
//    Example: inventory.find(product => product.item === 'Laptop') // returns the Laptop object


const inventory = [
    { item: "Laptop", price: 1200, quantity: 5 },
    { item: "Mouse", price: 25, quantity: 50 },
    { item: "Monitor", price: 300, quantity: 10 },
    { item: "Keyboard", price: 75, quantity: 20 }
];


function getItemPrice2(inventory, itemName) {
	let foundItem = inventory.find(inventory => inventory.item === itemName);
	return foundItem;	
};
console.log(getItemPrice2(inventory, "Laptop")); //RETURN PRICE ONLY or ZERO



// Prompt 12: Convert the 'getItemPrice' function (from Prompt 11) into a concise arrow function and name it 'getItemPriceArrow'.

// Prompt 13: Create a standard function named 'calculateTotalValue' that takes one parameter: the 'inventory' array.
// B) This function should calculate the **total monetary value** of all items in stock (price * quantity for each item, then sum the results).
// C) New Concept: **Array.prototype.reduce()**: Executes a reducer function on each element of the array, resulting in a single output value.
//    Syntax: array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
//    Example: [1, 2, 3].reduce((sum, num) => sum + num, 0) // returns 6

// Prompt 14: Convert the 'calculateTotalValue' function (from Prompt 13) into a standard arrow function.

// Prompt 15: Create a concise arrow function named 'logItemName' that takes an item object (like one from the 'inventory' array) and logs ONLY its 'item' name.
// B) This function will be used as a callback later, so it should only perform the logging.

// Prompt 16: Create a standard function named 'getHighValueItems' that takes the 'inventory' array and a 'minPrice' number.
// B) This function should return a **NEW array** containing only the items whose price is greater than or equal to 'minPrice'.
// C) New Concept: **Array.prototype.filter()**: Creates a **new array** with all elements that pass the test implemented by the provided function.
//    Syntax: array.filter(callbackFunction)
//    Example: inventory.filter(product => product.price > 100)

// Prompt 17: Create a concise arrow function named 'getLowValueItems' that performs the opposite of Prompt 16: returns items whose price is **less than** 'minPrice'. Use the same parameters.

// Prompt 18: Create a standard function named 'updateInventoryQuantities' that takes the 'inventory' array.
// B) The function should return a **NEW array** where the 'quantity' of every item has been **doubled**. The original 'inventory' array must not be changed.
// C) New Concept: **Array.prototype.map()**: Creates a **new array** populated with the results of calling a provided function on every element in the calling array.
//    Syntax: array.map(callbackFunction)
//    Example: [1, 2, 3].map(num => num * 2) // returns [2, 4, 6]
//    Note: When mapping objects, make sure to return a **new object** for each item to avoid modifying the original array elements. Use the **Spread Syntax** (`...`) for this.
//    Spread Syntax Example: const newObj = { ...oldObj, newProperty: 'value' };

// Prompt 19: Convert the 'updateInventoryQuantities' function (from Prompt 18) into a standard arrow function.

// Prompt 20: Create a concise arrow function named 'getTotalRevenue' that calculates the sum of the total values (price * quantity) of all items **that have a quantity greater than 5**.
// B) Use a combination of the concepts introduced: `filter()` and `reduce()`.
// C) New Concept: **Chaining Array Methods**: Array methods like `map`, `filter`, and `reduce` return a new array (or a final value), which allows you to call the next method directly on the result of the previous one.
//    Example: inventory.filter(...).map(...).reduce(...)
/*
==================================================
Section 1: Reference: Quick Guide for Arrow Functions
==================================================
*/

/*
Arrow Function Syntax:
    The concise way to write function expressions.
    Syntax (Full Block):
        const functionName = (param1, param2) => {
            // function body
            return result;
        };

    Syntax (Concise Body - IMPLICIT RETURN):
        Omit curly braces '{}' and the 'return' keyword for a single expression.
        const add = (a, b) => a + b; // Automatically returns the sum

    Syntax (Single Parameter):
        Omit parentheses '()' around a single parameter.
        const square = num => num * num;

    Syntax (No Parameters):
        Still requires empty parentheses '()'.
        const getPi = () => 3.14159;
*/

/*
New Concept: Array.prototype.map()
    - What it does: Creates a new array populated with the results of calling a provided function (a callback) on every element in the calling array.
    - Syntax: array.map(callbackFunction)
    - Use Case: Transforming every item in an array.
    - Example (using an Arrow Function as the callback):
        const numbers = [1, 2, 3];
        const doubled = numbers.map(num => num * 2); // doubled is now [2, 4, 6]

New Concept: Array.prototype.filter()
    - What it does: Creates a new array with all elements that pass the test implemented by the provided function (a callback).
    - Syntax: array.filter(callbackFunction)
    - Use Case: Selecting a subset of elements from an array.
    - Example (using an Arrow Function as the callback):
        const ages = [12, 18, 25, 8];
        const adults = ages.filter(age => age >= 18); // adults is now [18, 25]
*/

/*
==================================================
Section 2: Sample Data
==================================================
*/

const products = [
    { id: 101, name: "T-shirt", category: "Apparel", price: 25.00, inStock: true },
    { id: 102, name: "Mug", category: "Home Goods", price: 12.50, inStock: true },
    { id: 103, name: "Keyboard", category: "Electronics", price: 75.00, inStock: false },
    { id: 104, name: "Jeans", category: "Apparel", price: 60.00, inStock: true },
    { id: 105, name: "Mousepad", category: "Electronics", price: 15.00, inStock: true }
];

const customer = {
    firstName: "Alex",
    lastName: "Johnson",
    city: "New York"
};

const numbersArrow = [5, 12, 8, 130, 44];


/*
==================================================
Section 3: Challenge Prompts/Questions
==================================================
*/

// --- BASIC ARROW FUNCTION CREATION ---

// Prompt 1: Create an arrow function named 'multiply' that takes two parameters, 'a' and 'b', and returns their product.
// B) Use the concise body syntax.
const multiply = (a, b) => a * b;

// Prompt 2: Create an arrow function named 'getGreeting' that takes one parameter, 'name', and returns the string "Hello, [name]!".
// B) Use the single-parameter, concise body syntax.
const getGreeting = (name) => (`Hello, ${name}.`);

// Prompt 3: Create an arrow function named 'getCurrentTime' that takes no parameters and returns a string like "The time is: [Current Hour]".
// C) Use the built-in 'new Date()' object and its '.getHours()' method to get the current hour.
const getCurrentTime = () => {
    const today = new Date().getHours();
    return console.log(`The time is: ${today}`);
};

// Prompt 4: Create an arrow function named 'createFullName' that takes the 'customer' object as its parameter.
// B) The function should return a string that combines the 'firstName' and 'lastName' properties, separated by a space.
// C) When returning an object literal (which you aren't doing here, but for reference): Returning an object literal directly in a concise body requires parentheses around the object: `() => ({ key: value })`.
const createFullName = (customer) => `${customer.firstName} ${customer.lastName}`;

// Prompt 5: Create an arrow function named 'describeProduct' that takes one product object (from the 'products' array) as a parameter.
// B) The function should return an object literal containing only the 'name' and 'price' of the product.
// C) Remember the rule for returning an object literal directly with the concise body syntax!


// --- ARROW FUNCTIONS WITH ARRAY METHODS (map & filter) ---

// Prompt 6: Use the Array.prototype.map() method to create a new array named 'productNames'.
// B) The new array should contain only the 'name' of each object in the 'products' array.
// C) Your map callback function should be an arrow function.

// Prompt 7: Use the Array.prototype.filter() method to create a new array named 'affordableProducts'.
// B) The new array should contain only the products from the 'products' array that have a 'price' less than 50.
// C) Your filter callback function should be an arrow function.

// Prompt 8: Use the Array.prototype.filter() method to create a new array named 'inStockApparel'.
// B) The new array should contain only the products that are both 'inStock: true' AND have the 'category: "Apparel"'.
// C) This combines the use of filtering with logical operators (&& or ||).

// Prompt 9: Use the Array.prototype.map() method to create a new array named 'salePrices'.
// B) The new array should contain the prices of all products, but reduced by 10% (i.e., multiply the price by 0.9).
// C) Use the concise body syntax for your map callback.

// Prompt 10: Use the Array.prototype.filter() method and the Array.prototype.map() method chained together to create a new array named 'expensiveProductNames'.
// B) First, filter the 'products' array to keep only the products with a price of 50 or more.
// C) Second, map the resulting array to extract only the 'name' of those expensive products. This is a common and powerful pattern!
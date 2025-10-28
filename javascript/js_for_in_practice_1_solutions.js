/**
 * 🛠️ Practice Worksheet: The for...in Loop 
 *
 * GOAL: Use the 'for...in' loop to access, manipulate, and filter object data
 */

// ====================================================================
// SECTION 1: Reference: Quick Guide for for...in
// ====================================================================

/*
 * SYNTAX:
 * for (let keyVariable in objectName) {
 * // 'keyVariable' holds the string name of the property (the KEY)
 * // To get the VALUE, use bracket notation: objectName[keyVariable]
 * }
 *
 * HINT: Accessing the value is key! Example: const price = productPrices[keyVariable];
 *
 * NEW CONCEPT: The 'typeof' operator
 * Returns a string indicating the data type. Example: typeof value === 'string'
 */


// ====================================================================
// SECTION 2: Sample Data (Use these objects for ALL challenges)
// ====================================================================

const productPrices = {
    'laptop': 1200,
    'mouse': 25,
    'keyboard': 75,
    'monitor': 350,
    'webcam': 50,
    'headphones': 150,
    'warranty': 'not available' 
};

const customerProfile = {
    firstName: 'Alex',
    lastName: 'Johnson',
    city: 'Seattle',
    email: 'alex.j@example.com',
    memberStatus: 'Gold',
    loginAttempts: 2
};


// ====================================================================
// SECTION 3: Challenge Prompts/Questions (12 Challenges)
// ====================================================================

// --- Challenge 1: Basic Key Listing ---
/*
 * Task: Iterate through 'productPrices'.
 * Action: Print ONLY the name of each product (the key).
 */
for (keyName in productPrices) {
	console.log(keyName);
};

// --- Challenge 2: Accessing Key and Value ---
/*
 * Task: Iterate through 'productPrices'.
 * Action: Print the product name (key) AND its price (value) in the format:
 * "PRODUCT costs $PRICE."
 */
 for (keyName in productPrices) {
	console.log(`${keyName} costs ${productPrices[keyName]}`);
 }


// --- Challenge 3: Filtering by Value (Price Check) ---
/*
 * Task: Iterate through 'productPrices'.
 * Action: Use an 'if' statement to print ONLY the products that are priced
 * **under $100**. Print them as: "PRODUCT is a bargain!"
 */
 for (keyName in productPrices) {
	if (productPrices[keyName] < 100) {
		console.log(`${keyName} is a bargain!`);
	};
 };

// --- Challenge 4: Filtering by Data Type ---
/*
 * Task: Iterate through 'productPrices'.
 * Action: Use the 'typeof' operator in an 'if' statement to print ONLY the
 * products where the value is a **number** (to exclude 'warranty').
 * Print them as: "Numerical value found for: KEY."
 */
for (keyName in productPrices) {
	if (typeof productPrices[keyName] === "number") {
	console.log(`Numerical value found for: ${keyName}`)
	}
}

// --- Challenge 5: Data Manipulation (Calculating Total) ---
/*
 * Task: Calculate the **total value** of all *numeric* prices in 'productPrices'.
 * Action:
 * 1. Declare 'total' (set to 0) before the loop.
 * 2. Inside the loop, check if the value is a number (use 'typeof').
 * 3. If it is a number, add the value to 'total'.
 * 4. After the loop, print the final 'total'.
 */
let total = 0;
for (keyValue in productPrices) {
	if (typeof productPrices[keyValue] === "number") {
		total = productPrices[keyValue] + total;
	};
};
console.log(`Final total is ${total}`);

// --- Challenge 6: Dynamic Message Generation ---
/*
 * Task: Iterate through the 'customerProfile' object.
 * Action: For every property (key) in the object, print a sentence like:
 * "The customer's [PROPERTY NAME] is [PROPERTY VALUE]."
 * (e.g., "The customer's firstName is Alex.")
 */


// --- Challenge 7: Finding the Smallest Value (Cheapest Item) ---
/*
 * Task: Find the lowest price among the *numeric* items in 'productPrices'.
 * Action:
 * 1. Declare 'minPrice' (start with a large number like 9999) and 'cheapestProduct' (empty string).
 * 2. Loop through 'productPrices', ensuring the value is a number.
 * 3. Use an 'if' statement to check if the current price is less than 'minPrice'.
 * 4. If it is, update both 'minPrice' and 'cheapestProduct'.
 * 5. After the loop, print the 'cheapestProduct' and its 'minPrice'.
 */


// --- Challenge 8: Converting to a String (Key Concatenation) ---
/*
 * Task: Concatenate (join) all the property names (keys) from 'customerProfile'
 * into a single string, separated by an underscore (e.g., "firstName_lastName_city...").
 * HINT: Start with an empty string and use the += operator. You'll need logic to avoid a leading or trailing underscore!
 */


// --- Challenge 9: Updating Values with an Operation ---
/*
 * Context: All numeric product prices are being increased by 5%.
 * Task: Loop through the 'productPrices' object.
 * Action: For every **numeric** value, update it by multiplying the current value by 1.05.
 * Print the 'productPrices' object *after* the loop to see the updated values.
 * HINT: Remember to check if the value is a number first!
 */


// --- Challenge 10: Conditional Key Deletion (Advanced Topic) ---
/*
 * Task: Loop through the 'customerProfile' object and remove the 'email' property.
 * Action: Use the 'delete' keyword when the key variable equals 'email'.
 * Print the 'customerProfile' object *after* the loop to verify.
 *
 * NEW CONCEPT: The 'delete' operator
 * The 'delete' operator removes a property from an object.
 * Syntax: delete objectName[keyVariable];
 */


// --- Challenge 11: Key-Value Swap (Creating a Lookup Map) ---
/*
 * Task: Create a new, empty object called 'statusToUserMap'.
 * Action: Loop through 'customerProfile' and add a pair ONLY IF the key is 'memberStatus' or 'firstName'.
 * Use the **memberStatus** as the new **key** and the **firstName** as the new **value**.
 * HINT: You'll need to store the values outside the loop to pair them correctly after the loop finishes.
 */


// --- Challenge 12: Conditional Key Addition (Applying a Discount) ---
/*
 * Task: Loop through the 'productPrices' object.
 * Action: For every product with a **numeric price over 500**, add a **new key** that is the original key name
 * followed by '_discount'. The **value** for this new key should be 10% (0.10) of the original price.
 * Print the 'productPrices' object *after* the loop to verify the new keys.
 */
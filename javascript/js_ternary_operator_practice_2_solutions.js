// ====================================================================
// Section 1: Reference: Quick Guide for the Ternary Operator (? :)
// ====================================================================

/*
* Syntax: 
* condition ? expression_if_true : expression_if_false;
*
* Key Advanced Usage Concepts:
* 1. Complex Conditions: Use ( ) to group conditions involving AND (&&) or OR (||).
* 2. Implicit Return: In a concise Arrow Function (like 'const fn = (a) => a > 0 ? a : 0;'), 
* the result of the ternary is automatically returned, making the function very concise.
* 3. Chaining (Nesting): Place a new ternary operator in the 'false' expression to achieve 
* 'else-if' logic (use sparingly for readability).
*/

// ====================================================================
// Section 2: Sample Data
// ====================================================================

const userRole = "admin";
const isActive = true;
const cartTotal = 210.50;
const inventoryLevel = 15;
const minOrderForDiscount = 100.00;
const customerTier = "Gold";
const emailRecipient = "team@example.com";
const isMaintenanceMode = true;

// Challenge 7 and 8 required starter data is included here to keep prompts clean:
const userNameInput = null;
const processingFee = 5; 

// ====================================================================
// Section 3: Challenge Prompts/Questions
// ====================================================================

// --- Advanced Conditions (AND/OR Logic) ---

// Challenge 1: Authorization Check
// Task: Determine if a user is "Authorized".
// Condition: The user must have the 'userRole' of "admin" AND must also have 'isActive' set to true. Otherwise, the status is "Unauthorized".
// Define the variable 'authStatus' and assign the result.
const authStatus = (userRole === "admin" && isActive === true) ? "Authorized" : "Unauthorized";

// Challenge 2: Priority Email Routing
// Task: Determine the correct email destination.
// Condition: If 'customerTier' is "Platinum" OR 'customerTier' is "Gold", the destination is "priority@support.com". Otherwise, the destination is 'emailRecipient'.
// Define the variable 'supportEmail' and assign the result.
const supportEmail = (customerTier === "Platinum" || customerTier === "Gold") ? "priority@support.com" : "emailRecipient";

// --- Value Calculation within the Ternary ---

// Challenge 3: Dynamic Shipping Cost
// Task: Calculate the shipping cost.
// Condition: If 'cartTotal' is greater than 150.00, the shipping is 0. Otherwise, the shipping is 12.50.
// Define the variable 'shippingCost' and assign the result.

// Challenge 4: Stock Status Calculation
// Task: Determine the numeric value of stock adjustment.
// Condition: If 'inventoryLevel' is greater than 20, the adjustment should be -5 (reduce stock). Otherwise, the adjustment should be +10 (restock).
// Define the variable 'stockAdjustment' and assign the result.

// --- Nested Ternaries for Complex Tiers ---

// Challenge 5: Dynamic Discount Rate
// Task: Calculate the discount rate based on the 'customerTier'. Use a nested ternary structure.
// Condition 1: If 'customerTier' is "Platinum", the rate is 0.20 (20%).
// Condition 2 (Else, check): If 'customerTier' is "Gold", the rate is 0.10 (10%).
// Condition 3 (Else): The rate is 0.05 (5%).
// Define the variable 'discountRate' and assign the result.

// Challenge 6: System Access Check
// Task: Determine the system message string based on maintenance and role. Use a nested ternary.
// Condition 1: If 'isMaintenanceMode' is true, the message is "System Offline".
// Condition 2 (Else, check): If 'userRole' is "admin", the message is "Admin Access Granted".
// Condition 3 (Else): The message is "Standard User Access".
// Define the variable 'systemMessage' and assign the result.

// --- Practical Application: Short-Circuiting and Truthiness ---

/* * New Concept: Short-Circuiting with OR (||)
* In JavaScript, the OR operator (||) is often used outside of the ternary to set a 
* default value. It returns the first TRUE/TRUTHY value it finds.
* Example: const finalName = suppliedName || "Default User"; 
*/

// Challenge 7: User Name Defaulting
// Task: Use the OR (||) operator to assign 'userNameInput' (from Sample Data) if it's truthy, otherwise assign the default "Anonymous".
// Define the variable 'finalUserName' and assign the result.

/* * Challenge 8: Combining Short-Circuiting and Ternary
* Task: Calculate a service fee.
* Condition: If 'cartTotal' is LESS THAN 'minOrderForDiscount', the fee is 5.
* If it is NOT less than the minimum, the fee is 0.
* Use the variable 'processingFee' (from Sample Data).
* Use the ternary to set 'finalProcessingFee' to 0 only if the condition is met, otherwise use the value of 'processingFee'.
*/
// Define the variable 'finalProcessingFee' and assign the result.

// --- Final Complex Challenge ---

// Challenge 9: Tiered Final Price Calculation
// Task: Calculate the 'finalPrice' after a discount.
// Rules: 
// 1. If 'cartTotal' is 0, 'finalPrice' is 0.
// 2. Else, if 'cartTotal' is greater than 'minOrderForDiscount', the price is (cartTotal * (1 - discountRate)).
// 3. Else, the price is just 'cartTotal' (no discount applied).
// This requires a nested ternary. You will need to define your 'discountRate' variable first (using the logic from Challenge 5).
// Define the variable 'complexDiscountRate' (using the logic from Challenge 5).
// Define the variable 'finalPrice' and assign the result using the complex nested ternary.

// Challenge 10: Function Return Conciseness
/* * New Concept: Implicit Return in Arrow Functions
* For a single-expression function (like a ternary), you can omit the {} and 'return' keyword.
* Example: const isEven = (num) => num % 2 === 0 ? "Even" : "Odd";
*/
// Task: Convert the following regular function into a concise arrow function named 'checkStockStatus' using an implicit return.
/*
function checkStockStatus(level) {
    if (level <= 5) {
        return "Low";
    } else {
        return "Adequate";
    }
}
*/
// Write the arrow function 'checkStockStatus' as a single line, taking 'level' as a parameter.
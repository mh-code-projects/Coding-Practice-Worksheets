// ====================================================================
// Section 1: Reference: Quick Guide for the Ternary Operator (? :)
// ====================================================================

/*
* Syntax: 
* condition ? expression_if_true : expression_if_false;
*
* Use and Purpose:
* The Ternary Operator is a shorthand way to write an 'if/else' statement 
* that returns one of two values based on a boolean (true/false) condition. 
* It's used primarily for concise value assignment or immediate return.
*
* Explanation:
* 1. condition: The expression evaluated for truthiness (e.g., age >= 18).
* 2. ?: The question mark separates the condition from the true result.
* 3. expression_if_true: The value/expression to be returned if the condition is TRUE.
* 4. : The colon separates the true result from the false result.
* 5. expression_if_false: The value/expression to be returned if the condition is FALSE.
*/

// ====================================================================
// Section 2: Sample Data
// ====================================================================

const dailyTemperatureF = 85;
const currentHour = 14; // 24-hour format (2 PM)
const currentDay = "Saturday";
const userCredits = 45;
const hasCoupon = true;
const itemPrice = 120.00;

// ====================================================================
// Section 3: Challenge Prompts/Questions
// ====================================================================

// --- Basic Application: Value Assignment ---

// Challenge 1: Convert Temperature Reading
// Task: Use the ternary operator to determine the weather report string.
// Condition: If 'dailyTemperatureF' is greater than 80, the report should be "Hot Day". Otherwise, it should be "Mild Day".
// Define the variable 'weatherReport' and assign the result using the ternary operator.

// Challenge 2: Determine Time of Day
// Task: Use the ternary operator to check the time of day.
// Condition: If 'currentHour' is less than 12, the message should be "Good Morning". Otherwise, it should be "Good Afternoon".
// Define the variable 'greeting' and assign the result.

// Challenge 3: Weekend Check
// Task: Use the ternary operator to check if today is a weekend.
// Condition: If 'currentDay' is strictly equal to "Saturday" OR strictly equal to "Sunday", the status should be "Weekend Fun!". Otherwise, it should be "Working Day...".
// Define the variable 'dayStatus' and assign the result.

// --- Mathematical Operations and Logic ---

// Challenge 4: Credit System Threshold
// Task: Use the ternary operator to calculate the transaction fee.
// Condition: If 'userCredits' is less than 50, the fee is 5. Otherwise, the fee is 0.
// Define the variable 'transactionFee' and assign the result.

// Challenge 5: Basic Discount Calculation
// Task: Use the ternary operator to calculate the final price after a possible discount.
// Condition: If 'hasCoupon' is true, the final price is 10% less than 'itemPrice'. Otherwise, the final price is 'itemPrice'.
// Tip: To calculate 10% off, you can multiply the price by 0.9.
// Define the variable 'finalPrice' and assign the result.


// Nested Ternaries (A bit more complex, use sparingly in real code) ---

/* * New Concept: Nested Ternaries
* You can place another ternary operator as the 'expression_if_false' (or 
* 'expression_if_true') result.
* Syntax Example: condition1 ? result1 : (condition2 ? result2 : result3);
*/

// Challenge 6: Order Priority
// Task: Use a nested ternary to determine the order priority string.
// Condition 1: If 'inventoryCount' is 0, the priority is "Out of Stock".
// Condition 2 (if not out of stock): If 'isUrgent' is true, the priority is "High Priority". Otherwise, it's "Standard Priority".
// Define the variable 'orderPriority' and assign the result.
const inventoryCount = 10;
const isUrgent = false;

// --- Using Ternaries with Function Calls ---

// Challenge 7: Log-in Status Message
// Use the ternary operator to return one of two strings: "Go to Dashboard()" or "Show Login Modal()".
// Define the variable 'isLoggedIn' (set it to true or false) and then define 'authAction' and assign the result.

// --- Practical Application: Data Validation/Defaulting ---

// Challenge 8: Providing a Default Username
// Task: Create a variable called 'userSubmittedName'. Use the ternary operator to assign a name.
// Condition: If 'userSubmittedName' is an empty string (""), the name should be "GuestUser". Otherwise, the name should be 'userSubmittedName'.
// Define the variable 'userSubmittedName' (set it to an empty string) and then define 'assignedUsername' and assign the result.

// Challenge 9: Checking for Positive Numbers
// Task: Use the ternary operator to determine the label for userValue.
// Condition: Check if 'userValue' is greater than 0. If true, the label is "Positive Value". Otherwise, the label is "Non-Positive Value".
// Define the variable 'userValue' (set it to a number like -5) and then define 'valueLabel' and assign the result.

/* * Challenge 10: Dynamic Pricing Adjustment
* Task: Determine the 'shippingCost' based on the 'itemPrice'.
* Use a nested ternary structure for the following rules:
* 1. If 'itemPrice' is greater than 150, 'shippingCost' is 0 (Free Shipping).
* 2. If 'itemPrice' is between 50 and 150 (inclusive), 'shippingCost' is 8.
* 3. If 'itemPrice' is 50 or less, 'shippingCost' is 5.
* Hint: Start by checking the highest price threshold first.
*/
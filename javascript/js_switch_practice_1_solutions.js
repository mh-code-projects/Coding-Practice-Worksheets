/**
 * =========================================================
 * 📜 Practice Worksheet: JavaScript switch Statements
 * =========================================================
 */

/*
 * ---------------------------------------------------------
 * Section 1: Reference: Quick Guide for switch Statements
 * ---------------------------------------------------------
 */

/*
 * 🌟 Purpose: Perform different actions based on different exact conditions of a single value.
 *
 * 📘 Syntax:
 * switch (expression) {
 * case value1:
 * // Code if expression === value1
 * break; // Stops execution inside the switch. CRITICAL.
 * case value2:
 * // Code if expression === value2
 * // No break here means "fall-through" to the next case.
 * default:
 * // Code if no cases match (optional)
 * }
 */


/*
 * ---------------------------------------------------------
 * Section 2: Sample Data
 * ---------------------------------------------------------
 */

const currentDayNumber = 1;         // 1 (Mon) to 7 (Sun)
const userRole = "guest";           // Possible roles: "admin", "editor", "user", "guest", "viewer"
const temperatureUnit = "C";        // Possible units: "F", "C", "K"
const fruitSelection = "apple";     // Possible fruits: "apple", "banana", "orange", "grape"
const userSubscription = "premium"; // Possible levels: "free", "basic", "premium", "lifetime"
const errorCode = 404;              // Common HTTP error codes: 200, 401, 403, 404, 500


/*
 * ---------------------------------------------------------
 * Section 3: Challenge Prompts/Questions
 * ---------------------------------------------------------
 */

// --- Challenge 1: Basic Day-of-Week Conversion (Revisited) ---
// Goal: Convert the numeric day (currentDayNumber) into its name.
// Prompt: Create a switch statement for 'currentDayNumber'. Set a variable 'dayName'
// to the correct day name (1="Monday", 7="Sunday"). Default should be "Invalid Day Number".
let dayName = "";
switch (currentDayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "That is not a valid day";
}

// --- Challenge 2: Handling Multiple Cases Together (Access Levels) ---
// Goal: Determine the access level for a 'userRole'.
// Prompt: Create a switch statement for 'userRole' and assign a string to 'accessLevel'.
// - "admin", "editor": "Full Write Access" (Use fall-through)
// - "user": "Limited Read/Write Access"
// - "guest", "viewer": "Read-Only Access" (Use fall-through)
// - default: "No Defined Access"
let accessLevel = "";
switch{
  case admin:
    accessLevel = "Full Write Access";
    break;
  case editor:
    accessLevel = "Full Write Access";
    break;
  case user:
    accessLevel = "Limited Read/Write access";
    break;
  case guest:
    accessLevel = "Read-Only Access"
    break;
  case viewer:
    accessLevel = "Read-Only Access";
    break;
  default:
    accessLevel = "No defined Access";
}

// --- Challenge 3: Unit Conversion (Executing Logic) ---
// Goal: Determine the logic required for a temperature conversion based on 'temperatureUnit'.
// Prompt: Create a switch statement for 'temperatureUnit'. Set a variable 'conversionFormula'.
// - "F": "Fahrenheit to Celsius: (T - 32) * 5/9"
// - "C": "Celsius to Fahrenheit: (T * 9/5) + 32"
// - "K": "Kelvin conversion requires a more complex function"
// - default: "Unknown Unit"
let conversionFormula = '';
switch (temperatureUnit) {
case "F":
    conversionFormula = 'Fahrenheit to Celsius: (T - 32) * 5/9';
    break;
  case "C":
    conversionFormula='Celsius to Fahrenheit: (T * 9/5) + 32';
    break;
  case "K":
    conversionFormula = 'Kelvin conversion requires a more complex function';
    break;
  default:
    conversionFormula = 'Unknown unit'
}

// --- Challenge 4: Grouping Items and Simple Pricing ---
// Goal: Determine the category and price for a 'fruitSelection'.
// Prompt: Create a switch statement for 'fruitSelection'. Assign the category and price
// to a variable called 'fruitDetails' (e.g., "Category: Pome, Price: $0.75").
// - "apple", "pear": "Category: Pome, Price: $0.75"
// - "banana": "Category: Tropical, Price: $0.50"
// - "orange": "Category: Citrus, Price: $1.25"
// - default: "Category: Other, Price: Unknown"

// --- Challenge 5: Required Action Check ---
// Goal: Use the switch to determine if a required setup step is needed.
// Prompt: Create a switch statement for 'userSubscription'. Set a boolean variable
// 'setupRequired'.
// - "free", "basic": 'setupRequired' should be true.
// - "premium", "lifetime": 'setupRequired' should be false.
// - default: 'setupRequired' should be true.

// --- Challenge 6: The Fall-Through TRAP ---
// Goal: Demonstrate that a missing break causes "fall-through."
// Prompt: Create a switch for the number 1. Inside the cases, set a variable 'trapResult'
// to a string. Make sure to OMIT the 'break' keyword in the first case.
// case 1: 'trapResult' = "I am case 1";
// case 2: 'trapResult' = "I am case 2";
// default: 'trapResult' = "I am default";
// What is the final value of 'trapResult'?

// --- Challenge 7: HTTP Error Code Classification ---
// Goal: Classify an HTTP error code.
// Prompt: Create a switch statement for 'errorCode'. Set a variable 'errorType'.
// - 200: "Success"
// - 401, 403, 404: "Client-Side Error"
// - 500: "Server-Side Error"
// - default: "Unknown Code"

// --- Challenge 8: Using Expression in the Case Value (Advanced Concept) ---
// Reference: You can put more than just simple values in a case. While less common,
// you can sometimes use expressions if the switch expression is true.
// Prompt: Create a switch statement where the **expression** is set to **true**.
// Then, use complex logical expressions for the **case** values to set a variable 'timeOfDay'.
// HINT: Assume a variable 'hour' is set to 14 (2 PM).
// const hour = 14;
// switch (true) {
// case hour < 12: 'timeOfDay' = "Morning"; break;
// case hour < 18: 'timeOfDay' = "Afternoon"; break;
// default: 'timeOfDay' = "Evening";
// }
// Now, rewrite the switch to correctly determine 'timeOfDay' for a new 'currentHour' of 21 (9 PM).
const currentHour = 21;

// --- Challenge 9: Conditional Output with a Default Action ---
// Goal: Simulate a logging or notification system.
// Prompt: Use the 'userRole' variable. Set a variable 'notificationMessage'.
// - "admin": 'notificationMessage' = "System Alert: All changes saved."
// - "editor": 'notificationMessage' = "Draft saved successfully."
// - default: The default case should set 'notificationMessage' to "Access Denied. Operation canceled."

// --- Challenge 10: Combining Cases for a Shared Action ---
// Goal: Define which fruits are good for a pie.
// Prompt: Create a switch statement for 'fruitSelection'. Set a boolean variable 'isGoodForPie'.
// - "apple", "cherry", "peach": 'isGoodForPie' should be true.
// - "banana", "orange", "grape": 'isGoodForPie' should be false.
// - default: 'isGoodForPie' should be false.
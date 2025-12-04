// ====================================================================
// Section 1: Reference: Quick Guide for the Logical OR Operator (||)
// ====================================================================

/*
* The || operator in JavaScript does NOT always return 'true' or 'false'.
*
* Key Rule: It evaluates from left to right and returns the FIRST value 
* that is considered **TRUTHY**.
*
* Falsy Values: In JS, these are values that evaluate to 'false' in a 
* boolean context:
* 1. false
* 2. 0 (the number zero)
* 3. "" (an empty string)
* 4. null
* 5. undefined
* 6. NaN (Not a Number)
*
* Truthy Values: All other values (non-zero numbers, non-empty strings, 
* objects, arrays, etc.) are Truthy.
*
* Pattern 1: Defaulting (Short-Circuit)
* const result = primaryValue || defaultValue; 
* If primaryValue is Truthy, result = primaryValue.
* If primaryValue is Falsy, result = defaultValue.
*/

// ====================================================================
// Section 2: Sample Data
// ====================================================================

const userSetting = 25; // A valid number input
const userName = ""; // User skipped input
const sessionKey = null; // Session variable not set
const itemQuantity = 0; // A numeric input that is Falsy
const userPreferences = { theme: 'dark', notifications: true };
const cachedData = undefined; 
const defaultTheme = "light";
const defaultKey = "GUEST_SESSION";
const defaultQuantity = 1;
const defaultPreferences = { theme: 'system', notifications: false };
const defaultCache = "Loading Data...";

// ====================================================================
// Section 3: Challenge Prompts/Questions
// ====================================================================

// --- Use Case 1: Simple Defaulting (Handling single falsy values) ---

// Challenge 1: Default Session Key
// Task: Use the || operator to assign 'sessionKey' if it's truthy, otherwise assign 'defaultKey'.
// Define the variable 'currentSession' and assign the result.

// Challenge 2: Default Theme
// Task: Use the || operator to assign 'defaultTheme' only if the 'userPreferences.theme' is missing (which would make it undefined, a falsy value).
// Define the variable 'activeTheme' and assign the result.
// Note: 'userPreferences.theme' is truthy, so this tests how || handles a truthy input.

// Challenge 3: Default User Name
// Task: Assign 'userName' if it has a value, otherwise assign the string "Anonymous User".
// Define the variable 'finalName' and assign the result.

// --- Use Case 2: Handling Numeric Zero (0) ---

// Challenge 4: Default Quantity
// Task: The variable 'itemQuantity' is 0, which is Falsy. Use the || operator to assign 'itemQuantity' if it's truthy, otherwise assign 'defaultQuantity'.
// Define the variable 'actualQuantity' and assign the result.
// Think: What happens when the input is 0?

// Challenge 5: Default Numerical Setting
// Task: Assume a variable 'userSettingInput' is a numeric input that sometimes comes in as null. If 'userSettingInput' is null, default it to 'userSetting'.
const userSettingInput = null;
// Define the variable 'finalSetting' and assign the result.

// --- Use Case 3: Complex Defaults (Handling nested or missing objects) ---

// Challenge 6: Default Data Structure
// Task: The variable 'cachedData' is undefined (Falsy). Use the || operator to assign 'cachedData' if it exists, otherwise assign the string 'defaultCache'.
// Define the variable 'dataDisplay' and assign the result.

// Challenge 7: Deep Preferences Default
// Task: Assume a variable 'userPreferencesMissing' is undefined (a completely missing object). Use the || operator to assign 'userPreferencesMissing' if it exists, otherwise assign the object 'defaultPreferences'.
const userPreferencesMissing = undefined;
// Define the variable 'finalPrefs' and assign the result.

// --- Use Case 4: Advanced Combination ---

/* * New Concept: Combining || with Ternary
* You can use the || short-circuit result as a final expression in a ternary.
*/
// Challenge 8: Conditional Price or Default
// Task: Assume a variable 'priceCalculation' which is sometimes 0 (Falsy) if the item is free. 
// If 'priceCalculation' is Falsy (0), assign "FREE". 
// Otherwise, assign a string that says "Price: $" followed by the 'priceCalculation'.
const priceCalculation = 0; 
// Define the variable 'priceLabel' and assign the result using a ternary, incorporating || if necessary (or just using the truthiness directly).
// Hint: In the TRUE case, you need to return the concatenated string. In the FALSE case, return the "FREE" string.

// Challenge 9: Double Default Fallback
// Task: Set a variable 'logoSource'. Check three variables in order, and use the first one that is Truthy.
// Variables to check (in order): 
// 1. 'userLogo' (missing - set to "")
// 2. 'clientLogo' (set to "/images/client_default.png")
// 3. 'systemLogo' (set to "/images/app_logo.png")
const userLogo = ""; 
const clientLogo = "/images/client_default.png";
const systemLogo = "/images/app_logo.png";
// Use two || operators in a single line to find the first truthy value.
// Define the variable 'logoSource' and assign the result.

// Challenge 10: Status Check with Default Action
// Task: A variable 'statusCode' is Falsy if the network request fails (set to 0). 
// Use the || operator to return the 'statusCode' if it's Truthy (e.g., 200), otherwise return the string "Network Error".
const statusCode = 0;
// Define the variable 'statusDisplay' and assign the result.
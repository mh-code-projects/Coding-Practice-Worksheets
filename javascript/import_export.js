/*
=========================================================
💻 Practice Worksheet: ES Modules (import/export)
=========================================================
Focus: Structuring code across multiple files using ES6 Modules (the standard in React).

This challenge is broken into three parts representing three separate files.
Copy the code for FILE 2 and FILE 3 into separate files in your environment.

========================================================================
--- FILE 2: utils.js (Named Exports) ---
========================================================================

// CHALLENGE: Create two NAMED exports here.

// 1. A function named 'calculateDiscount' that takes 'price' and 'percentage' 
//    and returns the discounted price (price * (1 - percentage)).
export const calculateDiscount = (price, percentage) => price * (1 - percentage);

// 2. A constant named 'APP_VERSION' set to the string "1.0.3".
export const APP_VERSION = "1.0.3";


========================================================================
--- FILE 3: config.js (Default Export) ---
========================================================================

// CHALLENGE: Create one DEFAULT export here.

// 1. Export an object named 'DEFAULT_SETTINGS' that contains:
//    - theme: "dark"
//    - recordsPerPage: 25
const DEFAULT_SETTINGS = {
    theme: "dark",
    recordsPerPage: 25
};
export default DEFAULT_SETTINGS;


========================================================================
--- FILE 1: index.js (Main Execution File) ---
========================================================================

// --- STEP 1: Import Statements ---
// A) Import the 'calculateDiscount' function and the 'APP_VERSION' constant
//    from './utils.js' using **Named Imports**.
// B) Import the 'DEFAULT_SETTINGS' object from './config.js' and give it the local 
//    name **appConfig** using a **Default Import**.
// C) Use the **wildcard import** (import * as X from Y) to import ALL named exports
//    from './utils.js' and give the resulting object the name **utils**.

import { calculateDiscount } from './utils.js'; // A
import appConfig from './config.js'; // B
import * as utils from './utils.js'; // C

/*
🚀 Challenge 1: Using Named Exports
A) Use the directly imported 'calculateDiscount' function (from import A) 
   to calculate the discounted price of an item costing 150 with a 20% discount (0.2).
B) Console.log the result.
*/
const discountedPrice = calculateDiscount(150, 0.2);
console.log(`Challenge 1 Result: Discounted Price is $${discountedPrice.toFixed(2)}`);


/*
🚀 Challenge 2: Using the Default Export
A) Access the 'recordsPerPage' property from the **appConfig** object (from import B).
B) Console.log the value with a descriptive string.
*/
console.log(`Challenge 2 Result: Records per page: ${appConfig.recordsPerPage}`);


/*
🚀 Challenge 3: Using the Wildcard Import
A) Access the 'APP_VERSION' constant using the **utils** object (from import C).
B) Console.log the version with a descriptive string.
*/
console.log(`Challenge 3 Result: Version via Wildcard: ${utils.APP_VERSION}`);


/*
🚀 Challenge 4: Combining Exports
A) Create a function named 'displayStatus' that takes a price.
B) Inside 'displayStatus', use the **calculateDiscount** function (from utils) to find the final price 
   after applying a 10% discount.
C) Console.log a string combining the discounted price and the default theme (from appConfig).
   Example: "Price after 10% discount: 90.00. Theme is dark."
D) Call the function with an initial price of 100.
*/
const displayStatus = (price) => {
    const finalPrice = utils.calculateDiscount(price, 0.10);
    console.log(`Challenge 4 Result: Price after 10% discount: $${finalPrice.toFixed(2)}. Theme is ${appConfig.theme}.`);
};
displayStatus(100);


/*
🚀 Challenge 5: Re-exporting (Concept Check - No Code Required)
A) Imagine you want to make 'calculateDiscount' available directly from './main-api.js' 
   without putting the logic there.
B) Write the single line of code you would use in **./main-api.js** to re-export 'calculateDiscount' from **./utils.js**.
*/
// Re-export answer (for main-api.js): export { calculateDiscount } from './utils.js';


/*
🚀 Challenge 6: Renaming on Export
A) In your **utils.js** file (File 2), modify the export of 'calculateDiscount' to export it as **'discountCalculator'** instead.
B) Modify your **index.js** import statement (import A) to correctly import it using its new name.
C) Call the function using its new name to verify the link still works. 
(Note: You must edit the files for this test, but the concept is demonstrated.)
*/
// Concept: In utils.js: export { calculateDiscount as discountCalculator, APP_VERSION };
// In index.js: import { discountCalculator } from './utils.js';


/*
🚀 Challenge 7: Renaming on Import
A) Revert the export in **utils.js** back to 'calculateDiscount'.
B) In your **index.js** file, modify the import statement (import A) to import 'calculateDiscount' 
   but rename it locally to **'priceReducer'** using the `as` keyword.
C) Call the imported function using the local name 'priceReducer' to verify.
(Note: You must edit the files for this test, but the concept is demonstrated.)
*/
// Concept: In index.js: import { calculateDiscount as priceReducer } from './utils.js';


/*
🚀 Challenge 8: Mixing Import Types
A) Create a single import statement that imports:
   - The default export from './config.js' (as `settings`).
   - The named export 'APP_VERSION' from './utils.js'.
B) Console.log the theme from the `settings` object and the `APP_VERSION`.
*/
// The required import: import settings, { APP_VERSION } from './config.js';
// Note: You must combine imports B and A for this to work.
// console.log(`Challenge 8 Result: Theme: ${settings.theme}, Version: ${APP_VERSION}`);


/*
🚀 Challenge 9: Conditional Logic using Imported Data
A) Write an `if/else` block that checks the imported theme property from the `appConfig` object.
B) If the theme is "dark", console.log: "Ready for late night coding."
C) Otherwise, console.log: "Ready for daytime work."
*/
if (appConfig.theme === "dark") {
    console.log("Challenge 9 Result: Ready for late night coding.");
} else {
    console.log("Challenge 9 Result: Ready for daytime work.");
}


/*
🚀 Challenge 10: Using Imported Constant in a Loop
A) Write a simple `for` loop that iterates from 1 up to the value of the imported **recordsPerPage** property 
   from the `appConfig` object.
B) Inside the loop, console.log: "Rendering record #[i]".
*/
console.log("--- Challenge 10 Start ---");
for (let i = 1; i <= appConfig.recordsPerPage; i++) {
    console.log(`Rendering record #${i}`);
}
console.log("--- Challenge 10 End ---");
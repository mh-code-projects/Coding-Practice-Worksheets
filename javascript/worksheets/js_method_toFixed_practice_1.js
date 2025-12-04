// ====================================================================
// Section 1: Reference: Quick Guide for the .toFixed() Method
// ====================================================================

/*
* Syntax: 
* number.toFixed(digits)
*
* Use and Purpose:
* Formats a number using fixed-point notation (a specific number of decimal places).
*
* Critical Point: .toFixed() ALWAYS returns a STRING.
* If you need to do further math, you MUST convert it back to a number 
* using Number() or parseFloat().
*
* Example: 
* const pi = 3.14159;
* const twoDigits = pi.toFixed(2); // twoDigits is "3.14" (a string)
*/

// ====================================================================
// Section 2: Sample Data
// ====================================================================

const calculatedPrice = 87.56789;
const largeNumber = 1234.5;
const percentageResult = 0.66666666;
const currencyValue = 19.95;
const freeShippingThreshold = 150.00;
const inventoryCount = 10;
const calculationResult = 10 + (210.50 * 0.05); // 20.525

// ====================================================================
// Section 3: Challenge Prompts/Questions
// ====================================================================

// --- Basic Formatting ---

// Challenge 1: Currency Display
// Task: Use .toFixed() to format 'calculatedPrice' to exactly two decimal places for a final currency display string.
// Define the variable 'priceString' and assign the result.

// Challenge 2: Scientific Precision
// Task: Use .toFixed() to format 'percentageResult' to four decimal places.
// Define the variable 'preciseString' and assign the result.

// Challenge 3: Integer Formatting
// Task: Use .toFixed() to format 'largeNumber' to zero decimal places.
// Define the variable 'integerString' and assign the result.

// --- Padding and Rounding Behavior ---

// Challenge 4: Zero Padding
// Task: Use .toFixed() to format 'currencyValue' to three decimal places. Observe how it handles the missing third digit.
// Define the variable 'paddedString' and assign the result.

// Challenge 5: Standard Rounding
// Task: Use .toFixed() to format 'calculatedPrice' to one decimal place. Observe how it rounds up.
// Define the variable 'roundedString' and assign the result.

// --- Currency/Math Integration (Applying it to your original problem) ---

// Challenge 6: Shipping Cost Finalization
// Task: Apply .toFixed(2) to 'calculationResult' (the cost is 20.525) to get a properly rounded currency string.
// Define the variable 'finalShippingString' and assign the result.

// Challenge 7: Total Calculation with Rounding
// Task: Calculate the total of 'currencyValue' + 'calculationResult'. Then, apply .toFixed(2) to the sum.
// Define the variable 'totalString' and assign the result.

// --- The Critical Conversion Issue ---

/* * New Concept: Converting Back to a Number
* To perform further math on a string returned by .toFixed(), you MUST convert it back.
* Method: Number(string) or parseFloat(string)
*/

// Challenge 8: Math After Formatting (Error Check)
// Task: Format 'calculatedPrice' to two decimal places (a string). Then, try to multiply this result by 'inventoryCount' (10). 
// Define the variable 'badMathResult' and assign the result.
// Note: Observe the type of the result and what happens when you multiply a string.

// Challenge 9: Corrected Math
// Task: Take the result from Challenge 8's formatting (calculatedPrice.toFixed(2)). Use the 'Number()' function to convert it back to a number before multiplying it by 'inventoryCount'.
// Define the variable 'correctMathResult' and assign the final number.

// --- Advanced Use Case ---

// Challenge 10: Percentage Conversion and Formatting
// Task: Convert 'percentageResult' (0.66666...) into a percentage string that shows **one decimal place** (e.g., "66.7%").
// Hint: First, multiply the number by 100. Then, use .toFixed(1).
// Define the variable 'percentDisplayString' and assign the result.
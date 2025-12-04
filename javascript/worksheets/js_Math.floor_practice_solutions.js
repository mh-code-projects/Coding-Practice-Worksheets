/**
 * 💻 Math.floor() Practice Worksheet 📐
 *
 * This worksheet is designed to help you understand, practice, and master the
 * JavaScript Math.floor() method.
 */

// ====================================================================
// SECTION 1: Reference: Quick Guide for Math.floor()
// ====================================================================

// SYNTAX:
// Math.floor(x)

// PURPOSE:
// The Math.floor() static method returns the largest integer less than or equal to a given number 'x'.
// In simple terms: It rounds a number DOWN to the nearest whole integer.

// EXAMPLES:
// Math.floor(5.95);  // Returns 5
// Math.floor(5.01);  // Returns 5
// Math.floor(5);     // Returns 5
// Math.floor(-5.01); // Returns -6 (because -6 is the largest integer less than or equal to -5.01)

// ====================================================================
// SECTION 2: Sample Data
// ====================================================================

const highPrecisionNumber = 3.1415926535;
const productPrice = 19.99;
const negativeValue = -12.34;
const positiveValue = 7.89;
const totalItems = 17;
const itemsPerPage = 5;


// ====================================================================
// SECTION 3: Challenge Prompts
// ====================================================================

/*
 * Challenge 1: Basic Round Down
 * Task: Use Math.floor() to round the 'highPrecisionNumber' down to the nearest whole integer.
 */
let roundedPi = Math.floor(highPrecisionNumber);
console.log(roundedPi);


/*
 * Challenge 2: Handling Currency (Ignoring Cents)
 * Task: Get the whole dollar amount from the 'productPrice', ignoring the cents.
 */
let dollarAmount = Math.floor(productPrice);
console.log(dollarAmount);


/*
 * Challenge 3: Rounding Negative Numbers (A Key Distinction!)
 * Task: Use Math.floor() on 'negativeValue'. Pay close attention to the result, as this
 * highlights the difference between Math.floor() and simple truncation (cutting off the decimal).
 */
let floorNegative = Math.floor(negativeValue);
console.log(floorNegative);


/*
 * Challenge 4: Calculating Full Pages (Practical Use Case)
 *
 * Scenario: You have 'totalItems' and you can display 'itemsPerPage'.
 * Task A: Calculate the exact number of pages needed (which will be a floating-point number).
 * Task B: Use Math.floor() to calculate how many *full* pages you will have.
 *
 * Hint for Task A: Division will give you the exact number.
 */
// exactPagesNeeded

// fullPages


/*
 * Challenge 5: Creating a "Truncate to N Decimal Places" Function
 *
 * Scenario: While Math.floor() only works with integers, you can cleverly use it to
 * effectively "truncate" or "cut off" a number to a specific number of decimal places.
 *
 * Concept: To keep 'N' decimal places:
 * 1. Multiply the number by 10 raised to the power of 'N' (e.g., $10^2$ for 2 places).
 * 2. Use Math.floor() on the result.
 * 3. Divide the result back by 10 raised to the power of 'N'.
 *
 * Task: Write the code to truncate 'highPrecisionNumber' to exactly 4 decimal places.
 * You will need the **Math.pow()** method.
 *
 * Math.pow(base, exponent): Returns the base to the exponent power.
 * Example: Math.pow(10, 2) returns 100.
 */
// truncatedFourDecimals
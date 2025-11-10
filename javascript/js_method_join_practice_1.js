/*
================================================
Section 1: Reference: Quick Guide for .join()
================================================

Syntax:
array.join(separator)

What it does:
The .join() method creates and returns a new string by concatenating all of the elements
in an array.

Use and Purpose:
It is primarily used when you need to convert an array (which can hold various data types)
into a single, easy-to-read string. The 'separator' argument specifies what should be
placed between each element in the resulting string.

Example:
const words = ["Hello", "World", "!"];
const sentence = words.join(" "); // Result: "Hello World !"
const combined = words.join("");  // Result: "HelloWorld!"
const delimited = words.join(" - "); // Result: "Hello - World - !"

If no separator is provided, it defaults to a comma (",").

================================================
Section 2: Sample Data
================================================
*/

const fruits = ["apple", "banana", "cherry", "date"];
const letters = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
const hexColors = ["#FF5733", "00", "A1", "3E", "5F"];
const csvData = [
  ["Name", "Age", "City"],
  ["Alice", 30, "New York"],
  ["Bob", 25, "Los Angeles"],
  ["Charlie", 35, "Chicago"]
];


/*
================================================
Section 3: Challenge Prompts/Questions
================================================

// 1. Basic Joining - Default Separator
// Goal: Create a string from the 'fruits' array using the default separator.

// 2. Basic Joining - No Separator
// Goal: Combine the elements of the 'letters' array into a single word, with no characters between the letters.

// 3. Joining for Display
// Goal: Create a string from the 'fruits' array where each fruit is separated by a comma followed by a space (", ").

// 4. Joining for File Paths
// Goal: Create an array of directory names: ['users', 'documents', 'work', 'report.pdf']. Then, use .join() to format it into a standard file path string, separated by a forward slash ('/').

// --- Combining with Other Methods for Practical Use (Use any array methods necessary!) ---

// 5. Array Reversal and Joining
// Goal: Take the 'letters' array, reverse the order of its elements, and then join them into a single reversed word string with no separator.

// 6. Filtering and Joining
// Goal: Take the 'fruits' array, remove the fruit "date", and then join the remaining elements with a hyphen ('-').

// 7. Data Formatting: CSV Row Selection
// Goal: From the 'csvData' array, access the row containing data for "Alice". Join these data points into a single Comma Separated Values (CSV) line.

// 8. Data Formatting: Generating a Full CSV Table
// Goal: Convert the entire 'csvData' array (an array of arrays) into one single, massive string. The elements within each row should be separated by a comma (','), and each row should be separated by a newline character ('\n').

// 9. URL Slug Creation
// Goal: Start with the string: "The-Ultimate-Guide-to-JavaScript-Methods". Split it into segments, transform all segments to lowercase, and then join them back together using a hyphen ('-') to create a clean URL slug.

// 10. Complex String Manipulation: Hex Code Builder (The Final Challenge)
// Goal: The 'hexColors' array is flawed. Produce a single string where: a) every element *except the first* is prefixed with a '#' character, and b) the resulting elements are joined by a single space (" ").
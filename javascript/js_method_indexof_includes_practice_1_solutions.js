// ===================
// Section 1: Reference
// ===================

// The .includes() method determines whether an array or a string includes a certain value among its entries, returning true or false as appropriate.
// Syntax: array.includes(valueToFind, fromIndex (optional))
// Example: const fruits = ['apple', 'banana']; fruits.includes('banana'); // returns true

// The .indexOf() method returns the first index at which a given element can be found in the array or a string, or -1 if it is not present.
// Syntax: array.indexOf(searchElement, fromIndex (optional))
// Example: const fruits = ['apple', 'banana']; fruits.indexOf('banana'); // returns 1

// A key difference:
// - Use .includes() when you just need to check for existence (a simple yes/no answer).
// - Use .indexOf() when you need to know the specific position of the element.

// ===================
// Section 2: Sample Data
// ===================

const students = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
const grades = [85, 92, 78, 95, 88, 80];
const searchTerms = ['apple', 'orange', 'banana', 'grape'];
const sentence = "The quick brown fox jumps over the lazy dog.";

// =========================
// Section 3: Challenge Prompts
// =========================

// **Individual Method Challenges (1-10)**

// Challenge 1: Check if the 'students' array includes the name 'Charlie'.
const hasCharlie = students.includes("Charlie");

// Challenge 2: Find the index of the name 'Eve' in the 'students' array.
const indexofEve = students.indexOf("Eve");

// Challenge 3: Check if the 'grades' array includes the number 92.
const over92 = grades.includes(92);

// Challenge 4: Find the index of the number 88 in the 'grades' array.
const indexof88 = grades.indexOf(88);

// Challenge 5: Check if the 'searchTerms' array includes 'grape'.
const searchGrape = searchTerms.includes("grape");

// Challenge 6: Find the index of the word 'fox' in the 'sentence' string.
const findFox = sentence.indexOf("fox");

// Challenge 7: Check if the 'grades' array includes a grade of 100.

// Challenge 8: Find the index of the name 'Zoe' in the 'students' array.

// Challenge 9: Check if the 'sentence' string includes the word 'lazy'.

// Challenge 10: Find the index of the first 'o' in the 'sentence' string.

// Challenge 11: Check if the 'students' array includes 'Bob'. If it does, find his index.

// Challenge 12: Find the index of the number 78 in the 'grades' array. If the index is found, check if the 'grades' array includes the number 95.

// Challenge 13: Check if the 'sentence' string includes the word 'jumps'. If it does, find the index of the word 'quick'.

// Challenge 14: Use a variable to store the name 'Frank'. Then, check if the 'students' array includes that variable. If it does, log his grade from the 'grades' array using his index.

// Challenge 15: Find the index of the number 95 in the 'grades' array. Use a combined logical check to see if that index is greater than 2 AND if the 'grades' array includes a value less than 80.

// Challenge 16: Check if the 'searchTerms' array includes 'banana'. If it does, use its index to check if the next item in the array is 'grape'.

// Challenge 17: Find the index of the first 'o' in the 'sentence' string. Then, use the `indexOf()` method again, starting from that index plus one, to find the next 'o'.

// Challenge 18: Use `includes()` to check if 'students' contains 'Diana'. If true, use `indexOf()` to get her position, then use that index to get her grade from the 'grades' array.

// Challenge 19: Check if the 'grades' array includes a grade between 90 and 100. (Hint: this requires a loop or an array method like .some()).

// Challenge 20: Combine methods to first check if the 'sentence' includes the word 'fox' and then if it includes the word 'dog'. If both are true, find the index of 'dog'.
/*
  =================================
  Practice Worksheet: JavaScript For...Of Loops
  =================================
*/

/*
  =================================
  Section 1: Reference - Quick Guide for For...Of Loops
  =================================
*/
/*
  Syntax:
    for (const variable of iterable) {
      // code to be executed for each item
    }

  Purpose:
    A for...of loop iterates over the *values* of an iterable object (like arrays, strings, etc.). It provides a simple and clean way to loop through each item in a collection without needing to manage an index or a counter variable.
    - `variable`: A temporary variable that holds the value of the current item in each iteration.
    - `iterable`: The collection (e.g., an array or string) that you want to loop over.
*/

/*
  =================================
  Section 2: Sample Data
  =================================
*/

const colors = ["red", "green", "blue", "yellow"];
const sentence = "The qUick brown fox";
const numbers = [10, 25, 40, 55, 70];
const users = [
  { name: "Alice", active: true, score: 82 },
  { name: "Bob", active: false, score: 94},
  { name: "Charlie", active: true, score: 71 }
];


/*
  =================================
  Section 3: Challenge Prompts
  =================================
*/

/*
  1. Print Colors
  Task: Use a for...of loop to iterate through the `colors` array and print each color to the console.
*/
for (const color of colors) {
	console.log(color);
};


/*
  2. Count Vowels
  Task: Use a for...of loop to iterate through the `sentence` string and count the number of vowels (a, e, i, o, u). Print the final count.
*/
let vowelCount = 0;
for (let vowel of sentence) {
	vowel = vowel.toLowerCase();
if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
		vowelCount++;
	};
}
console.log(vowelCount);

/*
  3. Find a Specific Number
  Task: Use a for...of loop to iterate through the `numbers` array. If you find the number 40, print "Found 40!" and stop the loop.
*/
for (number of numbers) {
	if (number === 40) {
		console.log("Found 40!");
	}
}

/*
  4. Sum of Numbers
  Task: Use a for...of loop to calculate the sum of all numbers in the `numbers` array. Print the final sum.
*/
let numberTotal = 0;
for (number of numbers) {
	numberTotal = numberTotal + number;
}
console.log(numberTotal);

/*
  5. Active Users
  Task: Use a for...of loop to iterate through the `users` array. For each user object, use an `if` statement to check if the `active` property is `true`. If it is, print the user's name.
*/
for (user of users) {
	if (user.active) {
		console.log(user.name);
	}
}

/*
  6. Create a New Array
  Task: Use a for...of loop to create a new array called `doubledNumbers` where each number from the original `numbers` array is multiplied by 2. Print the new array.
*/
let doubledNumbers = []
for (number of numbers) {
	let doubledNumber = number * 2;
	doubledNumbers.push(doubledNumber);
}
console.log(doubledNumbers);

/*
  7. Filter by Score and Activity
  Task: Create a new array called `topActivePerformers`. Use a for...of loop to iterate through the `users` array and add the user's *name* to the new array ONLY if the user is both `active: true` AND their `score` is greater than 80. Print the final array.
*/
let topActivePerformers = [];
for (user of users) {
  if (user.active === true && user.score > 80) {
    topActivePerformers.push(user.name);
}};

/*
  8. Reverse a String
  Task: Create a new, empty string called `reversedSentence`. Use a for...of loop to iterate through the characters of the `sentence` string and build the new string in reverse order. Print the `reversedSentence`.
  Hint: Think about how you are adding the current character to the new string in each iteration.
*/


/*
  9. Check for Existence of an Element
  Task: Use a for...of loop to check if the `colors` array contains the color "blue". Once you confirm it exists, store a boolean value (`true` or `false`) in a variable called `hasBlue` and immediately stop the loop. Print the value of `hasBlue`.
  
  Hint: Use a `break` statement to stop the loop early.
*/


/*
  10. Find the Maximum Number
  Task: Use a for...of loop to find the largest number in the `numbers` array. Store this value in a variable called `maxNumber`. Print the `maxNumber`.
  
  Tip: Start by assuming the first number in the array is the maximum, then compare it with every other number.
*/


/*
  11. Capitalize Words
  Task: The `sentence` variable is a string.
  1) First, you will need to split the `sentence` string into an array of words.
  2) Then, use a for...of loop on the array of words to create a new array called `capitalizedWords`.
  3) In the loop, for each word, take the *first letter*, convert it to uppercase, and combine it with the *rest of the word* (which should be converted to lowercase).
  4) Print the final `capitalizedWords` array.
  
  Reference: String Methods
  - `string.split(separator)`: Splits a string into an array of substrings based on a specified separator. Example: `"hello world".split(" ")` results in `["hello", "world"]`.
  - `string.toUpperCase()`: Converts a string to uppercase.
  - `string.toLowerCase()`: Converts a string to lowercase.
  - `string.slice(startIndex)`: Extracts a section of a string from the `startIndex` to the end. Example: `"apple".slice(1)` results in `"pple"`.
*/

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
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
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
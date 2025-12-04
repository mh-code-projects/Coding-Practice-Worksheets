/*
  Section 1: Reference: Quick Guide to Debugging in JS

  The Console: Your Best Friend
  - console.log(variableName);
    - Use this to print the value of a variable at a specific point in your code. It helps you see what's happening 'under the hood.'

  Errors: The Red Flags
  - ReferenceError: You're trying to use a variable that hasn't been declared or is out of scope. Check for typos in variable names!
  - TypeError: You're using an operator or function on a value of the wrong type. For example, trying to call a method on a number.
  - SyntaxError: Your code has a grammatical error that prevents the JavaScript engine from even running it. Look for missing parentheses, brackets, or commas.

  Tips for Debugging:
  1. Read the error message carefully. It often tells you the type of error and the line number.
  2. Use console.log() to 'trace' your code. Put it in different places to see where things go wrong.
  3. Simplify the problem. Comment out parts of your code to isolate the part that's causing the issue.
*/

// Section 2: Sample data to be used throughout the worksheet.

const people = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'New York' },
  { name: 'Diana', age: 28, city: 'Los Angeles' },
];

let counter = 0;
let names = ['Alice', 'Bob', 'Charlie'];

/*
  Section 3: Challenge prompts/questions

  Problem 1: Finding a ReferenceError

  Task: The code below is supposed to print the name of a person. It's throwing a ReferenceError.
  A) Your goal is to identify the typo and fix it.
*/

// function findPerson() {
  // const person = people[0];
  // console.log(persn.name);
// }
// findPerson();


/*
  Problem 2: Using console.log() to find a logic error

  Task: The 'add' function below is intended to add two numbers, but it's returning a weird result.
  A) Use console.log() to inspect the values of 'a' and 'b' inside the function.
  B) Identify why it's not adding correctly and fix the code.
  C) Brief description: When you're dealing with form inputs or data from other sources, numbers can sometimes be read as strings. The '+' operator behaves differently for strings (concatenation) than for numbers (addition).
*/

// function add(a, b) {
  // return a + b;
// }
// console.log(add('5', '3'));


/*
  Problem 3: Fixing a SyntaxError

  Task: The function below is intended to count from 0 to 4 and print each number. It's throwing a SyntaxError.
  A) Find the syntax error and fix it so the loop runs correctly.
*/

// function countToFour() {
  // for (let i = 0; i < 5 i++) {
    // console.log(i);
  // }
// }
// countToFour();


/*
  Problem 4: Handling a TypeError

  Task: The code below is supposed to print the name of each person. It's throwing a TypeError.
  A) Explain why the TypeError is happening. What kind of value is `people`? What kind of value is `people[0]`?
  B) Fix the code so it correctly prints the name of each person in the `people` array.
*/

	// people.forEach(person => {
	  // console.log(person.nae);
	// });


/*
  Problem 5: A more complex bug with loops

  Task: The function `findNewYorkers` is supposed to return an array of all the people from New York. It's not working correctly.
  A) Use console.log() inside the loop to inspect the value of the `result` array at each step.
  B) What is wrong with the logic of the `for` loop?
  C) Fix the code so it correctly returns an array of people from New York.
  D) The `.push()` method adds a new item to the end of an array.
*/

// function findNewYorkers() {
//   let result = [];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].city === 'New York') {
//       return result.push(people[i]);
//     }
//   }
//   return result;
// }
// console.log(findNewYorkers());

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

  Task: The goal is to print the name of a person, but there's a ReferenceError.
  A) Your goal is to write the correct code to accomplish this task. Pay close attention to spelling.
*/

/*
  Problem 2: Using console.log() to find a logic error

  Task: Write a function called 'add' that takes two string arguments, 'a' and 'b', which represent numbers. It should return their sum as a number.
  A) Use console.log() to inspect the values of 'a' and 'b' and see what they are initially.
  B) Identify why they are not adding correctly and fix the code so it returns a number.
  C) Brief description: When you're dealing with form inputs or data from other sources, numbers can sometimes be read as strings. The '+' operator behaves differently for strings (concatenation) than for numbers (addition).
*/


/*
  Problem 3: Fixing a SyntaxError

  Task: The goal is to write a function that counts from 0 to 4 and prints each number to the console. The original code had a SyntaxError.
  A) Write the correct code for this function. Pay attention to the syntax of the `for` loop.
*/


/*
  Problem 4: Handling a TypeError

  Task: The goal is to write a loop that prints the name of each person in the `people` array.
  A) The original code was throwing a TypeError. Explain why this happens when you try to access a property that doesn't exist.
  B) Write the correct code to accomplish the task.
*/


/*
  Problem 5: A more complex bug with loops

  Task: Write a function `findNewYorkers` that returns an array of all the people from New York.
  A) Use console.log() inside the loop to inspect the value of the `result` array at each step to check if it's being populated correctly.
  B) The `.push()` method adds a new item to the end of an array.
  C) What is wrong with the original logic of returning from inside the loop?
  D) Write the correct code so it correctly returns an array of people from New York.
*/
```
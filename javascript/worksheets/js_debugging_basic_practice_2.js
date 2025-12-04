/*
  Section 1: Reference
  Quick Guide to Debugging: Syntax, Logic, and Key Concepts

  - SyntaxError vs. Logic Error:
    A **SyntaxError** is a grammatical mistake that prevents your code from running at all.
    A **Logic Error** is when your code runs but doesn't do what you expect it to. The program might produce the wrong output or behave unexpectedly.

  - The `return` keyword:
    The `return` statement immediately stops the execution of a function and sends a value back to where the function was called.
    Once `return` is executed, no other code in that function will run.
    Syntax: `return someValue;`

  - The `.push()` method:
    The `.push()` method adds one or more elements to the end of an array.
    It **modifies the original array** in place.
    It **returns the new length of the array**, not the array itself.
    Syntax: `array.push(element1, element2, ...);`

  Section 2: Sample Data
  You will be using this data throughout the worksheet.
*/

const studentGrades = [85, 92, 78, 88, 95];
const studentNames = ["Alice", "Bob", "Charlie", "Diana"];
let shoppingCart = ["Apples", "Bananas"];

/*
  Section 3: Challenge Prompts
*/

/*
  Challenge 1: Syntax vs. Logic - Part 1

  The following function is supposed to calculate the average of a list of numbers.
  It currently has a **SyntaxError**.
  Your task is to fix the error so the function can run.
*/

// function calculateAverage(grades {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// let averageGrade = calculateAverage(studentGrades;
// console.log("The average grade is: " + averageGrade);


/*
  Challenge 2: Syntax vs. Logic - Part 2

  Now, look at the same function from Challenge 1.
  It is now fixed, but it has a **Logic Error** that causes it to return an incorrect result.
  Your task is to identify and fix the logical flaw.
*/

// function calculateAverageCorrected(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++); {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// let averageCorrected = calculateAverageCorrected(studentGrades);
// console.log("The corrected average grade is: " + averageCorrected);

/*
  Challenge 3: The `return` Keyword

  This function is supposed to check if a student is on the honor roll (grade 90 or above).
  It has a **Logic Error** related to the `return` statement.
  The function should return `true` if *any* grade is 90 or higher, and `false` otherwise.
  Currently, it doesn't always behave this way.
  Your task is to fix the function so it returns the correct boolean value.
*/

// function isOnHonorRoll(grades) {
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= 90) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// let honorRollStatus = isOnHonorRoll(studentGrades);
// console.log("Is the student on the honor roll? " + honorRollStatus);

/*
  Challenge 4: The `.push()` Method

  The following code is trying to add a new item to the `shoppingCart` array and then log the updated cart.
  It has a **Logic Error**.
  Your task is to fix the code so it correctly logs the `shoppingCart` with the new item included.
  Remember what `.push()` returns!
*/

// const newCart = shoppingCart.push("Oranges");
// console.log("The new shopping cart is: " + newCart);
// console.log("The old shopping cart is: " + shoppingCart);

/*
  Challenge 5: Combining Concepts

  This is a more complex challenge that combines all the topics from this worksheet.
  The goal is to create a function that takes an array of grades and adds a new, hypothetical grade (say, 98).
  Then, it should return `true` if the student is now on the honor roll (at least one grade >= 90) with the new grade included, and `false` otherwise.

  The function below has both **Syntax Errors** and **Logic Errors**.
  Your task is to fix all the issues to make the function work as described.
*/

// function checkHonorRollWithNewGrade(grades, newGrade) {
//   grades.push[newGrade];
//
//   for (let i = 0; i < grades.length; i+) {
//     if (grades[i] >= 90) {
//       return "true";
//     }
//   }
//   return "false"
// }

// let finalStatus = checkHonorRollWithNewGrade(studentGrades, 98);
// console.log("Final honor roll status: " + finalStatus);
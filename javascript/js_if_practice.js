/*
  =================================
  Practice Worksheet: JavaScript If Statements
  =================================
*/

/*
  =================================
  Section 1: Reference - Quick Guide for If Statements
  =================================
*/
/*
  Syntax:
    if (condition) {
      // code to be executed if the condition is true
    } else {
      // code to be executed if the condition is false
    }

  Purpose:
    If statements are used to execute a block of code only if a specified condition is true.
    The 'else' block is optional and provides an alternative block of code to run when the
    condition is false.

  Comparison Operators:
    - `===` (Strict equality)
    - `!==` (Strict inequality)
    - `>` (Greater than)
    - `<` (Less than)
    - `>=` (Greater than or equal to)
    - `<=` (Less than or equal to)

  Logical Operators:
    - `&&` (AND): Returns true if both conditions are true.
    - `||` (OR): Returns true if at least one of the conditions is true.
    - `!` (NOT): Reverses the logical state of its operand.
*/

/*
  =================================
  Section 2: Sample Data
  =================================
*/

const userAge = 25;
const isRaining = true;
const studentScore = 88;
const userLoggedIn = false;
const currentTemperature = 15; // in Celsius
const favoriteFruit = "apple";
const highScores = [95, 85, 76, 100, 92];


/*
  =================================
  Section 3: Challenge Prompts
  =================================
*/

/*
  1. Age Check
  Task: Write an if statement that checks if the `userAge` is 18 or older.
  If it is, print a message to the console that says "You are an adult."
*/


/*
  2. Weather Alert
  Task: Write an if/else statement that checks if the `isRaining` variable is true.
  If it is, print "Remember your umbrella!". If it's not, print "Enjoy the sunshine!".
*/


/*
  3. Grade Evaluation
  Task: Write an if/else if/else statement to evaluate the `studentScore`.
  - If the score is 90 or higher, print "You got an A!".
  - If the score is between 80 and 89, print "You got a B.".
  - Otherwise, print "Keep trying!".
*/


/*
  4. User Status
  Task: Write a conditional statement that checks if the `userLoggedIn` variable is false.
  If it's false, print "Please log in to continue.".
*/


/*
  5. Temperature Advice
  Task: Write an if statement that checks if the `currentTemperature` is less than 10 OR greater than 20.
  If either of these conditions are true, print "The temperature is outside the comfortable range."
*/


/*
  6. Fruit Identification
  Task: Write an if statement that checks if the `favoriteFruit` is NOT equal to "banana".
  If it is not "banana", print "That's not a banana.".
*/
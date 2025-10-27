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
/*
  7. Array Value Check (Introducing Array.prototype.includes())
 
  Reference: Array.prototype.includes()
    Syntax: array.includes(elementToFind)
    Use: Checks if an array contains a specific value, returning `true` or `false`.
 
  Task: Write an if statement that checks if the `highScores` array includes the number 100.
  If it does, print "A perfect score was achieved!".
*/

/*
  8. Quick Login Message (Introducing the Ternary Operator)
 
  Reference: Ternary Operator
    Syntax: condition ? expressionIfTrue : expressionIfFalse
    Use: A concise way to write a simple if/else statement, perfect for assigning a value
    based on a condition.
 
  Task: Use the ternary operator to create a variable called `loginMessage`.
  If `userLoggedIn` is true, its value should be "Welcome back!".
  If it's false, its value should be "Please sign up or log in.".
  Print the `loginMessage` variable to the console.
*/

/*
  9. Complex Condition with NOT (!)
 
  Task: Write an if statement that checks two things:
  1. If the `userAge` is NOT greater than 65. (Hint: Use the '!' operator)
  2. AND if the `userLoggedIn` is true.
  If both conditions are met, print "Eligible for standard services.".
*/

/*
  10. Temperature and Rain Combo
 
  Task: Write an if/else if/else statement to give comprehensive weather advice.
  - If it's `isRaining` OR the `currentTemperature` is less than 5, print "Bundle up and bring a waterproof layer!".
  - ELSE IF the `currentTemperature` is greater than 25, print "It's a hot one, stay cool!".
  - OTHERWISE, print "A pleasant day!".
*/

/*
  11. Nested Condition (Combining Ifs)
 
  Task: Use a **nested if statement** (an `if` statement inside another `if` statement) to check two different things:
  1. First, check if `studentScore` is greater than 70.
  2. INSIDE that block, check if `favoriteFruit` is exactly equal to "apple".
  If BOTH are true, print "High-scoring apple fan detected!".
*/
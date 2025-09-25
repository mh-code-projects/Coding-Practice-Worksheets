/*
  =================================
  Practice Worksheet: JavaScript Do...While Loops
  =================================
*/

/*
  =================================
  Section 1: Reference - Quick Guide for Do...While Loops
  =================================
*/
/*
  Syntax:
    initialization;
    do {
      // code to be executed
      final-expression;
    } while (condition);

  Purpose:
    A do...while loop is similar to a while loop, but it guarantees that the code block will execute at least once before the condition is checked. This is useful when you need to perform an action one time, then decide if you should repeat it.
    - initialization: Used to declare a counter or starting variable before the loop.
    - condition: Evaluated after each loop iteration. If the condition is true, the loop will run again. If it's false, the loop terminates.
    - final-expression: Code that changes the variable used in the condition, preventing an infinite loop. This is usually an increment or decrement.
*/

/*
  =================================
  Section 2: Sample Data
  =================================
*/

let pinCode = "1234";
let enteredPin = "";


/*
  =================================
  Section 3: Challenge Prompts
  =================================
*/

/*
  1. Print Numbers Once
  Task: Use a do...while loop to print the number 1 to the console. The loop's condition should be set to `false` from the start to demonstrate that the code runs at least once.
*/


/*
  2. Simple Counter
  Task: Use a do...while loop to count from 1 to 5, printing each number to the console.
*/


/*
  3. Guess the Number
  Task: This challenge requires a bit more thought. Use a do...while loop to create a simple guessing game.
  1. Set a variable `secretNumber` to 7.
  2. Set a variable `guess` to some number (e.g., 0).
  3. The loop should continue as long as `guess` is not equal to `secretNumber`.
  4. Inside the loop, print "Incorrect guess."
  5. Inside the loop, you must change the `guess` variable to a new value (e.g., `guess++` or hardcode a new value) to eventually match the `secretNumber` and stop the loop.
*/


/*
  4. Pin Code Entry
  Task: Use a do...while loop to simulate a user trying to enter a correct PIN.
  1. The `pinCode` is "1234".
  2. The `enteredPin` is initially empty.
  3. Inside the loop, print "Please enter your PIN:" and then change the `enteredPin` to "1234" to simulate a correct entry.
  4. The loop should continue as long as `enteredPin` is not equal to `pinCode`.
*/


/*
  5. Find the First Odd Number
  Task: Start with a variable `num = 2`. Use a do...while loop to increment `num` by 1 until it is an odd number. Print the final value of `num`.
*/


/*
  6. Menu Selection
  Task: Use a do...while loop to simulate a menu.
  1. Create a variable `choice` and set it to 0.
  2. Inside the loop, print a message like "1. Play Game\n2. View High Scores\n3. Exit".
  3. The loop should continue as long as the `choice` is not 3.
  4. Inside the loop, change the `choice` variable (e.g., `choice = 3;` or `choice++;`) to eventually stop the loop.
*/
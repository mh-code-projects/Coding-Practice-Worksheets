/*
  Section 1: Reference: Quick Guide for Recursive Functions and the Call Stack

  Recursive Function:
  A function that calls itself.

  Base Case:
  A condition that tells the recursive function when to stop calling itself. Without a base case,
  the function will call itself forever, leading to an infinite loop and a stack overflow.

  Call Stack:
  A data structure that keeps track of function calls. Each time a function is called, it's added
  to the top of the stack. When the function returns, it's removed. A stack overflow occurs when
  this stack runs out of memory.

  Syntax Example (with a Base Case):
  function example(parameter) {
    // Base Case: The condition to stop the recursion
    if (parameter <= some_value) {
      return;
    }
    // Recursive Step: The function calls itself
    example(parameter - 1);
  }
*/

/*
  Section 2: Challenge Prompts

  Instructions:
  Use recursive functions with a proper base case to solve the following problems.
  Focus on identifying the base case and the recursive step for each problem.
*/

// Challenge 1: Write a recursive function called `countdown` that takes a number as an argument.
// The function should log the numbers from the provided number down to 1.
// Make sure you include a base case to prevent an infinite loop.

// Challenge 2: Write a recursive function called `sumRange` that takes a number as an argument.
// The function should return the sum of all numbers from that number down to 1.
// For example, `sumRange(4)` should return 10 (4 + 3 + 2 + 1).

// Challenge 3: Write a recursive function called `factorial` that calculates the factorial of a number.
// The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.
// For example, `factorial(4)` should return 24 (4 * 3 * 2 * 1).
// Hint: The base case for factorial is when the number is 1.

// Challenge 4: Write a recursive function called `power` that takes two arguments, `base` and `exponent`.
// It should return the `base` raised to the power of the `exponent`. Assume the exponent will be a non-negative integer.
// For example, `power(2, 3)` should return 8.
// Hint: Think about what the base case should be when the exponent is 0. What is any number to the power of 0?

// Challenge 5: Write a recursive function called `fibonacci` that takes a number `n` and returns the nth number in the Fibonacci sequence.
// The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones (e.g., 0, 1, 1, 2, 3, 5...).
// Your function should return the value at the specified index `n`.
// Example: `fibonacci(6)` should return 8.
// Hint: This will require two base cases to properly handle the start of the sequence.
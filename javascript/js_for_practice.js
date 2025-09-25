/*
  =================================
  Practice Worksheet: JavaScript For Loops
  =================================
*/

/*
  =================================
  Section 1: Reference - Quick Guide for For Loops
  =================================
*/
/*
  Syntax:
    for (initialization; condition; final-expression) {
      // code to be executed in each iteration
    }

  Purpose:
    A for loop is used to execute a block of code a specific number of times.
    - initialization: Executed once before the loop starts. It's often used to declare a counter variable.
    - condition: Evaluated before each loop iteration. If the condition is true, the loop continues. If it's false, the loop terminates.
    - final-expression: Executed after each loop iteration. It's often used to increment or decrement the counter.
*/

/*
  =================================
  Section 2: Sample Data
  =================================
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const mixedData = [10, "hello", 20, "world", 30];
const temperatures = [0, 5, 12, 18, 25, 30, 35];
const cities = [
  { name: "New York", population: 8419000 },
  { name: "Los Angeles", population: 3990000 },
  { name: "Chicago", population: 2716000 },
  { name: "Houston", population: 2328000 },
  { name: "Phoenix", population: 1680000 }
];


/*
  =================================
  Section 3: Challenge Prompts
  =================================
*/

/*
  1. Print Numbers
  Task: Use a for loop to iterate through the `numbers` array and print each number to the console.
*/


/*
  2. Count Down
  Task: Write a for loop that counts down from 10 to 1, printing each number to the console.
*/


/*
  3. Find a Fruit
  Task: Use a for loop to iterate through the `fruits` array. If you find the fruit "banana", print "Found the banana!" and stop the loop.
*/


/*
  4. Sum of Numbers
  Task: Use a for loop to calculate the sum of all the numbers in the `numbers` array. Print the final sum.
*/


/*
  5. Even or Odd
  Task: Loop through the `numbers` array. For each number, use an `if` statement to check if it's even or odd. Print "[number] is even" or "[number] is odd" accordingly.
*/


/*
  6. Filter Data
  Task: Loop through the `mixedData` array. Use an `if` statement with the `typeof` operator to check if each item is a number. If it is, print the number to the console.
*/


/*
  7. Capitalize Fruits
  Task: Use a for loop to create a new array called `capitalizedFruits` where each fruit name from the `fruits` array is converted to uppercase. Print the new array.
*/


/*
  8. Sum of Even Numbers
  Task: Use a for loop to iterate through the `numbers` array and calculate the sum of only the even numbers. Print the final sum.
*/


/*
  9. Find the Longest Fruit Name
  Task: Use a for loop to find and print the fruit name with the most characters from the `fruits` array.
*/


/*
  10. Loop through Objects
  Task: Use a for loop to iterate through the `cities` array. For each object, print a message that says "[city name] has a population of [population number]."
*/


/*
  11. Check Temperature Range
  Task: Loop through the `temperatures` array. If you find a temperature greater than 25, print "It's a hot day!". If you find a temperature less than 10, print "It's a cold day!".
*/


/*
  12. Create a Multiplication Table
  Task: Use a nested for loop to generate and print a multiplication table for numbers 1 through 5.
  
  New Concept: Nested Loops
  A nested loop is a loop inside another loop. The inner loop will execute completely for each single iteration of the outer loop.
*/

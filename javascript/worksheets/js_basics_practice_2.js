/*
  Section 1: Reference: Quick Guide
  
  Variables and Data Types
  - Syntax: let myVariable = 'Hello'; or const myOtherVariable = 10;
  - Use Cases: Store data for later use. Use const for values that won't change, and let for values that might.
  - Common Types: string (text), number (numeric values), boolean (true or false).
  
  Operators
  - Syntax: a + b, a === b, a > b
  - Use Cases: Perform operations on values.
  - Examples: + (addition), - (subtraction), * (multiplication), / (division), === (strict equality), > (greater than), < (less than), % (modulus), ++ (increment), -- (decrement).
  
  Functions
  - Syntax:
    function myFunction(parameter1, parameter2) {
      // code to be executed
      return result;
    }
  - Use Cases: Group reusable code. A function can take inputs (parameters) and give back an output (return value).

  Conditionals
  - Syntax:
    if (condition) {
      // code to run if true
    } else if (anotherCondition) {
      // code to run if anotherCondition is true
    } else {
      // code to run if all conditions are false
    }
  - Use Cases: Execute different code blocks based on whether a condition is true or false.
*/


/*
  Section 2: Challenge Prompts
*/


/*
  Challenge 1: Variables and Data Types
  
  1.  Declare a constant variable `companyName` and set its value to a company name.
  2.  Declare a variable `employeesCount` and set it to a number.
  3.  Declare a variable `isPubliclyTraded` and set it to a boolean.
  4.  Declare a constant variable `productName` and set it to a short string about a product.
  5.  Declare a variable `productPrice` and set it to a decimal number.
  6.  Declare a variable `isAvailable` and set it to a boolean.
  7.  Declare a variable `country` and set it to a country name as a string.
  8.  Declare a variable `capitalCity` and set it to the capital city as a string.
  9.  Declare a variable `hasCoastline` and set it to a boolean.
  10. Declare a variable `populationDensity` and set it to a number.
  11. Declare a variable `timeOfDay` and set it to a string like "morning" or "evening".
  12. Declare a variable `isWeekend` and set it to a boolean.
  13. Declare a constant variable `month` and set it to the current month as a string.
  14. Declare a variable `season` and set it to a string.
  15. Declare a variable `hoursWorked` and set it to a number.
*/

/*
 Quick Guide to Operators
  Arithmetic: + (Add), - (Subtract), * (Multiply), / (Divide), % (Remainder), ++ (Add 1), -- (Subtract 1)
  Assignment: = (Assign value), += (Add and assign), -= (Subtract and assign)
  Comparison: == (Equal value), === (Equal value & type), != (Unequal value), !== (Unequal value & type), > (Greater than), < (Less than), >= (Greater than or equal to), <= (Less than or equal to)
  Logical: && (AND - both true), || (OR - at least one true), ! (NOT - reverse boolean)
*/

/*
  Challenge 2: Operators
  
  1.  Create two number variables, `a` and `b`, with values 20 and 8.
  2.  Create a variable `total` that holds the result of adding `a` and `b`.
  3.  Create a variable `remainder` that holds the remainder of `a` divided by `b`.
  4.  Create a variable `area` that holds the result of multiplying `a` by `b`.
  5.  Create a variable `average` that holds the result of `(a + b) / 2`.
  6.  Create a boolean variable `isEqual` that checks if `a` is strictly equal to the number 20.
  7.  Create a boolean variable `isNotEqual` that checks if `a` is not strictly equal to the string "20".
  8.  Create a boolean variable `isGreater` that checks if `a` is greater than `b`.
  9.  Create a boolean variable `isLess` that checks if `b` is less than or equal to `a`.
  10. Create a variable `power` that holds the result of `b` raised to the power of 2.
  11. Create a boolean variable `isDivisibleBy4` that checks if `b` is evenly divisible by 4.
  12. Create a boolean variable `checkLogic` that checks if `a` is greater than 15 AND `b` is less than 10.
  13. Create a boolean variable `orLogic` that checks if `a` is equal to 10 OR `b` is equal to 8.
  14. Declare a boolean variable `isTrue` and set it to true. Use a logical operator to create a new variable `isFalse` that holds the opposite value.
  15. Declare a variable `count` and set it to 5. Use an increment operator to increase its value by 1.
  16. Declare a variable `num` and set it to 10. Then, reassign `num` to be the result of `num * 3`.
  17. Declare a variable `isComplete` and set it to false. Reassign its value to `!isComplete`.
  18. Declare a variable `score` and set it to 100. Reassign `score` to `score - 25`.
  19. Declare a variable `x` and set it to 5. Reassign `x` to be the remainder of `x` divided by 2.
  20. Declare a variable `name` and set it to "John". Reassign `name` to be `name + " Doe"`.
*/


/*
  Challenge 3: Functions
  
  1.  Write a function `goodbye` that takes no parameters and returns the string "Goodbye!".
  2.  Write a function `multiplyBy5` that takes one parameter, `num`, and returns the number multiplied by 5.
  3.  Write a function `isLoggedIn` that takes a boolean parameter `status` and returns "Welcome!" if it's true, and "Please log in." if it's false.
  4.  Write a function `getFileName` that takes two parameters, `fileName` and `fileExtension`, and returns the full file name (e.g., "document.pdf").
  5.  Write a function `addTax` that takes a `price` and `taxRate` and returns the price with the tax added.
  6.  Write a function `getCircleArea` that takes one parameter `radius` and returns the area of a circle. (Hint: Formula is `π * r²`, you can use `Math.PI`).
  7.  Write a function `isOldEnoughToVote` that takes an `age` parameter and returns `true` if it's 18 or older, and `false` otherwise.
  8.  Write a function `getSeason` that takes a `month` as a string and returns a string for the corresponding season (e.g., "Spring", "Summer", etc.).
  9.  Write a function `calculateTripCost` that takes `fuelPrice`, `distance`, and `mpg` (miles per gallon) and returns the total fuel cost.
  10. Write a function `getFullName` that takes `firstName`, `lastName`, and returns the full name.
  11. Write a function `decrement` that takes a `number` and returns the number minus 1.
  12. Write a function `powerUp` that takes a number, `num`, squares it, and then adds 10 to the result before returning it.
  13. Write a function `checkAdminStatus` that takes a boolean parameter `isAdmin` and returns `true` if it is false and `false` if it is true.
*/


/*
  Challenge 4: Conditionals
  
  1.  Create a variable `speed` with a value. Write an if/else statement that prints "Slow down!" if the speed is over 60, and "Maintain speed." otherwise.
  2.  Create a variable `dayOfWeek` (a string). Write an if/else if/else statement that prints "It's a weekday." if it's Monday-Friday, and "It's the weekend!" otherwise.
  3.  Write a function `isEvenOrOdd` that takes a number and returns a string saying "Even" or "Odd".
  4.  Write a function `getTrafficLight` that takes a `color` and returns a string saying "Go", "Slow down", or "Stop".
  5.  Write a function `isPositiveAndEven` that takes a number and returns `true` if it is both positive and even, and `false` otherwise.
  6.  Write a function `checkTemperature` that takes a `temp` and returns "Hot" if it's over 30°C, "Warm" if it's between 15°C and 30°C, and "Cold" otherwise.
  7.  Write a function `checkCredentials` that takes a `username` and `password`. It should return "Access Granted" if the username is "coder" AND the password is "secret", and "Access Denied" otherwise.
  8.  Write a function `isVowelOrConsonant` that takes a character and returns a string saying "Vowel" or "Consonant".
  9.  Write a function `checkPurchase` that takes an `isLoggedIn` boolean and a `cartTotal` number. It should return `true` if the user is logged in OR their cart total is over 100, and `false` otherwise.
  10. Write a function `getGrade` that takes a `score` (0-100) and returns a letter grade ("A", "B", "C", "D", or "F").
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



  // Challenge 1: Variables and Data Types
  
  // 1.  Declare a constant variable `schoolName` and set its value to your school's name.
  const schoolName = "Education Center"
  // 2.  Declare a variable `studentsEnrolled` and set it to a number.
  let studentsEnrolled = 1;
  // 3.  Declare a variable `hasGraduated` and set it to a boolean.
  let hasGraduated = true;
  // 4.  Declare a constant variable `courseDescription` and set it to a short string about a course.
  const courseDescription = "A really great course.";
  // 5.  Declare a variable `averageGrade` and set it to a decimal number.
  let averageGrade = 0.22
  // 6.  Declare a variable `isFullTime` and set it to a boolean.
  let isFullTime = false;
  // 7.  Declare a variable `city` and set it to the name of your city as a string.
  let city = "Columbus, Ohio";
  // 8.  Declare a variable `population` and set it to the population as a number.
  let population = 900000;
  // 9.  Declare a variable `hasPublicTransit` and set it to a boolean.
  let hasPublicTransit = true;
  // 10. Declare a variable `temperatureCelsius` and set it to a number.
  let temperatureCelsius = 10;
  // 11. Declare a variable `weatherCondition` and set it to a string like "sunny" or "cloudy".
  let weatherCondition = "Snowing";
  // 12. Declare a variable `isRaining` and set it to a boolean.
  let isRaining = true;
  // 13. Declare a variable `isMorning` and set it to a boolean.
  let isMorning = false;
  // 14. Declare a constant variable `dayOfWeek` and set it to a string.
  let DayOfWeek = "Thursday";
  // 15. Declare a variable `currentYear` and set it to the current year as a number.
  let currentYear = 2025;


/*
 Quick Guide to Operators
  Arithmetic: + (Add), - (Subtract), * (Multiply), / (Divide), % (Remainder), ++ (Add 1), -- (Subtract 1)
  Assignment: = (Assign value), += (Add and assign), -= (Subtract and assign)
  Comparison: == (Equal value), === (Equal value & type), != (Unequal value), !== (Unequal value & type), > (Greater than), < (Less than), >= (Greater than or equal to), <= (Less than or equal to)
  Logical: && (AND - both true), || (OR - at least one true), ! (NOT - reverse boolean)
*/

  // Challenge 2: Operators
  
  // 1.  Create two number variables, `x` and `y`, with values 10 and 5.
  let x = 10;
  let y = 5;
  // 2.  Create a variable `sum` that holds the result of adding `x` and `y`.
  const sum = x + y;
  // 3.  Create a variable `difference` that holds the result of subtracting `y` from `x`.
  const difference = x - y;
  // 4.  Create a variable `product` that holds the result of multiplying `x` and `y`.
  const product = x * y;
  // 5.  Create a variable `quotient` that holds the result of dividing `x` by `y`.
  const quotient = x / y;
  // 6.  Create a boolean variable `isStrictlyEqual` that checks if `x` is strictly equal to the number 10.
  const isStrictlyEqual = x === 10
  // 7.  Create a boolean variable `isNotEqual` that checks if `x` is not strictly equal to the string "10".
  const isNotEqual = x !== "10";
  // 8.  Create a boolean variable `isGreaterThan` that checks if `x` is greater than or equal to `y`.
  const isGreaterThan = x >= y;
  // 9.  Create a boolean variable `isLessThan` that checks if `y` is less than `x`.
  const isLessThan = y < x;
  // 10. Create a variable `remainder` that holds the remainder of `x` divided by 3.
  const remainder = x % 3;
  // 11. Create a boolean variable `isEven` that checks if `x` is an even number using the modulus operator.
  const isEven = x % 2 === 0;
  // 12. Create a variable `power` that holds the result of `y` raised to the power of 2. (Hint: Use the `**` operator or `Math.pow()`).
  const power = y ** 2;
  // 13. Create a boolean variable `isTrue` that checks if `x` is greater than 8 and `y` is less than 6.
  const isTrue = x > 8 && y < 6;
  // 14. Create a boolean variable `isFalse` that checks if `x` is equal to 12 or `y` is equal to 2.
  const isFalse = x === 12 || y === 2;
  // 15. Create a variable `negate` that holds the result of negating a boolean value (e.g., `!true` is `false`).
  const negate = !true
  // 16. Using the `x` and `y` variables from above, reassign the value of `x` to be the original value of `x` minus `y`.
  x = x - y;
  // 17. Declare a variable `counter` and set it to 0. Then, using an operator, increase its value by 1.
  let counter = 0;
  counter++;
  // 18. Declare a variable `price` and set it to 50. Use an operator to increase its value by 20.
  let price = 50;
  price += 20;
  // 19. Declare a variable `isActive` and set it to true. Use a logical operator to change its value to false.
  let isActive = true;
  isActive = false;
  // 20. Declare a variable `level` and set it to 10. Use an operator to increase its value by 5 and then reassign `level` to this new value.
  let level = 10;
  level +=5;
  

  // Challenge 3: Functions
  
  // 1.  Write a function `sayHello` that takes no parameters and returns the string "Hello!".
  function sayHello() {return("Hello!")};
  
  // 2.  Write a function `doubleNumber` that takes one parameter, `num`, and returns the number multiplied by 2.
  function doubleNumber(num) {return num * 2};
		//OR 
  const doubleNumberArrow = num => num * 2;
  
  // 3.  Write a function `isAdult` that takes an `age` parameter and returns `true` if the age is 18 or older, and `false` otherwise.
  function isAdult(age) {return age >= 18};
		//OR 
  const isAdultArrow = age => age >= 18;
  
  // 4.  Write a function `getInitials` that takes two parameters, `firstName` and `lastName`, and returns a string with their initials (e.g., "J.D.").
  function getInitials(firstName, lastName) {
	  return `${firstName[0]}.${lastName[0]}.`; }
		//OR 
  const getInitialsArrow = (firstName, lastName) => `${firstName[0]}.${lastName[0]}.`;
  
  // 5.  Write a function `getDiscount` that takes a `price` and `discountPercent` and returns the new price after the discount is applied.
  function getDiscount(price, discountPercent) {return price - (price * discountPercent)};
		//OR 
  const getDiscountArrow = (price, discountPercent) => (price - (price * discountPercent));
  
  // 6.  Write a function `convertFahrenheitToCelsius` that takes one parameter `fahrenheit` and returns the temperature in Celsius. (Hint: Formula is `(F - 32) * 5/9`).
  function convertFahrenheitToCelsius(f) {
  return (f - 32) * 5/9};
		//OR 
	let convertFahrenheitToCelsiusArrow = (f) => (f-32) * 5/9;

  // 7.  Write a function `isLeapYear` that takes a `year` parameter and returns `true` if it's a leap year, and `false` otherwise. (Hint: A leap year is divisible by 4, but not by 100 unless it's also divisible by 400).
  const isLeapYear = (y) => (y % 4 === 0 &&  y % 100 !== 0) || (y % 400 === 0);
  console.log(isLeapYear(2004));
  
  // 8.  Write a function `getGreeting` that takes a `timeOfDay` string and returns a greeting like "Good morning!" or "Good evening!".
  
  // 9.  Write a function `calculateAverage` that takes three numbers and returns their average.
  
  // 10. Write a function `getFullName` that takes `firstName`, `middleName`, and `lastName` and returns the full name.
  
  // 11. Write a function `increaseCounter` that takes one parameter, `count`, and returns the `count` plus 1.
  
  // 12. Write a function `doubleAndAdd` that takes a number, `num`, doubles it, and then adds 5 to the result before returning it.
  
  // 13. Write a function `toggleStatus` that takes a boolean parameter, `status`, and returns the opposite boolean value.



  // Challenge 4: Conditionals
  
  // 1.  Create a variable `grade` with a value. Write an if/else statement that prints "Pass" if the grade is 70 or above, and "Fail" otherwise.
  // 2.  Create a variable `currentHour` (from 0 to 23). Write an if/else statement that logs "Good morning!" if it's before 12, and "Good afternoon!" otherwise.
  // 3.  Write a function `isVowel` that takes a letter and returns `true` if it's a vowel (`a, e, i, o, u`), and `false` otherwise.
  // 4.  Write a function `isPositive` that takes a number and returns a string saying "Positive", "Negative", or "Zero".
  // 5.  Write a function `getMovieRating` that takes an `age` and returns a string like "G", "PG-13", or "R".
  // 6.  Create a variable `day` (a number from 1 to 7). Use an if/else if/else statement to log the corresponding day of the week (e.g., "Monday", "Tuesday").
  // 7.  Write a function `checkPassword` that takes a password and returns "Strong" if it's longer than 8 characters, "Medium" if it's between 5 and 8, and "Weak" otherwise.
  // 8.  Write a function `isLoggedIn` that takes a boolean `isUserOnline` and an `isAdmin` boolean. Return "Welcome, Admin!" if the user is an online admin, "Welcome, User!" if they are online but not an admin, and "Please log in." if they are not online.
  // 9.  Write a function `canGetLoan` that takes a `creditScore` and an `income`. A person can get a loan if their `creditScore` is over 700 AND their `income` is over 50000. Return a boolean.
  // 10. Write a function `checkWeather` that takes `temperature` and `isRaining` as parameters. Return "Bring a jacket and umbrella" if it's below 10 degrees C and raining. Return "Bring an umbrella" if it's only raining. Return "It's a nice day!" otherwise.
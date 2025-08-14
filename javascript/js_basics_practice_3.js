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
  Section 2: Final Exam Challenges
*/


/*
  Challenge 1: The Online Store
  
  A) Write a function called `calculateFinalPrice` that takes three parameters: `price`, `discountPercentage`, and `hasCoupon`.
  B) Inside the function, first calculate the price after the `discountPercentage` is applied. (Hint: a 15% discount is a multiplication by 0.15).
  C) Then, use a conditional statement: if `hasCoupon` is true, subtract an additional $10 from the price.
  D) Finally, return the final calculated price.
  E) Call the function with a price of 100, a discount of 0.25 (25%), and `hasCoupon` set to true. Store the result in a variable named `finalPrice1`.
  F) Call the function with a price of 200, a discount of 0.10 (10%), and `hasCoupon` set to false. Store the result in a variable named `finalPrice2`.
*/


/*
  Challenge 2: The Driving Eligibility Checker
  
  A) Write a function `checkDrivingStatus` that takes two parameters: `age` (a number) and `hasLearnerPermit` (a boolean).
  B) Inside the function, use conditional logic to return different messages.
  C) If the `age` is less than 16, return "You are not old enough to drive.".
  D) If the `age` is 16 or older AND `hasLearnerPermit` is true, return "You can practice driving with a licensed adult.".
  E) If the `age` is 16 or older AND `hasLearnerPermit` is false, return "You are old enough to drive, but need a permit.".
  F) Call the function with an age of 15 and `hasLearnerPermit` set to false, storing the result in a variable `status1`.
  G) Call the function with an age of 17 and `hasLearnerPermit` set to true, storing the result in a variable `status2`.
*/


/*
  Challenge 3: The Event Ticket Validator
  
  A) Write a function `validateTicket` that takes three parameters: `isAdult`, `hasTicket`, and `isVIP`.
  B) The function should return a boolean value (`true` or `false`).
  C) The ticket is valid if the person is an `isAdult` AND they `hasTicket`.
  D) However, if the person is an `isVIP`, their ticket is automatically valid, regardless of whether they have a ticket. (Hint: Use an OR condition).
  E) Call the function with a guest who is an adult, has a ticket, and is not a VIP. Store the result in `validation1`.
  F) Call the function with a guest who is not an adult, does not have a ticket, but is a VIP. Store the result in `validation2`.
  G) Call the function with a guest who is an adult but does not have a ticket and is not a VIP. Store the result in `validation3`.
*/


/*
  Challenge 4: The Body Mass Index (BMI) Calculator
  
  A) Write a function `calculateBMI` that takes two parameters: `weightInLbs` and `heightInInches`.
  B) Inside the function, declare a constant variable `KG_PER_LB` with the value `0.453592`.
  C) Declare a constant variable `METERS_PER_INCH` with the value `0.0254`.
  D) Convert the `weightInLbs` to kilograms and the `heightInInches` to meters.
  E) Calculate the BMI using the formula: `BMI = weightInKg / (heightInMeters * heightInMeters)`.
  F) Return the calculated BMI number.
  G) Write a second function `getBMIStatus` that takes the `bmi` number as a parameter.
  H) This function should use conditionals to return a string:
     - If `bmi` is less than 18.5, return "Underweight".
     - If `bmi` is between 18.5 and 24.9 (inclusive), return "Normal weight".
     - If `bmi` is 25 or more, return "Overweight".
  I) Call `calculateBMI` with a weight of 150 lbs and a height of 70 inches. Store the result in `myBMI`.
  J) Call `getBMIStatus` with `myBMI` and store the result in `bmiStatus`.
*/
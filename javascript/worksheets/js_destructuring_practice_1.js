/*
  Section 1: Reference: Quick Guide for Destructuring

  Explanation of Use and Purpose:
  Destructuring is a powerful syntax that allows you to "unpack" values from arrays or properties from objects into distinct variables. It makes your code cleaner and more readable by reducing the need for repetitive property access (e.g., `object.property`).

  Syntax for Arrays:
  const [variable1, variable2] = arrayName;

  Syntax for Objects:
  const { property1, property2 } = objectName;

  Advanced Syntax:
  - Renaming: const { property: newName } = object;
  - Default Values: const { property = defaultValue } = object;
  - Rest/Spread: const [first, ...rest] = array; or const { prop1, ...rest } = object;
*/

/*
  Section 2: Sample Data
  You will use the following data throughout the worksheet challenges.
*/
const coordinates = [100, 250, 50];

const article = {
  title: 'Understanding Destructuring',
  author: 'Coder Coach',
  wordCount: 1500,
  tags: ['javascript', 'es6', 'tutorial']
};

const user = {
  id: 1,
  username: 'js_master',
  email: 'js@example.com',
  details: {
    firstName: 'Jane',
    lastName: 'Smith',
    location: 'Online'
  }
};

function getConfig() {
  return {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    debugMode: true
  };
}


  // Section 3: Challenge Prompts

  // Challenge 1: Basic Object Destructuring
  // From the `article` object, extract the `title` and `author` properties into their own variables.

  // Challenge 2: Basic Array Destructuring
  // From the `coordinates` array, extract the first two values and assign them to variables named `x` and `y`.

  // Challenge 3: Destructuring with Renaming
  // From the `article` object, extract the `wordCount` and assign it to a new variable called `wordTotal`.

  // Challenge 4: Destructuring with Default Values
  // Given the `article` object, extract the `publishedDate` property. If it doesn't exist, provide a default value of 'Not Published'.

  // Challenge 5: Nested Object Destructuring
  // From the `user` object, extract the `firstName` and `lastName` from the nested `details` object into their own variables.
  // Hint: You will need to chain the destructuring syntax.


  // Section 4: Advanced Challenges

  // Challenge 6: Destructuring Function Parameters
  // Write a function called `printUserDetails` that takes the `user` object as an argument.
  // Use destructuring in the function's parameter list to directly access and log the `username` and `email` properties.

  // Challenge 7: Destructuring with the Rest Operator
  // From the `article` object, destructure the `title` and `author`.
  // Use the rest syntax to collect all other remaining properties into a new object called `articleMetadata`.

  // Challenge 8: Combining Array and Rest Destructuring
  // From the `coordinates` array, extract the first value into a variable named `x`.
  // Use the rest syntax to put the remaining values into a new array called `remainingCoordinates`.

  // Challenge 9: Real-world Function Destructuring
  // Given the `getConfig` function, which returns an object, write a single line of code that:
  // a) calls the function
  // b) extracts the `apiUrl` and `timeout` properties from its return value
  // c) gives `apiUrl` an alias of `url` and `timeout` a default value of 3000 if it's missing.
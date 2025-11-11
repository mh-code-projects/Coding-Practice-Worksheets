/*
  Section 1: Reference: Quick Guide for the Spread Operator (...)

  Syntax:
  - For arrays: [...arrayName]
  - For objects: {...objectName}

  Explanation of Use and Purpose:
  The spread operator "unpacks" the elements of an iterable (like an array) or the properties of an object. Its primary use cases are:
  - Creating a **shallow copy** of an array or object.
  - Combining multiple arrays or objects into one.
  - Adding new elements to an array or new properties to an object without mutating the original.
*/

/*
  Section 2: Sample Data
  You will use the following data throughout the worksheet challenges.
*/
const vegetables = ['carrot', 'broccoli', 'spinach'];
const fruits = ['apple', 'banana', 'mango'];

const userProfile = {
  name: 'Alex',
  age: 30,
  city: 'New York'
};

const userSettings = {
  theme: 'dark',
  notifications: true
};

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 }
];

const salesData = [
  { region: 'North', sales: 1500 },
  { region: 'South', sales: 2200 },
  { region: 'East', sales: 1800 },
  { region: 'West', sales: 2500 }
];


// Section 3: Challenge Prompts

  // Challenge 1: Combining Arrays
  // Create a new array called `produce` that combines all the elements from the `vegetables` and `fruits` arrays.
  const produce = [...vegetables] +","+ [...fruits];

  // Challenge 2: Adding an Element to an Array
  // Create a new array called `shoppingList` that contains a copy of the `vegetables` array plus the new item 'lettuce' at the beginning.
  const shoppingList = ["lettuce"]+","+[...vegetables];

  // Challenge 3: Creating an Object Copy
  // Create a new object called `clonedProfile` that is a copy of the `userProfile` object.
  // Do not mutate the original `userProfile` object.
  const clonedProfile = {...userProfile};

  // Challenge 4: Combining Objects
  // Create a new object called `userFullData` that combines the properties from both the `userProfile` and `userSettings` objects.
  let userFullData = {...userProfile, ...userSettings};

  // Challenge 5: Updating an Object
  // Create a new object called `updatedUserProfile` that is a copy of `userProfile` but with the `age` property changed to 31 and a new `country` property set to 'USA'.
  
  // Challenge 6: Immutably Replacing an Array Element
  // Create a new array called `vegetablesAndLettuce` that is a copy of the `vegetables` array, but with 'broccoli' replaced by 'lettuce'.
  // Hint: This will require a combination of spreading parts of the array and adding the new element in between.

  // Challenge 7: Passing Object Properties as Function Arguments
  // Given the following function, use the spread operator to call it by "spreading" the `userProfile` object.

  // Challenge 8: Adding a property to an object with a calculated value
  // Create a new object called `newUserProfile` that is a copy of `userProfile` but with a new property called `greeting` that contains a welcome message, using the user's name from the object.

  // Section 4: Advanced Challenges: Spreading with Other Methods

  // Challenge 9: Spreading with .map() for Immutable Updates
  // Create a new array called `productsWithTax` that is a copy of the `products` array.
  // Each product object in the new array should also have a new property called `taxedPrice` that is 10% greater than its original price.

  // Challenge 10: Spreading and Destructuring
  // Create a new object called `userAndSettings` by combining `userProfile` and `userSettings`.
  // Then, from that new object, destructure and log the `name`, `theme`, and `city` properties in a single line.

  // Challenge 11: Spreading into a Rest Parameter
  // Create a function called `logEverything` that accepts a `name` parameter and then uses a **rest parameter** to collect all other arguments.
  // Then, use the spread operator on the `vegetables` array to call the `logEverything` function, passing 'grocery' as the name and the vegetables as the rest of the arguments.

  // Challenge 12: Creating a Combined Object from an Array
  // Create a single object called `totalSales` that combines all the key-value pairs from the `salesData` array. The keys should be the `region` names and the values should be the `sales` amounts.
  // Your solution should be a single line of code.

  // Challenge 13: Updating an Item in an Array of Objects
  // Create a new array called `updatedProducts` that is a copy of the `products` array.
  // In this new array, change the `price` of the product with `id: 2` to 30, and also add a new property called `inStock` set to `false` for that same product. The other products should remain unchanged.
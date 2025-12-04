/*
  Section 1: Reference: Quick Guide to the JavaScript Debugger

  What it is: A tool in your browser's developer console (F12 or Cmd+Opt+I) that lets you pause your code's execution and examine variables, the call stack, and more.

  Setting Breakpoints:
  - In the Sources tab of your developer tools, you can click on a line number to set a breakpoint. When the code runs, it will pause on that line.
  - You can also use the `debugger;` keyword directly in your code. When your code hits this line, it will pause automatically if the developer tools are open.

  Debugger Controls:
  - Step over: Moves to the next line of code, but treats function calls as a single step.
  - Step into: Moves to the next line of code, and will jump inside function calls to debug them.
  - Step out: Jumps out of the current function and continues execution.
  - Resume script execution: Continues running the code until the next breakpoint or the end of the script.

  Tips for Debugging:
  1. Have your browser's developer tools open to the Sources tab before running your code.
  2. Use the `debugger;` keyword to strategically pause your code where you think an issue might be occurring.
  3. Inspect the 'Scope' panel to see the values of variables at the moment your code is paused.
*/

// Section 2: Sample data to be used throughout the worksheet.

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 300 },
];

let cartTotal = 0;

/*
  Section 3: Challenge prompts/questions

  Problem 1: Using the `debugger;` keyword

  Task: The function `calculateTotal` is supposed to add up the prices of all products. There is a bug that is causing the total to be incorrect.
  A) Add the `debugger;` keyword inside the `for` loop.
  B) Run the code with your developer tools open and step through the loop.
  C) Inspect the value of `cartTotal` and `products[i].price` in the 'Scope' panel at each step to identify the bug.
  D) Fix the code.
*/

// function calculateTotal() {
//   for (let i = 0; i < products.length; i++) {
//     cartTotal = cartTotal - products[i].price;
//   }
// }
// calculateTotal();
// console.log('Final cart total:', cartTotal);


/*
  Problem 2: Using the `debugger;` keyword to understand variable scope

  Task: The `updateProductPrice` function is intended to increase the price of a specific product. It's not working as expected.
  A) Add `debugger;` inside the `if` statement.
  B) Step into the `if` block and inspect the value of `product.price`.
  C) What do you notice about how the price is being updated? How is it different from what you expect?
  D) Fix the code so it correctly increases the price.
*/

// function updateProductPrice(productId, newPrice) {
//   let product = products.find(p => p.id === productId);
//   if (product) {
//     product.price = product.price + newPrice;
//   }
// }
// updateProductPrice(2, 10);
// console.log(products);


/*
  Problem 3: Debugging a function call with `Step Into`

  Task: The `processOrder` function calls `calculateTotal` and then `applyDiscount`. The final total is wrong.
  A) Add a breakpoint on the line where `calculateTotal()` is called inside `processOrder`.
  B) Use the `Step Into` button to jump into the `calculateTotal` function.
  C) Step through `calculateTotal` to find the bug (which is the same one as in Problem 1).
  D) Fix the bug in `calculateTotal`.
  E) Now, step into `applyDiscount` and check the value of `total` before and after the discount is applied. Why is the discount not working as expected?
  F) Fix the `applyDiscount` function so it correctly calculates and returns the discounted total.
*/

// function calculateTotal(items) {
  // let total = 0;
  // for (let i = 0; i < items.length; i++) {
    // total = total - items[i].price;
  // }
  // return total;
// }

// function applyDiscount(total, discount) {
  // total = discount;
  // return total;
// }

// function processOrder() {
  // let total = calculateTotal(products);
  // let discountedTotal = applyDiscount(total, 0.1);
  // console.log('Processed order total:', discountedTotal);
// }
// processOrder();


/*
  Problem 4: Finding a bug in a complex loop

  Task: The function `findExpensiveProducts` is supposed to return an array of products with a price over $100. It's returning an empty array.
  A) Set a breakpoint on the `if` statement inside the `for` loop.
  B) At each iteration, inspect the values of `products[i].price` and the `expensiveProducts` array.
  C) What's wrong with the `if` condition?
  D) Fix the condition so the function works correctly.
*/

// function findExpensiveProducts() {
//   const expensiveProducts = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 100) {
//       expensiveProducts.push(products[i]);
//     }
//   }
//   return expensiveProducts;
// }
// console.log(findExpensiveProducts());
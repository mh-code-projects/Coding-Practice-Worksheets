/*
===========================================================
Section 1: Reference — Quick Guide for Function.call()
===========================================================

Purpose:
- The .call() method allows you to invoke a function while explicitly
  setting its `this` value.
- Useful when borrowing methods, controlling context, or reusing
  functions across different objects.

Syntax:
  functionName.call(thisValue, arg1, arg2, ...)

Example (no output provided):
  const person = { name: "Ava" }
  function greet(greeting) {
      return greeting + ", " + this.name
  }
  greet.call(person, "Hello")

Explanation:
- In the example above, `this` becomes `person` inside greet().
- .call() executes the function immediately (unlike .bind which returns
  a new function).


===========================================================
Section 2: Sample Data
===========================================================
*/
const userA = { name: "Lena", role: "admin" }
const userB = { name: "Marco", role: "editor" }
const userC = { name: "Sam", role: "viewer" }

function describeUser(prefix, suffix) {
    return prefix + this.name + " is a " + this.role + suffix
}

const orders = [
    { id: 1, total: 29.50 },
    { id: 2, total: 102.10 },
    { id: 3, total: 15.99 }
]

function formatOrder(prefix) {
    return prefix + " Order ID: " + this.id + " | Total: " + this.total
}

/*
===========================================================
Section 3: Challenge Prompts
===========================================================


1) Use .call() to invoke describeUser() with userA.
   A) Write a line that calls describeUser() while forcing its `this`
      to become userA.
   B) Pass any prefix and suffix strings of your choice.
*/
describeUser.call(userB, "Dr. ", " right now");

/*
2) Borrow the describeUser() function for userB and userC using .call().
   A) Invoke describeUser() for userB first, then for userC.
   B) Ensure both produce properly formatted strings based on the 
      properties of the respective objects.
   C) Reminder: function.call(thisValue, arg1, arg2)
*/


/*
3) Working with array objects + .call()
   A) Use .call() to invoke formatOrder() on the first element of `orders`.
   B) Inline reminder: accessing the first order → orders[0]
*/


/*
4) Introduce: Function Reusability with .call()
   New Concept:
     You can reuse a single function to operate on any object as long
     as that object contains the needed keys.
   Example Syntax:
     someFunction.call(anyObject, arg)

   A) Write a loop that iterates through all orders.
   B) Inside the loop, call formatOrder() with `this` bound to each 
      individual order.
   C) Use any prefix you choose.
*/


/*
5) Method Borrowing — Why .call() Is Powerful
   A)

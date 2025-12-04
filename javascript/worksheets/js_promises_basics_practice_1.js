// =========================================================
// 💻 Practice Worksheet: JavaScript Promises
// =========================================================

// -----------------------------------------------------
// Section 1: Reference: Key Concepts & Syntax
// -----------------------------------------------------
// * Promise Creation: new Promise((resolve, reject) => { /* async code */ });
//   - resolve(value): Call this when the operation succeeds.
//   - reject(error): Call this when the operation fails.
//
// * Promise Consumption:
//   - .then(onSuccess): Executes when the Promise resolves.
//   - .catch(onError): Executes when the Promise rejects.
//   - .finally(onCompletion): Executes when the Promise is settled (resolved or rejected).
//
// * setTimeout(callback, delay): A global function used here to simulate an asynchronous time delay.

// -----------------------------------------------------
// Section 2: Challenge Prompts (Focus: Creation)
// -----------------------------------------------------

/*
Challenge 1: Building a Successful Promise Function (fetchUserData)
A) Define a function named 'fetchUserData' that takes a 'userId' as an argument.
B) Inside the function, **return** a **new Promise**.
C) The executor function for the Promise should use **setTimeout** to simulate a network delay of **800 milliseconds (ms)**.
D) Inside the setTimeout callback, call **resolve()** and pass a simple user object as the value, e.g., { id: userId, name: "Charlie" }.
*/


/*
Challenge 2: Building a Failure Promise Function (checkRole)
A) Define a function named 'checkRole' that takes a 'userRole' (a string) as an argument.
B) Inside the function, **return** a **new Promise**.
C) Use **setTimeout** to simulate a delay of **500 ms**.
D) Inside the setTimeout callback:
    - If 'userRole' is NOT equal to "admin", call **reject()** and pass a new Error object: new Error("Access Denied: Not an administrator.").
    - Otherwise (if it IS "admin"), call **resolve("Role Confirmed: Admin")**.
*/


/*
Challenge 3: Using Promise.resolve() for an Instant Success
A) Define a function called 'getInstantValue' that takes one argument, 'value'.
B) This function should immediately return a Promise that is already resolved to the 'value' passed in, using **Promise.resolve()**.
*/

// -----------------------------------------------------
// Section 3: Challenge Prompts (Focus: Consumption)
// -----------------------------------------------------

/*
Challenge 4: Basic Consumption of Success
A) Call the 'fetchUserData' function (from Challenge 1) with the userId 55.
B) Chain a **.then()** to log the resolved user object to the console.
*/


/*
Challenge 5: Basic Consumption of Failure
A) Call the 'checkRole' function (from Challenge 2) with the input "guest".
B) Chain a **.catch()** to log only the **error message** (HINT: you'll likely need to access the 'message' property of the error object you receive).
*/


/*
Challenge 6: The Finally Block
A) Call 'getInstantValue' (from Challenge 3) with the input 42.
B) Chain a **.then()** to log the resolved value.
C) Chain a **.finally()** to log the message "--- Operation Done ---" after the result is printed.
*/


/*
Challenge 7: Sequential Chain// =========================================================
// 💻 Practice Worksheet: JavaScript Promises
// =========================================================

// -----------------------------------------------------
// Section 1: Reference: Key Concepts & Syntax
// -----------------------------------------------------
// * Promise Creation: new Promise((resolve, reject) => { /* async code */ });
//   - resolve(value): Call this when the operation succeeds.
//   - reject(error): Call this when the operation fails.
//
// * Promise Consumption:
//   - .then(onSuccess): Executes when the Promise resolves.
//   - .catch(onError): Executes when the Promise rejects.
//   - .finally(onCompletion): Executes when the Promise is settled (resolved or rejected).
//
// * setTimeout(callback, delay): A global function used here to simulate an asynchronous time delay.

// -----------------------------------------------------
// Section 2: Challenge Prompts (Focus: Creation)
// -----------------------------------------------------

/*
Challenge 1: Building a Successful Promise Function (fetchUserData)
A) Define a function named 'fetchUserData' that takes a 'userId' as an argument.
B) Inside the function, return a new Promise.
C) The executor function for the Promise should use setTimeout to simulate a network delay of 800 milliseconds (ms).
D) Inside the setTimeout callback, call resolve() and pass a simple user object as the value, e.g., { id: userId, name: "Charlie" }.
*/

/*
Challenge 2: Building a Failure Promise Function (checkRole)
A) Define a function named 'checkRole' that takes a 'userRole' (a string) as an argument.
B) Inside the function, return a new Promise.
C) Use setTimeout to simulate a delay of 500 ms.
D) Inside the setTimeout callback:
    - If 'userRole' is NOT equal to "admin", call reject() and pass a new Error object: new Error("Access Denied: Not an administrator.").
    - Otherwise (if it IS "admin"), call resolve("Role Confirmed: Admin").
*/


/*
Challenge 3: Using Promise.resolve() for an Instant Success
A) Define a function called 'getInstantValue' that takes one argument, 'value'.
B) This function should immediately return a Promise that is already resolved to the 'value' passed in, using Promise.resolve().
*/

// -----------------------------------------------------
// Section 3: Challenge Prompts (Focus: Consumption)
// -----------------------------------------------------

/*
Challenge 4: Basic Consumption of Success
A) Call the 'fetchUserData' function (from Challenge 1) with the userId 55.
B) Chain a .then() to log the resolved user object to the console.
*/


/*
Challenge 5: Basic Consumption of Failure
A) Call the 'checkRole' function (from Challenge 2) with the input "guest".
B) Chain a .catch() to log only the error message (HINT: you'll likely need to access the 'message' property of the error object you receive).
*/


/*
Challenge 6: The Finally Block
A) Call 'getInstantValue' (from Challenge 3) with the input 42.
B) Chain a .then() to log the resolved value.
C) Chain a .finally() to log the message "--- Operation Done ---" after the result is printed.
*/


/*
Challenge 7: Sequential Chain
A) Call 'fetchUserData' with userId 10.
B) In the first .then(), accept the user object and return *only* the user's name (e.g., 'user.name').
C) Chain a second .then() to log the message: "Retrieved Name: [Name]".
D) Chain a .catch() at the end to catch any potential errors throughout the chain.
*/


/*
Challenge 8: Failure Handling in a Chain
A) Start by calling 'checkRole' with the input "admin" (which should resolve).
B) Chain a .then() to log the resolution message.
C) Chain a second call to 'checkRole' but this time with the input "manager" (which should reject).
D) Chain a .catch() at the end to gracefully catch the rejection from the second call.
*/
A) Call 'fetchUserData' with userId 10.
B) In the first **.then()**, accept the user object and **return** *only* the user's name (e.g., 'user.name').
C) Chain a **second .then()** to log the message: "Retrieved Name: [Name]".
D) Chain a **.catch()** at the end to catch any potential errors throughout the chain.
*/


/*
Challenge 8: Failure Handling in a Chain
A) Start by calling 'checkRole' with the input "admin" (which should resolve).
B) Chain a **.then()** to log the resolution message.
C) Chain a **second call** to 'checkRole' but this time with the input "manager" (which should reject).
D) Chain a **.catch()** at the end to gracefully catch the rejection from the second call.
*/
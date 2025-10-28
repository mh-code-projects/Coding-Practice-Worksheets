/*
=========================================================
💻 Practice Worksheet: JavaScript Promises Basics
=========================================================
Focus: Understanding Promise states (Pending, Resolved, Rejected) and how to handle results and errors asynchronously using .then() and .catch().

-----------------------------------------------------
Section 1: Reference: Key Concepts
-----------------------------------------------------
* Promise: An object representing the eventual completion (or failure) of an asynchronous operation.
* States: Pending -> Fulfilled (Resolved) or Rejected.
* .then( ): Used to handle a fulfilled Promise. Takes a callback function that receives the resolved value.
* .catch( ): Used to handle a rejected Promise (an error). Takes a callback function that receives the error.
* setTimeout( ): A web API function used here to simulate an asynchronous delay (like a network request).

-----------------------------------------------------
Section 2: Sample Functions (Simulating API Calls)
-----------------------------------------------------

// Simulates a successful data fetch after a 1-second delay
const fetchData = (data) => {
  return new Promise((resolve) => {
    console.log("--- FETCH: Request sent. Waiting... ---");
    setTimeout(() => {
      resolve(`Data successfully retrieved: ${data}`);
    }, 1000);
  });
};

// Simulates a failed data fetch after a 1.5-second delay
const failData = (reason) => {
  return new Promise((_, reject) => {
    console.log("--- FAIL: Request sent. Waiting... ---");
    setTimeout(() => {
      reject(new Error(`Fetch failed due to: ${reason}`));
    }, 1500);
  });
};

// Simple synchronous function for chaining
const processData = (message) => {
    const processed = message.toUpperCase();
    console.log(`--- PROCESS: Data has been processed. ---`);
    return processed;
};

/*
-----------------------------------------------------
Section 3: Challenge Prompts (10 Problems)
-----------------------------------------------------
*/

/*
🚀 Challenge 1: Basic Resolution
A) Call the 'fetchData' function with the input "UserList".
B) Chain a **.then()** to log the resolved message to the console.
*/


/*
🚀 Challenge 2: Basic Rejection
A) Call the 'failData' function with the reason "Server Offline".
B) Chain a **.catch()** to log the error message (e.g., 'Error: Fetch failed...') to the console.
*/


/*
🚀 Challenge 3: Chaining Operations
A) Call 'fetchData' with "Raw Text".
B) Chain the result to **.then()** and call the 'processData' function with the resolved message.
C) Chain a **second .then()** to log the final, processed (uppercase) message.
*/


/*
🚀 Challenge 4: Promise-returning function inside .then()
A) Call 'fetchData' with "First Batch".
B) In the first **.then()**, log the result, and then **return** a new call to 'fetchData' with the input "Second Batch".
C) Chain a **second .then()** to log the result of the second fetch. This demonstrates sequential asynchronous steps.
*/


/*
🚀 Challenge 5: Handling Errors in a Chain
A) Start a chain with a successful call: 'fetchData("Start")'.
B) Chain to the 'processData' function.
C) Chain to 'failData' with the reason "Chain Interrupted".
D) Chain a **.catch()** at the end to gracefully catch the error from 'failData'.
*/


/*
🚀 Challenge 6: The Immediate Return Trap
A) Call 'fetchData' with "Initial Value".
B) In the **.then()**, use console.log() to print the resolved value.
C) Without using a return statement, chain a **second .then()** and observe what value it receives (it will receive 'undefined').
D) This challenge highlights why you MUST explicitly return values or Promises from a .then() block.
*/


/*
🚀 Challenge 7: Simulating Conditional Failure
A) Create a function 'checkLength(message)' that returns a **new Promise**. 
   - If the message length is > 15, resolve the Promise with the message.
   - Otherwise, reject the Promise with the message: "Message too short!".
B) Call 'fetchData("Success Message")'.
C) In the .then(), call 'checkLength()' with the resolved message.
D) Chain a **.catch()** to handle the "Message too short!" error if the message is short.
E) Test with a short input (e.g., 'fetchData("Hi")').
*/


/*
🚀 Challenge 8: Using Promise.resolve() for Immediate Value
A) Create a Promise that immediately resolves to the value 42 using **Promise.resolve()**.
B) Chain a **.then()** to multiply the result by 2 and log the final number (84).
C) This demonstrates how to wrap a synchronous value in a Promise for chaining.
*/


/*
🚀 Challenge 9: Using Promise.reject() for Immediate Error
A) Create a Promise that immediately rejects with the error message "Forced Stop" using **Promise.reject()**.
B) Chain a **.catch()** to log the specific message "Error: Forced Stop".
*/


/*
🚀 Challenge 10: The .finally() Block
A) Start a chain with a successful call: 'fetchData("Final Test")'.
B) Chain a **.then()** to log the result.
C) Chain a **.finally()** block that logs the message "--- Operation Complete ---". 
D) Run the same chain starting with 'failData("Test Failure")' and observe that **.finally()** still runs. 
E) This demonstrates that **.finally()** executes regardless of whether the Promise resolves or rejects.
*/
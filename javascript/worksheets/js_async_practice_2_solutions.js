/*
======================================================
Section 1: Reference: Quick Guide for Asynchronous JavaScript
======================================================
*/

// --- What is Asynchronous Code? ---
// Asynchronous code allows a program to start a potentially long-running task
// (like fetching data from a server) and still be responsive to other events
// while that task is pending.

// --- The Promise Object ---
// A Promise is an object representing the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

// --- 1. The .then() and .catch() Methods (Promise Chaining) ---
// Use Promises directly to handle the result or error.

/*
Syntax:
fetch(url)
  .then(response => response.json()) // .then() handles successful completion
  .then(data => { ... })
  .catch(error => { ... });         // .catch() handles failure/errors
*/

// Use Case: A traditional way to execute code after an asynchronous task completes,
// often used when you need to perform sequential asynchronous tasks.

// --- 2. The async/await Keywords (Modern Approach) ---
// The 'async' keyword is used before a function declaration to make it return a Promise.
// The 'await' keyword can ONLY be used inside an 'async' function.
// 'await' pauses the execution of the async function until the Promise is resolved.

/*
Syntax:
async function fetchData(url) {
  try {
    const response = await fetch(url); // Pauses here until data is fetched
    const data = await response.json();  // Pauses here until body is parsed to JSON
    return data;
  } catch (error) {
    // catch() handles errors for the entire try block
    console.error("An error occurred:", error);
  }
}
*/

// Use Case: Makes asynchronous code look and behave more like synchronous code,
// which is often easier to read and maintain.

/*
======================================================
Section 2: Sample Data & API Endpoints
======================================================
*/

// The `fetch()` function is built into modern browsers and Node.js (with a polyfill or v18+),
// and it returns a Promise. We will use it for all requests.

const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const USER_API_URL = "https://jsonplaceholder.typicode.com/users/1";
const TODOS_API_BASE_URL = "https://jsonplaceholder.typicode.com/todos?userId=";
const POSTS_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts?userId=";

/*
======================================================
Section 3: Challenge Prompts/Questions
======================================================
*/

// ----------------------------------------------------
//  Problem 1: Basic Async/Await Fetch (The Setup)
// ----------------------------------------------------
// Task: Write an async function called 'fetchProgrammingJoke'.
// Inside the function, use 'await' with the `fetch()` function to retrieve a joke
// from the `JOKE_API_URL`.
// Do not worry about parsing the response body yet, just get the initial response.
// Print the response object to the console.
async function fetchProgrammingJoke(JOKE_API_URL){
    const response = await fetch(JOKE_API_URL);

    //PROBELM 2 SOLUTION

    const jokeComplete = await response.json();
    console.log(jokeComplete);

    //END PROBLEM 2 SOLUTION

};

//  Problem 2: Parsing the Response Body
// ----------------------------------------------------
// Task: Modify your `fetchProgrammingJoke` function from Problem 1.
// After the first `await fetch(...)`, add a second 'await' to parse the response body
// into JSON.
// Print *only the joke string* from the resulting JavaScript object to the console.
// *Hint: The response object has a `.json()` method that returns a Promise.*

// FOR SOLUTION SEE PROBLEM 2

// ----------------------------------------------------
//  Problem 3: Basic Promise Chain (.then/.catch)
// ----------------------------------------------------
// Task: Rewrite the logic from Problem 2, but this time, use a Promise chain
// with `.then()` and `.catch()`.
// Call the function 'fetchJokeWithPromises'.
// Ensure you handle the initial fetch, the parsing of the JSON, and log the joke string.
// Include a `.catch()` block to log any errors that occur.

function fetchJokeWithPromises(JOKE_API_URL) { 
  fetch(JOKE_API_URL)
  .then( response => response.json())
  .then(jokeData => jokeData.joke)
  .then(actualJoke => console.log(actualJoke))
  .catch(error => console.log('Error: This is not a joke'));
};
fetchJokeWithPromises(JOKE_API_URL);

// ----------------------------------------------------
//  Problem 4: Error Handling with Try/Catch
// ----------------------------------------------------
// Task: Wrap the asynchronous logic inside your `fetchProgrammingJoke` (from Problem 2)
// with a `try...catch` block. This is the equivalent of the `.catch()` from Problem 3.
// Inside the `catch` block, print a custom error message like:
// "Failed to fetch joke: [insert error message here]".
// *Note: To test the error, you might temporarily change the URL to an invalid one.*

// ----------------------------------------------------
//  Problem 5: Sequential Asynchronous Tasks (Data Combination)
// ----------------------------------------------------
// Task: Write an async function 'fetchUserAndTodos'.
// A) First, fetch the user data from `USER_API_URL`.
// B) Once you have the user's ID, use the `TODOS_API_BASE_URL` and the user's ID
//    to fetch that specific user's to-do list.
// C) Log a single object containing the user's name and their total number of todos.
// Expected output format (example): { userName: "Leanne Graham", todoCount: 20 }

// ----------------------------------------------------
//  Problem 6: Combining `.then()` and `async/await`
// ----------------------------------------------------
// Task: Re-implement the logic from Problem 5, but use a combination of `async/await`
// and a single `.then()` chain.
// Write an async function 'getCombinedData' that fetches the user and returns the
// `userId` and `name`.
// Then, *outside* of that function, call 'getCombinedData' and use a `.then()` to
// take the returned `userId` and fetch the todos list using another `async/await`
// inside the `.then()` callback.
// Log the same final object as in Problem 5.

// ----------------------------------------------------
//  Problem 7: Building a Profile Summary (Multiple Awaits)
// ----------------------------------------------------
// Task: Write an async function 'buildUserProfileSummary'.
// The goal is to gather information from three API calls to create a detailed summary.
// A) Fetch the user data from `USER_API_URL`.
// B) Use the retrieved user ID to fetch the todos list from `TODOS_API_BASE_URL`.
// C) Use the retrieved user ID to fetch the posts list from `POSTS_API_BASE_URL`.
// D) Log a final summary object containing the user's name, email, total number of todos,
//    and total number of posts.
// *Hint: This is a complex, multi-step problem. Break it down into the three sequential awaits.*

// ----------------------------------------------------
//  Problem 8: Cleaning Data with Chaining
// ----------------------------------------------------
// Task: Using the Promise `.then()` chaining approach, re-implement the logic from Problem 7
// to build the same final summary object.
// Your goal is to keep the chain readable.
// The first `.then()` should handle the user fetch and return the new fetch call for todos.
// The second `.then()` should handle the todos fetch and return the new fetch call for posts.
// The third `.then()` should combine all the pieces and log the final summary object.
// *This is a challenging exercise in managing scope and values across a long chain!*

// ----------------------------------------------------
//  Problem 9: Real-World Use Case: Filtering Data
// ----------------------------------------------------
// Task: Write an async function 'getCompletedTodoTitles'.
// A) Fetch all todos for the user from `TODOS_API_BASE_URL` (using the ID from the user API).
// B) Use JavaScript array methods (like `.filter()` and `.map()`) on the resulting array of todo objects
//    to get an array of only the titles of the todos that have `completed: true`.
// C) Log the final array of completed todo titles.

// ----------------------------------------------------
//  Problem 10: Final Challenge: Conditional Async Logic
// ----------------------------------------------------
// Task: Write an async function 'getPostTitlesIfUserIsActive'.
// The goal is to only fetch the posts if the user's email ends with ".biz" (a common example of a simple "active" check).
// A) Fetch the user data from `USER_API_URL`.
// B) *Condition:* Check if the user's `email` property ends with the string ".biz".
// C) If the condition is true, fetch the user's posts from `POSTS_API_BASE_URL` and log an array of their post titles.
// D) If the condition is false, log the message: "User [User Name] is not active, skipping post retrieval."
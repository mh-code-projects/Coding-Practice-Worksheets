/*
-----------------------------------------------------------------------------------
Section 1: Reference: Quick Guide for the fetch() API
-----------------------------------------------------------------------------------
*/

/*
| Concept | Syntax Example | Use and Purpose |
| :--- | :--- | :--- |
| fetch() with Promises | `fetch(url).then(res => res.json()).then(data => {...}).catch(err => {...});` | The original way to handle asynchronous requests. Returns a Promise that resolves to the Response object. You chain .then() to handle success and .catch() for errors. |
| Response.json() | `response.json()` | A method on the Response object that reads the response stream to completion and parses its body text as JSON. It returns a Promise that resolves with the resulting JavaScript object. |
| fetch() with async/await | `const response = await fetch(url); const data = await response.json();` | The modern, cleaner way to handle Promises. Requires the function containing this code to be declared as `async`. It makes asynchronous code look and behave more like synchronous code. |

// Key API Reference: We will be using the JSONPlaceholder API for dummy data.
// Base URL for Posts: 'https://jsonplaceholder.typicode.com/posts'
// URL for a Single Post (ID 1): 'https://jsonplaceholder.typicode.com/posts/1'


/*
-----------------------------------------------------------------------------------
Section 2: Sample Data & Setup
-----------------------------------------------------------------------------------
*/

// You do not need to create any sample data, as we will be fetching it from a live API!

// You may use this boilerplate function definition for your async/await challenges:
// async function fetchData() {
//   // Your code goes inside here
// }

/*
-----------------------------------------------------------------------------------
Section 3: Challenge Prompts/Questions
-----------------------------------------------------------------------------------
*/


// ----------------------------------------------------------------------------------
// Challenge 1: The Basic GET Request (Promise Syntax)
// ----------------------------------------------------------------------------------

// A) Write a function named `fetchFirstPostPromise` that uses the `fetch()` API
//    to retrieve the single post with ID 1.
// B) Use the Promise (.then/.catch) chaining syntax.
// C) Inside the final `.then()` block, log the entire resulting data object to the console.

// fetchFirstPostPromise();


// ----------------------------------------------------------------------------------
// Challenge 2: Adopting Async/Await
// ----------------------------------------------------------------------------------

// A) Write an async function named `fetchFirstPostAsync` that retrieves the
//    same single post with ID 1.
// B) Use the `await` keyword with `fetch()` and `response.json()` to handle
//    the asynchronous operations.
// C) Log only the `title` property of the resulting data object.


// ----------------------------------------------------------------------------------
// Challenge 3: Handling Errors Gracefully (Async/Await)
// ----------------------------------------------------------------------------------

// A) Write an async function named `fetchInvalidPost` that attempts to fetch
//    a non-existent post (e.g., ID 9999) using the URL:
//    'https://jsonplaceholder.typicode.com/posts/9999'
// B) Implement proper Error Handling using a `try...catch` block around
//    your `await` calls.
// C) If an error occurs during the network request (e.g., connection issue, though less likely here),
//    log the error's message.
//
// *New Concept: `try...catch`*
// *Syntax Example:*
// ```javascript
// try {
//   // Code that might throw an error (like failed network requests)
// } catch (error) {
//   // Code to run if an error is thrown
//   console.error(error);
// }
// ```
// D) Log a simple message like "Data fetching complete." outside the `try...catch` block
//    to show control flow continues.


// ----------------------------------------------------------------------------------
// Challenge 4: Accessing Nested Data and Array Mapping
// ----------------------------------------------------------------------------------

// A) Write an async function named `fetchAndListPostTitles` that retrieves the
//    list of all posts from the URL: 'https://jsonplaceholder.typicode.com/posts'
// B) Once you have the array of post objects, use the `.map()` array method
//    to create a new array containing *only* the `title` of each post.
// C) Log the new array of titles.

// *Hint: Remember that the initial API response will be an array of objects.*


// ----------------------------------------------------------------------------------
// Challenge 5: Using Fetch with Custom Parameters (Query Strings)
// ----------------------------------------------------------------------------------

// A) Write an async function named `fetchUserPosts` that fetches posts written by a
//    specific user, for example, User ID 5.
// B) To filter the results, append a query string to the base URL:
//    'https://jsonplaceholder.typicode.com/posts?userId=5'
// C) Use `.find()` on the resulting array to check if a post with the `userId` of 4
//    is present in the list (it should not be).
// D) Log the result of the `.find()` operation (it should be `undefined`).

// *Review: Query Strings*
// *Purpose:* They are parameters added to a URL (after a `?`) to filter, sort, or paginate data on the server.
// *Syntax Example:* `url?key1=value1&key2=value2`
/*
----------------------------------------------------------------------------------
Section 1: Reference: Quick Guide for Asynchronous Callbacks & Timers
----------------------------------------------------------------------------------

// Purpose: Execute a function once after a specified delay.
// Syntax: setTimeout(callbackFunction, delayInMilliseconds);
setTimeout(() => {
    // This code runs once, after 2000 milliseconds (2 seconds)
    console.log("Delayed message.");
}, 2000);

// Purpose: Execute a function repeatedly, with a fixed time delay between each call.
// Syntax: setInterval(callbackFunction, intervalInMilliseconds);
// NOTE: setInterval returns an ID. You must use this ID with clearInterval() to stop it.
let intervalID = setInterval(() => {
    // This code runs repeatedly every 1000 milliseconds (1 second)
    console.log("Repeating message.");
}, 1000);

// Purpose: Stops a repeating action started by setInterval.
// Syntax: clearInterval(intervalID);
// clearInterval(intervalID); 

----------------------------------------------------------------------------------
Section 2: Sample Data & Setup
----------------------------------------------------------------------------------
*/
let countdownValue = 10;
let score = 0;
let messageQueue = []; // Used for Challenge 9 & 10

/*
----------------------------------------------------------------------------------
Section 3: Challenge Prompts/Questions
----------------------------------------------------------------------------------

// Challenge 1: The One-Time Greeting
// Task: Create a function named 'delayedGreeting' that prints "Hello from the past!" to the console.
// Then, use setTimeout() to call this function after 5 seconds (5000 milliseconds).
// A) Define the function.
// B) Use setTimeout to invoke it.
// C) Why would we use a named function here instead of an anonymous one? (Think about code readability and reuse.)

// Challenge 2: The Score Booster
// Task: Write a function named 'boostScore' that increases the global 'score' variable by 5 and prints the new score.
// Use setTimeout() to call 'boostScore' four times in a row, with each call delayed by 1, 2, 3, and 4 seconds, respectively.
// HINT: You will need four separate setTimeout calls.

// Challenge 3: The Countdown Clock (Introducing setInterval)
// Task: Use setInterval() to create a basic countdown timer.
// A) The callback function should decrease the global 'countdownValue' by 1 on each call.
// B) It should print the remaining 'countdownValue' every 1000 milliseconds (1 second).
// C) Assign the ID returned by setInterval to a variable named 'timerID'.

// Challenge 4: Stopping the Timer (Using clearInterval)
// Task: Modify the callback function from Challenge 3.
// Inside the callback, add an 'if' statement that checks if 'countdownValue' is less than or equal to 0.
// If it is, use clearInterval() with 'timerID' to stop the interval, and print "Lift-off! Timer stopped."

// Challenge 5: Conditional Delayed Action (Using the final score)
// Task: Define a function named 'checkScoreAndAlert'.
// This function should check the final value of the global 'score'.
// If 'score' is greater than 15, it should print "Victory is ours: Score > 15!". Otherwise, it should print "A valiant effort: Score <= 15.".
// Use setTimeout() to run 'checkScoreAndAlert' only once, **10 seconds** from now. (This ensures all boosts from Challenge 2 have run).

// Challenge 6: Clearing a Timeout (More complex flow control)
// Task: Define a function named 'cancelWarning' that prints "Warning cleared just in time!" to the console.
// A) Create a variable named 'warningTimeoutID'.
// B) Assign the result of a setTimeout call to 'warningTimeoutID'. This timeout
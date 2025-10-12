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


----------------------------------------------------------------------------------
Section 3: Challenge Prompts/Questions
----------------------------------------------------------------------------------

// Challenge 1: The One-Time Greeting
// Task: Create a function named 'delayedGreeting' that prints "Hello from the past!" to the console.
// Then, use setTimeout() to call this function after 5 seconds (5000 milliseconds).
// A) Define the function.
// B) Use setTimeout to invoke it.
// C) Why would we use a named function here instead of an anonymous one? (Think about code readability and reuse.)
function delayedGreeting() {
		setTimeout(console.log("Hello from the past!") ,5000);	
};

// Challenge 2: The Score Booster
// Task: Write a function named 'boostScore' that increases the global 'score' variable by 5 and prints the new score.
// Use setTimeout() to call 'boostScore' four times in a row, with each call delayed by 1, 2, 3, and 4 seconds, respectively.
// HINT: You will need four separate setTimeout calls.
function boostScore() {
		score = score + 5;
		console.log(score);
};
setTimeout(boostScore, 1000);
setTimeout(boostScore, 2000);
setTimeout(boostScore, 3000);
setTimeout(boostScore, 4000);

// Challenge 3: The Countdown Clock (Introducing setInterval)
// Task: Use setInterval() to create a basic countdown timer.
// A) The callback function should decrease the global 'countdownValue' by 1 on each call.
// B) It should print the remaining 'countdownValue' every 1000 milliseconds (1 second).
// C) Assign the ID returned by setInterval to a variable named 'timerID'.
let timerID;
function countDownClock() {
		countdownValue--;
		
		console.log(countdownValue);
};

timerID = setInterval(countDownClock, 1000);


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
// B) Assign the result of a setTimeout call to 'warningTimeoutID'. This timeout should print "CRITICAL WARNING!" after 5 seconds.
// C) Immediately use a **separate** setTimeout call to execute 'cancelWarning' and **clear** the 'warningTimeoutID'. This second timeout should run after only 2 seconds.
// (If done correctly, you should only see the "Warning cleared..." message, not the "CRITICAL WARNING!").

// Challenge 7: The Flashing Indicator (Self-modifying interval)
// Task: Create a function named 'flashMessage' that prints "FLASHING" to the console and then uses **setTimeout** inside its own body to call itself again after 500 milliseconds.
// A) Define the 'flashMessage' function.
// B) Call 'flashMessage' once to start the chain.
// HINT: This is an alternative to setInterval, often used for animation, called recursive setTimeout.

// Challenge 8: Stopping the Flashing Indicator
// Task: Modify the 'flashMessage' function from Challenge 7.
// A) Before calling the function, declare a counter variable named 'flashCount' and set it to 0.
// B) Inside 'flashMessage', increment 'flashCount'.
// C) Add an 'if' statement inside 'flashMessage' that checks if 'flashCount' is greater than 10. If it is, use 'return' to stop the function from calling itself again.

// Challenge 9: Asynchronous Message Queue Setup
// Task: Add 3 string messages of your choice (e.g., "M1", "M2", "M3") to the 'messageQueue' array using the .push() method.

// Challenge 10: Processing the Queue (Advanced Interval Use Case)
// Task: Use setInterval() to process the 'messageQueue' array.
// A) Assign the interval ID to 'queueProcessorID'.
// B) The interval should run every 1500 milliseconds (1.5 seconds).
// C) The callback function should use the .shift() method to remove and return the **first** message from the 'messageQueue' array. Print this message to the console.
// D) Add an 'if' statement to the callback: If the queue is empty (check if the length is 0 after shifting), use clearInterval(queueProcessorID) to stop the process, and print "Queue empty. Processor stopped."
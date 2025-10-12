// SECTION 1: Reference: Quick Guide for setTimeout()

/*
Purpose: To execute a function or a specified piece of code once after a delay.
Syntax:
    setTimeout(functionReference, delayInMilliseconds, optionalArg1, optionalArg2, ...);

Example 1 (Using a named function):
    function sayHello() { console.log("Hello!"); }
    setTimeout(sayHello, 2000); // Logs "Hello!" after 2 seconds (2000ms)

Example 2 (Using an anonymous function - useful when you need local variables):
    let user = "Alex";
    setTimeout(() => {
        console.log(`Welcome back, ${user}`);
    }, 1500); // Logs after 1.5 seconds (1500ms)

Key Concept - Asynchronicity:
JavaScript doesn't stop and wait for setTimeout to finish. It puts the function aside
to be run later, and continues immediately with the rest of the script. The timer
starts counting down instantly.
*/

// SECTION 2: Sample Data and Variables

let eventLog = []; // Use this array for logging results in challenges A-C
let countdown = 5; // Use this variable for challenge D
let points = 0; // Use this variable for challenge F

// SECTION 3: Challenge Prompts

// A) The Delayed Log
// Task: Write a function called 'logMessage' that takes one argument, 'message', and pushes it to the 'eventLog' array.
// Then, use setTimeout() to call 'logMessage' with the string "Timer 1 Finished!" after 3 seconds (3000ms).

// B) Sequential vs. Asynchronous Order
// Task: Predict and then observe the order of execution.
// 1. Immediately log the string "Script Start" to the console.
// 2. Use a second setTimeout() to call 'logMessage' with the string "Timer 2 (1 sec)" after 1000ms.
// 3. Immediately log the string "Script End" to the console.
// What appears first, "Timer 2 (1 sec)" or "Script End"? Why?

// C) Passing Arguments Directly
// Task: Use setTimeout() to call 'logMessage' after 500ms. This time, pass the message "Fastest Log" directly through the optional arguments of setTimeout.
// Reference:
//   setTimeout(functionName, delay, arg1, arg2); // functionName will receive arg1, arg2, etc. as its parameters.

// D) Recursive Timeout: The Countdown Clock
// Task: Write a function named 'startCountdown' that does the following:
// 1. Decrements the global 'countdown' variable by 1.
// 2. Prints the new value of 'countdown' to the console.
// 3. IF 'countdown' is greater than 0, the function must call itself using setTimeout() with a delay of 1 second (1000ms).
// This creates a loop that runs every second until the condition is met.

// E) Clearing the Timer (Bailing Out)
// New Concept - clearTimeout():
//   Use: Stops a timer from executing before its delay is up.
//   Syntax:
//     let timerID = setTimeout(functionToRun, delay);
//     clearTimeout(timerID); // The function associated with timerID will not run.
// Task: Create a new setTimeout that would normally print "Self-Destruct in 5 seconds!" after 5000ms.
// Store the ID of this timer in a variable called 'emergencyStop'.
// Then, immediately use clearTimeout() on 'emergencyStop' to prevent the message from ever being printed.

// F) Nested Timers: The Score Combo
// Task: Create a function called 'activateCombo' that adds 10 to the global 'points' variable and prints the new score.
// Use setTimeout() to call 'activateCombo' after 1 second (1000ms).
// CHALLENGE: Inside the 'activateCombo' function, add another setTimeout() call that waits 500ms (0.5 seconds) and then adds another 5 points to 'points' and prints the score again.
// What will the final score be?

// G) Why Anonymous Functions? (Handling Block Scope)
// Background: When you use a 'for' loop to set multiple timeouts, if you use 'var' or don't wrap the logic, all the timers share the SAME final value of the loop variable.
// Task: Using a 'for' loop (from i = 1 to 3), use setTimeout to print the value of 'i' after 'i * 1000' milliseconds.
// HINT: You MUST use an anonymous (arrow) function inside the setTimeout to "capture" the correct value of 'i' at each iteration.
// Correct Syntax:
//   for (let i = 1; i <= 3; i++) {
//       setTimeout(() => { // The anonymous function captures the current 'i'
//           // Code to print i
//       }, i * 1000);
//   }

// H) The Time-Based Decision
// Task: Write a function named 'checkTime' that prints "You were slow!"
// Set a 2000ms timer to call 'checkTime'. Store the timer ID in a variable called 'timerID'.
// Immediately after setting the timer, add an 'if' statement that has a 50% chance (e.g., if Math.random() < 0.5) of immediately calling clearTimeout(timerID).
// If the timer is cleared, print "You were fast enough!"

// I) Delayed Function with Parameters and Context
// Task: Write a function 'greetUser(name)' that prints "Hello, [name]".
// Use setTimeout to call 'greetUser' after 2500ms.
// The challenge: You must pass the string "Coding Coach" as the name parameter.
// You have two options, choose one (or both!):
// 1. Anonymous function wrapper (e.g., `setTimeout(() => { ... }, delay);`)
// 2. Direct parameter passing (e.g., `setTimeout(func, delay, arg1);`)

// J) Challenge: The Promise of Tomorrow (Introducing the modern alternative)
// New Concept - Promises and Async/Await:
//   setTimeout is a low-level tool. Modern JS often uses Promises to manage complex asynchronous flows.
//   Syntax for a simple delay using a Promise:
//     const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//     async function runSequence() {
//         await delay(1000); // Pauses the function for 1 second!
//         console.log("1 second passed.");
//     }
// Task: Copy the 'delay' function and the 'runSequence' function.
// Modify 'runSequence' to:
// 1. Log "Starting sequence..."
// 2. Await a delay of 500ms.
// 3. Log "Half a second has passed."
// 4. Await a delay of 1500ms.
// 5. Log "Total of 2 seconds passed."
// Finally, call 'runSequence()'. (This is just an intro—don't worry if it's confusing, but give it a try!)
/*
================================================================================
Section 1: Reference - Quick Guide for shift() and unshift()
================================================================================
These methods manipulate the BEGINNING of an array.

1.  .shift()
    * Syntax: array.shift()
    * What it does: Removes the **first** element from an array and **returns that removed element**.
    * Purpose: Essential for processing data in a queue (FIFO - First-In, First-Out).
    * Example:
        let numbers = [10, 20, 30];
        let first = numbers.shift(); // first is 10, numbers is now [20, 30]

2.  .unshift()
    * Syntax: array.unshift(element1, element2, ...)
    * What it does: Adds one or more elements to the **beginning** of an array and **returns the new length** of the array.
    * Purpose: Adding high-priority items to the front of a list or queue.
    * Example:
        let letters = ['c', 'd'];
        let newLength = letters.unshift('a', 'b'); // newLength is 4, letters is now ['a', 'b', 'c', 'd']

================================================================================
Section 2: Sample Data
================================================================================
*/

let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];
let processingQueue = ["Task 101", "Task 102", "Task 103"];
let recentActivity = ["User Logged In", "Item Added to Cart", "Page Viewed"];
let vipList = ["Alice", "Bob"];
let priorityEmails = [];


/*
================================================================================
Section 3: Challenge Prompts/Questions
================================================================================

// --- Basic Usage and Understanding (Challenges 1-5) ---

// 1. **Current Song Playback**
//    a) Use **shift()** to simulate starting the playback of the first song in the `playlist`.
//    b) Store the name of the song that started playing in a variable named `currentSong`.

// 2. **Adding to a Priority List**
//    a) Add the name "Charlie" to the very beginning of the `vipList` using **unshift()**.

// 3. **Queue Processing**
//    a) Simulate completing the next task in the `processingQueue` using **shift()**.
//    b) Store the completed task in a variable called `completedTask`.

// 4. **New VIP**
//    a) Add "David" and "Eve" to the very beginning of the `vipList` in that order using a single **unshift()** call.
//    b) Store the new length of the `vipList` in a variable named `newVipCount`.

// 5. **Checking the Queue**
//    a) Remove the first item from `recentActivity` and save it to a variable named `oldestActivity`.
//    b) What is the new state of the `recentActivity` array? (No code needed, just think about it!)


// --- Real-World Application & Combined Logic (Challenges 6-10) ---

// 6. **Inserting High-Priority Items**
//    a) An emergency alert "SYSTEM_CRITICAL_ERROR" must be the absolute first item in the `processingQueue`. Add it using **unshift()**.

// 7. **Processing and Logging**
//    a) Process the next task in `processingQueue` (which should be the critical error now) using **shift()**.
//    b) Save the result to a variable named `processedCriticalTask`.

// 8. **Adding Multiple High-Priority Emails**
//    a) Two new urgent emails arrive: "Urgent: Project Deadline" and "Alert: System Backup". Add both to the `priorityEmails` array using **unshift()**, ensuring "Urgent: Project Deadline" is the **very first** element.

// 9. **Queue Management Loop Preparation**
//    a) What would you use if you wanted to keep processing items from `processingQueue` until it's completely empty? (No code, just the array method name and a looping concept like `while` or `for`).

// 10. **Reverse Playback**
//    a) Imagine you want to add "New Intro Jingle" to the very start of the `playlist`. Use **unshift()** to add it.


// --- Intermediate Challenges: Return Values and Conditional Logic (Challenges 11-15) ---

// 11. **Conditional Priority Check**
//    a) Add a new task "Task 404" to the beginning of the `processingQueue` using **unshift()**.
//    b) Immediately check if the **new length** (the value returned by unshift) is greater than 5. If it is, store the boolean `true` in a variable named `queueIsTooLong`.

// 12. **Simulating User Logoff**
//    a) A user just logged off, so the oldest activity needs to be removed from the front of the `recentActivity` array.
//    b) Use **shift()** and save the removed item to `removedLog`.

// 13. **Prepending with a Condition**
//    a) A new user, "Frank," is only added to the `vipList` if the list is currently shorter than 4.
//    b) *New Concept: Conditional Statements* - Use an **if** statement to check the current length of `vipList` before running **unshift()** to add "Frank".
//       *Syntax for checking length:* `if (array.length < number) { ... }`

// 14. **Processing the Last Element**
//    a) Use **shift()** to get the next item from `recentActivity` and store it in `nextActivity`.

// 15. **The Empty Array Return**
//    a) What happens when you try to **shift()** from an empty array? (No code needed, just state the return value).
//    b) If you run **shift()** on `priorityEmails` (which should now be empty after previous challenges or remains empty if you skipped some), what value is returned? Save this returned value to a variable named `shiftResultOnEmpty`.


// --- Advanced Use Cases & Problem Solving (Challenges 16-20) ---

// 16. **Moving an Element to the Front**
//    a) The song "Song C" (which is currently not the first song in `playlist`) is chosen as the next track.
//    b) **Step 1:** First, you need to find and remove "Song C" from wherever it is. (This requires a method we haven't covered, but for this problem, assume it was already handled, and just remove the **current first element** using **shift()** and discard the return value).
//    c) **Step 2:** Now, add "Song C" to the **very front** of the `playlist` using **unshift()**.

// 17. **Maintaining a Fixed-Size History (A common pattern!)**
//    *Goal:* The `recentActivity` array should never have more than 3 activities.
//    a) First, add "Comment Posted" to the front of `recentActivity` using **unshift()**.
//    b) *New Concept: Conditional Removal* - Check if `recentActivity.length` is now greater than 3. If it is, use **shift()** one more time to remove the oldest (last added) item and keep the array size at 3.

// 18. **Chaining Operations (Conceptual)**
//    a) Can you add a new VIP ("Grace") and then immediately check the new count without an intermediate variable? How? (Hint: The return value of unshift is the new length).
//    b) Use **unshift()** on `vipList` to add "Grace" and store the result (the new length) directly in a variable named `finalVipCount`.

// 19. **Simulating a Server Restart**
//    *Goal:* When a server restarts, a set of initial checks must run before any pending tasks.
//    a) The checks are "Check DB Connection" and "Verify Cache". Add them to the beginning of the `processingQueue` using **unshift()**, making sure "Check DB Connection" is the absolute first item.

// 20. **Final Queue Flush**
//    *Goal:* Process all remaining tasks in the `processingQueue` and list them out.
//    a) Create an empty array named `processedTasksLog`.
//    b) *New Concept: The While Loop* - Write a **while loop** that continues as long as the `processingQueue.length` is greater than 0.
//       *Syntax:* `while (array.length > 0) { ... }`
//    c) Inside the loop, use **shift()** to get the next task and **push()** (from your previous lesson!) that task into the `processedTasksLog` array.

/*
================================================================================
End of Worksheet
================================================================================
*/
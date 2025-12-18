/*
================================================================================
Section 1: Reference - Quick Guide for push() and pop()
================================================================================
These methods manipulate the END of an array, simulating a Stack (LIFO: Last-In, First-Out).

1.  .push(element1, element2, ...)
    * Syntax: array.push(element1, element2, ...)
    * What it does: Adds one or more elements to the end of an array and returns the new length of the array.
    * Purpose: To add items to a collection, often used for history, logs, or adding elements to the top of a stack.
    * Example:
        let log = ["Start"];
        let newLength = log.push("Action 1", "Action 2"); // newLength is 3, log is now ["Start", "Action 1", "Action 2"]

2.  .pop()
    * Syntax: array.pop()
    * What it does: Removes the last element from an array and returns that removed element.
    * Purpose: Essential for implementing 'undo' functionality, clearing temporary data, or processing the most recently added item (LIFO).
    * Example:
        let stack = [10, 20, 30];
        let last = stack.pop(); // last is 30, stack is now [10, 20]

================================================================================
Section 2: Sample Data
================================================================================
*/

let browserHistory = ["google.com", "bing.com", "wikipedia.org"]; // Represents browser history pages visited
let draftEmails = []; // Stores emails being composed (saved to a local stack)
let userActions = ["click", "scroll", "input"]; // Logs recent user actions
let undoStack = []; // Used for storing reversible actions
let productsInCart = ["Laptop", "Mouse", "Keyboard"]; // Shopping cart items



// ================================================================================
// Section 3: Challenge Prompts/Questions
// ================================================================================

// 1. New Page Visit
//    a) The user visits "amazon.com". Add this new page to the end of `browserHistory` using push().
//    b) Store the new length of the array in a variable named `historyCount`.
const historyCount = (browserHistory.push("amazon.com"));

// 2. Going Back (Undo)
//    a) The user hits the "Back" button. Use pop() to remove the last visited page from `browserHistory`.
//    b) Store the URL of the removed page in a variable called `lastVisitedPage`.
const lastVisitedPage = (browserHistory.pop());

// 3. Saving a Draft
//    a) A user starts a new email draft: "Subject: Important Update". Use push() to add this string to the `draftEmails` array.
//    b) Another draft is started: "Subject: Follow-up". Add this one to the array as well.
const draftCount = (draftEmails.push("Subject: Important Update"));
draftEmails.push("Subject: Follow Up");

// 4. Complex Item Added to Cart
//    a) A user adds a new item: "Monitor". Use push() to add "Monitor" to the `productsInCart` array.
//    b) Now, a user adds multiple of the same item: "Webcam" and another "Webcam". Add both with a single push() call.
productsInCart.push("Monitor", "Webcam", "Webcam");

// 5. Simulating 'Clear Last Action'
//    a) The user wants to clear the most recent action logged in `userActions`. Use pop() to remove it.
//    b) What is the returned value of the pop() operation? (No code, just state the value).
const poppedAction = userActions.pop();

// 6. Implementing Undo (Setup)
//    a) The user performs an action: "Deleted File X". Use push() to add this action to the `undoStack`.
//    b) The user performs another action: "Renamed Folder Y". Add this to the `undoStack` as well.

// 7. Executing the Undo Command
//    a) The user clicks "Undo". Use pop() to retrieve the last action from the `undoStack` that needs to be reversed.
//    b) Store the returned action string in a variable named `actionToReverse`.

// 8. Bulk Processing
//    a) The server successfully processes all pending drafts. Write a while loop that uses pop() to clear all items from the `draftEmails` array.
//    b) Inside the loop, push() the returned value of each pop() operation into a new array named `sentEmails`.
//       Syntax: `while (array.length > 0) { ... }`

// 9. Fixed-Size Log (Important Concept!)
//    Goal: The `userActions` array should never hold more than 5 actions (it is a rolling history).
//    a) First, add two new actions: "mouse-move" and "hover-card" to `userActions` using push().
//    b) New Concept: Length Check - Check the new length of `userActions` (the value returned by push). If the length is greater than 5, use the shift() method (from your previous lesson!) to remove the oldest element from the beginning of the array.

// 10. The Empty Stack
//    a) After completing Challenge 8, the `draftEmails` array should be empty. What value is returned if you call pop() on an empty array? Store the result in a variable named `emptyPopResult`.


// --- Combining Logic & Advanced Data Structures (Challenges 11-15) ---

// 11. Conditional Addition
//    a) A new page, "support.html", is visited. However, it should only be added to `browserHistory` if the current length is less than 5.
//    b) Use an if statement to check `browserHistory.length` before executing push().

// 12. Processing a LIFO Log (Reverse Order)
//    a) Create a new empty array named `reverseLog`.
//    b) Use a for loop that iterates from the end of the `userActions` array down to the beginning (index 0).
//    c) Inside the loop, use pop() to move elements one by one from `userActions` into the `reverseLog` array.

// 13. Checking for Completion
//    a) The user wants to empty their shopping cart, one item at a time. Use pop() on `productsInCart` and store the item in `itemRemoved`.
//    b) Use another if statement to check if `productsInCart.length` is now equal to 0. If it is, store the string "Cart is Empty" in a variable named `cartStatus`.

// 14. Transaction Rollback (Conceptual)
//    a) An error occurs while processing `itemRemoved`. You need to put the item back into the cart.
//    b) Use push() to add the value stored in `itemRemoved` back into the `productsInCart` array.

// 15. Adding a Complex Data Type
//    a) New Concept: Object Literals - An object is a collection of key-value pairs (e.g., `{ name: "Widget", price: 10 }`).
//       Syntax: `const myObject = { key: value, otherKey: otherValue };`
//    b) A complex log entry needs to be created: an object with properties `type: "error"` and `details: "404 Not Found"`.
//    c) Push this entire object into the `userActions` array.


// --- Challenging Scenarios & Mastery (Challenges 16-20) ---

// 16. Chaining Operations
//    a) The user visits "contact.us". Push this to `browserHistory`.
//    b) Now, without using an intermediate variable, immediately use the pop() method on `browserHistory` and store the result (the "contact.us" string) in a variable named `tempPage`.

// 17. Merging Undo Stacks
//    a) A temporary list of actions, `tempActions = ["Format Text", "Insert Image"]`, needs to be added to the main `undoStack`.
//    b) Use the Spread Syntax (...) with push() to add all elements from `tempActions` to the end of `undoStack` in a single command.
//       Syntax: `array.push(...anotherArray);`

// 18. The 'Redo' Stack
//    a) Create an empty array named `redoStack`.
//    b) For every item you pop() from the `undoStack`, immediately push() it onto the `redoStack`. Do this until `undoStack` is empty (use a `while` loop). This transfers all actions from undo to redo.

// 19. Conditional Log Trimming
//    a) Use push() to add "login-attempt" to `userActions`.
//    b) Write an if/else block:
//       * If the new length of `userActions` is greater than 7, use pop() once.
//       * Else, use pop() twice.

// 20. Final Cart Check
//    a) Use pop() to remove the last item from `productsInCart` (which should be an object from a previous challenge). Store it in `lastItem`.
//    b) Check if `lastItem` is an object and has a property called `type` equal to `"error"`. If it does, push the string `"Error Detected"` onto the `browserHistory` array.
//       Hint: Checking a property: `if (variable.property === "value") { ... }`


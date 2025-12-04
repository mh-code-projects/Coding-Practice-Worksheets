/*
  Section 1: Reference
  Quick Guide to Array Methods & Debugging

  - The purpose of a method:
    Each array method is designed for a specific task. Debugging often involves asking, "Is this method the right one for what I want to accomplish?"

  - Common methods and their purpose:
    - `.push()`: Adds elements to the **end** of an array.
    - `.pop()`: Removes the **last** element from an array.
    - `.shift()`: Removes the **first** element from an array.
    - `.unshift()`: Adds elements to the **beginning** of an array.
    - `.indexOf()`: Finds the **first index** of a specified element. Returns -1 if the element is not found.
    - `.includes()`: Checks if an array **contains** a specified element. Returns a boolean (`true` or `false`).
    - `.slice()`: Creates a **new array** by extracting a section of the original array. It does not modify the original array.
    - `.splice()`: **Modifies an array** by removing, replacing, or adding elements at a specified index.

  - Return values:
    Many methods modify the array in place and return something else (like the new length or the removed element). Other methods, like `.slice()` and `.map()`, return a new array without changing the original.

  Section 2: Sample Data
*/

let inventory = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let studentScores = [85, 92, 78, 92, 65];
let toDoList = ["Read a book", "Walk the dog", "Finish homework"];

/*
  Section 3: Challenge Prompts
*/

/*
  Challenge 1: Fixing a `splice()` blunder.
  The following code is trying to remove the item "Keyboard" from the `inventory` array and save the removed item to a variable.
  It has both a **Syntax Error** and a **Logic Error**.
  Your task is to fix it so that "Keyboard" is removed, and the `removedItem` variable correctly holds "Keyboard".
*/
// function removeItem(array, item) {
//   const index = array.indexOf(item);
//   const removedItem = array.slice(index, 1);
//   return removedItem;
// }

// const removedGadget = removeItem(inventory, "Keyboard");
// console.log("Removed item:", removedGadget);
// console.log("Updated inventory:", inventory);


/*
  Challenge 2: Confusing `.push()` with `.unshift()`.
  This function is meant to add a new task to the **beginning** of the `toDoList` array and then return the updated list.
  It has a **Logic Error** related to the method being used, and a **Syntax Error**.
  Fix the function so it adds the new task to the start and correctly logs the full updated list.
*/
// function addNewTaskToStart(tasks, newTask) {
//   tasks.push(newTask);
//   return tasks;
// }

// addNewTaskToStart(toDoList, "Buy groceries");
// console.log("Updated To-Do List:", toDoList);


/*
  Challenge 3: The `.indexOf()` and `.includes()` mix-up.
  The following function is supposed to check if the student scored a perfect 100 on any test.
  It has a **Logic Error** and a **Syntax Error**.
  Fix the code so that it correctly returns a boolean (`true` or `false`) indicating if a score of 100 is present.
*/
// function hasPerfectScore(scores) {
//   return scores.indexOf(100) === "true";
// }

// const didScorePerfectly = hasPerfectScore(studentScores);
// console.log("Did the student get a perfect score?", didScorePerfectly);


/*
  Challenge 4: Misunderstanding `.slice()` vs. `.splice()`.
  This function is intended to create a **new array** containing only the first two items from the `inventory` array, without changing the original `inventory`.
  It has multiple **Logic Errors** and a **Syntax Error**.
  Fix the code so it returns a new array and leaves the original `inventory` unchanged.
*/
// function getFirstTwoItems(array) {
//   const firstTwo = array.splice(0, 2);
//   return firstTwo;
// }

// const firstItems = getFirstTwoItems(inventory);
// console.log("First two items:", firstItems);
// console.log("Original inventory:", inventory);

/*
  Challenge 5: Combining multiple methods and a logic flaw.
  This function is meant to take a list of tasks, remove the last item, and then add a new item to the front.
  It has a **Logic Error** related to the return value of a method and a **Syntax Error**.
  The goal is for the function to return the final, modified array.
  Fix the function to correctly perform these operations and return the final `toDoList`.
*/
// function updateTaskList(tasks, newFirstTask) {
//   const removedTask = tasks.pop;
//   const updatedList = tasks.push(newFirstTask);
//   return updatedList;
// }

// const finalToDoList = updateTaskList(toDoList, "Call the doctor");
// console.log("Final To-Do List:", finalToDoList);
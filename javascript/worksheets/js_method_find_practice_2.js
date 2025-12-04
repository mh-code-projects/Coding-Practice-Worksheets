// --- Sample Data: Our class of students ---
const students = [
  { id: 1, name: 'Alice', grade: 92, subjects: ['Math', 'Science'] },
  { id: 2, name: 'Bob', grade: 85, subjects: ['History', 'Art'] },
  { id: 3, name: 'Charlie', grade: 95, subjects: ['Math', 'English'] },
  { id: 4, name: 'Diana', grade: 78, subjects: ['Science', 'History'] },
  { id: 5, name: 'Eve', grade: 92, subjects: ['English', 'Art'] },
];

/*
  ----------------------------------------------------------------------------------------------------------------
  --- Reference: Quick Guide ---

  .find()
  - Syntax: array.find(element => condition)
  - What it does: Returns the VALUE of the FIRST element in the array that satisfies the provided condition.
  - Returns: The element itself (e.g., an object) or 'undefined' if no element is found.

  .findIndex()
  - Syntax: array.findIndex(element => condition)
  - What it does: Returns the INDEX of the FIRST element in the array that satisfies the provided condition.
  - Returns: The index (a number, e.g., 0, 1, 2) or -1 if no element is found.

  ----------------------------------------------------------------------------------------------------------------
*/

// --- Challenge 1: Find a student by name ---
// Use .find() to find the student named 'Charlie'.
// Store the result in a variable named 'charlie'.

// --- Challenge 2: Find the index of a student with a specific grade ---
// Use .findIndex() to find the index of the first student who has a grade of exactly 92.
// Store the index in a variable named 'highAchieverIndex'.

// --- Challenge 3: Find a student by name again, but using a reusable function ---
// Create a function called 'findStudentByName' that takes a student name as a parameter.
// Inside the function, use .find() to locate the student with that name.
// The function should return the student object.
// Use your new function to find 'Diana'.

// --- Challenge 4: Combining methods ---
// Use .findIndex() to find the index of the student named 'Eve'.
// Then, use that index to access her name from the students array and store it in a variable called 'eveName'.
// What happens if you try to use .find() to get the index directly?
// Hint: Remember that .find() returns the value, not the index.

// --- Challenge 5: Find a student in multiple subjects ---
// Use .find() to find the first student who is taking both 'Math' and 'Science'.
// Store the result in a variable named 'dualSubjectStudent'.
// Hint: Look at the 'subjects' property of each student object and use a logical operator to check for both subjects.
/*
=========================================================
💻 Practice Worksheet: Nested Data & Safe Access
=========================================================
Focus: Safely iterating over complex, nested data structures using array methods, Optional Chaining (?.), and Nullish Coalescing (??).

-----------------------------------------------------
Section 1: Reference: Key Concepts
-----------------------------------------------------
* Optional Chaining (?.): Safely access deeply-nested properties. Returns 'undefined' instead of throwing an error if a property is missing.
* Nullish Coalescing (??): Provides a default value when the expression to its left is exactly 'null' or 'undefined'.
* Nested Iteration: Combining array methods (e.g., .map() followed by .flatMap() or .flat()) to reach deeply-embedded arrays.

*/

// -----------------------------------------------------
// Section 2: Sample Data
// -----------------------------------------------------
const companyData = [
  {
    dept: "Marketing",
    location: "NY",
    employees: [
      { id: 1, name: "Alice", active: true, seniority: 5, reports: ["Ben", "Chad"] },
      { id: 2, name: "Bob", active: false, seniority: 2, reports: [] },
    ],
  },
  {
    dept: "Engineering",
    location: "SF",
    employees: [
      { id: 3, name: "Chris", active: true, seniority: 10, reports: ["David"] },
      { id: 4, name: "Dana", active: true, seniority: 4, reports: [] },
    ],
  },
  {
    dept: "Sales",
    location: "LA",
    employees: [
      { id: 5, name: "Evan", active: true, seniority: 7, reports: ["Fiona"] },
    ],
  },
  {
    dept: "HR",
    location: "Remote",
    employees: null, // DELIBERATE null value for testing optional chaining
  },
];

/*
-----------------------------------------------------
Section 3: Challenge Prompts (10 Problems)
-----------------------------------------------------
*/

/*
🚀 Challenge 1: Simple Nested Mapping
A) Create a new array containing the names of ALL employees across ALL departments.
B) Hint: You will need to use **.flatMap()** or combine **.map()** with **.flat()** to achieve a single array.
*/


/*
🚀 Challenge 2: Accessing a Deeply Nested Property (Safe Access)
A) Attempt to access the 'name' of the first employee in the 'HR' department (companyData[3]), which has 'employees: null'.
B) Use **Optional Chaining** (?. ) to prevent a crash.
C) The final result should be **'undefined'**, not an error.
*/


/*
🚀 Challenge 3: Defaulting Missing Data (Nullish Coalescing)
A) Create a variable to hold the city from a deeply nested, *hypothetically* missing address: 
   companyData[2].address?.city.
B) Use **Nullish Coalescing** (??) to set the result to **"City Not Available"** if the access returns undefined.
C) The final value should be "City Not Available" since 'address' is not defined on the Sales department object.
*/


/*
🚀 Challenge 4: Summing a Nested Property Safely
A) Create a variable that holds the total sum of 'seniority' years for ALL employees across ALL departments.
B) You must safely handle the case where the 'employees' array is **null** (like the HR department), preventing a crash.
C) Hint: Use **?.** before accessing the nested array, and provide an empty array as a fallback for the iteration.
*/


/*
🚀 Challenge 5: Conditional Transformation based on Nested Data Length
A) Create a new array of strings. Map over the main 'companyData' array. For each department, the string should be:
   - "[DEPT] is a large team." if it has 2 or more employees.
   - "[DEPT] is a small team." if it has 1 employee.
   - "[DEPT] has no employees." if the employees array is **null** or **empty**.
*/


/*
🚀 Challenge 6: Flattening, Filtering, and Mapping
A) Create a new array containing the 'name' of every employee who is **active: true** AND has been with the company 
   for **5 or more years** (seniority >= 5).
B) You must first flatten the list of employees, then filter, then map.
*/


/*
🚀 Challenge 7: Counting Nested Array Items
A) Create a variable to count the **total number of people ALL employees report to**.
B) You need to sum the **length** of all 'reports' arrays across all employees in all departments.
C) Remember to safely handle the HR department.
*/


/*
🚀 Challenge 8: Deep Object Transformation (Removing Properties)
A) Create a new array of objects (one per department). Map over the main 'companyData' array.
B) For each department, return a copy of the department object, but with the nested 'employees' 
   array transformed so that each employee object only contains the **'name'** and **'id'**. All other properties should be removed.
C) Hint: Use the spread operator {...employee} inside your inner map, but selectively spread the properties you want.
*/


/*
🚀 Challenge 9: Checking for Deep Existence
A) Create a variable that is a boolean (`true`/`false`). It should return **true** only if ANY department has 
   an employee with a seniority of **10 years or more**.
B) Hint: Combine **.some()** with nested array access and safety checks.
*/


/*
🚀 Challenge 10: Safely Accessing a Specific Employee Property
A) Create a variable to find the 'reports' array for the employee named "Evan".
B) Use array methods to first find the correct department, then find the correct employee object.
C) Use **Optional Chaining** (?. ) to safely retrieve the 'reports' property, guarding against the department or employee not being found.
D) Chain **Nullish Coalescing** (??) to return an **empty array `[]`** if "Evan" or his reports are not found.
*/
/*
=========================================================
💻 Practice Worksheet: JavaScript Array .map() Method (Expanded)
=========================================================
Focus: Mastering the .map() method for data transformation and UI preparation.

-----------------------------------------------------
Section 1: Reference: Quick Guide for .map()
-----------------------------------------------------
* Purpose: Creates a new array populated with the results of calling a provided function on 
    every element in the calling array. It never changes the original array.
* Syntax: newArray = originalArray.map(callbackFunction)
* Callback Arguments: 
    1. element (The current element being processed) 
    2. index (The index of the current element) 
    3. array (The array map was called upon)
* Example: 
    const nums = [1, 2]; 
    const doubled = nums.map(n => n * 2); // doubled is [2, 4]
*/

// -----------------------------------------------------
// Section 2: Sample Data
// -----------------------------------------------------
const temperaturesFahrenheit = [32, 69, 86, 104, 50, 41, 77, 95];

const userProfiles = [
  { id: 101, name: "Alex Johnson", isActive: true, role: "User", monthlyCost: 100 },
  { id: 205, name: "Beth Smith", isActive: false, role: "Guest", monthlyCost: 0 },
  { id: 312, name: "Chris Lee", isActive: true, role: "Admin", monthlyCost: 150 },
  { id: 400, name: "Dana White", isActive: true, role: "User", monthlyCost: 100 },
  { id: 550, name: "Evan Miller", isActive: false, role: "Admin", monthlyCost: 150 }
];

/*
-----------------------------------------------------
Section 3: Challenge Prompts 
-----------------------------------------------------
*/

/*
 Challenge 1: Simple Numeric Transformation
A) Create a new array containing temperatures converted to Celsius.
B) Use .map() on 'temperaturesFahrenheit'.
C) Reference: (F - 32) * 5/9. Round the result to two decimal places.
D) New Concept: toFixed() - (Number).toFixed(n) returns a string rounded to n decimal places.
*/
let convertedTemp = temperaturesFahrenheit.map(tempF => {
   const celsius = ((tempF - 32) * 5/9);
   return celsius.toFixed(2);
   });

/*
 Challenge 2: Extracting a Single Property
A) Create a new array containing only the full 'name' of each user from 'userProfiles'.
*/
let fullNamesOnly = userProfiles.map(user => user.name);

/*
 Challenge 3: Adding a Calculated Property
A) Create a new array of objects.
B) For each user object, return a NEW object that includes all original properties 
   PLUS a new property called 'statusMessage'.
C) 'statusMessage' should be "Active" if 'isActive' is true, or "Inactive" otherwise.
D) Hint: Use the spread syntax {...user} to copy the original properties.
*/

const userStatusArray = userProfiles.map(user =>  {

})

// const userStatusArray = userProfiles.map(user => [...user] {
   
   // userStatusArray += 
//    //if statement to decide how to mark the new StatusMessage property
//    //return completed user object
});



/*
 Challenge 4: Simple String Transformation (All Caps)
A) Create a new array containing the 'name' of each user from 'userProfiles' converted to UPPERCASE.
C) Reference: Use the .toUpperCase() string method.
*/


/*
 Challenge 5: Creating HTML-like Structure (Using Index)
A) Create a new array of strings.
B) Use .map() on the 'userProfiles' array, utilizing the 'index' argument.
C) Convert each user object into a string formatted as an HTML list item: 
   Example output format: "<li>1. Alex Johnson</li>"
*/


/*
 Challenge 6: Combining Properties into a Single String
A) Create a new array of strings.
B) For each user, return a single string that combines their ID and Role:
   Example output format: "ID-101: User"
*/


/*
 Challenge 7: Applying a Percentage Discount
A) Create a new array of objects.
B) For each user, return a NEW object that includes all properties PLUS a new property 
   called 'discountedCost'.
C) 'discountedCost' should be the original 'monthlyCost' minus 10% (i.e., monthlyCost * 0.9).
D) Use toFixed(2) on the cost, then convert the result back to a number using Number()
   so the final 'discountedCost' property is a number, not a string.
*/


/*
 Challenge 8: Boolean Flag Based on Condition
A) Create a new array of boolean values.
B) Use .map() on 'temperaturesFahrenheit'.
C) For each temperature, return `true` if it is greater than 70 degrees Fahrenheit, 
   and `false` otherwise.
*/


/*
 Challenge 9: Conditional Role Transformation
A) Create a new array of objects.
B) If the user's 'role' is "Guest", return a NEW object where the 'role' is changed to "Temporary User" 
   AND 'monthlyCost' is set to 25.
C) For all other roles, return the original object unchanged (Hint: you still need to return something!).
*/


/*
 Challenge 10: Chaining Map for Multi-Step Transformation
A) Create a new array of strings called 'finalUserSummaries'.
B) Use a chain of two .map() calls on the 'userProfiles' array to achieve the following:
1. First Map: Add a new property called 'isPremium' to every user. Set it to 'true' if
   'monthlyCost' is 150, and 'false' otherwise.
2. Second Map (Chained): Transform the result of the first map into a simple string summary:
   - If 'isPremium' is true, the string should be: "[NAME] is a Premium [ROLE]".
   - If 'isPremium' is false, the string should be: "[NAME] is a Standard [ROLE]".
*/
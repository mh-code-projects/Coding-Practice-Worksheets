// =======================================================
// Section 1: Reference — Quick Guide for Array.prototype.filter
// =======================================================
//
// Purpose:
// filter is used to create a NEW array containing elements
// that pass a test implemented by a callback function.
// It is commonly used to narrow data sets, enforce rules,
// or derive meaningful subsets of information.
//
// Syntax:
// array.filter(callbackFn, thisArg)
//
// Callback Parameters (in order):
// 1) currentValue → the current element being processed
// 2) index        → the index of the current element
// 3) array        → the original array filter was called on
//
// thisArg:
// An optional value to use as `this` when executing callbackFn.
// Useful for reusable logic, configuration objects, or rulesets.
//
// Example (syntax only):
// array.filter(function(currentValue, index, array) {
//   // return a boolean
// }, thisArg)
//
//
// =======================================================
// Section 2: Sample Data (used throughout the worksheet)
// =======================================================

const users = [
  { id: 1, name: "Ava", age: 17, role: "user", active: true },
  { id: 2, name: "Noah", age: 24, role: "admin", active: false },
  { id: 3, name: "Liam", age: 32, role: "user", active: true },
  { id: 4, name: "Emma", age: 29, role: "moderator", active: true },
  { id: 5, name: "Olivia", age: 15, role: "user", active: false },
  { id: 6, name: "Mason", age: 41, role: "admin", active: true }
]

const numbers = [12, 5, 8, 130, 44, 3, 27]

const permissionsConfig = {
  minAge: 18,
  allowedRoles: ["admin", "moderator"]
}


// =======================================================
// Section 3: Challenge Prompts
// =======================================================

// -------------------------------------------------------
c

// -------------------------------------------------------
// Challenge 2: Using index for conditional logic
// -------------------------------------------------------
// Filter the numbers array to keep only values that are
// located at EVEN indexes.
// Use the index parameter to make your decision.


// -------------------------------------------------------
// Challenge 3: Using the original array parameter
// -------------------------------------------------------
// Filter the numbers array to keep values that are
// greater than the AVERAGE of the entire array.
// Use the array parameter to compute the comparison value
// dynamically inside the callback.


// -------------------------------------------------------
// Challenge 4: Filtering objects by multiple conditions
// -------------------------------------------------------
// From the users array, filter out users who:
// - are active
// - and are 18 years or older
// Use only the currentValue parameter for this challenge.


// -------------------------------------------------------
// Challenge 5: Using index with objects
// -------------------------------------------------------
// Filter the users array to keep only users whose position
// in the array is NOT the same as their id minus one.
// This challenge emphasizes reasoning about index vs data.


// -------------------------------------------------------
// Challenge 6: Introducing thisArg (new concept)
// -------------------------------------------------------
// thisArg allows you to inject external configuration or rules
// into your filter logic using `this`.
//
// Example syntax reminder:
// array.filter(function(item) {
//   return item.value > this.threshold
// }, configObject)
//
// Task:
// Filter the users array to include only users who:
// - meet the minimum age defined in permissionsConfig
// - AND whose role exists in permissionsConfig.allowedRoles
// Use thisArg instead of referencing permissionsConfig directly.


// -------------------------------------------------------
// Challenge 7: Combining all parameters together
// -------------------------------------------------------
// Filter the users array using ALL of the following:
// - currentValue to inspect user properties
// - index to exclude the first user in the array
// - array to compare the user's age against the oldest user
// - thisArg to enforce role-based permission rules
//
// The goal is to return a refined, rule-driven subset
// that demonstrates full mastery of filter’s capabilities.


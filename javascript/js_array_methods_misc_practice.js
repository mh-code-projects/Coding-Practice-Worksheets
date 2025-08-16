// 🆕 JavaScript Practice Worksheet: Modern Array Methods

// 🔧 Sample Data
const numbers = [10, 20, 30, 40, 50, 60];
const fruits = ["apple", "banana", "cherry", "date"];
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Carol", age: 35 },
  { id: 4, name: "Dave", age: 28 },
];

// ---

// Method: .findLast()
// Returns the last element that matches the condition

// Example:
// const lastOver30 = users.findLast(user => user.age > 30);

// Practice:
// 1. Find the last number over 25
// 2. Find the last fruit that starts with a vowel
// 3. Find the last user younger than 30


// Method: .findLastIndex()
// Returns the index of the last matching element

// Example:
// const index = numbers.findLastIndex(n => n < 50);

// Practice:
// 1. Get index of last number divisible by 10
// 2. Find index of last fruit with 6+ letters
// 3. Find index of last user named with 4 letters


// Method: .reverse()
// Reverses the array in place (mutates original)

// Example:
// numbers.reverse();

// Practice:
// 1. Reverse the numbers array
// 2. Reverse fruits
// 3. Log reversed users array


// Method: .toReversed()
// Returns a reversed **copy** of the array (does NOT mutate original)

// Example:
// const reversed = numbers.toReversed();

// Practice:
// 1. Store a reversed copy of fruits without changing the original
// 2. Log original and reversed numbers side by side
// 3. Use .toReversed() to reverse a string converted to array


// Method: .toSorted()
// Returns a sorted copy (non-mutating version of .sort())

// Example:
// const sorted = numbers.toSorted((a, b) => b - a);

// Practice:
// 1. Sort users by age without modifying original
// 2. Sort fruits by last letter
// 3. Sort numbers descending with .toSorted()


// Method: .toSpliced()
// Like .splice() but returns a modified copy (does NOT mutate original)

// Example:
// const newFruits = fruits.toSpliced(1, 1); // removes 1 item at index 1

// Practice:
// 1. Create a new array with 2nd fruit removed
// 2. Replace the 3rd number with 99 using .toSpliced()
// 3. Insert "kiwi" at index 1 without touching original


// Method: .with()
// Returns a copy of the array with one element replaced at given index

// Example:
// const updated = fruits.with(0, "grape");

// Practice:
// 1. Replace the first fruit with "plum"
// 2. Replace last number with 100
// 3. Change 2nd user’s name to "Eve" using .with() on mapped names

/* =========================================================
Section 1: Reference — Quick Guide for Factory Functions (JS)
========================================================= */

/*
Factory Function:
A factory function is a regular function that returns a new object.
It "manufactures" objects without using the `new` keyword or classes.

Why use factory functions?
- Avoids `this` confusion
- Easy to compose and reuse behavior
- Can create private data via closures
- Flexible compared to classes

Basic Syntax:

function createThing(param1, param2) {
  return {
    property: param1,
    method() {
      // behavior
    }
  }
}

Key Idea:
Each time the factory function is called, a brand-new object is created.
The returned object can "remember" variables defined inside the factory
through closures.
*/

/*
Closures (important concept):
A closure allows an inner function to access variables from its outer
function even after the outer function has finished executing.

Factory functions often rely on closures to:
- Protect internal state
- Expose controlled ways to read or modify data
*/


/* =========================================================
Section 2: Sample Data (use throughout the worksheet)
========================================================= */

const usersData = [
  { name: "Alex", role: "admin", active: true },
  { name: "Jordan", role: "editor", active: false },
  { name: "Taylor", role: "viewer", active: true }
];

const inventoryData = [
  { item: "Laptop", quantity: 4 },
  { item: "Monitor", quantity: 12 },
  { item: "Keyboard", quantity: 25 }
];


/* =========================================================
Section 3: Challenge Prompts
========================================================= */

/*
Challenge 1: Your First Factory Function
---------------------------------------
Create a factory function that produces a simple user object.

Requirements:
- The factory should accept a name and role
- The returned object should store both values
- Include a method that returns a readable description of the user

Focus:
Understanding how a function can return an object with data and behavior.
*/



/*
Challenge 2: Multiple Objects from One Factory
----------------------------------------------
Using the same factory pattern, create multiple user objects
based on the `usersData` array.

Requirements:
- Create one object per entry in `usersData`
- Each object should behave independently
- Changing one object should not affect the others

Focus:
Recognizing that factory functions create new object instances every time.
*/


/*
Challenge 3: Encapsulating Private State with Closures
------------------------------------------------------
Create a factory function that manages an "active" status.

Requirements:
- The active value should NOT be directly accessible from outside
- Provide methods to:
  - Check whether the user is active
  - Toggle the active state

New Concept:
Private variables via closures

Example pattern (conceptual):

function factory() {
  let privateValue = ...
  return {
    method() {
      // can access privateValue
    }
  }
}

Focus:
Understanding how closures protect internal data.
*/


/*
Challenge 4: Factory Functions vs Shared Behavior
-------------------------------------------------
Create a factory function for inventory items.

Requirements:
- Accept item name and starting quantity
- Provide methods to:
  - Increase quantity
  - Decrease quantity (prevent going below zero)
  - Read the current quantity

Think About:
- What data should be private?
- What behavior should be exposed?

Focus:
Designing intentional public APIs for objects.
*/


/*
Challenge 5: Composing Factories (Advanced)
-------------------------------------------
Create smaller factory functions that focus on ONE responsibility,
then combine them into a larger factory.

Example idea:
- One factory handles naming
- One factory handles state (active/inactive)
- One factory handles permissions or actions

Requirements:
- Combine multiple factories into a single returned object
- Avoid duplicating logic
- Each factory should remain reusable on its own

New Concept:
Composition over inheritance

Focus:
Seeing how factory functions scale in real-world design.
*/


/*
Challenge 6: Real-World Use Case Reflection
-------------------------------------------
Design a factory function for something realistic:
examples include:
- A bank account
- A game character
- A settings manager
- A notification system

Requirements:
- Include at least one private variable
- Include multiple public methods
- Clearly separate internal logic from external usage

Focus:
Understanding not just how to use factory functions,
but WHY they are powerful in application design.
*/

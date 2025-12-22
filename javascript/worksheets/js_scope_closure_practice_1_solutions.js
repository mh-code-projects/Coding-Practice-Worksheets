/* ============================================================
Section 1: Reference — Quick Guide for Scope & Closures in JavaScript
============================================================

SCOPE
-----
Scope determines where variables can be accessed in your code.
JavaScript has several important types of scope:

1) Global Scope
- Variables declared outside any function or block
- Accessible anywhere in the file

2) Function Scope
- Variables declared inside a function
- Accessible only within that function

3) Block Scope
- Variables declared with let or const inside {}
- Accessible only within that block (if, for, while, etc.)

KEYWORD BEHAVIOR
----------------
var   → function-scoped, can leak outside blocks
let   → block-scoped
const → block-scoped, cannot be reassigned

WHY SCOPE MATTERS
-----------------
- Prevents variable name collisions
- Controls data exposure
- Makes programs easier to reason about
- Enables powerful patterns like closures


CLOSURES
--------
A closure is created when a function "remembers" variables from
its outer scope, even after that outer function has finished executing.

In simple terms:
- Functions can carry their surrounding data with them

WHY CLOSURES MATTER
------------------
- Data privacy (encapsulation)
- State that persists between function calls
- Factory functions
- Event handlers, callbacks, async logic

BASIC CLOSURE SYNTAX EXAMPLE
----------------------------
function outer() {
  let value = 0

  function inner() {
    value = value + 1
    return value
  }

  return inner
}

The returned function still has access to `value`,
even after `outer` has finished running.
============================================================ */


/* ============================================================
Section 2: Sample Data (Use Throughout the Worksheet)
============================================================ */

let globalCount = 10

let users = [
  { name: "Alex", role: "admin" },
  { name: "Jamie", role: "editor" },
  { name: "Sam", role: "viewer" }
]

let prices = [5, 10, 15, 20]


/* ============================================================
Section 3: Challenge Prompts — Scopes & Closures
============================================================ */


/* ------------------------------------------------------------
Challenge 1: Global vs Function Scope
------------------------------------------------------------
Create a function that modifies `globalCount` using a local variable.
Then attempt to access that local variable outside the function.

Goal:
- Observe what is accessible and what is not
- Identify which variable lives in which scope
------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 2: Block Scope with let and const
------------------------------------------------------------
Write a loop that declares a variable using `let` inside the loop block.
Try to access that variable after the loop finishes.

Then repeat the exercise mentally using `var`.

Goal:
- Understand how block scope differs from function scope
- See why `let` and `const` are safer in modern JavaScript
------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 3: Shadowing Variables
------------------------------------------------------------
Declare a variable in the global scope.
Declare another variable with the same name inside a function.

Use both variables inside the function and outside of it.

Goal:
- Understand variable shadowing
- Learn how JavaScript resolves variable names through scope chains
------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 4: First Closure — Remembering State
------------------------------------------------------------
Create a function that:
- Declares a variable inside it
- Returns an inner function that updates and uses that variable

Call the returned function multiple times.

Goal:
- Observe how the inner function "remembers" the variable
- Understand that the outer function does NOT re-run each time
------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 5: Closure as a Data Privacy Tool
------------------------------------------------------------
Create a function that:
- Stores a private value (not accessible directly)
- Returns an object with methods that can read or update that value

Do NOT expose the variable directly.

Goal:
- Use closures to protect data
- Understand encapsulation without classes
------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 6: Closures Inside Loops
------------------------------------------------------------
Using a loop, create multiple functions that each remember
a different value from the loop iteration.

Call each function later and verify they remember
the correct value.

New Concept:
- Closures capture variables, not snapshots
- Block scoping can prevent common bugs

------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 7: Real-World Closure Use Case
------------------------------------------------------------
Create a function that acts like a "counter factory":
- Each time the factory runs, it creates an independent counter
- Each counter maintains its own internal state

Create multiple counters and use them independently.

Goal:
- Understand how closures enable reusable, stateful logic
- See why closures are common in libraries and frameworks
------------------------------------------------------------ */


/* ------------------------------------------------------------
Challenge 8: Reasoning About Scope Chains
------------------------------------------------------------
Create nested functions (at least 3 levels deep).
Declare variables at different levels.

Inside the innermost function:
- Access variables from all outer scopes
- Try accessing a variable that does not exist in the chain

Goal:
- Visualize how JavaScript searches for variables
- Strengthen intuition for debugging scope-related bugs
------------------------------------------------------------ */

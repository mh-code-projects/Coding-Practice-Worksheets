/* ============================================================
SECTION 1: REFERENCE — QUICK GUIDE FOR JAVASCRIPT CONSTRUCTORS
===============================================================

PURPOSE:
Constructors are used to create many objects that share the same
structure and behavior, while allowing each object to store its
own unique data.

KEY IDEAS:
- Constructors act as blueprints for objects
- The `new` keyword automates object creation
- `this` refers to the instance being created
- Prototypes allow behavior to be shared efficiently

CORE SYNTAX (REFERENCE ONLY):

function ConstructorName(param1, param2) {
  this.property1 = param1
  this.property2 = param2
}

ConstructorName.prototype.methodName = function () {
  // shared behavior
}

WHAT `new` DOES:
1. Creates a new empty object
2. Binds `this` to that object
3. Links the object to ConstructorName.prototype
4. Returns the object automatically

WHY PROTOTYPES MATTER:
- Methods defined inside constructors are duplicated per instance
- Methods defined on the prototype are shared across all instances
- This saves memory and improves scalability

INSTANCE CHECKING:
- instanceof checks whether an object was created by a constructor

CONSTRUCTOR CHAINING:
- ParentConstructor.call(this, args)
- Allows reuse of initialization logic

ES6 CLASSES:
- Classes are syntax sugar over constructors + prototypes
- Understanding constructors explains how classes work internally

=============================================================== */


/* ============================================================
SECTION 2: SAMPLE DATA
(Used throughout the worksheet)
=============================================================== */

usersData = [
  { username: "alpha", role: "admin", active: true },
  { username: "bravo", role: "editor", active: false },
  { username: "charlie", role: "viewer", active: true }
]

productsData = [
  { title: "Laptop", price: 1200, stock: 4 },
  { title: "Phone", price: 800, stock: 10 },
  { title: "Tablet", price: 600, stock: 0 }
]


/* ============================================================
SECTION 3: CHALLENGE PROMPTS
=============================================================== */


/* ------------------------------------------------------------
LEARNING GOAL 1: WHY CONSTRUCTORS EXIST (SCALING OBJECT CREATION)
--------------------------------------------------------------- */

/*
CHALLENGE 1:
Create three separate object literals that represent users with
the same properties. Use comments to explain why this approach
becomes repetitive and difficult to maintain as the application grows.
*/

/*
CHALLENGE 2:
Imagine an application that needs to create hundreds of user objects.
Write a comment-only explanation describing the problems this would
cause if object literals were used everywhere.
*/

/*
CHALLENGE 3:
From your object literals above, identify which properties logically
belong to a shared blueprint rather than individual objects.
*/


/* ------------------------------------------------------------
LEARNING GOAL 2: BASIC CONSTRUCTOR CREATION
--------------------------------------------------------------- */

/*
CHALLENGE 4:
Create a constructor that produces User objects with the following
properties:
- username
- role
- active
*/

/*
CHALLENGE 5:
Using the constructor, create at least three User instances using
values from usersData.
*/

/*
CHALLENGE 6:
In comments, explain how `this` behaves inside a constructor compared
to a normal function call.
*/

/*
CHALLENGE 7:
Write a step-by-step explanation (in comments) of what happens when
the `new` keyword is used with your constructor.
*/


/* ------------------------------------------------------------
LEARNING GOAL 3: INSTANCE INDEPENDENCE
--------------------------------------------------------------- */

/*
CHALLENGE 8:
Change a property on one User instance.
Explain in comments why the other instances are unaffected.
*/

/*
CHALLENGE 9:
Add a new property to only one User instance.
Explain why the other instances do not receive this property.
*/

/*
CHALLENGE 10:
Explain (in comments) how constructor parameters allow customization
without breaking shared structure.
*/


/* ------------------------------------------------------------
LEARNING GOAL 4: METHODS INSIDE CONSTRUCTORS
--------------------------------------------------------------- */

/*
CHALLENGE 11:
Add a method inside the User constructor that returns a descriptive
string about the user.
*/

/*
CHALLENGE 12:
Create multiple User instances and explain (in comments) how many
copies of this method exist in memory.
*/

/*
CHALLENGE 13:
Add a second method inside the constructor and explain why defining
methods this way can become inefficient at scale.
*/


/* ------------------------------------------------------------
LEARNING GOAL 5: PROTOTYPES AND SHARED BEHAVIOR
--------------------------------------------------------------- */

/*
NEW CONCEPT: PROTOTYPE METHODS
Syntax reference:
ConstructorName.prototype.methodName = function () { }
*/

/*
CHALLENGE 14:
Move one previously created method from inside the constructor onto
the User prototype.
*/

/*
CHALLENGE 15:
Add another prototype method that checks whether a user is active.
*/

/*
CHALLENGE 16:
Explain (in comments) how JavaScript finds prototype methods when
they are called on an instance.
*/

/*
CHALLENGE 17:
Compare memory usage between constructor-defined methods and
prototype-defined methods using comments.
*/


/* ------------------------------------------------------------
LEARNING GOAL 6: INSTANCE VS PROTOTYPE PROPERTIES
--------------------------------------------------------------- */

/*
CHALLENGE 18:
Add a property directly to one User instance that shadows a method
on the prototype. Explain (in comments) what happens when it is accessed.
*/

/*
CHALLENGE 19:
Write a step-by-step explanation (in comments) of the prototype
lookup order.
*/

/*
CHALLENGE 20:
Add a shared property to the User prototype and explain how all
instances are able to access it.
*/


/* ------------------------------------------------------------
LEARNING GOAL 7: INSTANCE CHECKING & IDENTITY
--------------------------------------------------------------- */

/*
CHALLENGE 21:
Use instanceof to verify that an object was created by the User
constructor.
*/

/*
CHALLENGE 22:
Explain (in comments) how instanceof works conceptually.
*/

/*
CHALLENGE 23:
Describe a real-world scenario (in comments) where instanceof
would be useful in an application.
*/


/* ------------------------------------------------------------
LEARNING GOAL 8: CONSTRUCTOR CHAINING (REUSING LOGIC)
--------------------------------------------------------------- */

/*
NEW CONCEPT: CONSTRUCTOR CHAINING
Syntax reference:
ParentConstructor.call(this, args)
*/

/*
CHALLENGE 24:
Create a Product constructor using fields from productsData.
*/

/*
CHALLENGE 25:
Create a DiscountedProduct constructor that:
- Reuses Product initialization logic
- Adds a discount property
*/

/*
CHALLENGE 26:
Explain (in comments) why constructor chaining helps prevent
duplicated logic.
*/

/*
CHALLENGE 27:
Add a prototype method to Product that DiscountedProduct instances
can still access. Explain why this works.
*/


/* ------------------------------------------------------------
LEARNING GOAL 9: MODELING REAL-WORLD SYSTEMS
--------------------------------------------------------------- */

/*
CHALLENGE 28:
Design a constructor that models a real-world entity such as:
Order, Message, Session, or Subscription.
*/

/*
CHALLENGE 29:
Identify which properties belong on the instance and which behaviors
belong on the prototype. Explain your reasoning in comments.
*/

/*
CHALLENGE 30:
Add at least one shared behavior that would logically apply to all
instances of your model.
*/


/* ------------------------------------------------------------
LEARNING GOAL 10: TRANSITION TO ES6 CLASSES (CONCEPTUAL)
--------------------------------------------------------------- */

/*
CHALLENGE 31:
Rewrite one of your constructor-based models using ES6 class syntax.
*/

/*
CHALLENGE 32:
Map each part of the class back to its constructor/prototype
equivalent using comments.
*/

/*
CHALLENGE 33:
Explain (in comments) why understanding constructors makes learning
ES6 classes significantly easier.
*/


/* ------------------------------------------------------------
FINAL REFLECTION (COMMENT-ONLY)
--------------------------------------------------------------- */

/*
CHALLENGE 34:
Explain the differences between:
- Object literals
- Constructors
- Prototypes
- Classes
*/

/*
CHALLENGE 35:
Describe scenarios where you would intentionally choose constructors
over simple object literals.
*/


/* ===================== END OF WORKSHEET ===================== */

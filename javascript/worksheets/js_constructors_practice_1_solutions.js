/* ============================================================
SECTION 1: REFERENCE — QUICK GUIDE FOR JAVASCRIPT CONSTRUCTORS
===============================================================

function ConstructorName(param1, param2) {
  this.prop1 = param1
  this.prop2 = param2
}

ConstructorName.prototype.methodName = function () {}

new keyword behavior:
1. create empty object
2. bind this
3. link prototype
4. return object

prototype lookup order:
instance -> Constructor.prototype -> Object.prototype -> null

constructor chaining:
Parent.call(this, args)

=============================================================== */


/* ============================================================
SECTION 2: SAMPLE DATA
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
LEARNING GOAL 1: OBJECT LITERALS VS SCALE
--------------------------------------------------------------- */

/*
CHALLENGE 1:
Create three separate user objects using object literals.
*/

let object1 = {name: 'Name1', number: 20};
let object2 = {name: 'Name2', number: 20};
let object3 = {name: 'Name3', number: 20};

/*
CHALLENGE 2:
Add the same new property to all three objects.
*/

object1.color = 'blue';
object2.color = 'red';
object3.color = 'green';

/*
CHALLENGE 3:
Change the structure of one object and align the others.
*/

object1.size = 'large';
object2.size = 'medium';
object3.size = 'small';

/* ------------------------------------------------------------
LEARNING GOAL 2: BASIC CONSTRUCTOR CREATION
--------------------------------------------------------------- */

/*
CHALLENGE 4:
Create a User constructor with username, role, and active properties.
*/

function userConstructor


/*
CHALLENGE 5:
Create three User instances using usersData.
*/

/*
CHALLENGE 6:
Add a fourth instance manually without using usersData.
*/


/* ------------------------------------------------------------
LEARNING GOAL 3: INSTANCE INDEPENDENCE
--------------------------------------------------------------- */

/*
CHALLENGE 7:
Change the role of one User instance.
*/

/*
CHALLENGE 8:
Add a new property to only one instance.
*/

/*
CHALLENGE 9:
Delete a property from one instance.
*/


/* ------------------------------------------------------------
LEARNING GOAL 4: METHODS INSIDE CONSTRUCTORS
--------------------------------------------------------------- */

/*
CHALLENGE 10:
Add a method inside the User constructor.
*/

/*
CHALLENGE 11:
Create multiple instances and call the method on each.
*/

/*
CHALLENGE 12:
Add a second method inside the constructor.
*/


/* ------------------------------------------------------------
LEARNING GOAL 5: PROTOTYPE METHODS
--------------------------------------------------------------- */

/*
CHALLENGE 13:
Move one constructor method onto User.prototype.
*/

/*
CHALLENGE 14:
Add a second prototype method.
*/

/*
CHALLENGE 15:
Call prototype methods from multiple instances.
*/


/* ------------------------------------------------------------
LEARNING GOAL 6: PROTOTYPE CHAIN WALKING
--------------------------------------------------------------- */

/*
CHALLENGE 16:
Access a prototype method from an instance.
*/

/*
CHALLENGE 17:
Override a prototype method on a single instance.
*/

/*
CHALLENGE 18:
Delete the overridden method and access it again.
*/


/* ------------------------------------------------------------
LEARNING GOAL 7: INSTANCE CHECKING
--------------------------------------------------------------- */

/*
CHALLENGE 19:
Check if a User instance is an instance of User.
*/

/*
CHALLENGE 20:
Check if a User instance is an instance of Object.
*/

/*
CHALLENGE 21:
Create a plain object and test it with instanceof User.
*/


/* ------------------------------------------------------------
LEARNING GOAL 8: CONSTRUCTOR CHAINING
--------------------------------------------------------------- */

/*
CHALLENGE 22:
Create a Product constructor using productsData.
*/

/*
CHALLENGE 23:
Create a DiscountedProduct constructor that calls Product.
*/

/*
CHALLENGE 24:
Create instances of both constructors.
*/


/* ------------------------------------------------------------
LEARNING GOAL 9: SHARED PROTOTYPE BEHAVIOR
--------------------------------------------------------------- */

/*
CHALLENGE 25:
Add a prototype method to Product.
*/

/*
CHALLENGE 26:
Call the Product prototype method from DiscountedProduct instances.
*/

/*
CHALLENGE 27:
Override the prototype method for DiscountedProduct only.
*/


/* ------------------------------------------------------------
LEARNING GOAL 10: PROTOTYPE STRUCTURE & INSPECTION
--------------------------------------------------------------- */

/*
CHALLENGE 28:
Inspect the prototype of a User instance.
*/

/*
CHALLENGE 29:
Compare constructor.prototype to an instance’s internal prototype.
*/

/*
CHALLENGE 30:
Manually add a shared property to a prototype and access it.
*/


/* ------------------------------------------------------------
LEARNING GOAL 11: CLASS EQUIVALENCE (CODE ONLY)
--------------------------------------------------------------- */

/*
CHALLENGE 31:
Rewrite the User constructor using class syntax.
*/

/*
CHALLENGE 32:
Add a class method equivalent to a prototype method.
*/

/*
CHALLENGE 33:
Create instances using the class.
*/


/* ------------------------------------------------------------
CAPSTONE (CODE ONLY)
--------------------------------------------------------------- */

/*
CHALLENGE 34:
Design a constructor-based model for a real system
(e.g. Order, Session, Subscription).
*/

/*
CHALLENGE 35:
Add at least two prototype methods and one instance-only property.
*/


/* ===================== END OF WORKSHEET ===================== */

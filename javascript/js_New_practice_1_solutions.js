/* 
==========================================================
Section 1: Reference — Quick Guide for the `new` Operator
==========================================================

Purpose:
- The `new` operator is used to create instances of objects defined by constructor functions or classes.
- It automates 4 steps:
    1) Creates a brand-new empty object
    2) Sets the prototype of that object
    3) Binds `this` inside the constructor to the new object
    4) Returns the new object (unless the constructor returns its own object)

Syntax:
function ConstructorName(param1, param2) {
    this.prop1 = param1
    this.prop2 = param2
}

const instance = new ConstructorName(value1, value2)

Why use it:
- To generate multiple objects with shared structure and behavior.
- To utilize prototypes for memory-efficient method sharing.
- To introduce object templates that scale cleanly as data grows.

Example:
function Car(model, year) {
    this.model = model
    this.year = year
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

const myCar = new Car("Civic", 2018)
*/
// ==========================================================
// Section 2: Sample Data
// ==========================================================

function User(name, role) {
    this.name = name
    this.role = role
}

User.prototype.describe = function() {
    return this.name + " works as a " + this.role
}

function Product(title, price) {
    this.title = title
    this.price = price
}

// ==========================================================
// Section 3: Challenge Prompts
// ==========================================================

// 1) 
// Create a new instance of the User constructor using `new`.
// Add a commented explanation (your own words) of what `new` is doing step-by-step.
const newUser = new User('Joe', 'Admin');

// 2)
// Add a method to Product.prototype that returns a formatted price (e.g. "$20").
// Then create two different Product instances using `new`.
// Brief note: prototype methods are shared across all instances created with `new`.
Product.prototype.getFormattedPrice = function() {
    return "$" + this.price;
};
const newProduct1 = new Product('VCR', 65);
const newProduct2 = new Product('Gameboy', 120);


// 3)
// Create a constructor called Book that takes title, author, and year.
// Then create several Book instances using `new`.
// Introduce a new concept: constructor initialization logic.
// Explanation: constructors can perform extra logic beyond assigning values.
// Example syntax:
// function Example(x) { 
//     if (!x) { this.x = "default" }
// }
function Book(title, author, year){
    this.title = title
    this.author = author
    if (!year) {
        this.year = 'Unkown'
    } else {this.year = year};

};
const book1 = new Book('Book 1', 'John Doe', 1989);
const book2 = new Book('Book 2', 'Jane Dane', );
const book3 = new Book('Book 3', 'Ron Snon', 2050);


// 4)
// Demonstrate how using `new` ties an instance to its constructor’s prototype.
// Steps to follow:
//   A) Create a constructor called Animal with a sound property.
//   B) Add a speak method to Animal.prototype.
//   C) Create two instances using `new`.
//   D) Inline: Use the `instanceof` operator to verify that the objects come from the Animal constructor.
// Syntax reference for instanceof:
// object instanceof Constructor

 
// 5)
// Build a small chain of objects to understand why prototypes matter with the `new` operator.
// A) Create a constructor called Shape with a type property.
// B) Add a method to Shape.prototype called describe.
// C) Create another constructor called Square that takes sideLength.
// D) Inside Square, call Shape to initialize the 'type' property. (new topic intro below)
// New concept: Constructor borrowing (also called constructor chaining).
// Syntax example:
// function Child(a, b) {
//     Parent.call(this, a)
//     this.b = b
// }
// E) Create multiple Square instances using `new`.
// F) Verify that instances have access to both their own properties AND inherited behavior.


// 6)
// BONUS challenge: Implement your own minimal simulation of the `new` operator.
// Instructions: Create a function called myNew that mimics `new` behavior.
// New concept: manual object creation + prototype linking.
// Syntax references:
// const obj = {}
// Object.setPrototypeOf(obj, Constructor.prototype)
// Constructor.apply(obj, argumentsArray)


/*
=========================================================
💻 Practice Worksheet: JavaScript Classes
=========================================================
Focus: Mastering Class structure, the 'constructor', 'this' keyword, instance methods, and inheritance (extends/super).

-----------------------------------------------------
Section 1: The Base Class
-----------------------------------------------------
*/

/*
🚀 Challenge 1: Define the Base Class
A) Define a class named **'Product'**.
B) The class must have a **constructor** that accepts **'name'** and **'price'**.
C) The constructor must use the **'this'** keyword to assign these arguments as properties of the instance.
*/


/*
🚀 Challenge 2: Instance Method
A) Add a method to the 'Product' class named **'getDetails'**.
B) This method should return a string using the instance properties (this.name, this.price).
   Example: "Laptop costs $1200."
*/


/*
🚀 Challenge 3: Static Method (Class Method)
A) Add a **static** method to the 'Product' class named **'getDefaultCurrency'**.
B) This method should return the string **"USD"**.
C) Static methods are called on the Class itself, not an instance.
*/


/*
🚀 Challenge 4: Create and Test Instance
A) Create a new instance of 'Product' named **'laptop'** with name "Laptop" and price 1200.
B) Console.log the result of calling **laptop.getDetails()**.
C) Console.log the result of calling **Product.getDefaultCurrency()**.
*/


/*
-----------------------------------------------------
Section 2: Inheritance (Extending the Class)
-----------------------------------------------------
*/

/*
🚀 Challenge 5: Define the Subclass
A) Define a new class named **'DigitalProduct'** that **extends** the 'Product' class.
B) The constructor must accept **'name'**, **'price'**, and a new property: **'licenseKey'**.
C) It must correctly call the parent constructor using **super()** with the appropriate arguments.
D) It must assign **'licenseKey'** as a property of the instance.
*/


/*
🚀 Challenge 6: Override and Enhance a Method
A) In the 'DigitalProduct' class, **override** the **'getDetails'** method.
B) The new method should return the parent's details string (using **super.getDetails()**) 
   and append the license key.
   Example: "Laptop costs $1200. License: X1Y2Z3."
*/


/*
🚀 Challenge 7: Create and Test Subclass Instance
A) Create a new instance of 'DigitalProduct' named **'software'** with name "Editor", price 199, and licenseKey "A9B8C7".
B) Console.log the result of calling **software.getDetails()**.
*/


/*
-----------------------------------------------------
Section 3: 'this' Keyword and Context
-----------------------------------------------------
*/

/*
🚀 Challenge 8: Using 'this' in a Simple Function (Context Check)
A) Define a plain object named **'user'** with a property **'name': "Jaya"** and a method **'greet'** that console.logs "Hello, " + **this.name**.
B) Call **user.greet()**. The output should be "Hello, Jaya".
*/


/*
🚀 Challenge 9: 'this' inside a setTimeout (Context Loss)
A) In the **'user'** object from Challenge 8, modify the **'greet'** method.
B) Wrap the console.log line in a **setTimeout** with a 100ms delay. 
   **Do NOT use an arrow function here.**
C) Call **user.greet()** and observe what happens to **this.name** (it will likely be 'undefined' 
   or the global object's name property, demonstrating context loss).
*/


/*
🚀 Challenge 10: Fixing Context with Arrow Functions
A) Fix the **'greet'** method from Challenge 9 by changing the inner function passed to **setTimeout** into an **arrow function**.
B) Arrow functions do not have their own 'this', so they inherit the 'this' from the surrounding scope (the 'user' object).
C) Call **user.greet()** and verify that it correctly logs "Hello, Jaya" after the delay.
*/
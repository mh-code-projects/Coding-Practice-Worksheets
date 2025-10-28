/*
SECTION 1: Sample Data
*/
const users = [
  { id: 1, name: "Alex", purchases: [29.99, 19.5, 100], active: true, role: "user" },
  { id: 2, name: "Jordan", purchases: [250, 35], active: false, role: "admin" },
  { id: 3, name: "Taylor", purchases: [], active: true, role: "user" },
  { id: 4, name: "Morgan", purchases: [15.75], active: true, role: "moderator" }
]

const products = [
  { id: 101, name: "Laptop", category: "electronics", price: 799.99, rating: 4.7 },
  { id: 102, name: "Headphones", category: "electronics", price: 199.5, rating: 4.4 },
  { id: 103, name: "Coffee Maker", category: "home", price: 89.99, rating: 4.0 },
  { id: 104, name: "Desk Lamp", category: "home", price: 24.5, rating: 3.8 }
]

const orders = [
  { orderId: "A1", userId: 1, items: [{ productId: 102, qty: 1 }, { productId: 104, qty: 2 }] },
  { orderId: "B7", userId: 2, items: [{ productId: 101, qty: 1 }] },
  { orderId: "C3", userId: 1, items: [{ productId: 103, qty: 1 }] },
  { orderId: "F9", userId: 4, items: [{ productId: 104, qty: 5 }] }
]

const supportTickets = [
  { ticketId: 11, status: "open", assignedTo: "agent1", details: { priority: "high", message: "Refund request" }},
  { ticketId: 12, status: "closed", assignedTo: null, details: null },
  { ticketId: 13, status: "open", assignedTo: "agent2", details: { priority: "low", message: "Account question" }},
  { ticketId: 14, status: "open", assignedTo: null, details: { priority: "medium", message: "Shipping delay" }}
]



/*
SECTION 2: Challenge Prompts
*/

/* 
1) Create a new array of user names who are active customers.
   Must be formatted in alphabetical order.
*/

/*
2) Calculate the total revenue from all user purchases combined.
*/

/*
3) Return the highest priced product using array iteration and comparison logic.
*/

/*
4) Create a new array of products, but all prices should be formatted with two decimals.
*/

/*
5) Using a class structure, model a simple Cart that stores productIds and quantities, 
   and can calculate total cost based on the products list.
*/

/*
6) Find the first order belonging to a specific userId, returning the matching order object.
*/

/*
7) Count how many support tickets are still open but have no assigned agent.
*/

/*
8) Return a new array of product names that belong to the "home" category.
*/

/*
9) Convert all product prices into integers by removing decimal values.
*/

/*
10) Group products by category for analytics reporting.
*/

/*
11) Using recursion, sum all quantities inside all orders across the entire store.
*/

/*
12) Return the average customer purchase total for users who have at least one purchase.
*/

/*
13) Sort users by total spent from highest to lowest.
*/

/*
14) Create a function that checks if a product exists by productId, returning true or false.
*/

/*
15) From the orders array, return a new list where each order contains a calculated total price.
*/

/*
16) Find the top rated product in each category.
*/

/*
17) Safely access the message of the details object in support tickets,
    returning “No details” if the nested data is missing.
*/

/*
18) Create a function that takes any value and returns a string telling what data type it is.
*/

/*
19) Use the spread operator to merge all purchases from every user into one flat list.
*/

/*
20) Using promises and asynchronous behavior, simulate fetching product data and handle success and failure.
*/

/*
21) Import and export a function (ES Modules) that takes an array of users and returns only admins and moderators.
*/

/*
22) Create a new array where each user includes their total purchase amount as a new property.
*/

/*
23) From the orders, return the most frequently purchased productId.
*/

/*
24) Check if every active user has made at least one purchase. Produce a boolean result.
*/

/*
25) Remove all products that have a rating below 4.0 and return the cleaned array.
*/

/*
26) Build an object where the keys are user names and the values are the total amount they have spent.
*/

/*
27) Create a function that returns a list of users sorted by how many orders they have placed.
*/

/*
28) Find which product category has generated the highest total sales based on the orders and product pricing.
*/

/*
29) Return a list of users who have never made a purchase, then format them into a string of comma-separated names.
*/

/*
30) Create a function that removes duplicate productIds from a mixed array of order items collected across all orders.
*/

/*
31) Check if there exists at least one admin who has purchased something. Produce a boolean result.
*/

/*
32) Using destructuring, extract the first product and last product in the products array and return them in a new array.
*/

/*
33) Recursively count how many total tickets have a priority of “high”.
*/

/*
34) Find the order with the largest financial value.
*/

/*
35) Build a function that returns a new products array where each product also includes a property “inStock: true”.
*/

/*
36) Remove the most expensive product from the product list and return the updated list.
*/

/*
37) Calculate the total number of items sold (sum of all qty in all orders) but only for electronics category.
*/

/*
38) Format all user purchase totals as "$X.YY" strings instead of raw numbers.
*/

/*
39) Return all orders where every purchased product costs more than 50.
*/

/*
40) Using a class that extends another, create a SupportAgent class that inherits a User class, and add a method that returns how many tickets they are assigned.
*/

/*
41) Combine all product names and all user names into a single alphabetically-sorted list with no duplicates.
*/

/*
42) Return a new structure where orders are grouped by userId, and each entry stores total spent and number of items.
*/

/*
43) From the orders list, return the productId that has generated the highest total revenue.
*/

/*
44) Create a function that returns an array of ticketIds where message text includes the word "request".
*/

/*
45) Determine if any user has spent more than the cost of the highest-priced product.
*/

/*
46) Convert all user roles into capitalized strings (ex: “user” → “User”) while keeping the rest of the object the same.
*/

/*
47) Create a function that accepts a userId and returns their average spend per purchase. If zero purchases, return 0.
*/

/*
48) Using spread, remove one specific productId from all orders, returning updated orders.
*/

/*
49) Build a map (key/value) where each key is a product category and each value is an array of product names in that category sorted alphabetically.
*/

/*
50) Generate a flat list of every message text in all support tickets, ignoring missing details.
*/
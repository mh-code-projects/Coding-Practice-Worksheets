-- SQL Practice Worksheet: Introduction to SELECT, WHERE, and Basic Operations

--------------------------------------------------------------------------------
-- Section 1: Reference: Quick Guide for Basic SQL Queries
--------------------------------------------------------------------------------

-- **The SELECT Statement (Retrieving Data)**
-- Purpose: To specify which columns you want to retrieve from a table.
-- Syntax:
-- SELECT column1, column2, ...
-- FROM table_name;

-- **The FROM Clause (Specifying the Source)**
-- Purpose: To specify the table from which to retrieve the data.
-- Syntax:
-- SELECT * -- * means 'all columns'
-- FROM table_name;

-- **The WHERE Clause (Filtering Data)**
-- Purpose: To filter records based on a specified condition.
-- Syntax:
-- SELECT column1
-- FROM table_name
-- WHERE condition;

-- Common Operators for the WHERE Clause:
-- =   (Equals)
-- >   (Greater than)
-- <   (Less than)
-- >=  (Greater than or equal to)
-- <=  (Less than or equal to)
-- <> or != (Not equal to)
-- LIKE (Pattern matching - often used with '%' wildcard for any sequence of characters)
-- AND (Combines two conditions; both must be TRUE)
-- OR  (Combines two conditions; at least one must be TRUE)

--------------------------------------------------------------------------------
-- Section 2: Sample Data Setup (Run these commands in your Neon DB)
--------------------------------------------------------------------------------

-- Create the Products table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2),
    StockQuantity INT,
    Discontinued BOOLEAN
);

-- Insert sample data
INSERT INTO Products (ProductID, ProductName, Category, Price, StockQuantity, Discontinued) VALUES
(1, 'Laptop Pro', 'Electronics', 1200.00, 15, FALSE),
(2, 'Mechanical Keyboard', 'Electronics', 85.50, 40, FALSE),
(3, 'Desk Chair Ergonomic', 'Office Furniture', 150.00, 25, FALSE),
(4, 'Coffee Maker Deluxe', 'Home Goods', 45.99, 5, FALSE),
(5, 'Notebook (A4)', 'Office Supplies', 3.50, 200, FALSE),
(6, 'Smartwatch X', 'Electronics', 299.99, 10, FALSE),
(7, 'Monitor 4K 27"', 'Electronics', 350.00, 5, FALSE),
(8, 'LED Desk Lamp', 'Home Goods', 25.00, 0, TRUE),
(9, 'Webcam HD', 'Electronics', 60.00, 15, FALSE),
(10, 'Fountain Pen Set', 'Office Supplies', 55.00, 30, FALSE);

--------------------------------------------------------------------------------
-- Section 3: Challenge Prompts/Questions
--------------------------------------------------------------------------------

-- Challenge 1: Basic Selection
-- Task: Retrieve all columns and all rows from the 'Products' table.
-- Goal: Practice using SELECT * and the FROM clause.

-- Challenge 2: Specific Columns
-- Task: Retrieve only the 'ProductName' and 'Price' for all products.
-- Goal: Practice specifying a list of columns.

-- Challenge 3: Simple Filtering (WHERE)
-- Task: Find the 'ProductName' and 'StockQuantity' for products that cost exactly 85.50.
-- Goal: Practice using the '=' operator in the WHERE clause.

-- Challenge 4: Comparison Filtering
-- Task: Retrieve all details (all columns) for products that have a 'Price' greater than 100.00.
-- Goal: Practice using the '>' operator.

-- Challenge 5: Boolean Filtering
-- Task: Find the 'ProductName' and 'ProductID' of all products that have been 'Discontinued'.
-- B) The 'Discontinued' column is a BOOLEAN (TRUE/FALSE).
-- Goal: Practice filtering by a boolean value.

-- Challenge 6: Combining Conditions (AND)
-- Task: Retrieve the 'ProductName' and 'Price' for products that are in the 'Electronics' category **AND** have a 'Price' less than 300.00.
-- Goal: Practice using the AND operator.

-- Challenge 7: Combining Conditions (OR)
-- Task: Find the 'ProductName' and 'Category' of products that are either 'Out of Stock' (StockQuantity is 0) **OR** are 'Discontinued'.
-- Goal: Practice using the OR operator and the '=' operator for comparison with zero.

-- Challenge 8: Pattern Matching (LIKE)
-- Task: Retrieve the 'ProductName' of all products whose name starts with the word 'Coffee'.
-- B) Use the **LIKE** operator with the **%** wildcard. The **%** matches any sequence of zero or more characters.
-- Syntax Example: WHERE column_name LIKE 'prefix%';
-- Goal: Practice basic pattern matching.

-- Challenge 9: Inequality and Multiple Columns
-- Task: Retrieve the 'ProductName', 'Price', and 'Category' for all products **NOT** in the 'Electronics' category.
-- Goal: Practice using the '<>' (Not Equal To) operator.

-- Challenge 10: Range Filtering (Combined Operators)
-- Task: Find the 'ProductName' and 'StockQuantity' for products that have a 'StockQuantity' between 10 and 25 (inclusive of 10 and 25).
-- B) This can be solved by combining two comparison operators with the **AND** operator.
-- Goal: Practice combining >= and <= with AND.

-- Challenge 11: Sorting Results (ORDER BY)
-- Task: Retrieve the 'ProductName' and 'Price' of all products, ordered from the **most expensive** to the **least expensive**.
-- C) New Concept: **ORDER BY**
-- Brief Summary: Used to sort the result set of a query.
-- Syntax:
-- SELECT column1
-- FROM table_name
-- ORDER BY column_to_sort ASC/DESC;
-- Use **DESC** for descending (high to low) order. The default is **ASC** (ascending, low to high).
-- Goal: Introduce and practice using ORDER BY DESC.

-- Challenge 12: Sorting and Filtering Combined
-- Task: Retrieve the 'ProductName' and 'StockQuantity' for all products that are **currently in stock** (StockQuantity > 0). The results should be ordered by 'StockQuantity' from the **lowest to the highest**.
-- Goal: Practice combining WHERE and ORDER BY ASC.

-- Challenge 13: Finding the Top Item (Sorting + Limiting)
-- Task: Find the 'ProductName' and 'Price' of the single **most expensive** product.
-- C) New Concept: **LIMIT**
-- Brief Summary: Restricts the number of rows returned by the query.
-- Syntax:
-- SELECT column1
-- FROM table_name
-- LIMIT number_of_rows;
-- Goal: Practice using ORDER BY DESC and LIMIT 1 together.

-- Challenge 14: Excluding Ranges (NOT and Inequality)
-- Task: Retrieve all product names and their prices that are **NOT** priced between 50.00 and 150.00 (inclusive).
-- B) Think about how you can use the **OR** operator with two 'less than' and 'greater than' conditions, or how the **NOT** operator can be applied to a range.
-- Goal: Practice logical negation in a WHERE clause.

-- Challenge 15: Categorical Exclusion
-- Task: Find all columns for products that are **not** 'Electronics' and are **not** 'Office Supplies'.
-- B) You will need to use the **AND** operator to ensure a product satisfies both exclusions.
-- Goal: Practice multiple negations with the AND operator.

-- Challenge 16: Complex Text Search
-- Task: Find the 'ProductName' and 'Category' for any product that has the word 'Desk' **anywhere** in its name.
-- Goal: Practice using the LIKE operator with the **%** wildcard at both the beginning and end of the search term (e.g., '%term%').

-- Challenge 17: Multi-column Sorting
-- Task: Retrieve the 'ProductName', 'Category', and 'Price' for all products. First, sort the results by 'Category' alphabetically (A-Z). Within each category, sort the products by 'Price' from highest to lowest.
-- B) You can specify multiple columns in the ORDER BY clause, separated by commas.
-- Syntax Example: ORDER BY column1 ASC, column2 DESC;
-- Goal: Practice multi-level sorting.

-- Challenge 18: Identifying Near-Stockout Items
-- Task: Find the 'ProductName' and 'StockQuantity' of all products that have 10 or fewer items left in stock, but are **not** discontinued. Sort the results to show the lowest stock first.
-- Goal: Combine filtering (WHERE) using multiple conditions (AND, <=) and sorting (ORDER BY).

-- Challenge 19: Finding the Cheapest of a Type
-- Task: Find the 'ProductName' and 'Price' of the **cheapest** item in the 'Office Supplies' category.
-- Goal: Combine a WHERE clause, ORDER BY, and LIMIT.

-- Challenge 20: Comprehensive Inventory Check
-- Task: List the 'ProductName', 'Category', and 'Price' for all products that meet the following criteria:
-- 1. Are **not** discontinued.
-- 2. Are in the 'Home Goods' or 'Office Supplies' category.
-- 3. Have a 'Price' less than 50.00.
-- The final list should be sorted by 'Category' (A-Z) and then by 'Price' (lowest to highest).
-- Goal: Combine multiple WHERE conditions using AND and OR, and apply multi-column sorting.
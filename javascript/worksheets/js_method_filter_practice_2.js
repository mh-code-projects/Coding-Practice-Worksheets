// ===================
// Section 1: Reference
// ===================

// The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Syntax:
// array.filter(callback(element, index, array))

// - callback: A function to test each element of the array. It should return true to keep the element, or false otherwise.
// - element: The current element being processed in the array.
// - index (optional): The index of the current element.
// - array (optional): The array that .filter() was called upon.

// Example:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// // evenNumbers will be [2, 4]

// ===================
// Section 2: Sample Data
// ===================

const books = [
  { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', genre: 'Thriller', pages: 336, published: 2019 },
  { id: 2, title: 'Where the Crawdads Sing', author: 'Delia Owens', genre: 'Fiction', pages: 384, published: 2018 },
  { id: 3, title: 'Educated', author: 'Tara Westover', genre: 'Memoir', pages: 334, published: 2018 },
  { id: 4, title: 'The Giver', author: 'Lois Lowry', genre: 'Dystopian', pages: 208, published: 1993 },
  { id: 5, title: 'The Martian', author: 'Andy Weir', genre: 'Sci-Fi', pages: 384, published: 2011 },
  { id: 6, title: 'Gone Girl', author: 'Gillian Flynn', genre: 'Thriller', pages: 415, published: 2012 },
  { id: 7, title: 'The Night Circus', author: 'Erin Morgenstern', genre: 'Fantasy', pages: 387, published: 2011 },
  { id: 8, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', pages: 412, published: 1965 },
  { id: 9, title: 'The Book Thief', author: 'Markus Zusak', genre: 'Historical Fiction', pages: 552, published: 2005 },
  { id: 10, title: 'Circe', author: 'Madeline Miller', genre: 'Mythology', pages: 393, published: 2018 }
];

const users = [
  { name: 'Alice', age: 25, status: 'active', city: 'New York' },
  { name: 'Bob', age: 30, status: 'inactive', city: 'London' },
  { name: 'Charlie', age: 22, status: 'active', city: 'New York' },
  { name: 'Diana', age: 35, status: 'active', city: 'Paris' },
  { name: 'Eve', age: 40, status: 'inactive', city: 'London' }
];

const miscellaneousNumbers = [15, 22, 30, 41, 58, 65, 70, 89, 93, 100];

// =========================
// Section 3: Challenge Prompts
// =========================

// Challenge 1: Find all books published in the year 2018.

// Challenge 2: Get all books with fewer than 350 pages.

// Challenge 3: Find all active users.

// Challenge 4: Get all users who are 30 years old or older.

// Challenge 5: Find all books in the 'Sci-Fi' genre.

// Challenge 6: Find all users who live in 'New York' AND are under 30.

// Challenge 7: Get all books that were published before 2010.

// Challenge 8: Find all users who are either 'active' OR live in 'London'.

// Challenge 9: Filter for books with a title that includes the word 'The'.

// Challenge 10: Find all books with an odd number of pages.

// Challenge 11: Get all users whose name starts with the letter 'C'.

// Challenge 12: From the 'miscellaneousNumbers' array, filter for numbers that are greater than 50 and are also even.

// Challenge 13: Find all books with a title that has more than two words.
// A string's .split(' ') method can be useful here.

// Challenge 14: Filter for users who are at least 25 years old and whose name has 5 letters or less.

// Challenge 15: Find all books that are either in the 'Thriller' genre or have more than 400 pages.

// Challenge 16: From the 'users' array, find all users who are 'inactive' and are not in 'Paris'.

// Challenge 17: Get all books written by 'Delia Owens' and published in 2018.

// Challenge 18: Filter for books whose `id` is a prime number.
// A `isPrime` helper function would be useful for this challenge.

// Challenge 19: Use the optional `index` parameter to get all books that are at an even index (0, 2, 4, etc.) but have a page count less than 400.

// Challenge 20: Combine methods to first filter for 'Fiction' books and then, from that result, filter for books with a title that has a length of 10 or more characters.
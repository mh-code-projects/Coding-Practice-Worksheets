/*
  Optional Chaining Worksheet

  Optional chaining (?.) is a powerful feature in JavaScript that allows you to safely access
  properties of an object without having to check if each intermediate property exists.
  It prevents errors when trying to access a property on a value that is `null` or `undefined`.

  Syntax:
  object?.property
  object?.method()
  object?.[expression]

  The expression on the left of the ?. evaluates to `undefined` if the object is `null` or `undefined`,
  and the rest of the chain is not evaluated. Otherwise, it behaves like normal property access.
*/

// Sample Data:
// Use this data for the exercises below.
const users = [
  {
    id: 1,
    name: 'Alice',
    details: {
      address: {
        city: 'New York',
        zip: '10001'
      },
      contact: {
        email: 'alice@example.com'
      }
    }
  },
  {
    id: 2,
    name: 'Bob',
    details: {
      address: {
        city: 'Los Angeles'
      }
    }
  },
  {
    id: 3,
    name: 'Charlie'
    // Charlie has no details property
  }
];

// --- Level 1: Basic Property Access ---

// 1. Log Alice's email address.
//    Use optional chaining to safely access the email property.
//    Hint: How would you navigate from the `users` array to `Alice` and then to her email?

// 2. Log Bob's zip code.
//    Use optional chaining to handle the possibility that the `zip` property doesn't exist.
//    What value do you expect to get?

// 3. Log Charlie's city.
//    Charlie has no `details` property. How does optional chaining handle this?

// --- Level 2: Combining with the nullish coalescing operator (??) ---

/*
  Quick Info: The Nullish Coalescing Operator (??)
  The nullish coalescing operator (??) provides a default value for an expression that evaluates
  to `null` or `undefined`. This is different from the logical OR (||) operator, which also
  considers falsy values like `0`, `''`, and `false`.

  Syntax:
  expression ?? defaultValue

  Example:
  const name = user.name ?? 'Guest'; // If user.name is null or undefined, name becomes 'Guest'.
*/

// 4. Log Charlie's email, but if it doesn't exist, provide a default message: "Email not available".

// 5. Log Bob's zip code, but if it doesn't exist, provide a default value of "Unknown".

// --- Level 3: Optional Chaining with Methods ---

/*
  Optional chaining can also be used with methods. If the object has a method, it will be called.
  If not, the expression will return `undefined` without throwing an error.

  Syntax:
  object?.method()
*/

// 6. Create a new user object called `eve` that has a `greet` method.
//    Create another user object called `frank` that does not have a `greet` method.
//    Try to call the `greet` method on both `eve` and `frank` using optional chaining.
//    What happens in each case?

// --- Level 4: Optional Chaining with Array Elements ---

// 7. Try to access the first element of Bob's `details` property.
//    (This property is an object, not an array, so this will return undefined).
//    How can optional chaining help here to prevent an error?

// 8. Imagine the `users` array might be `null`. How can you safely get the name of the first user?
//    Example: `const maybeUsers = null;`
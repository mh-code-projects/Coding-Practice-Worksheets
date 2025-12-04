/*
|====================================================================================|
|                            🧠 Data Manipulation Mastery Worksheet 🧠                               |
|====================================================================================|
*/

// --- SECTION 1: REFERENCE: QUICK GUIDE ---

/*
Quick Guide for Data Manipulation:

1. Creating Data Structures:
   - Array: const arr = [];
   - Object: const obj = {};

2. Adding to Arrays (Modification Methods - Change the original array):
   - Push (Add to end): array.push(newValue);
   - Unshift (Add to beginning): array.unshift(newValue);

3. Removing from Arrays (Modification Methods):
   - Pop (Remove from end, returns the removed item): array.pop();
   - Shift (Remove from beginning, returns the removed item): array.shift();
   - Splice (Remove/Replace at index): array.splice(startIndex, deleteCount, newItem1, ...);

4. Adding/Updating Object Properties:
   - Dot Notation (Known Key): object.newKey = value;
   - Bracket Notation (Dynamic/Variable Key): object['keyVar'] = value;
   - Spreading (Creating a NEW object without changing the original):
     const newObj = { ...originalObj, newKey: newValue };

5. Removing Object Properties:
   - Delete Keyword: delete object.keyToDelete;
*/

// --- SECTION 2: SAMPLE DATA ---

// This represents a user's current shopping cart.
const shoppingCart = ['Laptop Charger', 'USB-C Cable', 'Mechanical Keyboard', 'Wireless Mouse'];

// This represents user profile information.
const userProfile = {
  firstName: 'Alex',
  lastName: 'Johnson',
  email: 'alex.j@example.com',
  isVerified: true,
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

// --- SECTION 3: CHALLENGE PROMPTS/QUESTIONS ---

// A) Challenge 1: Add 'Gaming Headset' to the end of the shoppingCart array.
// A) Challenge 2: Remove the item from the beginning of the shoppingCart array and store it in a variable called `removedItem`.
// A) Challenge 3: Add a new property 'city' with the value 'San Francisco' to the userProfile object using Dot Notation.
// A) Challenge 4: Change the 'notifications' setting within the 'preferences' object to `false`.
// A) Challenge 5: Remove the 'isVerified' property from the userProfile object.
// A) Challenge 6: Add a product tracking ID property. Create a variable for the key, then add the property `trackingId` with the value `1A2B3C` to the `userProfile` object using Bracket Notation.
// A) Challenge 7: Replace 'Mechanical Keyboard' with 'Ergonomic Keyboard' in the shoppingCart array using `splice()`.
// A) Challenge 8: Create an empty array called `purchaseHistoryArray` and add it as a new property called 'purchaseHistory' to the `userProfile` object.
// A) Challenge 9: Create a **NEW** object called `userContact` that contains all properties from `userProfile`, plus a new property `phoneNumber` with the value `'555-123-4567'`. Do **not** modify `userProfile`.
// A) Challenge 10: Create a new array `tempCart` from `shoppingCart`. Find the index of 'USB-C Cable' in `tempCart` and remove ONLY that item from the array using `splice()`.
/*

  Practice Worksheet: Expanding the Quote App

  Objective: To add new features to your existing QuoteApp component, reinforcing your understanding of state, effects, and user events.

  Section 1: Reference - Quick Guide

  setInterval:
  - Syntax: `const intervalId = setInterval(() => { /* code to run */ }, delay);`
  - Use: To run a block of code repeatedly at a specific time interval (in milliseconds).
  - Purpose: It's useful for creating timers, animations, or regularly checking for new data.

  clearInterval:
  - Syntax: `clearInterval(intervalId);`
  - Use: To stop an interval created with `setInterval`.
  - Purpose: This is crucial for performance and preventing memory leaks. `useEffect` cleanup functions are perfect for this.

  Section 2: Challenge Prompts

  // CHALLENGE 1: Add a "New Quote" Button
  // Your `getNewQuote` function is already set up to fetch a quote.
  // Add a button to the JSX that, when clicked, calls your `getNewQuote` function to display a new quote.
  // Make sure the button is properly hooked up using the `onClick` event handler.

  // CHALLENGE 2: Implement a "Load Next Quote" Timer
  // Let's make the app automatically fetch a new quote every 10 seconds.
  // Use `useEffect` to set up an interval timer.
  // Inside the `useEffect`, call your `getNewQuote` function.
  // Set the interval to `10000` milliseconds.

  // CHALLENGE 3: Clean up the Timer
  // To prevent memory leaks, you must "clean up" the interval when the component unmounts.
  // Inside your `useEffect` hook, add a `return` statement.
  // The `return` should contain a function that calls `clearInterval` with the interval ID.
  // Reference: `const intervalId = setInterval(...); return () => clearInterval(intervalId);`

  // CHALLENGE 4: Display the Author's Slug
  // When you fetch a quote from the API, the data object also includes a property called `authorSlug`.
  // Add a `<p>` tag below the author's name to display their `authorSlug`.
  // The API documentation notes that this is the author's name in a URL-friendly format.

  // CHALLENGE 5: Optional: Fetch Quotes by a Specific Author
  // This is a more advanced challenge.
  // Let's add a feature to fetch quotes only from the current author.
  // Create a new function called `getQuotesByAuthor(slug)`.
  // The `slug` parameter should be the `authorSlug` you are now displaying.
  // Use a different API endpoint for this: `https://api.quotable.io/quotes?author=${slug}`.
  // Now, create a second button with the text "More by this author".
  // Use the `onClick` handler to call `getQuotesByAuthor()` and pass it the current `authorSlug`.
  // Hint: You will need to access the `authorSlug` from the `randomQuote` state object.
  // Note: The API response for this endpoint is different! It returns a `results` array. You'll need to set your state to a random quote from that array. For example, `setRandomQuote(data.results[randomIndex])`.
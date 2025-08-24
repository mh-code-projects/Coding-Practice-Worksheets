/*
  Section 1: Reference
  
  Quick Guide for the Quotable API (https://api.quotable.io)

  - Get a random quote:
    Endpoint: `https://api.quotable.io/random`
    Use: This will return a single, random quote object.
    
  - Search for quotes:
    Endpoint: `https://api.quotable.io/search/quotes?query=your_search_query`
    Use: This endpoint returns a list of quotes that match the search query.
    Note: The `query` parameter is used to search both the quote's content and the author's name.
    
  - Search for authors:
    Endpoint: `https://api.quotable.io/search/authors?query=your_search_query`
    Use: This endpoint is designed for an "autocomplete" type of search for authors. It returns a list of author objects.
    
  - Get quotes by a specific author:
    Endpoint: `https://api.quotable.io/quotes?author=author_slug_or_name`
    Use: This will return a list of all quotes by a specific author.
    
*/

/*
  Section 2: Challenge Prompts
  
  Challenge 1: Fetch and display a random quote on load
  
  // Goal: Get a random quote when the page loads and show it to the user.

  // A) Create a new React component. Let's call it `QuoteApp`.
  //    Hint: A functional component in React is just a JavaScript function that returns some JSX (the HTML-like code).

  // B) Inside `QuoteApp`, use the `useState` hook to create a state variable to hold the quote object.
  //    What is `useState`? It's a "hook," a special function that lets you add **state** (the component's memory) to a functional component.
  //    Syntax: `const [variableName, setVariableFunction] = useState(initialValue);`
  //    Think: What is a good **initial value** for the quote state before we get any data? `null` is a good way to check if data has been loaded yet.

  // C) Use the `useEffect` hook to perform a side effect. This effect should run only once when the component mounts.
     // What is `useEffect`? It's a hook for performing "side effects" like fetching data.
     // Syntax: `useEffect(() => { /* code here */ }, [dependencies]);
     // Think: To make sure this code only runs once, what should the `[dependencies]` array contain?'

  // D) Inside your `useEffect`, use the `fetch` API to get a random quote.
  //    Hint: You'll need to call `.then()` on the `fetch` promise to handle the response, and then a second `.then()` to parse the response as JSON.

  // E) Once you have the quote data, update the state.
  //    Hint: Use the `setVariableFunction` from your `useState` hook to store the fetched quote.

  // F) In your component's JSX, use a conditional render.
  //    Think: How can you check if the quote data has been loaded? You can check if your state variable is not `null`. If it is, show a "Loading..." message; otherwise, show the quote's `content` and `author`.

  
  Challenge 2: Add a button to get a new random quote
  
  // Goal: Give the user a way to manually get a new quote.

  // A) Create a new function inside `QuoteApp` to handle the fetching logic. Let's call it `fetchRandomQuote`.
  //    Hint: Copy the `fetch` code you wrote in Challenge 1 into this new function.

  // B) Call this `fetchRandomQuote` function inside your `useEffect` hook.
  //    Why? This ensures you still get a random quote on the initial load.

  // C) Add a `<button>` element to your JSX.

  // D) Attach an `onClick` event handler to this button.
  //    Hint: The `onClick` handler should call the `fetchRandomQuote` function.

  
  Challenge 3: Implement search functionality
  
  // Goal: Allow the user to search for quotes by keywords.

  // A) Create two new state variables. One for the `searchQuery` and one for the `searchResults`.
  //    Hint: What should the initial value be for a text query? What about an array of results?

  // B) Add an `<input>` element for the search query.

  // C) Add an `onChange` event handler to the input.
  //    Hint: This handler should call the `setSearchQuery` function to update the state with the value from the input. You can get the value from `event.target.value`.

  // D) Add a `<button>` to trigger the search.

  // E) Create a new function in `QuoteApp` to handle the search `fetch` call.
  //    Hint: This function will use the search endpoint: `https://api.quotable.io/search/quotes?query=...`
  //    Think: How do you include your `searchQuery` variable in this URL?

  // F) Update your `searchResults` state with the data from the API.
  //    Hint: The API returns an object with a `results` array inside it. You'll want to access `data.results` after your `fetch` call.

  
  Challenge 4: Display search results and handle quote selection
  
  // Goal: Show the search results and allow the user to click one to display it.

  // A) Conditionally render the search results.
  //    Hint: Check if the `searchResults` array has a `length` greater than zero.

  // B) Use the `.map()` method to create a list of results.
  //    What is `.map()`? It's a method on arrays that creates a new array by applying a function to each element.
  //    Syntax: `array.map(item => { /* return JSX here */ });`

  // C) Add an `onClick` handler to each mapped item.
  //    Hint: This handler should call a function in the parent component and pass the current quote object as an argument.

  // D) Inside your parent component (`QuoteApp`), create a new state variable. Let's call it `selectedQuote`.
  //    Think: This state will hold the quote that the user has selected from the search results.

  // E) Create a function in `QuoteApp` that updates the `selectedQuote` state.
  //    Hint: This function will be passed as a prop to your search results component.

  // F) Modify your main display logic.
  //    Think: You now have three possible states to show: "Loading...", the `selectedQuote`, or the initial random quote. Use a series of conditional checks to decide what to display.

  
  Challenge 5: Search specifically by Author
  
  // Goal: Refine the search to allow for specific author searches.

  // A) Create a second `useState` for `authorQuery`.

  // B) Add a second `input` field for the author search.
  //    Hint: Add an `onChange` handler that updates the `authorQuery` state.

  // C) Create a new search function that handles the author-specific API call.
  //    Hint: Use the author search endpoint: `https://api.quotable.io/quotes?author=...`.
  //    Note: The `fetch` for this endpoint is slightly different as the results are returned as `data.results`.

  // D) Modify your search buttons to be more specific.
  //    Think: How will you trigger either the quote search or the author search? You could have two separate buttons, or one button and a dropdown menu to select the search type.

  // E) When the author search returns results, display a list of the authors.
  //    Hint: You'll need to use `.map()` again to render the authors' names.

  // F) When an author's name is clicked, fetch all the quotes by that specific author.
  //    Think: How do you get the author's `_id` or `slug` to use in the API URL? You'll have to pass that data from the clicked item back up to a function in the parent component.
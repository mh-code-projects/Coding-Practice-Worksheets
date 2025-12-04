/*
  =================
  SECTION 1: REFERENCE
  =================
*/

/*
  QUICK GUIDE: React Hooks and Fetch API

  1. useState:
     - Purpose: Manages state within a functional component.
     - Syntax: const [stateVariable, setStateVariable] = useState(initialValue);
     - Use Case: Storing and updating dynamic data, like a quote, a counter, or user input.

  2. useEffect:
     - Purpose: Manages "side effects" like data fetching, subscriptions, or manual DOM changes.
     - Syntax: useEffect(() => { /* side effect code * / }, [dependencyArray]);
     - Use Case: Fetching data from an API when the component first loads (use an empty dependency array `[]`).

  3. Fetch API:
     - Purpose: Makes network requests to retrieve data from a server.
     - Syntax: fetch(url).then(response => response.json()).then(data => /* use data */);
     - Use Case: Getting external data like a random quote, weather information, or a list of users.
*/

/*
  =================
  SECTION 2: SAMPLE DATA
  =================
*/

// Use this sample array to practice problems 1 and 2.
const movieGenres = ["Action", "Comedy", "Sci-Fi", "Drama", "Horror"];

/*
  =================
  SECTION 3: CHALLENGE PROMPTS
  =================
*/

// === CHALLENGE 1: Basic useState ===
/*
  Task: Create a simple component called 'Counter'.
  - It should display a number starting at 0.
  - Add a button that, when clicked, increases the number by 1.
  - You will need to use the `useState` hook.
*/


// === CHALLENGE 2: useState with an Array ===
/*
  Task: Create a component called 'GenreSelector'.
  - It should use the `movieGenres` array above.
  - Display one of the genres from the array.
  - Add a button that, when clicked, changes the displayed genre to a random one from the array.
  - Hint: You will need to use `useState` to keep track of the current genre and `Math.random()` to pick a new one.
*/


// === CHALLENGE 3: Basic useEffect and Data Display ===
/*
  Task: Create a component called 'PostFetcher'.
  - Use `useEffect` to fetch a single blog post from a public API.
  - Use the following API endpoint: https://jsonplaceholder.typicode.com/posts/1
  - You will need to use `useState` to store the post title and body.
  - Display the post's title and body in your component.
  - What would the dependency array be to ensure the fetch only runs once?
*/


// === CHALLENGE 4: Handling Loading and Error States ===
/*
  Task: Modify the 'PostFetcher' component from Challenge 3.
  - New Concept: What if the API is slow? We need a loading state.
    - Add a new state variable, `isLoading`, initialized to `true`.
  - Display the message "Loading post..." when `isLoading` is `true`.
  - Display the post's content only when `isLoading` is `false`.
  - Update `isLoading` to `false` after the data is successfully fetched.
*/


// === CHALLENGE 5: Using Props ===
/*
  Task: Create a component called 'UserCard'.
  - The `UserCard` component should accept two props: `name` and `email`.
  - It should display the user's name and email.
  - Inside your 'App' component, render `UserCard` and pass it your name and a fake email as props.
  - This challenge reinforces how data is passed from a parent component to a child component.
*/
/*
  Section 1: Reference

  Quick Guide for React Component Lifecycle Methods: constructor and render

  1.  constructor()
      -   Purpose: The `constructor` method is the first method called when a component is initialized. It is primarily used to set up the initial state of the component and to bind event handler methods to the component instance.
      -   Syntax:
          constructor(props) {
            super(props);
            // Initialize state or bind methods here
          }
      -   Use Cases:
          -   Initializing `this.state` with an object.
          -   Binding event handler functions to the component instance.

  2.  render()
      -   Purpose: The `render` method is the only required method in a class component. It reads `this.props` and `this.state` and returns a React element (like a JSX element) to be rendered to the DOM.
      -   Syntax:
          render() {
            // Your JSX here
            return <div>...</div>;
          }
      -   Use Cases:
          -   Displaying data from props or state.
          -   Returning the JSX that makes up the component's UI.

  Section 2: Challenge Prompts
*/

// Challenge 1: Setting up Your React App
// A) Open your terminal or command prompt.
// B) Navigate to the directory where you want to create your project.
// C) Run the following command to create a new React application named "my-react-app":
//    npx create-react-app my-react-app
// D) After the setup is complete, navigate into your new project directory and start the development server:
//    cd my-react-app
//    npm start
// E) You should now see a default React page in your browser.

// Challenge 2: Cleaning up and Modifying the Main Component
// A) In your project's folder structure, find the file `src/App.js`. This is where the main `App` component is defined.
// B) The `App.js` file has a lot of starter code. Your task is to clean it up.
// C) Delete everything inside the `return()` statement of the `render` method, but keep the `<div>` tags that enclose it.
// D) Inside the now-empty `<div>`, add an `<h1>` tag with the text "My First React App".
// E) Save the file. What happens in your browser? How does React know to update the page?

// Challenge 3: Creating and Importing a New Component
// A) In the `src` folder, create a new file named `Welcome.js`.
// B) Inside `Welcome.js`, create a class component called `Welcome`.
// C) The `Welcome` component should have a `render` method that returns a simple `<p>` tag with the text "This is my custom component!".
// D) Now, go back to `App.js`. At the top of the file, import your new `Welcome` component.
//    (Hint: Use the `import` keyword.)
// E) Inside the `render` method of `App.js`, place your imported `Welcome` component.
// F) What is the benefit of breaking your UI into smaller components like this?

// Challenge 4: Initializing State with the `constructor`
// A) In your `Welcome.js` component, add a `constructor` method.
// B) Make sure the `constructor` takes `props` as an argument and calls `super(props)`.
// C) Inside the `constructor`, initialize the component's state. The state object should have one property: `name`, with the value set to "React".

// Challenge 5: Displaying State
// A) Now, modify the `render` method in your `Welcome` component.
// B) Change the text in the `<p>` tag to display the name from your component's state. The text should read "Hello from [name]!", where `[name]` is the value from the state.
// C) Save the file and check your browser. What do you see? Why did the text change?

// Challenge 6: Passing Data with Props
// A) Go back to your `App.js` file.
// B) When you render the `Welcome` component, pass a prop to it. The prop should be named `username` and its value can be your own name in a string (e.g., `<Welcome username="Alice" />`).
// C) How can you now access this `username` prop inside the `Welcome` component's `render` method? What is the special keyword you must use?

// Challenge 7: Combining Props and State
// A) Modify the `render` method in your `Welcome.js` component again.
// B) This time, display a personalized message that uses *both* the `name` from your component's state and the `username` prop you passed from `App.js`.
// C) The message should read something like "Hello [state.name]! You are logged in as [props.username]."

// Challenge 8: Introducing Conditional Rendering
// A) Inside your `Welcome.js` component's `render` method, let's add some logic.
// B) Use an `if` statement to check if the `username` prop has been provided. A good way to check is `if (this.props.username)`.
// C) If the `username` prop exists, return the personalized greeting you created in the previous challenge.
// D) If the `username` prop is *not* provided (for example, if you remove it from `App.js`), return a different message that says "Hello, Guest. Please log in."
// E) What does this show you about the `render` method's capabilities? Why is this a powerful feature?

// Challenge 9: Conditional Rendering - The Ternary Operator
// A) The `render` method can be cluttered with `if` statements. A more common way to do simple conditional rendering in JSX is with the **ternary operator**.
// B) The ternary operator is a shorthand `if/else` statement. Its syntax is: `condition ? expression_if_true : expression_if_false`.
// C) Can you refactor the `if/else` logic from Challenge 8 into a single `return` statement using the ternary operator?
//    (Hint: You will need to wrap your conditional logic in curly braces `{}` inside your JSX.)
/*
  Section 1: Reference
  
  Quick Guide for React Class Components:
  
  A React Class Component is a JavaScript class that extends `React.Component` and is used to create interactive user interface elements.
  
  1.  Component Structure
      -   A class component requires a `render()` method, which returns JSX.
      -   It can have a `constructor()` method for initializing state and binding methods.
  
  2.  The `constructor()` Method
      -   Purpose: Called when a component is first created. Used to set up the initial state and bind event handlers.
      -   Syntax:
          constructor(props) {
            super(props); // Must be the first line!
            // Initialize state here
            this.state = {
              propertyName: 'initialValue'
            };
          }
  
  3.  The `render()` Method
      -   Purpose: The only required method. Returns the JSX that React will render to the screen.
      -   Syntax:
          render() {
            return <div>Your JSX here</div>;
          }
  
  4.  State (`this.state`)
      -   An object that holds data specific to a component that can change over time.
      -   You can access state properties using `this.state.propertyName`.
  
  5.  Props (`this.props`)
      -   A way to pass data from a parent component (like App.js) to a child component (like Welcome.js).
      -   You can access props using `this.props.propName`.
  
  6.  Exporting a Component
      -   Every component file must export its component so it can be used elsewhere.
      -   Syntax for a default export (most common for components):
          `export default ComponentName;`
  
  7.  Importing a Component
      -   To use a component from another file, you must import it.
      -   Syntax for a default import:
          `import ComponentName from './path/to/ComponentName.js';`
  
  ---
  
  Section 2: Challenge Prompts
  
  // Challenge 1: Creating and Importing a New Component
  // A) In your project's `src` folder, create a new file named `Welcome.js`.
  // B) Inside `Welcome.js`, import `React` at the top of the file.
  // C) Create a class component named `Welcome` that extends `React.Component`.
  // D) Inside this class, add the required `render()` method.
  // E) In the `render()` method, return a simple `<p>` tag with the text "Hello from the Welcome component!".
  // F) At the bottom of the file, add the correct syntax to export the `Welcome` component as a default export.
  
  // Challenge 2: Using the New Component in `App.js`
  // A) Go back to your `src/App.js` file.
  // B) At the top, import the `Welcome` component you just created.
  // C) Inside the `App` component's `return` statement, replace the existing content with your new `Welcome` component. Remember the correct syntax for self-closing components!
  // D) Save both files and check your browser. What do you see now?
  
  // Challenge 3: Initializing State with the `constructor`
  // A) Return to your `Welcome.js` file.
  // B) Inside your `Welcome` class, add a `constructor` method. Remember to include `props` as an argument and call `super(props)` as the very first line.
  // C) Inside the `constructor`, initialize the component's state. The state should be an object with one property: `subject`, set to the string "React".
  
  // Challenge 4: Displaying State
  // A) Now, modify the `render` method in your `Welcome` component.
  // B) Change the text inside your `<p>` tag to display the subject from your component's state. The text should read "This is a class component for learning [subject]!", where `[subject]` is the value from the state.
  // C) Save the file and check your browser. Did the text change?
  
  // Challenge 5: Passing Data with Props
  // A) Go back to your `App.js` file.
  // B) When you render the `Welcome` component, pass a prop to it. The prop should be named `course` and its value should be the string "React.js".
  
  // Challenge 6: Accessing and Displaying Props
  // A) Go back to your `Welcome.js` file.
  // B) Inside the `render` method, modify the `<p>` tag to also display the `course` prop.
  // C) The message should now read something like "This is a class component for learning [state.subject], specifically [props.course]!", using both the state and the prop.
  // D) Save the file. What do you see in the browser? How is data flowing from `App.js` to `Welcome.js`?
  
  // Challenge 7: Introducing Conditional Rendering
  // A) Inside your `Welcome.js` component's `render` method, add some logic.
  // B) Create a constant variable, perhaps `message`, that holds the JSX you want to display.
  // C) Use an `if` statement to check if the `course` prop has a value. A simple check is `if (this.props.course)`.
  // D) If the `course` prop exists, set `message` to the greeting you created in Challenge 6.
  // E) If the `course` prop is *not* provided, set `message` to a different message that says "Welcome to our coding bootcamp!".
  // F) Finally, replace your return statement's JSX with the `message` variable.
  // G) Now, go to `App.js` and remove the `course` prop from your `<Welcome />` tag. Save and observe the change in your browser.
  
  // Challenge 8: Conditional Rendering - The Ternary Operator
  // A) Let's refactor the conditional logic from the previous challenge to be more concise.
  // B) The **ternary operator** is a shorthand `if/else` statement commonly used in JSX. Its syntax is: `condition ? expression_if_true : expression_if_false`.
  // C) In your `render()` method, get rid of your `if/else` statement. Instead, use a single `return` statement with the ternary operator inside the JSX.
  // D) The logic should be: `return (this.props.course ? <p>...greeting with props and state...</p> : <p>...generic message...</p>);`
  // E) Toggle the `course` prop on the `<Welcome />` tag in `App.js` to confirm your logic still works.
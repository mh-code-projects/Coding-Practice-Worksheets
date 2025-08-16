/*
  Section 1: Reference

  Quick Guide for React Component Updating: setState

  1.  setState() with an Object
      -   Syntax: `this.setState({ key: new_value })`
      -   Purpose: To update the state with a new value. React merges the object you provide with the current state.
      -   Use When: The new state does not depend on the previous state.

  2.  setState() with a Function
      -   Syntax: `this.setState((prevState, props) => { return { key: prevState.key + 1 } })`
      -   Purpose: The safest way to update state when the new state depends on the old state. It ensures you are working with the most up-to-date state value.
      -   Use When: You need to increment a counter, toggle a boolean, or perform any operation based on the current state.

  Section 2: Challenge Prompts
*/

// Challenge 1: Adding a Button
// A) Open your `Welcome.js` component.
// B) In the `render` method, add a `<button>` element below your `<p>` tag.
// C) Give the button the text "Click Me".

// Challenge 2: Handling Clicks
// A) In your `Welcome` component, create a new method called `handleClick`.
// B) Inside `handleClick`, use `console.log()` to print a message like "Button was clicked!".
// C) Add an `onClick` event handler to your button with `{this.handleClick}`.

// Challenge 3: Initializing and Updating State
// A) In your `Welcome.js` component's `constructor`, set the initial state. The state object should have one property: `count`, with the value `0`.
// B) Modify your `handleClick` method to call `this.setState()`.
// C) Inside `setState()`, pass an object that increments the `count` property. What happens when you click the button? Why is this problematic?

// Challenge 4: The Correct Way to Update State
// A) Refactor your `handleClick` method to use the functional form of `setState`.
// B) The function should take `prevState` as an argument and return a new state object where `count` is `prevState.count + 1`.
// C) This method ensures you are always working with the most current state.

// Challenge 5: Displaying the Updated State
// A) In the `render` method, modify the JSX to display the current `count` from your component's state.
// B) For example, "You have clicked the button [count] times."
// C) Click the button. How does this demonstrate the updating lifecycle?

// Challenge 6: Using Props to Set Initial State
// A) Go to your `App.js` file and pass a prop to your `Welcome` component. The prop should be named `initialCount` and have a starting number value, e.g., `<Welcome initialCount={10} />`.
// B) In the `Welcome.js` component's `constructor`, use the `initialCount` prop to set the initial value of your state's `count` property.
// C) What is the benefit of setting state based on props in the constructor?

// Challenge 7: Resetting the Counter
// A) Let's add more functionality. In your `Welcome.js` file, add a second button with the text "Reset".
// B) Create a new method in your class called `handleReset`. This method should set the `count` state back to `0`.
// C) Attach `handleReset` to the "Reset" button using an `onClick` event handler.

// Challenge 8: Conditional Rendering on Update
// A) In your `render` method, add logic to display a different message based on the `count`.
// B) If the `count` is `0`, display "Click the button to start counting!".
// C) If the `count` is greater than `0`, display the current count as you did in Challenge 5.
// D) This shows how the `render` method can dynamically update the view in response to state changes.

// Challenge 9: Controlling Component Output
// A) Let's add a `maxCount` prop to your `Welcome` component in `App.js`, e.g., `<Welcome initialCount={5} maxCount={10} />`.
// B) In `Welcome.js`, use this prop to prevent the count from going beyond a certain number.
// C) In your `handleClick` method, add an `if` statement. If the new count would exceed `maxCount`, do not update the state.
// D) This is a common use case for controlling a component's behavior based on prop values and the current state.
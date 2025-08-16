import React from 'react';
import ReactDOM from 'react-dom/client';

// Section 2: Sample Data
const userProfiles = [
  { id: 1, name: "Liam", role: "Software Engineer" },
  { id: 2, name: "Olivia", role: "UX Designer" },
  { id: 3, name: "Noah", role: "Product Manager" },
  { id: 4, name: "Emma", role: "Data Scientist" },
];

const teamInfo = {
  name: "Voyager",
  project: "Orion",
  members: userProfiles.length,
};

// Challenge 1: Basic Prop Passing
// Create a component called `Greeting` that accepts a `name` prop.
// Render an `<h1>` tag inside the `Greeting` component that says "Hello, [name]!".
// In App.jsx, render the `Greeting` component and pass it a name of your choice.

// Challenge 2: Passing a Number Prop
// Create a component called `TeamStatus` that accepts `teamName` and `memberCount` props.
// Use the `teamInfo` object from the sample data.
// Pass the `name` and `members` properties from `teamInfo` as props to your `TeamStatus` component.
// Inside `TeamStatus`, render a `<p>` tag that says "The [teamName] team has [memberCount] members."

// Challenge 3: Passing an Object Prop
// Create a component called `ProfileCard` that accepts a `user` prop.
// The `user` prop will be an object with `name` and `role` properties.
// Inside `ProfileCard`, render a `<div>` that displays the user's name in an `<h2>` and their role in a `<p>`.
// In App.jsx, render a `ProfileCard` and pass it one of the objects from the `userProfiles` array.

// Challenge 4: Rendering a List of Components with Props
// This is a common and powerful use case for props.
// In your App.jsx, use the `.map()` method on the `userProfiles` array.
// For each `user` object in the array, render a `ProfileCard` component (from Challenge 3).
// Pass the entire `user` object as a prop to each `ProfileCard`.
// Hint: When you use `.map()` to render a list of components, each component needs a unique `key` prop. This helps React efficiently update the list. The `id` property on each user object is perfect for this!
// The syntax for a `key` prop is: `<Component key={item.id} ...otherProps />`.

// Challenge 5: Prop Destructuring
// Create a new component called `UserInfo`.
// Inside `UserInfo`, accept the props using the destructuring method: `({ name, role })`.
// Render the name in an `<h2>` and the role in a `<p>`, just like in Challenge 3.
// In App.jsx, render the `UserInfo` component, passing it `name` and `role` props with different values than the sample data.

// Section 4: Advanced Challenges

// Challenge 6: Dynamic Greeting
// Render the `Greeting` component (from Challenge 1) multiple times in your App.jsx.
// This time, use a different name for each instance. For example, one for "Mike," another for "Lisa," and a third for "Chris."

// Challenge 7: Composing Components with Props
// Create a component called `TeamMember`. It should accept two props: `memberName` and `memberRole`.
// In your App.jsx, use the `.map()` method on the `userProfiles` array (from Section 2).
// For each user object, render a `TeamMember` component. Pass the `name` and `role` properties from the user object as separate props to `TeamMember`.
// Remember to use a `key` prop!

// Challenge 8: Passing a Custom Object
// Create a new object in your App.jsx to represent a book, with properties like `title`, `author`, and `year`.
// Create a component called `BookDisplay` that accepts a `book` prop.
// Inside `BookDisplay`, display the book's title in an `<h3>` and the author and year in a `<p>`.
// Render the `BookDisplay` component in App.jsx and pass it your book object.

// Challenge 9: Reusable Profile List
// Create a new component called `ProfileList`.
// `ProfileList` should accept a single prop called `profiles` which will be an array of user objects.
// Inside `ProfileList`, map over the `profiles` array and render a `ProfileCard` component (from Challenge 3) for each item.
// In App.jsx, render the `ProfileList` component and pass it the `userProfiles` array.

// Challenge 10: Conditional Rendering with Props
// Create a component called `StatusIndicator`. It should accept a single `isOnline` prop, which will be a boolean value (either `true` or `false`).
// Inside `StatusIndicator`, use a conditional statement (like a ternary operator `? :` or an `if` statement) to render a different message based on the value of `isOnline`.
// If `isOnline` is `true`, render a green circle (`<span style={{ color: 'green' }}>●</span>`) followed by the text "Online".
// If `isOnline` is `false`, render a red circle (`<span style={{ color: 'red' }}>●</span>`) followed by the text "Offline".
// In App.jsx, render the `StatusIndicator` component twice, once with `isOnline` set to `true` and once with it set to `false`.

// Main App Component
function App() {
  return (
    <div>
      <h1>Props Worksheet</h1>
      <hr />

      <h2>Challenge 1</h2>

      <hr />

      <h2>Challenge 2</h2>

      <hr />

      <h2>Challenge 3</h2>

      <hr />

      <h2>Challenge 4</h2>

      <hr />

      <h2>Challenge 5</h2>

      <hr />

      <h2>Section 4: Advanced Challenges</h2>

      <hr />

      <h2>Challenge 6</h2>

      <hr />

      <h2>Challenge 7</h2>

      <hr />

      <h2>Challenge 8</h2>

      <hr />

      <h2>Challenge 9</h2>

      <hr />

      <h2>Challenge 10</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
   React is a JavaScript library for building user interfaces. It's used for creating interactive and dynamic UIs, especially in single-page applications, to efficiently handle UI updates and maintain a smooth user experience.

- What is Babel?
   Babel is a JavaScript compiler that enables developers to use the latest ECMAScript features in their code, even if the target environment doesn't support those features. It's commonly used in React projects to transpile JSX and ES6+ code.

- What is JSX?
   JSX is a syntax extension for JavaScript recommended by React. It allows you to write HTML-like code in your JavaScript files, making it easier to create and understand React components.

- How is a Component created in React?
   A React component can be created by defining a JavaScript function or class that extends `React.Component`. It must include a `render` method that returns the UI elements. Components can also have state and lifecycle methods.

- What are some differences between state and props?
   State is managed within a component, can change over time, and triggers a re-render. Props are properties passed from a parent component, and they are immutable within the component.

- What does "downward data flow" refer to in React?
   "Downward data flow" in React refers to the recommended practice of passing data from parent components to child components through props. This creates a unidirectional data flow, making it easier to understand and debug.

- What is a controlled component?
   A controlled component is a React component that receives its state from its parent through props and notifies changes through callbacks. It ensures that the parent has full control over the component's state.

- What is an uncontrolled component?
   An uncontrolled component is a React component that manages its state internally. It doesn't rely on the parent to control its state and typically uses refs to interact with and get values from the component.

- What is the purpose of the `key` prop when rendering a list of components?
   The `key` prop is used to help React identify which items have changed, been added, or been removed when rendering a list of components. It's crucial for optimizing the performance of rendering lists.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index as a `key` is discouraged because it can lead to issues when items are added or removed, causing unexpected behavior due to non-unique keys.

- Describe useEffect. What use cases is it used for in React components?
    `useEffect` is a React hook used for performing side effects in function components. It runs after every render and is commonly used for operations like data fetching, subscriptions, or manual DOM manipulation.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
    `useRef` creates a mutable object with a `current` property, often used to interact with DOM elements. Changes to a ref value do not cause a re-render of the component.

- When would you use a ref? When wouldn't you use one?
    Refs are used when you need to imperatively manipulate a DOM element, like focusing an input. They aren't typically needed for managing component state or data flow.

- What is a custom hook in React? When would you want to write one?
    A custom hook is a JavaScript function starting with "use" that uses other hooks. It allows you to reuse stateful logic across components, making complex logic more maintainable and shareable. You'd write one when duplicating logic across multiple components.
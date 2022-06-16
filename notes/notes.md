Declarative: Describe what the UI should look like, not all of the implementation details.
Component-based: Reusable piece of UIs, like custom HTML tags
Unidirectional data flow: Data flows in 1 direction (parent -> child)

In modern React, components are usually functional components, which are simply functions that return JSX.

JSX (JavaScript XML) a type of syntax extension for inlining XML and HTML in JavaScript.
For example, this code could be compiled into standard JavaScript function calls to create a heading element.

```js
const h1 = <h1>Hello World</h1>;
```

Package for inserting React element in the DOM:

```js
ReactDOM.render(element, DOMContainer);
```

A function component is a function that returns a ReactElement (JSX)
![Alt text](./snapshots/1.jpg)

---

When a component needs to re-render React might decide to remove and re-add that DOM node, which would result in removing our event listeners. So, as a general rule, we avoid using any traditional DOM manipulation on DOM nodes created by React. We use attributes or props instead.

---

Synthetic Event: The object type passed to React event handler functions. Synthetic Events generally work the same as native events, but with more consistency across browsers.

```js
//Example of synthetic event (1), and native event (2)
function handleClick(event) {
  console.log(event, event.nativeEvent);
}
```

---

State: Data specific to an instance of a component that persists between renders and causes re-renders when changed.

Hook: A JS function used to "hook" into React features such as state and the larger component lifecycle. The names of hooks always begin with <strong>use</strong>, and they cannot be called conditionally.

useState: A React hook for creating stateful components. The <strong>useState</strong> function takes in an initial state value (or a function that returns that initial value), and it returns an array with two elements: the current state value and a setter function. For example:

```js
const [number, setNumber] = useState(42);
```

useReducer: An alternative React hook for creating stateful components, oftentimes used for more complex state. The <strong>useReducer</strong> function takes in a reducer function and the initial state. It returns an array with two elements: the current state value and a dispatch function.

The reducer function takes in the previous state and an action object as parameters, then it returns the new state. Usually the action object will have a <strong>type</strong> property, which will be used in a switch statement. For example:

```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.num };
    case "decrement":
      return { count: state.count - action.num };
    default:
      throw new Error("Unkown action type");
  }
}
```

The dispatch function will then take in an object, which will be passed as the action tot he reducer function. For example:

```js
const [state, dispatch] = useReducer(reducer, { count: 0 });

return (
  <button
    onClick={() =>
      dispatch({
        action: "increment",
        num: 1,
      })
    }
  >
    Increment
  </button>
);
```

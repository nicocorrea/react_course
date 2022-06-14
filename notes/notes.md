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

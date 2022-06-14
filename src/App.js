import "./App.css";
import React from "react";

function App() {
  const flag = true;
  const type = "text";
  const props = {
    id: "input",
    type: "text",
    maxLength: "3",
  };
  // return flag ? <SayHello /> : <p>NadaPapi</p>;  Conditional Rendering
  return (
    <>
      {/* Whenever inside curly braces, we are in JS, so the syntax follow it */}
      {/* Short Circuit Evaluation */}
      {flag && <h1>True</h1>}
      {flag || <h1>False</h1>}
      <label htmlFor="input">Input: </label>
      <input id="input" type={type} maxLength="3" />
      <input {...props} placeholder="user" />
      <p className="center">Pepito esta centrado</p>
      <p
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "1.5em",
        }}
      >
        Enorme
      </p>
      <SayHello1 name="Nicolas" />
      <SayHello2 name="Claudio" />
      <SayHello2 />
      <Comment username="Conner" time={new Date().toISOString()}>
        <h1>Children One</h1>
        <p>Children Two</p>
      </Comment>
      <button onClick={handleClick}>Button</button>
      <br />
      <MyButton onClick={handleClick}>Button2</MyButton>
      <MyButton2 onClick={handleClick}>Button3</MyButton2>
    </>
  );
}

function SayHello1(props) {
  return <p>Hello {props.name}</p>;
}

// This can also work, by using destructuring
function SayHello2({ name = "Default Name" }) {
  return <p>Hello {name}</p>;
}

function Comment({ username, time, children }) {
  return (
    <section>
      <p>
        {username} commented at {time}
      </p>
      {children}
    </section>
  );
}

function handleClick(event) {
  console.log(event, event.nativeEvent);
}

function MyButton(props) {
  return (
    <button
      {...props}
      style={{
        color: "red",
      }}
    />
  );
}

// This is a test

// This is another way of creating the function component, but better the version above (MyButton).
function MyButton2(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        color: "blue",
      }}
    >
      {props.children}
    </button>
  );
}

export default App;

// This way you can return two elements
// to the DOM instead of these two embedded into
// a div (or span)
//
// function App() {
//   return (
//     <>
//       <SayHello />
//       <p>Test</p>
//     </>
//   );
// }

// function App() {
//   return (
//     <React.Fragment>
//       <SayHello />
//       <p>Test</p>
//     </React.Fragment>
//   );
// }

import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";
import {
  CallBackRef,
  ForwardRef,
  ReferenceNotOptimal,
  ReferenceOption1,
  ReferenceOption2,
} from "./Ref";

function App() {
  const flag = true;
  const type = "text";
  const props = {
    id: "input",
    type: "text",
    maxLength: "3",
  };
  const [isShown, setIsShown] = useState(true);

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
      <br />
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Hide Counter" : "Show Counter"}
      </button>
      {isShown ? <Counter /> : null}
      <hr />
      <ReferenceNotOptimal />
      <ReferenceOption1 />
      <ReferenceOption2 />
      <ForwardRef />
      <CallBackRef />
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

export default App;

// This way you can return two DOM elements to the DOM instead of these two embedded into
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

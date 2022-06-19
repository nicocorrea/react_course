import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import State from "./State";
import Reduce from "./Reducer";
import {
  ReferenceNotOptimal,
  ReferenceOption1,
  ReferenceOption2,
  ForwardRef,
  CallBackRef,
} from "./Ref";
import Imperative from "./Imperative";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <hr />
    <State />
    <hr />
    <Reduce />
    <hr />
    <ReferenceNotOptimal />
    <ReferenceOption1 />
    <ReferenceOption2 />
    <ForwardRef />
    <CallBackRef />
    <hr />
    <Imperative />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

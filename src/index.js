import React, { useContext } from "react";
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
import { UserContext, UserContextProvider } from "./UserContext";
import Profile from "./ContextProfile";
import ComponentList from "./ComponentList";
import Performance from "./Performance";
import CustomHook from "./CustomHook";
import Portal from "./Portal";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <hr />
    <h2>State</h2>
    <State />
    <hr />
    <h2>Reduce</h2>
    <Reduce />
    <hr />
    <h2>Refs</h2>
    <ReferenceNotOptimal />
    <ReferenceOption1 />
    <ReferenceOption2 />
    <ForwardRef />
    <CallBackRef />
    <hr />
    <h2>Imperative React</h2>
    <Imperative />
    <hr />
    <h2>Contexts</h2>
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
    <hr />
    <h2>Components List</h2>
    <ComponentList />
    <hr />
    <h2>Performance</h2>
    <Performance />
    <hr />
    <h2>Custom Hook</h2>
    <CustomHook />
    <hr />
    <h2>Portals</h2>
    <Portal />
  </React.StrictMode>
);

function AppInternal() {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toglge User</button>
    </>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

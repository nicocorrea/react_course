import { Component, memo } from "react";

// Using 'memo', anytime I change the number for Fib, it will use the previous loaded button component, rather than loading it again.
// The only time it will re-render the button is when any of the props change.
export default memo(function (props) {
  console.log("Rendering MyButton");

  const startTime = new Date();
  while (new Date() - startTime < 1000) {}

  return <button {...props} style={{ color: "red" }} />;
}, areEqual);

function areEqual(prevProps, newProps) {
  console.log(prevProps, newProps);
  return true;
}

// Without 'memo', anytime I change the number for Fib, it will render the button component.

// export default function MyButton(props) {
//   console.log("Rendering MyButton");

//   const startTime = new Date();
//   while (new Date() - startTime < 1000) {}

//   return <button {...props} style={{ color: "red" }} />;
// }

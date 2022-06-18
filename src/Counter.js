import { useEffect, useLayoutEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    console.log("count changed");

    return () => console.log("cleanup count changed");
  }, [count]);

  useEffect(() => {
    console.log("render");
  });

  // Here, with LayoutEffect it will run before painting to the screen, whereas if we do this with
  // useEffect, it will first paint the '3', and then paint the '4'.
  useLayoutEffect(() => {
    if (count === 3) {
      setCount(4);
    }
  }, [count]);

  // This piece of code will end in a loop, because it will run every time count changes, and I am calling that all the time
  //   useEffect(() => {
  //     setCount(count + 1);
  //   }, [count]);

  return (
    <>
      <button onClick={() => setBool(!bool)}>Re-Render</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
}

export default Counter;

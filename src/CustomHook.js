import { useState, useRef, useEffect } from "react";

export default function CustomHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const prevCount = usePrevious(count);
  const prevText = usePrevious(text);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Previous render count: {prevCount}</p>

      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>Previous render text: {prevText}</p>
    </>
  );
}

function usePrevious(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);
  return prevRef.current;
}

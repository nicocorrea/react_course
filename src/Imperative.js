import { useRef } from "react";
import Counter from "./ImperativeCounter";
import CustomInput from "./ImperativeCustomInput";

export default function Imperative() {
  const counterRef = useRef();
  const customInputRef = useRef();
  return (
    <>
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="Type something..." />
      <button
        onClick={() => {
          counterRef.current.reset();
          customInputRef.current.reset();
        }}
      >
        Reset
      </button>
    </>
  );
}

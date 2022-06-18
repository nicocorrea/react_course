const { useState, useRef, forwardRef } = require("react");

export function ReferenceNotOptimal() {
  const [seconds, setSeconds] = useState(0);
  const [timerID0, setTimerID] = useState(null);

  const startTimer = () => {
    setTimerID(
      setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(timerID0);
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>Seconds: {seconds}</p>
    </>
  );
}

export function ReferenceOption1() {
  // Here, as we are using an object within useState, we are not calling the set function (i.e. setTimerID
  // which produces to re-render, something that we can avoid and be more performant.)
  const [seconds, setSeconds] = useState(0);
  const [timerID1, setTimerID] = useState({
    current: null,
  });

  const startTimer = () => {
    timerID1.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerID1.current);
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>Seconds: {seconds}</p>
    </>
  );
}

export function ReferenceOption2() {
  const [seconds, setSeconds] = useState(0);
  const timerID2 = useRef(null);

  const startTimer = () => {
    timerID2.pepe = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    console.log(typeof timerID2); // Object
  };

  const stopTimer = () => {
    clearInterval(timerID2.pepe);
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>Seconds: {seconds}</p>
    </>
  );
}

export function ForwardRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <MyInputForward ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

const MyInputForward = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} style={{ color: "red" }} />;
});

export function CallBackRef() {
  return (
    <>
      <MyInputCallBack ref={handleRef} />
    </>
  );
}

function handleRef(domNode) {
  console.log(domNode);
}

const MyInputCallBack = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} style={{ color: "red" }} />;
});

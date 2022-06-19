import { Suspense, useCallback, useMemo, useState, lazy } from "react";
const MyButton = lazy(() => import("./PerformanceButton"));

export default function Performance() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState("");
  const fibValue = useMemo(() => {
    console.log("calculating fib value");
    return fib(num);
  }, [num]);

  //Similar to useMemo but for function(s). Only run the function, in here console.log(logValue), logValue changes.
  const onClickLog = useCallback(() => {
    console.log(logValue);
  }, [logValue]);

  return (
    <>
      <h1>
        {/* Fib{num} is {fib(num)}   This way I calculate fib(num) every time I even make a change in the other input tag below*/}
        {/* And this way we only calculate whenever there is a change in {num}. Using useMemo() above. */}
        Fib{num} is {fibValue}
      </h1>
      <input
        type={"number"}
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />

      <input
        type={"text"}
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)}
      />

      {logValue.length > 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MyButton onClick={onClickLog}>Log Value</MyButton>
        </Suspense>
      ) : null}
    </>
  );
}

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}

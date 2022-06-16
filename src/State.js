import React, { useState } from "react";

function State() {
  const [countShared, setCountShared] = useState(0);
  const [textValue, setTextValue] = useState("");

  const handleTextValue = () => {
    console.log(textValue);
  };

  return (
    <>
      <input
        type={"text"}
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <button onClick={handleTextValue}>
        Press me and watch in the console
      </button>

      <br />

      <Counter countShared={countShared} setCountShared={setCountShared} />
      <Counter countShared={countShared} setCountShared={setCountShared} />
      <MyButton onClick={handleClick}>Console Out</MyButton>
      <MyButton2 />
      <MyButton3 startingCount={100} />
      <MyButton4 />
      <MyButton5 />
    </>
  );
}

function Counter({ countShared, setCountShared }) {
  return (
    <>
      <button onClick={() => setCountShared(countShared + 1)}>
        Incrementing the same state
      </button>
      <p>So the value is {countShared}</p>
    </>
  );
}

function MyButton(props) {
  return (
    <>
      <button
        {...props} // To receive the onClick attribute, or any other, declared above.
        style={{
          color: "red",
          fontSize: "1.5em",
        }}
      />
      <br />
    </>
  );
}

function handleClick(event) {
  console.log(event, event.nativeEvent);
}

function MyButton2() {
  const manzana = 10;
  const [price, setValue] = useState(() => initialPrice(10));

  function initialPrice(tax = 10) {
    return manzana * (1 + tax / 100);
  }

  return (
    <>
      <button onClick={() => setValue(price + 1)}>
        Add 1 to price with State
      </button>
      <p>Price {price}</p>
    </>
  );
}

function MyButton3({ startingCount = 0 }) {
  return (
    <>
      <button
        onClick={() => {
          startingCount++;
          console.log(startingCount);
        }}
      >
        Add 1 to price without State
      </button>
      <p>Count {startingCount}</p>
    </>
  );
}

function MyButton4() {
  const [value, setValue] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
          setValue((prevValue) => prevValue + 1);
          setValue((prevValue) => prevValue + 1);
        }}
      >
        Adding by 3 using linked arrow function
      </button>
      <p>Value is {value}</p>
    </>
  );
}

function MyButton5() {
  const [obj, setObj] = useState({ name: "Nicolas" });

  return (
    <>
      <button
        onClick={() => {
          setObj({ name: "Correa" });
        }}
      >
        useState with object as default value needs to update the same way
      </button>
      <p>Name is {obj.name}, and when clicking in the button....?</p>
    </>
  );
}

export default State;

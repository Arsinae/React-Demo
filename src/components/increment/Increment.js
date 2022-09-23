import { useState } from 'react';
import "./Increment.css"

function IncrementButton(props) {
  const handleClick = () => props.onClickFunction(props.increment);

  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function IncrementDisplay(props) {
  return (
    <div>
      {props.counter}
    </div>
  )
}

export function Increment() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = (increment) => setCounter(counter + increment);
  const incrementsValues = [1, 2, 10];

  return (
    <>
      <div>
        {incrementsValues.map((v, i) => <IncrementButton key={i} increment={v} onClickFunction={incrementCounter} />)}
      </div>
      <IncrementDisplay counter={counter} />
    </>
  )
}
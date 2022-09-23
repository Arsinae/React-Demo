import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);

  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div>
      {props.counter}
    </div>
  )
}

function App() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = (increment) => setCounter(counter + increment);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button increment={1} onClickFunction={incrementCounter} />
          <Button increment={2} onClickFunction={incrementCounter} />
          <Button increment={10} onClickFunction={incrementCounter} />
        </div>
        <Display counter={counter} />
      </header>
    </div>
  );
}

export default App;

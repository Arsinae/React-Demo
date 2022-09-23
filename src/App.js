import logo from './logo.svg';
import './App.css';
import {Increment} from './components/increment/Increment';
import { CardContainer } from './components/card/card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Increment />
        <CardContainer />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { User } from './User';

function App() {
  let x=5
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {x}
        </a>
      </header>
      <User/>
    </div>
  );
}

export default App;

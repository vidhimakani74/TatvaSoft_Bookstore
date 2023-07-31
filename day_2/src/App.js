import logo from './logo.svg';
import './App.css';
import { User } from './User';

function App() {

  //var 
  let x=5;

  //array 
  const array=[10,20,30,40,50];
  //aray method : filter
  const filterdarray=array.filter((item)=>item!==30); //it works as loop
  console.log(filterdarray);

  //aray method :map
  const mapedarray=array.map((item)=>item!==30); //it works as loop
  console.log(mapedarray);

  // const fivearray=array.map((item)=>item*5); //it works as loop
  // console.log(fivearray);


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

      {/* use of map to print array ele on screen*/}
      {array.map((item)=>{
        return <h6>{item}</h6>
      })}

    </div>
  );
}

export default App;

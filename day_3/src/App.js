// import logo from './logo.svg';
import './App.css';
import { User } from './User';
import { Home } from "./User";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  //prps -- use var in fun
  const userName="Vidhi";
  return (

    <BrowserRouter>
    <div className="App">

      {/* routing */}
         <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/User" element={<User name={userName} age={20}/>}/>       
         </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;

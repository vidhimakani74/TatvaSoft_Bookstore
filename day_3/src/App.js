import './App.css';
import { User } from './User';
import { Home } from "./User";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Profile } from './components/profile/Profile';

function App() {

  //props -- use var in fun
  const userName="Vidhi";
  return (

    <BrowserRouter>
    <div className="App">

      {/* routing */}
         <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/User" element={<User name={userName} age={20}/>}/>  
            <Route path="/Profile" element={<Profile/>}/>       
         </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;

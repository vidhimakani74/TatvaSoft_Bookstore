import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const User = ({ name, age }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
        <form>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={()=>window.alert(`Email is ${email}. Password is ${password}`)}>Submit</button>
        </form>
        </>
    );
};

export const Home = () => {
    return (
      <>
        <h1>
          This is Home component
          <h4>
            <NavLink to={"/User"}>User</NavLink>
          </h4>
          <h4>
            <NavLink to={"/Profile"}>Profile</NavLink>
          </h4>
        </h1>
      </>
    );
  };
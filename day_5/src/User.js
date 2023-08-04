import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const User = ({ name, age }) => {
    const [details, setDetails]=useState({
        email:"",
        password:"",
    });
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
const handleChange=(e,property)=>{
    setDetails({
        ...details, //spread operator- Updating input states - it store the previous value & if bellow statement change the value then it overwrite it 
        [property]: e.target.value
    }
    )
};

    return (
        <>
        <form>
            <input value={details.email} onChange={(e)=>{handleChange(e, "email")}}/>
            <input value={details.password} onChange={(e)=>{handleChange(e,"password")}}/>
            <button onClick={()=>window.alert(`Email is ${details.email}. Password is ${details.password}`)}>Submit</button>
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
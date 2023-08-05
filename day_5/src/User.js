import { NavLink } from 'react-router-dom';
import {useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const User = ({ name, age }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleChange = (e, property) => {
    setDetails({
      ...details, //spread operator- Updating input states - it store the previous value & if bellow statement change the value then it overwrite it 
      [property]: e.target.value
    }
    )
  };

  const initialValue={
    email:"",
    password:""
}
  const validationSchema =Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(10, 'Password must not exceed 10 characters'),
  });
  

//useEffect is hook-allows you to perform side effects in your components

//1st arg->()=>{}- is fun 
//2nd arg->[]- is dependency array-it controls, on which action function perform
// useEffect(()=>{
//   window.addEventListener("click",()=>{});
//   return()=>{ //cleanup fun
//     window.removeEventListener("click",()=>{});
//   }
// },[]);

    return (
    <>
       <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={(values)=>{alert("Registered Successfully")}}>
            {
                ({values,errors,handleChange,handleSubmit})=>{
            return (
              <form onSubmit={handleSubmit}>
                <input name='email' onChange={handleChange} />
                <br />
                {errors.email ? errors.email: ""}
                <br />
                <input name='password' onChange={handleChange} />
                <br />
                {errors.password ? errors.password: ""}
                <br />
                <button type='submit'>Submit</button>
              </form>
            )
          }}
      </Formik>

    </>
  );
};

export const Home = () => {
  return (
    <>
      <h1>
        This is Home component
        <h4>
          <NavLink to={"/Register"}>Register</NavLink>
        </h4>
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
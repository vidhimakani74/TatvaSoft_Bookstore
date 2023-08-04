import React from 'react';
import { NavLink } from "react-router-dom";
// import logo from "../src//assets/logo.svg"
// import { Profile } from './components/profile/Profile';

export const User=({name, age})=>{
    const x =5;
    return(
        // only return 1 element so that when u want to use multiple div or any other element 
        // then u can wrap it into the <></> or <React.Fragment></React.Fragment> tags

        // this is optional -> u can use <></> this also
        <React.Fragment> 
            <h1>This is User component
                <h4>Welcome {name}</h4>
                <h6>Age {age}</h6>
                {x}
                <br />
                <NavLink to={"/"}>Home</NavLink>
            </h1>
            <h2>
                Go to Home 👆
            </h2>
            {/* <img src={logo} /> */}
        </React.Fragment>
    )
 };

export const Home=()=>{
    return(
        <>
        <h1>This is Home component
            <h4><NavLink to={"/User"}>User</NavLink></h4>
            <h4><NavLink to={"/Profile"}>Profile</NavLink></h4>
        </h1>
        </>

    )
 };


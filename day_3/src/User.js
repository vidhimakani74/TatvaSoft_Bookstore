import React from 'react';

import { NavLink } from "react-router-dom";

export const User=({name, age})=>{
    return(
        // only return 1 element so that when u want to use multiple div or any other element 
        // then u can wrap it into the <></> or <React.Fragment></React.Fragment> tags

        // this is optional -> u can use <></> this also
        <React.Fragment> 
            <h1>This is User componenet
                <h4>Welcome {name}</h4>
                <h6>Age {age}</h6>

                <NavLink to={"/"}>Home</NavLink>
            </h1>
            <h2>
                Go to Home 👆
            </h2>
        </React.Fragment>
    )
 };

export const Home=()=>{
    return(
        <>
       
        <h1>This is Home componenet
            <h4><NavLink to={"/User"}>User</NavLink></h4>
            
        </h1>
        <h2>Go to User 👆</h2>
        </>

    )
 };


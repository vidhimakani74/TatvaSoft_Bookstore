import { NavLink } from "react-router-dom";
import classes from "./Profile.module.css"
import {Button} from "@material-ui/core" 
export const Profile=()=>{
    return(
        <>
        <h1 className={classes.heading}>Profile component</h1>
        <h1><NavLink to={"/"}>Home</NavLink></h1>
        <h1><Button variant="contained" color="primary" size="large" className="clk-btn" classes={{
            
        }}>Click Me</Button></h1>
        </>
    )
};
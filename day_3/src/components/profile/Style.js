import {makeStyles } from "@material-ui/core";

export const estyles = makeStyles((theme)=>({
    wrapper:{
        // & indicate parent Element
        "& .clk-btn":{
            backgroundColor:"black",
            color:"#33FFFC",
        },
        "& .txt-fld":{
            backgroundColor:"#33FFFC",
            color:"black",
            marginRight:"50px",
        },
    },
}));
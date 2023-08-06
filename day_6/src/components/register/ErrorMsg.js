import classes from './Register.module.css';
function ErrorMsg(props){
    return(
        <p className={classes.error}>
        {props.error ? props.error : ""}
        </p>
    );
}

export {ErrorMsg};
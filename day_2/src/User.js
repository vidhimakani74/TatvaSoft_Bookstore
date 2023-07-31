export const User=(props)=>{
    return(
        <h1>This is User componenet
            <h4>Welcome {props.name}</h4>
        </h1>
    )
 };


//  or

//  const User=()=>{
//     return(
//         <h1>This is User componenet</h1>
//     )
//  };

//  export {User};

// if you want to export component without {} then user "default" keyword..
// with default keyword u can export only one var/ fun
// export default User;
// & don't use {} in import as well & u can use any name in import
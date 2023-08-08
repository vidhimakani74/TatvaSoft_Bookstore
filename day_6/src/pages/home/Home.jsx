import { NavLink } from 'react-router-dom';
export const Home = () => {
    return (
      <>
        <h1>
          This is Home component
          <h4>
            <NavLink to={"/Register"}>Register</NavLink>
          </h4>
        </h1>
      </>
    );
  };
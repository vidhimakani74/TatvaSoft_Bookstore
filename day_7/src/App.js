import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./User";
import { User } from "./User";
import { createTheme } from "@material-ui/core";
import { Profile } from "./components/profile/Profile.jsx";
import { Register } from "./components/register/Register";
import { ToastContainer } from 'react-toastify';

function App() {
  const userName = "Vidhi";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e57373",
      },
      secondary: {
        main: "#1976d2",
      },
    },
    shadows: ["1px 1px red"],
  });

  return (
    <div className="App wrapper">
      <ToastContainer />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            {/* routing */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/User" element={<User name={userName} age={20} />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
      </div>  );
}

      export default App;

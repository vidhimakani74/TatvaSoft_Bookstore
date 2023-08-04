// this is root component
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import "./App.css";
import { Home } from "./User";
import { User } from "./User";
import { Profile } from "./components/profile/Profile";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

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
    shadows:[
      "1px 1px red"
    ]
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/User" element={<User name={userName} age={20} />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

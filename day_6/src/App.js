import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/register";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from "./pages/home/Home";
const App = () => {
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
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
    </div> 
  );
};

export default App;

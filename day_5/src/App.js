import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import { Home } from "./User";
import { User } from "./User";
import { createTheme } from '@material-ui/core';
import { Profile } from './components/profile/Profile.jsx'

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

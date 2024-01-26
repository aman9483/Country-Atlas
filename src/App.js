import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Components/Navbar/Header';
import CountryDetails from './pages/CountryDetails/CountryDetails';
import Home from './pages/Home/home';
import Footer from './Components/Footer/footer'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header darkMode={darkMode} onDarkModeToggle={toggleDarkMode} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<CountryDetails />} />
          </Routes>

         
        </div>
      </ThemeProvider>

      <Footer/>
    </BrowserRouter>

   
  );
}

export default App;

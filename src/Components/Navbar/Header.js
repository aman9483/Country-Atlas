import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#2b3743' : 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: darkMode ? 'white' : 'black',
                textDecoration: 'none',
              }}
            >
              Globe Info
            </Typography>

            <IconButton onClick={handleToggleDarkMode} sx={{ color: darkMode ? 'white' : 'black' }}>
              <Brightness4Icon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;

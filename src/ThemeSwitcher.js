import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode || false;
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeSwitcher;

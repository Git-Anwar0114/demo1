import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can store the current dark mode state in localStorage or a global state management system like Redux
  };

  // Use useEffect to apply the dark mode styles when the state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="custom-control custom-switch ml-2">
      <input
        type="checkbox"
        className="custom-control-input"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className="custom-control-label" htmlFor="darkModeToggle">
        Dark Mode
      </label>
    </div>
  );
}

export default DarkModeToggle;

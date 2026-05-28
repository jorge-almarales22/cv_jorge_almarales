import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('default-dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default-dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'default-light' ? 'default-dark' : 'default-light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-4 right-16 md:right-4 z-50 p-2 rounded-full bg-accent/10 border border-accent/10 hover:border-accent/40 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === 'default-light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggle;

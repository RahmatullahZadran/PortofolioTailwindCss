import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Midle from './components/midle';
import Projects from './components/projects';
import Footer from './components/footer';
import Youtube from './components/youtube';

// Create a context for dark mode
export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Midle />} />
            <Route path="/midle" element={<Midle />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/youtube" element={<Youtube />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

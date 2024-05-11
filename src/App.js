import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Midle from './components/midle';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <Navbar />
      <Midle />
      <Projects />
    </div>
  );
}

export default App;

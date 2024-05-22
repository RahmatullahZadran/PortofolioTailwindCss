import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Midle from './components/midle';
import Projects from './components/projects';
import Footer from './components/footer';
import Youtube from './components/youtube';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Midle />} />
          <Route path="/midle" element={<Midle />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/youtube" element={<Youtube />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

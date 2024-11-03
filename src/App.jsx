import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import About from './pages/about';
import Notes from './pages/notes';
import Home from './pages/home';

function Index() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
}

export default Index;

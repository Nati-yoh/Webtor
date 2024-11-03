import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Links from './pages/links';

function Index() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Links" element={<Links />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default Index;

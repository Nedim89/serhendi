import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
//import './Menu.css'; // Your CSS file for styling

export const Menu = () => {
  return (
    <BrowserRouter>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item"><Link to="/">O Serhendi putu</Link></li>
          <li className="menu-item"><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


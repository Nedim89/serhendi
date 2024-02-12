//import React from 'react';
function Header() {
    return (
      <header className="header">
        <div className="logo">
          <img className="logo" src="../../public/img/logo.jpg" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
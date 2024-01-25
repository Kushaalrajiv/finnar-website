import React, { useState } from 'react';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="navbar-container">
      <header className="navbar-header">
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href='#home' className={`logo`}>Finnar</a>

          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`navLink`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`navLink`}>Services</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`navLink`}>About Us</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`navLink`}>Contact</a>
            </li>
          </ul>

          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

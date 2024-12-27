import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'visible';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <div className='navnew-container'>
        <ul className='navnew-desktop'>
          <NavLink to={'/'} onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <div className='navnew-right'>
            <NavLink to={'/projects'} onClick={closeMenu}>
              <li>Projects</li>
            </NavLink>
            <NavLink to={'/join-us'} onClick={closeMenu}>
              <li className='navnew-joinus-btn'>Join Us</li>
            </NavLink>
            <NavLink to={'/members'} onClick={closeMenu}>
              <li>Members</li>
            </NavLink>
          </div>
        </ul>

        {/* Mobile menu button */}
        <button className='navnew-mobile-toggle' onClick={toggleMenu}>
          <span className={`navnew-hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`navnew-mobile-overlay ${isMenuOpen ? 'show' : ''}`}>
        <ul className='navnew-mobile-menu'>
          <NavLink to={'/'} onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/projects'} onClick={closeMenu}>
            <li>Projects</li>
          </NavLink>
          <NavLink to={'/join-us'} onClick={closeMenu}>
            <li className='navnew-joinus-btn'>Join Us</li>
          </NavLink>
          <NavLink to={'/members'} onClick={closeMenu}>
            <li>Members</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
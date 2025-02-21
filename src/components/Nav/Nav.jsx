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
      <div className='navnew-container flex rounded-full shadow-slate-50/100 shadow-sm inset-shadow-slate-50/50 inset-shadow-xs backdrop-blur'>
        <ul className='md:flex justify-between place-items-center w-full h-full font-bold hidden'>
          <NavLink to={'/'} onClick={closeMenu}>
            <li className='bg-white rounded-full'>Home</li>
          </NavLink>
          <div className='flex gap-6'>
            <NavLink to={'/projects'} onClick={closeMenu}>
              <li className='hover:bg-white hover:text-black text-white duration-300 rounded-full'>Projects</li>
            </NavLink>
            <NavLink to={'/join-us'} onClick={closeMenu}>
              <li className='hover:bg-orange-500 duration-300 text-white rounded-full'>Join Us</li>
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
        <ul className='navnew-mobile-menu flex flex-col gap-5'>
          <NavLink to={'/'} onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/projects'} onClick={closeMenu}>
            <li>Projects</li>
          </NavLink>
          <NavLink to={'/join-us'} onClick={closeMenu}>
            <li className='bg-orange-500 rounded-full'>Join Us</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
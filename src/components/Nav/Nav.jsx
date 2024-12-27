import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <div className='navbar-container'>
        <ul className='navbar'>
            <NavLink to={'/'}>
              <li>Home</li>
            </NavLink>
            <div className='navbar-right'>
                <li>Projects</li>
                <NavLink>
                  <li id='joinus-btn'>Join Us</li>
                </NavLink>
                <li>Members</li>
            </div>
        </ul>
    </div>
  )
}

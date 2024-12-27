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
                <NavLink to={'/projects'}>
                  <li>Projects</li>
                </NavLink>
                <NavLink to={'/join-us'}>
                  <li id='joinus-btn'>Join Us</li>
                </NavLink>
                <NavLink to={'/members'}>
                  <li>Members</li>
                </NavLink>
            </div>
        </ul>
    </div>
  )
}

import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className='navbar-container'>
        <ul className='navbar'>
            <div className='navbar-left'>
                <li>Home</li>
            </div>
            <div className='navbar-right'>
                <li>About</li>
                <li id='joinus-btn'>Join Us</li>
                <li>Projects</li>
            </div>
        </ul>
    </div>
  )
}

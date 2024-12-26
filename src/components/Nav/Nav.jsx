import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className='navbar-container'>
        <ul className='navbar'>
            <li>Home</li>
            <div className='navbar-right'>
                <li>Projects</li>
                <li>Join Us</li>
                <li>Members</li>
            </div>
        </ul>
    </div>
  )
}

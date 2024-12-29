import React from 'react'
import './Main.css'
import { NavLink } from 'react-router-dom'

export default function Main() {
  return (
    <div className='main-container'>
      <h1 className="animated-logo">OSU Dev Club</h1>
      <div className="logo-underline"></div>
      <div className='hero-tagline'>
        Where Innovation Meets Orange
      </div>
      <div className='hero-quote'>
        <p>
          "At OSU Dev Club, we move fast, break things, and build startups that matter. 
          We're not just coding—we're shaping the future."
        </p>
      </div>
      <NavLink to={'/join-us'}>
        <button className='main-call-to-action-btn'>
          Shape the Future
        </button>
      </NavLink>
    </div>
  )
}

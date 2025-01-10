import React from 'react'
import './Main.css'
import { NavLink } from 'react-router-dom'

export default function Main() {
  return (
    <>
    <div className='main-container'>
      <h1 className="animated-logo"><span>OSU</span> Dev Club</h1>
      <div className="logo-underline"></div>
      <div className='hero-tagline'>
        Where Innovation Meets <span>Orange</span>
      </div>
      <NavLink to={'/join-us'}>
        <button className='main-call-to-action-btn'>
          Shape the Future
        </button>
      </NavLink>
    </div>
    <div className='main-container-mobile'>
      <div className='main-mobile-header'>
        <h1><span>OSU</span> Dev Club</h1>
        <div className='logo-underline-mobile'></div>
        <p>Where Innovation Meets <span>Orange</span></p>
      </div>
      <NavLink to={'/join-us'}>
        <button className='main-call-to-action-btn-mobile'>
          Shape the Future
        </button>
      </NavLink>
    </div>
    </>
  )
}

import React from 'react'
import logo from '../Assets/logo.png'

export default function () {
  return (
    <>
    <header>
        <nav className="nav__container">
        <img className='nav__logo' src={logo} alt="" />
        <div className='nav__title'>1 Prestigious Power Washing</div>
        <div className="nav__links">
            <a href="" className="nav__link--anchor link__hover-effect link__hover-effect--black">Get a Quote Today!</a>
            <a href="" className="nav__link--anchor link__hover-effect link__hover-effect--black">About Us!</a>
        </div>

        </nav>
        </header>
        
    </>
  )
}

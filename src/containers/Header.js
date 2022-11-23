import React from 'react'
import './Header.css'

const Header = () => {
  return(
    <div className="header-item">
    <div className='logo-img'>
        <img src="images/vasy-logo.png" alt="logo" />
    </div>
    <nav className="nav-items">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Product</a>
        <a href="">Contact</a>
    </nav>
    </div>
  )
}

export default Header
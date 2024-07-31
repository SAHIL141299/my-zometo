import React from 'react'
import './navbar.css'

const index = () => {
  return (
    <div>
        <nav className="navbar">
    <div className="navbar-brand"></div>
    <ul className="navbar-menu">
      <li className="signin"><a href="#">Sign In</a></li>
      <li className="login"><a href="#">Login</a></li>
    </ul>
  </nav>
    </div>
  )
}

export default index

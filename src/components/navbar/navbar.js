import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const navbar = () => {
  return (
    <nav className='main-nav'>
        <img
          className='logo1'
          src="/utils/images/logo1.png"
          alt='logo'
        />

        <div className='nav-links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Login</Link>
            </li>
            <li>
              <Link to='/'>Sign Up</Link>
            </li>
          </ul>
        </div>

      </nav>
  )
}

export default navbar

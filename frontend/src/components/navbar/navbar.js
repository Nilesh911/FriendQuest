import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo1 from '../../utils/images/logo1.png';



const navbar = () => {
  return (
    <nav className='main-nav'>
        <img
          className='logo1'
          src={logo1}
          alt='logo'
        />

        <div className='nav-links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Map</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/Register'>Sign Up</Link>
            </li>
          </ul>
        </div>

      </nav>
  )
}

export default navbar

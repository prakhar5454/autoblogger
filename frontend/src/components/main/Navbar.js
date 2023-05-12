import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
      <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
            <img src="/logomain.png" height="45" alt=" Logo" loading="lazy" />
          </NavLink>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <NavLink className="nav-link text-white me-1" to="/main/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link text-white me-1" to="/main/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link text-white me-1 " to="/main/register">
              Sign up
            </NavLink>
          </li>
          

          <li className="nav-item">
          <NavLink className="nav-link text-white me-1" to="/main/contact us">
              Contact us
            </NavLink>
          </li>
          
          
        </ul>
      
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
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
          <NavLink className="nav-link text-white me-1" to="/main/register">
              Sign UP
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link text-white me-1" to="/signup">
              About us
            </NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link text-white me-1" to="/contact us">
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
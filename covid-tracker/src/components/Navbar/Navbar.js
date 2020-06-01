import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red lighten-1">
      <div className="container">
        <a className="navbar-brand" href="/#">Corona-Tracker</a>
        <ul className="right">

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/testing">Testing Locations</NavLink></li>
          <li><NavLink to="/newcases">Recently Reported Cases</NavLink></li>
          <li><NavLink to="/report">Report Cases</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)

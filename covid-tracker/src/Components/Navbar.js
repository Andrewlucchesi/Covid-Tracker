import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Corona Tracker</h1>
        <ul className="right">
          <li><NavLink to="/Report">Report a new Case</NavLink></li>
          <li><NavLink to='/ViewCases'>View Cases</NavLink></li>
          <li><NavLink to='/HomePage'>Home Page</NavLink></li>
          <li><NavLink to='/FindTestLoc'>Find the nearest testing facility</NavLink></li>
          
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar
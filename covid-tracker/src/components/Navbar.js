import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <div className="container">
                <a className="brand-logo">Corona-Tracker</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cases">Cases</NavLink></li>
                    <li><NavLink to="/info">Info</NavLink></li>
                    <li><NavLink to="/report">Report</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
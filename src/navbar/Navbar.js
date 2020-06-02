import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          AirBnB
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/host">Become a host</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

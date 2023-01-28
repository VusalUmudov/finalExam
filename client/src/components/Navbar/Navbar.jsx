import React from "react";
import "./navbar.scss";
import { NavLink } from 'react-router-dom';
import imgUrl from "../../Images/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={imgUrl} alt="logo" />
        </div>

        <div className="nav-menu">
          <ul>
            <li><NavLink className={'listt'} to=''>HOME</NavLink></li>
            <li><NavLink className={'list'} to='/add'>Add</NavLink></li>
            <li>FEATURES</li>
            <li>TESTIMONAIL</li>
            <li>CONTACT</li>
            <li>PAGES</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

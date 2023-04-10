import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/planet-1.png';

const Header = () => (
  <header>
    <nav>
      <div className="logo-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="title">
          <h1>Space Travelers Hub</h1>
        </div>
      </div>
      <ul>
        <li><NavLink to="/rockets" activeClassName="active-link">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeClassName="active-link">Missions</NavLink></li>
        <li><NavLink to="/my-profile" activeClassName="active-link">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

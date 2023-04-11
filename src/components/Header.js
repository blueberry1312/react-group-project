import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet-1.png';
import './Header.css';

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
        <li>
          <NavLink
            to="/rockets"
            activeclassname="active-link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Rockets
          </NavLink>
        </li>
        <div className="vert-lane" />
        <li>
          <NavLink
            to="/missions"
            activeclassname="active-link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Missions
          </NavLink>
        </li>
        <div className="vert-lane" />
        <li>
          <NavLink
            to="/my-profile"
            activeclassname="active-link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet-1.png';
import Logo2 from '../assets/planet-3.png';
import './Header.css';

const Header = () => {
  const [logoImage, setLogoImage] = useState(Logo);

  const handleLogoHover = () => {
    setLogoImage(Logo2);
  };

  const handleLogoLeave = () => {
    setLogoImage(Logo);
  };

  return (
    <header title="header-component">
      <nav>
        <NavLink to="/">
          <div
            className="logo-container"
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <div className="logo">
              <img src={logoImage} alt="Logo" />
            </div>
            <div className="title">
              <h1>Space Travelers Hub</h1>
            </div>
          </div>
        </NavLink>
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
};

export default Header;

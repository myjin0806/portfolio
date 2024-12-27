import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="headerWrap">
        <NavLink to="/" className="logo">FRONT-END * 김해진</NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'navLink home active' : 'navLink home')}
                end
              >
                <img src="/images/home.png" alt="Home Icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'navLink about active' : 'navLink about')}
              >
                <img src="/images/about.png" alt="About Icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'navLink portfolio active' : 'navLink portfolio')}
              >
                <img src="/images/portfolio.png" alt="Portfolio Icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contect"
                className={({ isActive }) => (isActive ? 'navLink contect active' : 'navLink contect')}
              >
                <img src="/images/contect.png" alt="Contect Icon" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

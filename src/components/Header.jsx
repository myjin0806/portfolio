import React from 'react'
import { NavLink } from 'react-router-dom'

const header = () => {
  return (
    <header>
      <div className="headerWrap">
        <NavLink to='/' className="logo">FRONT-END * 김해진</NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="navLink home">
                <img src='/images/home.png' alt="Home Icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navLink about">
                <img src='/images/about.png' alt="About Icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="navLink portfolio">
                <img src='/images/portfolio.png' alt="Portfolio Icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contect" className="navLink contect">
                <img src='/images/contect.png' alt="Contect Icon" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default header
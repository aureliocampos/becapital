import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
import SubMenu from './SubMenu';

import "../../../scss/fonts/font.scss";
import "../../../scss/main.scss";


const Header = () => {

  const [isActive, setActive ] = useState(false)
  const [openDropdown, setDropdown] = useState(false)

  const toggleClass = () => {
    setActive(!isActive);

    document.querySelector('.header').classList.toggle('active');
  };
  const menuDropDown = () => {
    if(window.matchMedia("(min-width: 700px)").matches) {
      setDropdown(!openDropdown)
    }
  }
  const isCurrent = ({ current }) => {
    return current ? { className: "header__menu_link_current" } : {}
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <StaticImage src="../../../images/logo_becapital_2x.png" alt="logo BeCapital" 
          className="header__logo header__logo--mobile"
          />
           <StaticImage src="../../../images/logo_2_becapital_1x.png" alt="logo BeCapital" 
          className="header__logo header__logo--desktop"
          />
        </Link>
        <div className={isActive ? 'header__menu active': 'header__menu'}>
          <div 
            className={isActive ? 'burguer__container active': 'burguer__container'}
            onClick={toggleClass} 
            onKeyDown={toggleClass}
            role="button"
            tabIndex="0" 
          >
            <span />
            <span />
            <span />
          </div>
          <nav className="header__menu_nav">
            <ul className="header__menu_items">
              <li className="header__menu_item">
                <Link to="/" className="header__menu_link" getProps={isCurrent}>Home</Link>
              </li>
              <li className="header__menu_item">
                <Link to="/somos-becapital/" className="header__menu_link" getProps={isCurrent}>Somos BeCapital</Link>
              </li>

              <li className="header__menu_item">
                <span
                  className={openDropdown ? 'header__menu_link--children active': 'header__menu_link--children'}
                  onClick={menuDropDown} 
                  onKeyDown={menuDropDown}
                  role="button"
                  tabIndex="0" 
                >Seja BeCapital <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5L0.401925 0.5L5.59808 0.5L3 5Z" fill="#EA5E45"/>
                </svg>
                </span>
                <nav className={openDropdown ? 'header__submenu active': 'header__submenu'}>
                 <SubMenu/>
                </nav>
              </li>

              <li className="header__menu_item">
                <Link to="/blog/" className="header__menu_link" getProps={isCurrent}>Blog</Link>
              </li>
              <li className="header__menu_item">
                <Link to="/carreiras/" className="header__menu_link" getProps={isCurrent}>Carreiras</Link>
              </li>
              <li className="header__menu_item">
                <a href="https://becapitalresearch.com/" className="header__menu_link header__menu_link--italic">Research</a>
              </li>
            </ul>
          </nav>
          <div className="button__container header__button_cta">
            <a href="https://app.be.capital/#/auth" target="_blank" rel="noopener noreferrer" className="button button__primary">Login</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

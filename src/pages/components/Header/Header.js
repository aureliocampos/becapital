import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import "../../../scss/main.scss";

export default function Header() {

  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive);

    document.querySelector('body').classList.toggle('hidden');
    document.querySelector('.header').classList.toggle('active');
  };

  return (
    <header className="header">
      <div className="header__content">
        <StaticImage src="../../../images/logo_becapital_2x.png" alt="logo BeCapital" 
        className="header__logo"
        />
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
        <div className={isActive ? 'header__menu active': 'header__menu'}>
          <nav className="header__menu_nav">
            <ul className="header__menu_items">
              <li className="header__menu_item header__menu_item_current">
                <a href="/asd" className="header__menu_link">Home</a>
              </li>
              <li className="header__menu_item header__menu_item_children">
                <a href="/asd" className="header__menu_link">Seja BeCapital</a>
                <nav className="header__submenu">
                  <ul className="header__submenu_items">
                    <li className="header__submenu_item">
                      <a href="/asdas" className="header__submenu_link">
                        Consórcio Imobiliário
                      </a>
                    </li>
                    <li className="header__submenu_item">
                      <a href="/asdas" className="header__submenu_link">
                        Seguro de Vida
                      </a>
                    </li>
                    <li className="header__submenu_item">
                      <a href="/asdas" className="header__submenu_link">
                        Plano de Saúde
                      </a>
                    </li>
                    <li className="header__submenu_item">
                      <a href="/asdas" className="header__submenu_link">
                        Câmbio
                      </a>
                    </li>
                  </ul>
                </nav>
              </li>
              <li className="header__menu_item">
                <a href="#asd" className="header__menu_link">Blog</a>
              </li>
              <li className="header__menu_item">
                <a href="#asd" className="header__menu_link">Carreiras</a>
              </li>
            </ul>
          </nav>
          <div className="button__container header__button_cta">
            <a href="#asd" className="button__primary">Login</a>
          </div>
        </div>
      </div>
    </header>
  )
}
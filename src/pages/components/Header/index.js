import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../../../scss/main.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <StaticImage 
        src="../../../images/logo_becapital_2x.png" alt="logo BeCapital" 
        className="header__logo"
        />
        <StaticImage 
        src="../../../images/icon_menu.png" alt="Icone do menu temporario" 
        className="header__image--menu"
        />
      </div>
    </header>
  )
}
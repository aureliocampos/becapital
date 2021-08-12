import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SectionMidia() {
  
  return(
    <section className="section section__midia">
      <h2 className="section__title">Na mídia</h2>
      <div className="section__container">
        <ul className="logos__items">
          <li className="logos__item">
            <StaticImage src="../../../images/logo_r7_1x.png" alt="Logo portal R7" />
          </li>
          <li className="logos__item">
            <StaticImage src="../../../images/logo_forbes_1x.png" alt="Logo Forbes" />
          </li>
          <li className="logos__item">
            <StaticImage src="../../../images/logo_abc_1x.png" alt="Logo ABC da Comunicação" />
          </li>
        </ul>
      </div>
    </section>
  )
}
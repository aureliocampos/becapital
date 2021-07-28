import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SectionLogos() {
  
  return(
    <section className="section section__logos">
      <div className="section__container">
        <ul className="logos__items">
          <li className="logos__item">
            <StaticImage src="../../../images/logo_itau_consorcio_1x.png" alt="Logo Itaú Consorcio" />
          </li>
          <li className="logos__item">
            <StaticImage src="../../../images/logo_porto_seguro_1x.png" alt="Logo Porto Seguro" />
          </li>
          <li className="logos__item">
            <StaticImage src="../../../images/logo_caixa_1x.png" alt="Logo Caixa" />
          </li>
        </ul>
      </div>
    </section>
  )
}
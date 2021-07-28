import React from "react";
// import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "./components/Layout";
import BannerSecondary from "./components/Banners/BannerSecondary";
import DirectorsSlide from "./components/Slides/DirectorsSlide";

const Somos = ({ data }) => {
  return(
    <Layout>
      <BannerSecondary>
        <StaticImage src="../images/somos_becapital_banner_1.5x.jpg" alt="Banner Somos BeCapital" className="banner__figure" imgClassName="banner__image"/>
      </BannerSecondary>
      <section className="section section__text--somos">
        <div className="section__container">
          <h2 className="section__title">Seja BeCapital</h2>
          <p className="section__subtitle">Com uma cultura corporativa que valoriza a especialização, o conhecimento e a técnica, ser BeCapital é ser parte de times capacitados que estruturam processos ágeis, para gerar altas performances e construir relações sólidas de extrema confiabilidade com os clientes. Aqui, a gente acredita que investir é pra todo mundo. E a melhor escolha é ser sempre você.</p>
          <p className="section__subtitle"><strong>BeCapital. Invista ou invista.</strong></p>
        </div>
      </section>
      <DirectorsSlide/>
    </Layout>
  )
}

export default Somos;

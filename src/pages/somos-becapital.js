import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "./components/Layout";
import DirectorsSlide from "./components/Slides/DirectorsSlide";
import CardSupport from "./components/Cards/CardSupport";

const Somos = ({ data }) => {
  return(
    <Layout>


      <section className="banner banner__secondary banner--somos">
        <div className="banner__content">
          <StaticImage src="../images/somos_becapital_banner_1.5x.jpg" alt="Banner Somos BeCapital" className="banner__figure" imgClassName="banner__image"/>
          <div className="banner__text">
            <h2 className="section__title">Nossos Diretores</h2>
            <p className="section__subtitle">Com uma cultura corporativa que valoriza a especialização, o conhecimento e a técnica, ser BeCapital é ser parte de times capacitados que estruturam processos ágeis, para gerar altas performances e construir relações sólidas de extrema confiabilidade com os clientes. Aqui, a gente acredita que investir é pra todo mundo. E a melhor escolha é ser sempre você.</p>
            <p className="section__subtitle"><strong>BeCapital. Invista ou invista.</strong></p>
          </div>
        </div>
      </section>

      <DirectorsSlide/>
      <CardSupport />

      <section className="section cta-contact">
        <div className="section__container">
          <h2 className="section__title">Invista com a BeCapital</h2>
          <div className="section__description">
            <StaticImage src="../images/logo_beca.png" alt="Banner Somos BeCapital" className="" imgClassName="banner__image"/>
            <div className="a">
            <p className="b">Fale com a Beca, a atendente virtual da BeCapital:</p>
              <a href="mailto:beca@be.capital" className="c"><strong>beca@be.capital</strong></a>
              <p className="d">
                <em>Estamos prontos para entender seus sonhos e ajudar 
você a planejar seus investimentos.</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Somos;
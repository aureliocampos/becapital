import React from "react";
import Layout from "./components/Layout";
import { StaticImage} from "gatsby-plugin-image";

const Carreiras = () => {

  return(
    <Layout>
      <section className="banner banner__secondary banner--carreiras">
        <div className="banner__content">
          <div className="banner__text">
            <h2 className="section__title">Ser BeCapital é <mark>ser você</mark></h2>
            <p className="section__subtitle">Conheça o Jeito <strong>Be</strong> de trabalhar, viver e compartilhar</p>
          </div>
          <StaticImage src="../images/banner_carreiras_4x.png" alt="Banner Somos BeCapital" className="banner__figure" imgClassName="banner__image" objectFit="contain" loading="eager" />
        </div>
      </section>
      <section className="section section__values">
        <div className="section__container">
          <ul className="values__items">
            <li className="values__item">
              <article className="values__article">
                <StaticImage src="../images/imagem_dos_diretores_card_de_visao_4x.jpg" alt="Imagem dos diretores da becapital, card de visão da empresa" className="values__figure" imgClassName="values_image"/>
                <div className="values__description">
                  <h2 className="values__title">Visão</h2>
                  <hr/>
                  <p className="values__text">Colocar a Asset listada entre as <strong>10 maiores da América Latina</strong></p>
                  <p className="values__text">Criar um banco digital até <strong>2022</strong></p>
                  <p className="values__text">Lançar nosso IPO na <strong>bolsa de Nova Iorque</strong> até 2030</p>
                </div>
              </article>
            </li>
            <li className="values__item">
              <article className="values__article">
                <StaticImage src="../images/imagem_de_alvo_card_missao_4x.jpg" alt="Imagem dos diretores da becapital, card de visão da empresa" className="values__figure" imgClassName="values_image"/>
                <div className="values__description">
                  <h2 className="values__title">Missão</h2>
                  <hr/>
                  <p className="values__text">O que a BeCapital impacta na vida de todas as pessoas que são e fazem parte dela? </p>
                  <p className="values__text">“Ser algo maior que uma empresa é te enxergar como algo maior que um cliente.”</p>
                </div>
              </article>
            </li>
          </ul>
          <div className="values__terms">
            <svg width="41" height="594" viewBox="0 0 41 594" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 594V422.074L38 365.244L3 306.327V0" stroke="#EA5E45" stroke-width="5" stroke-miterlimit="10"/></svg>    
              <div className="values__terms-text">
                <h2 className="terms__title">Temos personalidade!</h2>
                <p className="terms__text">Você acha que já viu todo tipo de empresa do mercado financeiro?</p>
                <p className="terms__text">A partir de agora, você vai conhecer o que há de diferente na gestão de investimentos e planejamento financeiro.</p>
              </div>
          </div>
          <div className="terms__video">
            <StaticImage src="../images/placeholder_video.png" alt="Placeholder do video de marking off" />
            <p className="terms__subtitle"><a href="#asd">clique aqui</a> e veja o making of</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Carreiras;
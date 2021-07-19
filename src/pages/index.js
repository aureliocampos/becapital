import React from "react";
import { StaticImage} from "gatsby-plugin-image";

import Header from "./components/Header/Header";

const Home = () => {
  return(
    <>
      <Header/>
      <section className="banner banner__primary">
        <div className="banner__content">
          <StaticImage src="../images/weekend-leisure-cheerful-black-female-using-smartp.jpg" alt="Banner image" className="banner__figure" imgClassName="banner__image banner__image-background"/>
          <div className="banner__primary-description">
            <h1 className="banner__title">Faça seu planejamento financeiro agora</h1>
            <p className="banner__subtitle">Nosso orientador financeiro te ajudará a encontrar o título mais adequado para você atingir seu objetivo. </p>
            <div className="button__container">
              <a href="#asd" className="button button__secondary">Simule seu investimento</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__title">Seja BeCapital</h2>
          <p className="section__subtitle">Um portfólio de serviços e produtos para quem quer transformar o sonho em meta.</p>
        </div>
      </section>
    </>
  )
}

export default Home;

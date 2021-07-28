import React from "react";
import { StaticImage} from "gatsby-plugin-image";

import Layout from "./components/Layout";
import SlideServices from "./components/Slides/SlidesServices";
import SectionLogos from "./components/SectionLogos";
import CardBlog from "./components/Cards/CardBlog";
import SlideTestimony from "./components/Slides/SlideTestimony";

const Home = () => {
  return(
    <Layout 
      pageName="home"
    >
      <section className="banner banner__primary">
        <div className="banner__content">
          <StaticImage src="../images/banner_home_desktop_2x.jpg" alt="Banner image" className="banner__figure" imgClassName="banner__image banner__image-background"/>
          <div className="banner__primary-description">
            <h1 className="banner__title">Faça seu planejamento financeiro agora</h1>
            <p className="banner__subtitle">Nosso orientador financeiro te ajudará a encontrar o título mais adequado para você atingir seu objetivo. </p>
            <div className="button__container">
              <a href="#asd" className="button button__secondary">Simule seu investimento</a>
            </div>
          </div>
        </div>
      </section>
      <SlideServices />
      <SectionLogos />
      <SlideTestimony />
      <CardBlog />
    </Layout>
  )
}

export default Home;
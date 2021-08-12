import React from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import Layout from "../pages/components/Layout";
import Seo from "../pages/components/SEO";
// import FormRdStation from "../pages/components/Form";
// import MonitoringCodeFormHooks from "../pages/components/Form/MonitoringFormHooks";

const ServicesTemplate = ({ data }) => {

  const bannerImage = getImage(data.strapiServices.thumbnail.localFile);
  const bodyImage = getImage(data.strapiServices.subBanner.image.localFile);

  return(
    <Layout>
      <Seo title={data.strapiServices.title} description={data.strapiServices.metaTags.Description} />
      <article className="single-service single-service__article">
        <header className="single-service__header">
          <GatsbyImage 
            image={bannerImage}
            alt={data.strapiServices.title}
            as="figure"
            className="single-service__figure"
            imgClassName="single-service__image" 
          />
        </header>
        <section className="single-service__section">
          <h1 className="section__title">{data.strapiServices.title}</h1>
          <div className="single-service__description">
            <GatsbyImage
              image={bodyImage}
              alt={data.strapiServices.subBanner.text}
              as="figure"
              className="single-service__body-figure"
              imgClassName="single-service__body-image" 
            />
            <p className="description__text">{data.strapiServices.subBanner.text}</p>
          </div>
          <div className="single-service__partner">
            <h2 className="single-service__partner-title">Empresas Parceiras</h2>
            <ul className="single-service__partner-items">
              
              {data.strapiServices.partnerLogos.map(element => {

                return(
                  <li key={element.localFile.childImageSharp.id} className="single-service__partner-item">
                    <GatsbyImage 
                      image={getImage(element.localFile)}
                      alt={element.alternativeText}
                      className="single-service__partner-figure"
                    />
                  </li>
                )})
              }
            </ul>
          </div>
          <div className="single-service__content editor__style--default" dangerouslySetInnerHTML={{__html: data.strapiServices.content}} />
          <div class="button__container"><a href="https://conteudo.be.capital/quero-investir-becapital" target="_blank" rel="noopener noreferrer" class="button button__secondary">Fale com um de nossos especialistas</a></div>
          

        </section>
        
        <footer className="single-service__footer">
          <section className="single-service__section section__form">
            <h2 className="section__title">Comece a investir agora mesmo!</h2>
            <div className="form__container">
              <div className="form__description">
                <StaticImage src="../images/icon_invista_agora.png" alt="invista agora" 
                  as="figure"
                  className="form__description-figure"
                />
                <div className="form__description-text">
                  <p className="form__description-paragraph">Este é o seu primeiro passo para começar a investir com a BeCapital.</p>
                  <p className="form__description-paragraph">Seu cadastro conosco é 100% seguro.</p>
                </div>
              </div>
              <div className="form__embed">
                {/* <MonitoringCodeFormHooks /> */}
              </div>
            </div>
          </section>
        </footer>
      </article>
    </Layout>
  )
}

export default ServicesTemplate;

export const query = graphql`
  query ServicesTemplate($slug: String!) {
    strapiServices(slug: {eq: $slug}) {
      title
      strapiId
      content
      slug
      subBanner {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        sectionTitle
        text
      }
      partnerLogos {
        alternativeText
        localFile {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
      thumbnail {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      metaTags {
        Description
      }
    }
  }
`
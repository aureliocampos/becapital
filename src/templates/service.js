import React from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from "../pages/components/Layout";

const ServicesTemplate = ({ data }) => {

  const bannerImage = getImage(data.strapiServices.thumbnail.localFile);
  const bodyImage = getImage(data.strapiServices.subBanner.image.localFile);

  return(
    <Layout>
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
          <div className="single-service__content editor__style--default" dangerouslySetInnerHTML={{__html: data.strapiServices.content}} />
          <div class="button__container"><a href="https://conteudo.be.capital/quero-investir-becapital" target="_blank" rel="noopener noreferrer" class="button button__secondary">Fale com um de nossos especialistas</a></div>
        </section>
        <footer>

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
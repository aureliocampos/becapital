import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";


export default class SlideTestimony extends Component {
  render() {
    const settings = {
      infinite: true,
      touchMove: true,
      centerPadding: 30,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      arrows: false,
    };
    return(
      <StaticQuery 
        query={graphql`
          query testimonies {
            allStrapiTestimonies {
              edges {
                node {
                  strapiId
                  name
                  text      
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
      `}
      render={data => (

        <section className="section section__testimonies">
          <div className="section__container">
            <h2 className="section__title">Quem já soma</h2>
              <ul className="testimonies__items">
                <Slider {...settings}>
                  {
                    data.allStrapiTestimonies.edges.map( testimony => {
                      const { strapiId, name, text, image } = testimony.node;
                      const img = getImage(image.localFile);

                      return(
                        <li key={strapiId} className="testimonies__item">
                          <article className="testimonies__card">
                            <header className="testimonies__header">
                              <div className="testimonies__header--sub">
                                <GatsbyImage 
                                  image={img} 
                                  alt={name} 
                                  as="figure" 
                                  className="testimonies__figure" 
                                  imgClassName="testimonies__image"
                                />
                                <span>
                                  <h2 className="testimonies__name">{name}</h2>
                                  <small className="testimonies__description">Cliente BeCapital</small>
                                </span>
                              </div>
                              <StaticImage src="../../../../images/icon_bullets_menu.png" alt="icone de menu" />
                            </header>
                            <section className="testimonies__text">
                              <p className="testimonies__text--site">Como é investir na BeCapital?</p>
                              <div className="testimonies__text--client" 
                                dangerouslySetInnerHTML={{__html: text}} 
                              />
                            </section>
                          </article>
                        </li>
                      )
                    })
                  }
                </Slider>
              </ul>
            <div className="button__container">
              <a href="https://conteudo.be.capital/quero-investir-becapital" className="button button__secondary" target="_blank" rel="noopener noreferrer">Quero Investir</a>
            </div>
          </div>
        </section>
      
      )}
      />
    )
  }
}

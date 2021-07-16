import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import Header from "./components/Header";

const Blog = ({ data }) => {
  return(
    <>
      <Header/>
      
      <section className="banner banner__secondary">
        <div className="banner__content">
          <StaticImage src="../images/banner_blog.png" alt="Banner image" className="banner__figure" imgClassName="banner__image"/>
        </div>
      </section>

      <section className="section section__posts">
        <h1 className="section__title">Papo Investidor</h1>
        <div className="section__content posts posts--grid">
          <ul className="posts__items">
          {data.allStrapiArticles.edges.map( article => {

            const { strapiId, slug, title, Excerpt, Image} = article.node;

            const image = getImage(Image.localFile);

            return (
              <li key={strapiId} className="posts__item">
                <Link to={slug}>
                  <article className="posts__article">
                    <GatsbyImage 
                      image={image}
                      alt={title}
                      as="figure"
                      className="posts__figure"
                      imgClassName="posts__image" 
                    />
                    <h2 className="posts__title">{title}</h2>
                    <p className="posts__excerpt">{Excerpt}</p>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
        </div>
      </section>
    </>
  )
}

export default Blog;

export const pageQuery = graphql`
  query BlogListing {
    allStrapiArticles {
      edges {
        node {
          strapiId
          title
          Excerpt
          slug
          Image {
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
`

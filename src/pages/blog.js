import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "./components/SEO";
import Layout from "./components/Layout";

import BannerSecondary from "./components/Banners/BannerSecondary";

const Blog = ({ data }) => {

  return(
    <Layout>
      <Seo
        title="Blog"
        description="Uma nova maneira de pensar e agir no mercado de capitais. Acreditamos que investir é para todos."
      />
      <BannerSecondary>
        <StaticImage src="../images/banner_blog.png" alt="Banner do Blog" className="banner__figure" imgClassName="banner__image"/>
      </BannerSecondary>
      <section className="section section__posts">
        <h1 className="section__title">Papo Investidor</h1>
        <div className="section__content posts posts--grid">
          <ul className="posts__items">
            {data.allStrapiArticles.edges.map( article => {

              const { strapiId, slug, title, thumbnail, excerpt} = article.node;

              const image = getImage(thumbnail.localFile);

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
                      <p className="posts__excerpt">{excerpt}</p>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    
    </Layout>
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
          excerpt
          slug
          thumbnail {
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

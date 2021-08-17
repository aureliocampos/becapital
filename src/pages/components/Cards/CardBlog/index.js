import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function CardBlog() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allStrapiArticles( limit: 2) {
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
      `}
      render={data => (
        <section className="section section__posts--more">
          <h1 className="section__title">Blog</h1>
          <div className="section__content posts posts--grid">
            <ul className="posts__items">
              {data.allStrapiArticles.edges.map( article => {

                const { strapiId, slug, title, thumbnail, excerpt} = article.node;

                const image = getImage(thumbnail.localFile);

                return (
                  <li key={strapiId} className="posts__item">
                    <Link to={`/blog/${slug}`}>
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
                        <a href={`/blog/${slug}`} className="button button__primary">LER ARTIGO</a>
                      </article>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}
    />
  )
}
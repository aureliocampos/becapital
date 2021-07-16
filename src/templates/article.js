import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Header from "../pages/components/Header";

const ArticleTemplate = ({ data }) => {

  const image = getImage(data.strapiArticles.Image.localFile)
  return(
    <>
      <Header/>
      <article>
        <header className="article__header">
          <GatsbyImage 
            image={image}
            alt={data.strapiArticles.title}
            as="figure"
            className="article__figure"
            imgClassName="article__image" 
          />
        </header>
        <section className="article__main">
          <h1 className="article__title">{data.strapiArticles.title}</h1>
          <time>leitura de 3 min</time>
          <p className="article__excerpt">{data.strapiArticles.Excerpt}</p>
          <div className="article__content">{data.strapiArticles.Content}</div>

        </section>
      </article>
    </>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    strapiArticles(slug: {eq: $slug}) {
      title
      Content
      Excerpt
      Image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
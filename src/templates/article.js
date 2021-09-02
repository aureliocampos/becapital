import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from "../pages/components/Layout";
import Seo from "../pages/components/SEO";



const ArticleTemplate = ({ data, pageContext }) => {

  const image = getImage(data.strapiArticles.thumbnail.localFile)
  const { next, previous } = pageContext;

  useEffect(() => {

      document.querySelectorAll( 'oembed[url]' ).forEach( element => {
        // Create the <a href="..." class="embedly-card"></a> element that Embedly uses
        // to discover the media.
        const anchor = document.createElement( 'a' );
      
        anchor.setAttribute( 'href', element.getAttribute( 'url' ) );
        anchor.className = 'embedly-card';

        element.appendChild( anchor );
        
    } );
  });

  return(
    <Layout>
      <Seo title={data.strapiArticles.title}  description={data.strapiArticles.MetaTags.Description} />
      <article className="post__single single-article">
        <header className="single-article__header">
          <GatsbyImage 
            image={image}
            alt={data.strapiArticles.title}
            as="figure"
            className="single-article__figure"
            imgClassName="single-article__image" 
          />
        </header>
        <section className="single-article__main">
          <h1 className="single-article__title">{data.strapiArticles.title}</h1>
          <p className="single-article__excerpt">{data.strapiArticles.excerpt}</p>
          {/* <time className="single-article__time-read" time={`00:0${readingTimeEstimated}`}>leitura de {readingTimeEstimated} min</time> */}
          <div className="single-article__content editor__style--default" dangerouslySetInnerHTML={{__html: data.strapiArticles.content}} />

        </section>
      </article>
      <section className="section more-articles">
        <div className="section__content more-articles__grid">
          <h2 className="section__title">Leia mais artigos</h2>
          <ul className="more-articles__items">
            {
              previous && (
                <li className="more-articles__item more-articles__item--previous">
                  <Link to={`/blog/${previous.slug}`}>
                    <article className="more-articles__article">
                      <GatsbyImage 
                        image={getImage(previous.thumbnail.localFile)}
                        alt={previous.title}
                        as="figure"
                        className="more-articles__figure"
                        imgClassName="more-articles__image" 
                      />
                      <h2 className="more-articles__title">{previous.title}</h2>
                      <p className="more-articles__excerpt">{previous.excerpt}</p>
                    </article>
                  </Link>
                </li>
              )
            }
            {
              next && (
                <li className="more-articles__item more-articles__item--next">
                  <Link to={`/blog/${next.slug}`}>
                    <article className="more-articles__article">
                      <GatsbyImage 
                        image={getImage(next.thumbnail.localFile)}
                        alt={next.title}
                        as="figure"
                        className="more-articles__figure"
                        imgClassName="more-articles__image" 
                      />
                      <h2 className="more-articles__title">{next.title}</h2>
                      <p className="more-articles__excerpt">{next.excerpt}</p>
                    </article>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    strapiArticles(slug: {eq: $slug}) {
      title
      content
      excerpt
      thumbnail {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      MetaTags {
        Description
      }
    }
  }
`
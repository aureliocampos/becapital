import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "./components/SEO";
import Layout from "./components/Layout";

import BannerSecondary from "./components/Banners/BannerSecondary";

const Blog = () => {

  const data = useStaticQuery(graphql`
    {
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
  `)

  const allPosts = data.allStrapiArticles.edges;
  
  const [list, setList ] = useState([...allPosts.slice(0, 6)])

  const [loadMore, setLoadMore ] = useState(false)

  const [hasMore, setHasMore ] = useState(allPosts.length > 6)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allPosts.length
      const nextResults = isMore
        ? allPosts.slice(currentLength, currentLength + 6)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  useEffect(() => {
    const isMore = list.length < allPosts.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

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


            {list.map( article => {

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
                      <a href={slug} className="button button__primary">LER ARTIGO</a>
                    </article>
                  </Link>
                </li>
              )
            })}

          </ul>
          {hasMore ? (
              <button onClick={handleLoadMore} className="button button__tertiary">MAIS ARTIGOS</button>
            ) : (
              <p>No more results</p>
            )}
        </div>
      </section>
    
    </Layout>
  )
}
export default Blog;

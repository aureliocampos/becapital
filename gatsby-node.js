const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticles {
        edges {
          previous {
            title
            slug
            thumbnail {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt
          }
          node {
            slug
          }
          next {
            title
            slug
            thumbnail {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiArticles.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
          next,
          previous,
        },
      })
    })
  });

  
  const getServices = makeRequest(graphql, `
    {
      allStrapiServices {
        edges {
          node {
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
      }
    }
    `).then(result => {
    result.data.allStrapiServices.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}`,
        component: path.resolve(`src/templates/service.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  return getArticles, getServices;
};
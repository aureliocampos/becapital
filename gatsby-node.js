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

  return getArticles;
};
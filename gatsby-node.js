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
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  return getArticles;
};
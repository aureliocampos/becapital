const path = require(`path`)

siteMetadata = {
  title: "BeCapital",
  description: "Uma nova maneira de pensar e agir no mercado de capitais. Acreditamos que investir é para todos.",
  siteUrl: "https://www.be.capital/", 
  siteLanguage: "pt-BR",
  siteLocale: "pt_br",
  authorName: "Aurélio Campos - Team BeCapital",
  twitterUsername: "@BeResearch_",
  favicon: "./src/images/favicon.png",
  backgroundColor: `#1A4A73`,
  themeColor: `#FF6746` 
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GTM-5X24M96",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`articles`, `user`, `testimonies`, `services`]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `Titillium+Web\:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700`,
          `Roboto\:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900` // you can also specify font weights and styles
        ],        
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BeCapital`,
        short_name: `BeCapital`,
        start_url: `/`,
        background_color:siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `standalone`,
        icon: siteMetadata.favicon
      },
    },
    `gatsby-plugin-offline`
  ],
};


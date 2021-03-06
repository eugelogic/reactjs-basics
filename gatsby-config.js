module.exports = {
  siteMetadata: {
    title: `React Basics`,
    description: `Fundamental notions of React JS`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"]
      }
    }
  ]
}

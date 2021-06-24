module.exports = {
  siteMetadata: {
    title: 'paulgrock.com',
    author: 'Paul Grock',
    siteUrl: 'https://competent-pike-550e2c.netlify.com',
    description: `Full stack engineer. HTML, CSS and JavaScript on the client and server are usually how I roll. I'm also into games and basketball.`,
    themeColor: "#00b0d8"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    '@jacobmischka/gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    'gatsby-plugin-feed'
  ]
};

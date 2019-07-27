module.exports = {
  siteMetadata : {
    title: 'Organization  blog',
    description: ' Personnal organizator\'s blog '
  },
  plugins : [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `md_pages`,
        path: `${__dirname}/src/md_pages/`,
      },
    }
  ]

}

module.exports = {
  siteMetadata : {
    title: 'Organization  blog',
    description: ' Personnal organizator\'s blog '
  },
  plugins : [
    'gatsby-tranformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: '${__dirname/src/md_pages}'
      }
    }
  ]

}

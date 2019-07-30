const path = require(`path`)

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
  const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js');

  const postByTags = []

  posts.forEach(({node})=>{
    if(node.frontmatter){
      node.frontmatter.tags.forEach(tag =>{
        if(!postByTags[tag]){
          postByTags[tag] = []
        }
        postByTags[tag].push(node)

      })
    }
  })

  const tags = Object.keys(postByTags)

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context : {
      tags : tags.sort()

    }
  })

  tags.forEach(tagName =>{
    const posts = postByTags[tagName]
    createPage({
      path : `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context : {
        posts,
        tagName
      }
    })

  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    createTagPages(createPage, posts)

    return posts.forEach(({ node } , index ) => {
        const path = node.frontmatter.path
        createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
            pathSlug: path,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === (posts.length -1) ? null : posts[index + 1].node
          
        }
      })
    })
  })
}
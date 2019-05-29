const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js")
    const servicePages = path.resolve("./src/templates/service-page.js")
    const grantPages = path.resolve("./src/templates/grant-page.js")

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            grants: allContentfulGrantPrograms {
              edges {
                node {
                  name
                  slug
                  serviceType
                }
              }
            }
            services: allContentfulServices {
              edges {
                node {
                  name
                  slug
                  serviceType
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/insights/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const grant = result.data.grants.edges
        grant.forEach((post, index) => {
          createPage({
            path: `/programs/${post.node.slug}/`,
            component: grantPages,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const service = result.data.services.edges
        service.forEach((post, index) => {
          createPage({
            path: `/services/${post.node.slug}/`,
            component: servicePages,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}

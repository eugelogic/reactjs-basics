const path = require(`path`)
var slugify = require('slugify')

exports.createPages = (({ graphql, actions}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const blogPostTemaplate = path.resolve(`src/templates/blogPost.js`)
        resolve(graphql(`
            query {
                allMdx(
                    sort: { fields: frontmatter___date, order: ASC },
                    filter: { frontmatter: { draft: { eq: false } } }
                    ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                path
                            }
                        }
                    }
                }
            }
        `).then(result => {
            const posts = result.data.allMdx.edges

            posts.forEach(({node}, index ) => {
                const path = node.frontmatter.path
                    createPage({
                        path: `/blog/${path}`,
                        component: blogPostTemaplate,
                        context: {
                            pathSlug: path,
                            prev: index === 0 ? null : posts[index - 1].node,
                            next: index === (posts.length - 1) ? null : posts[index + 1].node
                        }
                    })
                resolve()
                })
            })
        )
    })
})

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
    setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    })
}

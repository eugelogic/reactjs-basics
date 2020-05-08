import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const postsIndex = ({ data, index }) => {
    const { edges } = data.allMdx
    return (
        <Layout>
            <article
            key={index}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'avenir'
            }}>
                {edges.map(edge => {
                    const { frontmatter } = edge.node
                    return (
                        <>
                            <h2
                                key={frontmatter.path}
                                style={{ marginBottom: '0' }}
                            >
                                <Link to={`/blog/${frontmatter.path}`} style={{ textDecoration: 'none' }}>
                                    {frontmatter.title}
                                </Link>
                            </h2>
                            <p>{frontmatter.excerpt}</p>
                        </>
                    )
                })}
            </article>
        </Layout>
    )
}

export default postsIndex

export const query = graphql`
    query BlogsListQuery {
        allMdx(
            sort: { fields: frontmatter___date, order: ASC },
            filter: { frontmatter: { draft: { eq: false } } }
            ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        excerpt
                    }
                }
            }
        }
    }
`

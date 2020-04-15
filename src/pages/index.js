import React from "react"
import { Link, graphql } from 'gatsby'
import Header from '../components/header'

const Layout = ({ data, index }) => {
    const { edges } = data.allMdx
    return (
        <div>
            <Header />
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
                                style={{ marginBottom: '20px' }}
                            >
                                <Link to={`/blog/${frontmatter.path}`}>{frontmatter.title}</Link>
                            </h2>
                        </>
                    )
                })}
            </article>
        </div>
    )
}

export default Layout

export const query = graphql`
    query BlogsListQuery {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC },
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
`

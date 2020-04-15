import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPostTemplate = ({ data, pageContext }) => {
    const { prev, next } = pageContext
    const { mdx } = data
    return (
        <>
            <Header />
            <div style={{ fontFamily: 'avenir' }}>
                <h1>{mdx.frontmatter.title}</h1>
                <div>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        paddingLeft: 0
                    }}>
                        {prev && <li><Link style={{textDecoration: 'none'}} to={`/blog/${prev.frontmatter.path}`}>PREV</Link></li>}
                        {next && <li><Link style={{textDecoration: 'none'}} to={`/blog/${next.frontmatter.path}`}>NEXT</Link></li>}
                    </ul>
                </div>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
        </>
    )
}

export default BlogPostTemplate

export const query = graphql`
    query ($pathSlug: String!) {
        mdx(frontmatter: { path: { eq: $pathSlug } } ) {
            id
            frontmatter {
                title
                path
            }
            body
        }
    }
`
import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

export const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    return (
        <header style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'avenir',
            backgroundColor: '#20232a',
            color: 'white'
        }}>
            <h1 style={{marginBottom: 0}}>
                <Link to={`/`} style={{ textDecoration: 'none', color: '#61dafb' }}>
                    {title}
                </Link>
            </h1>
            <p style={{
                marginTop: 0,
                opacity: 0.75
            }}>
                {description}
            </p>
        </header>
    )
}

const Header = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render={data => <TitleAndDescription data={data} />
            }
        />
    )
}

export default Header

import React from 'react'
import Header from '../components/Header'
import { Link, graphql } from 'gatsby'


const Layout = ({ data }) => {
    const { edges } = data.allMarkdownRemark
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
    }

    return (<div>
        <Header />
        <div style={styles}>
            {edges.map(edge => {
                const { frontmatter } = edge.node

                return (
                    <div key={frontmatter.path}
                        style={{ marginBottom: '1rem' }}>
                        <Link to={frontmatter.path} >
                            {frontmatter.title}
                        </Link>

                    </div>
                )
            })

            }

        </div>
        <div>
            <Link to="/tags"> Browse by tags </Link>
        </div>
    </div>)
}

export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark(
            sort: { order :ASC ,fields : [frontmatter___date]}
            ){
            edges{
                node{
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }

    }
    `

export default Layout
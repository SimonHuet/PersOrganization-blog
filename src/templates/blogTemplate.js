import React from 'react'
import { graphql , Link} from 'gatsby'

const Template = ({ data , pageContext}) => {
    const {prev , next} = pageContext
    const { title } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark

    return (<div>
        <h1 style={{ fontFamily: 'avenir' }}>
            {title}
        </h1>
        <div style={{ fontFamily: 'avenir' }} className='blogPost'
            dangerouslySetInnerHTML={{ __html: html }}
        />
        {prev && 
            <Link to={prev.frontmatter.path}> Previous </Link>
        }

        {next && 
            <Link to={next.frontmatter.path}> Next </Link>
        }
        
    </div>)
}

export const query = graphql`
    query($pathSlug: String!){
        markdownRemark(frontmatter :{path: { eq: $pathSlug}} ){
            html
            frontmatter{
                title
            }
        }
    }`

export default Template
import React from 'react'
import { graphql , Link} from 'gatsby'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

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

        <ButtonGroup color="primary" aria-label="outlined primary button group">

        {prev && 
            <Link to={prev.frontmatter.path}>
                 <Button> Previous </Button>
            </Link>
        }
            <Link to={'/'} >
                 <Button> Return to posts list </Button>
            </Link>
        {next && 
           <Link to={next.frontmatter.path}>
               <Button> Next </Button>
           </Link>
        }

        </ButtonGroup>

        
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
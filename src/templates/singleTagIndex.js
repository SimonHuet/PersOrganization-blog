import React from 'react'
import { Link } from 'gatsby'

const SingleTagTemplate = ({data, pageContext}) => {
    
    const { posts , tagName } = pageContext
    
    return(
        <div>
            <div> Posts about { tagName }  </div>
            <div>
                <ul>
                    {posts.map((posts, index)=> <li key={index} >
                        <Link to={posts.frontmatter.path}>
                            {posts.frontmatter.title}
                        </Link>
                    </li>)}
                </ul>

            </div>
        
        </div>
    )}

export default SingleTagTemplate
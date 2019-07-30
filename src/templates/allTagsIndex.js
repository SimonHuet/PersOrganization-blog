import React from 'react'
import { Link } from 'gatsby'

const AllTagsTemplate = ({data, pageContext}) => {
    const tags = pageContext.tags
    return(
        <div>
            <ul>
                {tags.map((tag, index) =><li>
                    <Link to={`/tags/${tag}`} >
                        {tag}
                    </Link>
                </li>
                )}
            </ul>
        </div>
    )}




export default AllTagsTemplate
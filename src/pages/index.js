import React from "react"
import { StaticQuery } from 'gatsby'

const TitleAndDescription = ({data}) =>{
    const title = data.site.siteMetadata.title
    const description= data.site.siteMetadata.description

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
const Header = () => <StaticQuery 
                        query={graphql`
                    query {
                        site{
                            seteMetadata{
                                title
                                description
                            }
                        }
                    }
                }`}
                render={data => data.site.siteMetadata.title}/>

const Layout = () => <div>
    Hello world!
    </div>

export default Layout
import React from 'react'

const TitleAndDescription = ({data}) =>{
    const title = data.site.siteMetadata.title
    const description= data.site.siteMetadata.description
    const styles = {
        div  : {
        display       : 'flex',
        flexDirection : 'column',
        alignItems     : 'center',
        fontFamily    : 'avenir'
        },
        h2 : {
            marginBottom : 0
        },
        p : {
            marginTop : 0,
            opacity : 0.5
        }
    }

    return (
        <div style={styles.div}>
            <h2 style={styles.h2}>{title}</h2>
            <p style={styles.p}>{description}</p>
        </div>
    )
}

export default TitleAndDescription
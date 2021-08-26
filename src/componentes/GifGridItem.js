import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {

    // console.log(props);
    return (
        <div className="card animate__animated animate__fadeInUp">
            <img 
                src = {url} 
                alt = {title}
            />
            <p> { title } </p>
        </div>
    )
}

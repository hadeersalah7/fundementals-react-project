import React from 'react'

const PersonsList = ({image, name, age}) => {
    return (
        <article className='person'>
            <div className='img'>
            <img src={ image} />
            </div>
            <h4>{name}</h4>
            <p>{age} Years</p>
        </article>
    )
}

export default PersonsList
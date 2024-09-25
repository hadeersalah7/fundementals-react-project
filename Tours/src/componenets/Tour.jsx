import React from 'react'

const Tour = ({id, image, info, price, name}) => {
    return (
        <article className="single-tour">
            <img src={image} alt={name} className='img' />
            <span className='tour-price'>${price}</span>
            <tour className="tour-info">
                <h5>{name}</h5>
                <p>{info}</p>
            </tour>
        </article>
    )
}

export default Tour
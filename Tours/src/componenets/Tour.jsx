import React, {useState} from 'react'

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name} className='img' />
            <span className='tour-price'>${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{readMore ? info : `${info.substring(200)}... `}</p>
                <button type='button' onClick={() => setReadMore(!readMore)} className='info-btn'>
                    {readMore ? 'Show Less' : "Read More"}
                </button>
            <button className='btn btn-block delete-btn' type='button' onClick={() => removeTour(id)}>not interested</button>
            </div>
        </article>
    )
}

export default Tour
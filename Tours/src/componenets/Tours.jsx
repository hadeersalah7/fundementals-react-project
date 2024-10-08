import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h3>our tours</h3>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                return (
                    <Tour key={tour.id} {...tour} removeTour={removeTour} />
                )
            })}
            </div>
            
        </section>
    )
}

export default Tours
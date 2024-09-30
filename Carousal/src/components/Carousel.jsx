import React, { useState } from 'react'
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { list, longList, shortList } from "../data"
const Carousel = () => {
    const [people, setPeople] = useState(list)
    const prevBtn = () => { }
    const nextBtn = () => {}
    return (
        <section className='slider-container'>
            {people.map((p, pIndex) => {
                const { id, image, name, quote, title } = p
                return (
                    <article className='slide' key={id}
                    style={{ transform: `translateX(${100 * pIndex}%)` }}
                    >
                        <img src={image} alt={title} className='person-img' />
                        <h5 className='name'>{name}</h5>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote }</p>
                    <FaQuoteRight className='icon'/>
                    </article>
                )
            })}
            <button type="button" onClick={prevBtn} className='prev'>
                <FiChevronLeft />
            </button>
            <button type="button" onClick={nextBtn} className='next'>
                <FiChevronRight />
            </button>
        </section>
    )
}

export default Carousel
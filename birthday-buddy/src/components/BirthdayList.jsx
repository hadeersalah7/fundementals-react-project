import React from 'react'

const BirthdayList = ({ list }) => {
    return (
        <section>
            <ul>
                {list.map((bd) => (
                    <li key={bd.id}>
                        <img src={bd.image} alt={bd.name} className='img' />
                        <h3>{bd.name}</h3>
                        <p>{bd.age}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default BirthdayList
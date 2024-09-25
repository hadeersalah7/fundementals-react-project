import React, { useState } from 'react'
import data from './data'

const BirthdayComp = () => {
    const [birthdayList, setBirthdayList] = useState(data)
    const handleClearList = () => {
        setBirthdayList([])
    }
    return (
        <>
            <h3>Your Birthday List</h3>
            <ul>
                {birthdayList.map((bd) => (
                    <li key={bd.id}>
                        <img src={bd.image} alt={bd.name} className='img' />
                        <h4>{bd.name}</h4>
                        <p>{bd.age}</p>
                    </li>
                ))}
            </ul>
            <button className='btn' type='button' onClick={handleClearList}>Clear All</button>
        </>
    )
}

export default BirthdayComp
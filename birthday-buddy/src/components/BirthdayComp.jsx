import React, { useState } from 'react'
import data from '../data'
import BirthdayList from './BirthdayList'

const BirthdayComp = () => {
    const [birthdayList, setBirthdayList] = useState(data)
    const handleClearList = () => {
        setBirthdayList([])
    }
    return (
        <section className="container">
            <div className='person'>
                <h3>{birthdayList.length} Birthday Today!</h3>
                <BirthdayList list={birthdayList} />
                <button className='btn' type='button' onClick={handleClearList}>Clear All</button>
            </div>
        </section>

    )
}

export default BirthdayComp
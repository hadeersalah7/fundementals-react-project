import React, { useState } from 'react'
import data from '../data'
import BirthdayList from './BirthdayList'

const BirthdayComp = () => {
    const [birthdayList, setBirthdayList] = useState(data)
    return (
        <main>
            <section className="container">
            <h3>{birthdayList.length} Birthday Today!</h3>
            <BirthdayList list={birthdayList} />
                <button className='btn btn-block'
                    type='button' onClick={() => setBirthdayList([])}>
                    Clear All</button>
        </section> 
        </main>
    )
}

export default BirthdayComp
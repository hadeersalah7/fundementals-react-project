import React from 'react'
import PersonsList from './PersonsList'

const BirthdayList = ({ list }) => {
    return (
        <section>
            {list.map((lists) => (
            <PersonsList key={lists.id} {...lists} />
            ))}
        </section>
    )
}

export default BirthdayList
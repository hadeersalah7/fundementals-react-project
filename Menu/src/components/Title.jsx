import React from 'react'

const Title = ({title}) => {
    return (
        <div className='title'>
            <h3>{title || "Default Value"}</h3>
            <div className="title-underline"></div>
        </div>
    )
}

export default Title
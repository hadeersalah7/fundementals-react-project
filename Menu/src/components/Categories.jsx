import React, { useState } from 'react'

const Categories = ({ categories, filterCategories, activeCategory }) => {
    return (
        <div className='btn-container'>
            {categories.map((category) => {
                return <button type='button'
                    className={`btn ${category === activeCategory ? 'activeBtn' : ""}`}
                    key={category}
                    onClick={() => {
                        filterCategories(category)
                    }}
                >{category}</button>
            })}
        </div>
    )
}

export default Categories
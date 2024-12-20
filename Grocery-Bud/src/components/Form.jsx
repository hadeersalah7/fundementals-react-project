import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({addItems}) => {
    const [newItemValue, setNewItemValue] = useState("")
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(newItemValue)
        if(!newItemValue) {
            toast.error("Please add a value")
            return}
        addItems(newItemValue)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>grocery bud</h4>
            <div className="form-control">
                <input type='text' className='form-input' value={newItemValue}
                    onChange={(event) => setNewItemValue(event.target.value)}
                />
                <button type="submit" className='btn'>add item</button>
            </div>
        </form>
    )
}

export default Form
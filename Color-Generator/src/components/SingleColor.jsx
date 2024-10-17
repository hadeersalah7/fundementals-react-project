import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({ color, index }) => {
    const { hex, weight } = color
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success("Copied to clipboard!")
            } catch (error) {
                toast.error("Something went wrong failed to copy")
            }
        } else {
            toast.error("Failed to copt to clipboard")
        }
    }
    return (
        <article className={`${index > 10 ? "color color-light" : "color"}`} onClick={saveToClipboard} style={{ backgroundColor: `#${hex}` }}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>#{hex}</p>
        </article>
    )
}

export default SingleColor
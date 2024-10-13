import { useState } from "react"

const Form = () => {
    const [color, setColor] = useState("")
    const handleSubmit = (e) => {}
    return (
        <section className="container">
            <h4>Color Generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>

                <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                <input type="text"
                    placeholder="#f15025"
                    value={color}
                    onChange={(e) => setColor(e.target.value)} />
                
                <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: color }}>submit</button>
            </form>
        </section>
    )
}

export default Form
import React, { useState } from 'react'
import { links, social } from "./data"
import { FaBars } from 'react-icons/fa'
import logo from "./logo.svg"
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const toggleNav = () => {
        setShowNavbar(prev => !prev)
    }
    return (
        <nav className='nav-center'>
            <div className="nav-head">
                <img src={logo} alt='logo' />
                <button type="button" onClick={toggleNav}><FaBars /></button>
            </div>
            {showNavbar && (
                <div className="links-container">
                    <ul className='links'>
                        {links.map((link) => {
                            const { id, url, text } = link
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar
import React, { useState, useRef } from 'react'
import { links, social } from "./data"
import { FaBars } from 'react-icons/fa'
import logo from "./logo.svg"
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggleNav = () => {
        setShowLinks(prev => !prev)
    }
    const linksStyle = {
        height: showLinks
            ? `${linksRef.current.getBoundingClientRect().height}px`
            : "0px"
    }
    return (
        <nav>
            <div className='nav-center'>
                <div className="nav-header">
                    <img src={logo} alt='logo' className='logo' />
                    <button type="button" onClick={toggleNav} className='nav-toggle'>
                        <FaBars />
                    </button>
                </div>

                <div
                    className="links-container"
                    ref={linksContainerRef}
                    style={linksStyle}
                >
                    <ul className='links' ref={linksRef} >
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
            </div>
        </nav>
    )
}

export default Navbar
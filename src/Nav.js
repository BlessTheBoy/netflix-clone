import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 150) {
                handleShow(true)
            } else handleShow(false)
        }

        window.addEventListener("scroll", scrollFunction)
        return () => {
            window.removeEventListener("scroll", scrollFunction)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"/>
            <img
            className="nav__avatar"
            src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
            alt="Netflix Avatar"/>
        </div>
    )
}

export default Nav

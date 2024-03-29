import React from 'react'
import "./navbar.css"

const NavbarBar = () => {
    return (
        <div className="navbar_container">
            <p>Logo</p>
            <div className="navbar_links">
                <ul>
                    <li>Home</li>
                    <li>How It Work</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li id='button'>create account</li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarBar;
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className ="NavBar-container color">
            <Link to="./AboutMe" className="NavButton">About</Link>
            <Link to="./Resume" className="NavButton">Resume</Link>
            <Link to="./Projects" className="NavButton">Projects</Link>
            <Link to="./Contact" className="NavButton">Contact</Link>

        </div>
    )
}

export default NavBar;
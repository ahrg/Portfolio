import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className ="NavBar-container color">
            <Link to="/AboutMe" className="NavButton">Om meg</Link>
            <Link to="/Resume" className="NavButton">CV</Link>
            <Link to="/Projects" className="NavButton">Prosjekter</Link>

        </div>
    )
}

export default NavBar;
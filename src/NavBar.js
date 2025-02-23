import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className ="NavBar-container color">
            <Link to="/OmMeg" className="NavButton">Om meg</Link>
            <Link to="/CV" className="NavButton">CV</Link>
            <Link to="/Prosjekter" className="NavButton">Prosjekter</Link>

        </div>
    )
}

export default NavBar;
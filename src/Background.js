import React from 'react';
import './Background.css'
import AboutMeBox from './AboutMeBox'
import AboutMe from './AboutMe'

const Background = () => {
    return (
    <div className="background">
        <div className="background-container color"> 
        <AboutMeBox />
        <AboutMe />
        </div>
    </div>
    )
}


export default Background;
import React from 'react';
import './Background.css'
import AboutMeBox from './AboutMeBox'
import { ProjectCardInfo } from './ProjectCardInfo'
import Projects from './Projects'



const Background = () => {

    return (
    <div className="background">
        <AboutMeBox />
        <div className="background-container color">
        <Projects ProjectCardInfo={ProjectCardInfo} />
        </div>
    </div>
    )
}


export default Background;
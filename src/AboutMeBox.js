import React from 'react';
import './AboutMeBox.css'

const AboutMeBox = () => {
    return (
        <div className="AboutMeBox-Container">
            <div className="AboutMeBox-Size color" >
                <div className="Profile-Picture Profile-Color">
                    <img src="/profile-picture.png" alt="profile-picture"></img>
                     </div>
                    <h1 className="Profile-Text"> Christoffer Schem</h1>

                    <div className="AboutMe-Contact-Container">
                        <h1 className="AboutMe-Contact">Email</h1>
                        <h1>Christofferv3@gmail.com</h1>
                    </div>
                    <div className="AboutMe-Contact-Container">
                        <h1>Phone number</h1>
                        <h1>+47 41652208</h1>
                    </div>
                    <div className="AboutMe-Contact-Container">
                        <h1>Github</h1>
                        <h1>Click here</h1>
                    </div>
                    <div className="Programming-Languages-Container">
                        <div className="Profile-Html">
                            <img src="./html.png" alt="Html"></img>
                            <h1 className="Red">Html</h1>
                        </div>
                        <div className="Profile-Css">
                            <img src="css.png" alt="Css"></img>
                            <h1 className="Blue">Css</h1>
                        </div>
                        <div className="Profile-Javascript">
                            <img src="Javascript.png" alt="Javascript"></img>
                            <h1 className="Orange">JS</h1>
                        </div>
                        <div className="Profile-React">
                        <img src="React.png" alt="React"></img>
                        <h1 className="React">React</h1>
                        </div>
                    </div>
                    <h1 className="Web-Dev Profile-Color">Web Developer</h1>

                 </div>
             </div>
    )
}

export default AboutMeBox;
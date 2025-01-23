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
                    <h1 className="Web-Dev Profile-Color">Web Developer</h1>
                    <div className="Programming-Languages">
                        <img src="./html.png" alt="Html"></img>
                        <img src="css.png" alt="Css"></img>
                        <img src="Javascript.png" alt="Javascript"></img>
                        <img src="React.png" alt="React"></img>
                    </div>

                    <div className="AboutMe-Contact-Container">
                        <h1 className="AboutMe-Contact">Email</h1>
                        <h1>Christofferv3@gmail.com</h1>
                    </div>
                    <div className="AboutMe-Contact-Container">
                        <h1>Phone number</h1>
                        <h1>+47 46152208</h1>
                    </div>
                 </div>
             </div>
    )
}

export default AboutMeBox;
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Kort om meg</h1>
            </div>

            <div className="cards-grid">
                <div className="card">
                    <h2>Hvem er jeg</h2>
                    <p>En dedikert Frontend-utvikler som drives av ønsket om å bygge oversiktlige, effective og responsive nettsider. For tiden fordyper jeg meg i moderne webteknologier og søker aktivt nye muligheter som kan utfordre og videreutvikle mine tekniske ferdigheter.</p>
                </div>

                <div className="card">
                    <h2>Teknologisk Kompetanse</h2>
                    <div className="skills-grid">
                        <span className="skill">React</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">CSS</span>
                        <span className="skill">HTML</span>
                        <span className="skill">Git</span>
                    </div>
                </div>

                <div className="card">
                    <h2>Mitt fokus nå</h2>
                    <p>Bygger personlige prosjekter for å forbedre portfolioen min og styrke min forståelse av React og moderne webteknologiske praksiser. Aktivt på jakt etter en rolle der jeg kan bidra til meningsfulle prosjekter og fortsette å vokse som utvikler.</p>
                </div>

                <div className="card">
                    <h2>Liv utenfor koding</h2>
                    <p>Utenfor kodeverden så spiller jeg med venner eller trener calisthenic som gir meg avkobling og fysisk utfordring. Calisthenic er en form for styrketrening med kroppsvekt</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
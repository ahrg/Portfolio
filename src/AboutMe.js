import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="container">


            <div className="cards-container">
                <div className="card">
                    <h2>Kort om meg</h2>
                    <div className="skills-grid">
                        <span className="about-item">Frontend-utvikler</span>
                        <span className="about-item">Problemløser</span>
                        <span className="about-item">Kreativ koder</span>
                        <span className="about-item">Selvlært utvikler</span>
                        <span className="about-item">Tech-utforsker</span>
                        <span className="about-item">Alltid lærende</span>
                    </div>
                </div>

                <div className="card">
                    <h2>Teknologisk Kompetanse</h2>
                    <div className="skills-grid">
                        <span className="skill">React</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">CSS</span>
                        <span className="skill">HTML</span>
                        <span className="skill">Python</span>
                        <span className="skill">Git</span>
                    </div>
                </div>

                <div className="card">
                    <h2>Mitt fokus nå</h2>
                    <p>Jeg bygger personlige prosjekter for å forbedre portfolioen min og styrke min forståelse av React. Aktivt på jakt etter en rolle der jeg kan bidra til meningsfulle prosjekter og fortsette å vokse som utvikler.</p>
                </div>

                <div className="card">
                    <h2>Liv utenfor koding</h2>
                    <p>Utenfor kodeverden spiller jeg med venner eller trener en form for styrketrening, som kalles calisthenic.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
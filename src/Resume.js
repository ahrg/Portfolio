import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <div className="container">
            <div className="cards-container">
            <div className="header">
                <h1>CV</h1>
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
                    <h2>Utdanning erfaring</h2>
                    <p>🔹 Mailand Videregående skole: Medieproduksjon og informasjonsteknologi: <em>2019-2021</em> </p>
                    <p>🔹 Mailand Videregående skole: Informasjonsteknologi: <em>2021-2022</em> </p>
                    <p>🔹 Nttedal Kommune: Lærling IT-Drift: <em>2023-2025</em> </p>
                </div>
                <div className="card"> 
                <div className="certifications">
                    <h2>Sertifiseringer</h2>
                    <ul>
                        <li>📜 <strong>Complete Python Developer</strong> – Zero To Mastery <em>(2023)</em>
                            <br/>🔹 Web Scraping, API-integrasjoner, Testing, Automatisering
                            <br/>🔹 Bygget flere Python-prosjekter, inkludert web scraping-skript og automatiseringsverktøy
                        </li>
                        <li>📜 <strong>Complete Web Developer</strong> – Zero To Mastery <em>(Pågår – 66% fullført, 2025)</em>
                            <br/>🔹 HTML, CSS, JavaScript, React, Node.js,
                            <br/>🔹 Arbeider med responsivt design og ytelsesoptimalisering
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
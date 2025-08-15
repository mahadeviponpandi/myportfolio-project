import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import TailwindCSS from "../assets/TailwindCSS.png";


function Skills(){
    return(
        <div className="skills-seaction">
            <h1>My Skills</h1>
            <div className="skills-slider">
                <div className="skills-card">
                    <img src={html} className="skills-icon" alt="html"/>
                    <p>HTML</p>
                </div>
                <div className="skills-card">
                    <img src={css} className="skills-icon" alt="css"/>
                    <p>CSS</p>
                </div>
                <div className="skills-card">
                    <img src={javascript} className="skills-icon" alt="javascript"/>
                    <p>JavaScript</p>
                </div>
                <div className="skills-card">
                    <img src={react} className="skills-icon" alt="react"/>
                    <p>React</p>
                </div>
                <div className="skills-card">
                    <img src={bootstrap} className="skills-icon" alt="bootstrap"/>
                    <p>Bootstrap</p>
                </div>
                <div className="skills-card">
                    <img src={github} className="skills-icon" alt="github"/>
                    <p>GitHub</p>
                </div>
                <div className="skills-card">
                    <img src={TailwindCSS} className="skills-icon" alt="tailwindcss"/>
                    <p>Tailwind CSS</p>
                </div>
            </div>
        </div>

    )

}
export default Skills;
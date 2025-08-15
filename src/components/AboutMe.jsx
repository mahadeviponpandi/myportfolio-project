import React from "react";
import Maha from "../assets/Maha.jpg";

function AboutMe(){
    return(
        <div className="About-head"> 
            <div>
                <img src={Maha} className="About-img"/>
            </div>
            <div> 
                <h1>About Me</h1>
                <p>I am a Computer Science and Engineering graduate looking for an opportunity to be a Front End Developer and Full Stack Developer. Passionate about my skills and problem solving abilities,in an entry lavel role as a Software Engineerning to contribute to innovative and impactful projects.</p>
            </div>
        </div>
     
    )
}
export default AboutMe;
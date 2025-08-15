import React from "react";
import StrabucksImg from "../assets/StrabucksImg.png";
import PortfolioImg from "../assets/PortfolioImg.png";
function Project(){
    return(
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-grid" >
                <div className="project-card">
                    <img src={StrabucksImg} alt="project 1"/>
                    <div className="project-info">
                        <h3>Strabucks C0ffee Company</h3>
                        <p>HTML, CSS</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                 <div className="project-card">
                    <img src={PortfolioImg} alt="project 2"/>
                    <div className="project-info">
                        <h3>Portfolio Website</h3>
                        <p>React JS</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
            </div>
            
        </div>
    )

}
export default Project;
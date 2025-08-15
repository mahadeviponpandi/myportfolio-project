import React from "react";
import {useNavigate} from "react-router";

function Header(){
    var navigate=useNavigate();
    return(
        <div className="Nav">
            
            <div className="nav-logo">MAHADEVI P</div>
            <div className="nav-links">
                <a href="/Home/" >Home</a>
                <a href="/About Me/" >About Me</a>
                <a href="/Education/">Education</a>
                <a href="/Skills/" >Skills</a>
                <a href="/Project/" >Projects</a>
                <a href="/Contact/" >Contact</a>

            </div>
           
            
        </div>
    
    )
}
export default Header;
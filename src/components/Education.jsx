import React from "react";
import cap from "../assets/cap.svg";

function Education(){
    return(
        <div className="Edu-head">
            <div style={{padding:"70px",textAlign:"center"}}> 
                <h1>Education Details</h1>
            </div>
            <div className="Edu-text">
                <h2>  <img src={cap} height={30}/> Computer Science and Engineering</h2>
                <p>2020-2024</p>
                <h2>  <img src={cap} height={30}/> Higher Education</h2>
                <p>2019-2020</p>
                <h2>  <img src={cap} height={30}/> Secondary Education</h2>
                <p>2017-2018</p>
                
            </div>
            
        </div> 
    )
}
export default Education;           

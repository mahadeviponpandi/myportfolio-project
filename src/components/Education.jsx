import React from "react";
import cap from "../assets/cap.svg";

function Education(){
    return(
        <div className="Edu-head">
            <div> 
                <h1>Education Details</h1>
            </div>
            <div>
                <div  className="Edu-card">
                    <img src={cap} height={20}/>
                    <h2> Bachelor of Engineering</h2>
                    <p>Computer Science and Engineering</p>
                    <p>Nadar Saraswathi College of Engineering and Technology,Theni</p>
                    <p>2020-2024</p>
                </div>
                <div  className="Edu-card">
                    <img src={cap} height={20}/>
                    <h2>Higher Education</h2>
                    <p>2019-2020</p>
                </div>
                <div  className="Edu-card">
                     <img src={cap} height={20}/>
                    <h2>Secondary Education</h2>
                    <p>2017-2018</p>
                </div>
               
                
            </div>
            
        </div> 
    )
}
export default Education;           

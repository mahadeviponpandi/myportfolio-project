import React from "react";
import Maha from "../assets/Maha.jpg";
import MahaResume from "../assets/MahaResume.pdf"
function Home(){
    return(
        <div className="Home-head">
            <div className="Home-left">
                <h4>Hello!</h4>
                <h1> I'm <span>MAHADEVI PONPANDI</span></h1>
                <div className="Home-button">
                    <a href={MahaResume}>Download CV</a>
                </div>
            </div>
            <div className="Home-right">
                <div class="bg-skew"></div>
                <img src={Maha} className="profile-img"/>
            </div>
        </div>
    )
}
export default Home;
import React from "react";
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

function Contact(){
    return(
        <div className="Contact-head">
            <div className="Contect-info" >
                <h2>Contact Me</h2>
                <div className="Contact-text">
                    <input type="text" placeholder="Full Name"/><br></br>
                    <input type="text" placeholder="Email"/><br></br>
                    <input type="text" placeholder="Phone Number"/><br></br>
                    <input type="text" style={{paddingBottom:"70px"}} placeholder="Your Message"/><br></br>
                    <button className="contact-btn">Send Message</button>
                </div>
            </div>

            <footer>
                <div>
                    <h3>Mahadevi P</h3>
                    <div className="Socialmedia-links">
                        <a href="https://github.com/mahadeviponpandi" title="GitHup">
                        <img src={github} alt="github" height={30}/>
                        </a>
                        <a href="http://linkedin.com/in/mahadevi-ponpandi-a50757271"  title="Linkedin">
                        <img src={linkedin} alt="github" height={30}/>
                        </a>
                    </div>
                </div>
                <p>© Mahadevi Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Contact;
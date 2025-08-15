import React from "react";

function Contact(){
    return(
        <div className="Contact-head">
            <h2>Contact Me</h2>
            <div className="Contact-text">
                <input type="text" placeholder="Full Name"/><br></br>
                <input type="text" placeholder="Email"/><br></br>
                <input type="text" placeholder="Phone Number"/><br></br>
                <input type="text" style={{paddingBottom:"70px"}} placeholder="Your Message"/><br></br>
                <button className="contact-btn">Send Message</button>
            </div>
            <footer>
                <p>© Portfolio. All rights reserved.</p>
            </footer>
            <div>
                
            </div>
        </div>
    )
}
export default Contact;
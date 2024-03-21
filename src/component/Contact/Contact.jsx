import React from "react";
import "./Contact.css"
function Contact(){
    return(
        <>
        <div className="contact">
            <div className="contact-heading">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                    <form action="" className="form">
                        <h2>Send Message</h2>
                        <div className="contact-form">
                            <input type="text" placeholder="Enter Your Name" />
                            <div>
                            <input type="text" placeholder="Enter Mour Mail"/>
                            <input type="number" placeholder="+91 XXXXXXXXXX" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder="Message"></textarea>
                            <div className="contact-btn">
                                <button>Submit</button>
                            </div>
                        </div> 
                    </form>

                    <div className="contact-links">
                            <div className="mail">
                                <a href="">
                                <i class="fa-solid fa-envelope"></i>
                                <p>xyz@gmail.com</p>
                                </a>
                            </div>

                            <div className="mobile">
                                <a href="">
                                <i class="fa-solid fa-phone"></i>
                                <p>+91 XXXXXXXXXX</p>
                                </a>
                            </div>

                            <div className="location">
                                <a href="">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>366, Hapur, India, 245101</p>
                                </a>
                            </div>
                        </div>
                </div>
        </div>
        </>
    )
}

export default Contact;
import React from "react";
import aboutImg from "./abo.jpg";
import AboutBox from "./AboutBox";
import "./About.css"
import Awrapp from "./AboutWrapp";


function About(){
    return(
        <div className="about">
            <div className="about-heading">
            <h1>About Us</h1>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>

                <div>
                    <h1>Benefits About Online Learning Expertise</h1>
                    <AboutBox></AboutBox>
                </div>
            </div>

            <div>
                <Awrapp></Awrapp>
            </div>
        </div>

    )
}

export default About;
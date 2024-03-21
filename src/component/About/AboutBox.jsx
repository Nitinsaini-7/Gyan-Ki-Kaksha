import React from "react";
import AboutBoxContent from "./AboutBoxContent";
import AboutLogo1 from "./certificate.png";
import AboutLogo2 from "./online-learning.png";
import AboutLogo3 from "./favorite.png";

function AboutBox(){
    return (
        <div className="about-box-container">
            <div className="about-box">
                <div className="about-logo">
                    <img src={AboutLogo1} alt="" />
                </div>
                <AboutBoxContent heading={"Online Courses"} paragraph={"A virtual learning experience organized into a course format. Courses can vary in their type, from informal to formal, and cover many different topics. Plus, they can be used as preparation for an online exam or simply for fun!"}></AboutBoxContent>
            </div>

            <div className="about-box">
                <div className="about-logo">
                    <img src={AboutLogo2} alt="" />
                </div>
                <AboutBoxContent heading={"Earn A Certificates"} paragraph={"To receive an official document that confirms that certain facts are true. For example, graduate students can earn a certificate in cybersecurity management by taking courses in business language, international business, or participating in a field study."}></AboutBoxContent>
            </div>

            <div className="about-box">
                <div className="about-logo">
                    <img src={AboutLogo3} alt="" />
                </div>
                <AboutBoxContent heading={"Learn with Expert"} paragraph={"Learning with Experts is a global classroom community that connects people with expert tutors and each other to learn. Peer and Expert level members have access to the same content and features, including video lesson tutorials, downloadable notes, lesson assignments, and group learning."}></AboutBoxContent>
            </div>
        </div>
    )
}

export default AboutBox;
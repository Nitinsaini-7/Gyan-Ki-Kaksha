import React from "react";

function AboutBoxContent({heading,paragraph}){
    return(
        <div className="about-box-data">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    )
}

export default AboutBoxContent;

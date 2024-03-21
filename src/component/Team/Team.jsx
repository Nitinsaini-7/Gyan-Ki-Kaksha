import React from "react";

import "./Team.css"
import TeamCard from "./TeamCard";
function Team(){
    return (
        <>
            <section className='team'>
                <div className="team-heading">
                    <h1>Our Team</h1>
                </div>
                <div className='team-container'>
                    <TeamCard></TeamCard>
                </div>
            </section>
        </>
    )
}

export default Team;
import React from "react";
import { team } from "../../dummy";
import "./Team.css"
function TeamCard(){
    return (
        <div className="team-box">
            {team.map((val) => (
            <div className='team-items'>
                <div className='team-img-icon'>
                    <img src={val.cover} alt='' />
                    <div className='team-icon'>
                    <i class="fa-brands fa-google-plus-g"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
                <div className='team-data'>
                    <h2>{val.name}</h2>
                    <p>{val.work}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default TeamCard;
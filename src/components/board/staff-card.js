import React from "react";

import "./staff-card.css";

import ProcessCard from "./process-card";

export default function StaffCard(props){
    return(
        <div className="staff-card">
            <div>
                <h2>I am a staff card. I hold process cards.</h2>
            </div>
            <ProcessCard />
            <ProcessCard />
        </div>
    )
}
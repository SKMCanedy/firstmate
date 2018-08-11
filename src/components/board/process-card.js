import React from "react";

import "./process-card.css"

export default function ProcessCard(props){
    return(
        <div className="process-card">
            <div className="process-desc">I am a process card. I can be in the process bank or a staff card.</div>
            <button className="process-delete">&#10006;</button>
        </div>
    )
}
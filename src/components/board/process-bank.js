import React from "react";

import ProcessCard from "./process-card";

import "./process-bank.css"

export default function ProcessBank(props){
    return(
        <div className="process-bank">
            <div>
                <h2>I am the process bank. I hold process cards</h2>
            </div>
            <div className="process-container">
                <div className="process-card-media">
                    <ProcessCard />
                </div>
                <div className="process-card-media">
                    <ProcessCard />
                </div>
                <div className="process-card-media">
                    <ProcessCard />
                </div>
                <div className="process-card-media">
                    <ProcessCard />
                </div>
            </div>
        </div>
    )
}
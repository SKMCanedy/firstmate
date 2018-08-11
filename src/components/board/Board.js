import React from "react";

import ProcessBank from "./process-bank";
import StaffCard from "./staff-card";
import Header from "./header";

import "./Board.css"

export default function Board(props){
    return(
        <div>
            <Header />
            <div className="bank-container">
                <ProcessBank />
            </div>
            <div className="staff-container">
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
            </div>
        </div>
    )
}
import React from "react";

import "./header.css"
import logo from "../../images/icons8-ship-wheel-80.png"

export default function Header(props){
    return(
        <div className="board-header">
            <div className="header-title">
                <img src={logo} alt="ship wheel"/>
                <h1 className="header-title logo-name">Firstmate</h1>
            </div>
            <div className="option-bar">
                <div className="header-option">Add Process</div>
                <div className="header-option">Add Staff</div>
                <div className="header-option">Reset All</div>
                <div className="header-option">Logout</div>
            </div>
        </div>
    )
}
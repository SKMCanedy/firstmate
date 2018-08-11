import React from "react";

import "./header.css"

export default function Header(props){
    return(
        <div className="board-header">
            <h1>I am the Header</h1>
            <div className="option-bar">
                <div className="header-option left-option">Add Process</div>
                <div className="header-option right-option">Add Staff</div>
            </div>
        </div>
    )
}
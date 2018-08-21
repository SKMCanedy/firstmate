import React from "react";

import "./home-menu.css";

export default function HomeMenu (props){
    return(
        <div>
            <a href={props.anchorLink.about}>
                <div className="nav-link">About</div>
            </a>
            <a href={props.anchorLink.signup}>
                <div className="nav-link"> Sign-Up</div>
            </a>
        </div>
    )
}  
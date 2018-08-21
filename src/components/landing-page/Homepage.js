import React from "react";


import About from "./about";
import Login from "./login";
import NewUser from "./new-user";
import HomeMenu from "./home-menu";
import ScrollDown from "./scroll-down";
import ScrollUp from "./scroll-up";

import "./homepage.css";

const anchorLinks = {
    "signin":"#signin",
    "about": "#about",
    "signup": "#signup"
}

export default function Homepage(props) {
    return(
        <div>
            <div className="container">
                <div>
                    <div className="item navbar" id="signin">
                        <HomeMenu anchorLink={anchorLinks}/>
                    </div>
                </div>
                <h1> Firstmate </h1>
                <div className="item">
                    <Login />
                </div>
                <div className="item scroll-down">
                    <ScrollDown anchorLink={anchorLinks.about}/>
                </div>
            </div>
            <div className="container" id="about">
                <div className="item scroll-up">
                    <ScrollUp anchorLink={anchorLinks.signin}/>
                </div>
                <div className="item">
                    <About />
                </div>
                <div className="item scroll-down">
                    <ScrollDown anchorLink={anchorLinks.signup}/>
                </div>
            </div>
            <div className="container" id="signup">
                <div className="item scroll-up">
                    <ScrollUp anchorLink={anchorLinks.about}/>
                </div>
                <div className="item">
                    <NewUser />
                </div>
            </div>
        </div>
    )
}
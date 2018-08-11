import React from "react";


import About from "./about";
import Login from "./login";
import NewUser from "./new-user";
import HomeMenu from "./home-menu";
import ScrollDown from "./scroll-down";

import "./homepage.css";

export default function Homepage(props) {
    return(
        <div>
            <div className="container">
                <div>
                    <div className="item navbar">
                        <HomeMenu />
                    </div>
                </div>
                <h1> Firstmate </h1>
                <div className="item">
                    <Login />
                </div>
                <div className="item scroll-item">
                    <ScrollDown />
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <About />
                </div>
                <div className="item scroll-item">
                    <ScrollDown />
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <NewUser />
                </div>
            </div>
        </div>
    )
}
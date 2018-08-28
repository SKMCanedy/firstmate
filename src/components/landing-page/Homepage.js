//Outlines layout and styles of landing page

import React from "react";
import styled from "styled-components";


import About from "./about";
import Login from "./login";
import NewUser from "./new-user";
import HomeMenu from "./home-menu";

import loginImage from "../../images/bkgd-shipdeck-credit-Bobby-Burch.jpg";
import smLoginImage from "../../images/bkgd-sm-shipdeck-credit-Bobby-Burch.jpg";
import aboutImage from "../../images/bkgd-shipwheel-credit-joseph-barrientos.jpg";
import smAboutImage from "../../images/bkgd-sm-shipwheel-credit-joseph-barrientos.jpg";
import newuserImage from "../../images/bkgd-shipcrew-credit-stijn-swinnen.jpg";
import smNewuserImage from "../../images/bkgd-sm-shipcrew-credit-stijn-swinnen.jpg";

const LandingPageContainer = styled.div`
    font-family: 'Headland One', serif;
    color: #fff0d2
`
const LoginContainer = styled.div`
    border: 2px dashed black;
    width: 100vw;
    height: 100vh;
    background-size: 100vh;
    background-image: url(${smLoginImage});
    overflow: auto;

    @media (min-width: 790px) {
        background-size: 100vw;
    }

    @media (min-width: 1200px) {
        background-size: 100vw;
        background-image: url(${loginImage});
    }
`
const AboutContainer = styled.div`
    border: 2px dashed black;
    width: 100vw;
    height: 100vh;
    background-size: 100vh;
    background-image: url(${smAboutImage});
    overflow: auto;

    @media (min-width: 790px) {
        background-size: 100vw;
    }

    @media (min-width: 1200px) {
        background-size: 100vw;
        background-image: url(${aboutImage});
    }
`
const NewUserContainer = styled.div`
    border: 2px dashed black;
    width: 100vw;
    height: 100vh;
    background-size: 100vh;
    background-image: url(${smNewuserImage});
    overflow: auto;

    @media (min-width: 790px) {
        background-size: 100vw;
    }

    @media (min-width: 1200px) {
        background-size: 100vw;
        background-image: url(${newuserImage});
    }
`

export default function Homepage(props) {
    const anchorLinks = {
        "login":"#login",
        "about": "#about",
        "signup": "#signup"
    }

    return(
        <LandingPageContainer>
            <HomeMenu anchorLink={anchorLinks}/>
            <LoginContainer id="login">
                <Login />   
            </LoginContainer>
            <AboutContainer id="about">
                <About />
            </AboutContainer>
            <NewUserContainer id="signup">
                <NewUser />
            </NewUserContainer>
        </LandingPageContainer>
    )
}
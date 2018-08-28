//Content for the About Section

import React from "react";
import styled from "styled-components";

import ContentContainer from "./content-container";

const InfoContainer = styled.div`
    height: 80%;
    width: 90%;
    margin: auto;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    overflow: auto;
    text-align: left;

    @media (min-width: 790px) {
        padding-top: 2rem;
        font-size: 1.25rem;
        width: 80%;

    }
`

export default function About (props) {
    return(
        <ContentContainer>
            <h2>About Firstmate</h2>
            <InfoContainer>
                <p> Whether sailing the high seas or delivering a product to your customers, a well-functioning crew is crucial in helping you reach your destination.
                    Firstmate is a tool to assist you with organizing your crew and keep your ship running. </p>
                <p> Features include:</p>
                <ul>
                    <li> Easily designating and re-arranging staff work assignments (referred to as "processes") </li>
                    <li> Quickly adding and removing both staff and processes </li>
                    <li> Staff has the ability to login and see the changes you have made to work assignments</li>

                </ul>

            </InfoContainer>
        </ContentContainer>
    )
}
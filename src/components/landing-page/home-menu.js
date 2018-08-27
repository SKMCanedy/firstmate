import React from "react";
import styled from "styled-components";

const Header = styled.div`
    width: 100vw;
    position: fixed;
    background-color: rgba(119, 152, 187, .7);
    height: 5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px) {
        justify-content: flex-end;
    }
` 

const NavLink = styled.div `
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #fff0d2;

    & :visited{
        color: #fff0d2;
    }

    & :hover{
        color: #ffcc66;
    }

    @media (min-width: 500px) {
        margin-right: 2rem;
        font-size: 1.5rem;
    }
`

export default function HomeMenu (props){
    return(
        <Header>
            <NavLink>
                <a href={props.anchorLink.about}> About </a>
            </NavLink>
            <NavLink>
                <a href={props.anchorLink.signup}> Sign Up </a>
            </NavLink>
            <NavLink>
                <a href={props.anchorLink.login}> Login </a>
            </NavLink>
        </Header>
    )
}  
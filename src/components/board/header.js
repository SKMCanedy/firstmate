//Board Header with logo and action buttons

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Modal from "./modal"
import logo from "../../images/shipwheel-bicolor.png"
import { openModal } from "../../actions"

const HeaderContainer = styled.div`
    display: inline-block;
    background-image: linear-gradient(rgb(68, 101, 136), rgb(231, 205, 126));
    min-height: 10rem;
    width: 100%;
    border-bottom: solid rgb(43, 62, 85) 2px
`
const Logo = styled.img`
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    -webkit-transition: -webkit-transform 1s ease-in-out;
    transition: transform 1s ease-in-out;

    &:hover {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    @media (min-width: 500px) {
        margin-left: 1rem;
    }
`
const SiteName = styled.div`
    display: inline-block;
    vertical-align: middle;
    font-family: 'IM Fell English', serif;
    & h1 {
        font-size: 3rem;
        text-shadow: 4px 8px rgba(0, 0, 0, 0.2);
    }
`
const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
`
const LogOutContainer = styled.div`
    display: inline-block;
    width: 100%;
    text-align: right;
    margin-right: 1rem;
    @media (min-width: 400px) {
        width: 20%;
        float: right;
        text-align: right;
    }
`
const Button = styled.button`
    border-radius: 5px;
    border: black solid 1px;
    color: #fff0d2;
    background-color: ${props => props.logout ? "#2b3e55" : "#5b3a33"}
    margin: .5rem;
    padding: .5rem;
    font-size: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Headland One', serif;

    &:hover {
        background-color: ${props => props.logout ? "#5b3a33" : "#2b3e55"}
    }
    @media (min-width: 500px) {
        font-size: 1.25rem;
        margin: 1rem;
    }
`;

export class Header extends React.Component {

    callTaskModal= ()=>{
        this.props.dispatch(openModal("taskModal"));
    }

    callColumnModal= ()=>{
        this.props.dispatch(openModal("columnModal"));
    }

    resetTasks = ()=>{
        this.props.dispatch(openModal("resetConfirmation"));        
    }

    logout = ()=>{
        this.props.dispatch(openModal("logout"));     
    }

    render(){
        return(
            <HeaderContainer>
                <LogOutContainer>
                    <Button onClick={this.logout} logout>Logout</Button>                   
                </LogOutContainer>
                <Logo src={logo} alt="ship wheel"></Logo>
                <SiteName>
                    <h1>Firstmate</h1>
                </SiteName>
                <ButtonContainer>
                    <Button onClick={this.callTaskModal}>Add Process</Button>
                    <Button onClick={this.callColumnModal}>Add Staff</Button>
                    <Button onClick={this.resetTasks} reset>Reset Processes</Button>
                </ButtonContainer>
                {this.props.showModal && <Modal />}
            </HeaderContainer>
        )
    }
}

const mapStateToProps = state => ({
    showModal: state.firstmate.modalStatus.showModal,
  });
  
export default connect(mapStateToProps)(Header);
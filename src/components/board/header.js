import React from "react";
import styled from "styled-components";

import logo from "../../images/icons8-ship-wheel-80.png"
// import { addTask, addColumn } from "../../actions"

const Button = styled.button`
  background: green;
  border-radius: 3px;
  border: black solid 1px;
  color: white;
`;


export default class Header extends React.Component {
    callTaskModal= ()=>{
        console.log("Calling Task Modal")
    }

    callColumnModal= ()=>{
        console.log("Calling Column Modal")
    }
    
    render(){
        return(
            <div>
                <img src={logo} alt="ship wheel"/>
                <h1>Firstmate</h1>
                <Button type="button" onClick={this.callTaskModal}>Add Process</Button>
                <Button type="button" onClick={this.callColumnModal}>Add Staff</Button>
                <div>Reset All</div>
                <div>Logout</div>
            </div>
        )
    }
}
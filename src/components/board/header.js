import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import Modal from "./modal"
import logo from "../../images/icons8-ship-wheel-80.png"
import { openModal } from "../../actions"

const Button = styled.button`
  background: green;
  border-radius: 3px;
  border: black solid 1px;
  color: white;
`;


export class Header extends React.Component {

    callTaskModal= ()=>{
        console.log("Calling Task Modal");
        this.props.dispatch(openModal("taskModal"));
    }

    callColumnModal= ()=>{
        console.log("Calling Column Modal");
        this.props.dispatch(openModal("columnModal"));
    }

    resetTasks = ()=>{
        console.log("Reset Tasks Called");
        this.props.dispatch(openModal("resetConfirmation"));        
    }

    logout = ()=>{
        this.props.dispatch(openModal("logout"));     
    }

    render(){
        return(
            <div>
                <img src={logo} alt="ship wheel"/>
                <h1>Firstmate</h1>
                <Button type="button" onClick={this.callTaskModal}>Add Process</Button>
                <Button type="button" onClick={this.callColumnModal}>Add Staff</Button>
                <Button type="button" onClick={this.resetTasks}>Reset Processes</Button>
                <Button type="button" onClick={this.logout}>Logout</Button>
                {this.props.showModal && <Modal />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showModal: state.firstmate.modalStatus.showModal,
  });
  
export default connect(mapStateToProps)(Header);


// callTaskModal= ()=>{
//     console.log("Calling Task Modal");
//     this.props.dispatch(openModal("taskModal"));
// }

// callColumnModal= ()=>{
//     console.log("Calling Column Modal");
//     this.props.dispatch(openModal("columnModal"));
// }



// resetTasks = ()=>{
//     console.log("Reset Tasks Called");
//     this.props.dispatch(openModal("resetConfirmation"));        
// }

// logout = ()=>{
//     this.props.dispatch(openModal("logout"));     
// }

// render(){
//     function callModalOpen(callType){
//         this.props.dispatch(openModal(callType))
//     }
//     return(
//         <div>
//             <img src={logo} alt="ship wheel"/>
//             <h1>Firstmate</h1>
//             <Button type="button" onClick={this.callTaskModal}>Add Process</Button>
//             <Button type="button" onClick={this.callColumnModal}>Add Staff</Button>
//             <Button type="button" onClick={this.resetTasks}>Reset Processes</Button>
//             <Button type="button" onClick={this.logout}>Logout</Button>
//             {this.props.showModal && <Modal />}
//         </div>
//     )
// }
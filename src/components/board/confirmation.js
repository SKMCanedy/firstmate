//Confirmation to load into modal for deletions, process reset & log out. Also sets off actions based on type of request if confirmed

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { resetBoard, closeModal, deleteColumn, updateServerBoard } from "../../actions";
import { LANDING_PAGE } from "../../config";

const ConfirmContainer = styled.div`
    font-size: 1.5rem;
    font-weight: bold;

    & button {
        font-family: 'Headland One', serif;
        background-color: #2b3e55;
        color: #fff0d2;
        font-size: 1.25rem;
        width: 8rem;
        border-radius: 5px;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
        margin: 1rem;

        &:hover {
            background-color: #fff0d2;
            color: #2b3e55;
        }
    }
`

export class Confirmation extends React.Component {

    callCloseModal = () =>{
        this.props.dispatch(closeModal())
    }

    determineType=()=>{
        const confirmType = this.props.modalStatus.modalType;
        if (confirmType === "resetConfirmation"){
            this.props.dispatch(resetBoard(this.props.modalStatus.values));
            this.props.dispatch(closeModal());
            this.props.dispatch(updateServerBoard());
            return;
        }

        if (confirmType === "logout"){
            localStorage.setItem("token", "");
            this.props.dispatch(closeModal());
            window.location.replace(LANDING_PAGE);
            return;
        }
        if (confirmType === "deleteConfirmation"){
            this.props.dispatch(deleteColumn(this.props.modalStatus.values));
            this.props.dispatch(closeModal());
            this.props.dispatch(updateServerBoard());
            return;
        }
        return (console.log("Cannot determine type of confirmation request"));
    }

    render(){
        return(
            <ConfirmContainer>
                <p>Are you sure?</p>
                <button type="button" onClick={this.callCloseModal}>Cancel</button>
                <button type="button" onClick={this.determineType}>Yes</button>
            </ConfirmContainer>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.firstmate.tasks,
    columns: state.firstmate.columns,
    columnOrder: state.firstmate.columnOrder,
    modalStatus: state.firstmate.modalStatus
  });
  
export default connect(mapStateToProps)(Confirmation);
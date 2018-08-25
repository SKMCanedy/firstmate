import React from 'react';
import { connect } from 'react-redux';
// import styled from "styled-components";

import { resetBoard, closeModal, deleteColumn, updateServerBoard } from "../../actions";


export class Confirmation extends React.Component {

    callCloseModal = () =>{
        this.props.dispatch(closeModal())
    }

    determineType=()=>{
        const confirmType = this.props.modalStatus.modalType;
        if (confirmType === "resetConfirmation"){
            console.log("resetConfirmation if statement accessed")
            this.props.dispatch(resetBoard(this.props.modalStatus.values));
            this.props.dispatch(closeModal());
            this.props.dispatch(updateServerBoard());
            return;
        }

        if (confirmType === "logout"){
            console.log("logout if statement accessed")
            localStorage.setItem("token", "");
            this.props.dispatch(closeModal())
            window.location.replace("http://localhost:3000");
            return;
        }
        if (confirmType === "deleteConfirmation"){
            console.log("delete if statement accessed");
            this.props.dispatch(deleteColumn(this.props.modalStatus.values));
            this.props.dispatch(closeModal());
            this.props.dispatch(updateServerBoard());
            return;
        }
        return (console.log("Cannot determine type of confirmation request"))
    }

    render(){
        return(
            <div>
                <p>Are you sure?</p>
                <button type="button" onClick={this.callCloseModal}>Cancel</button>
                <button type="button" onClick={this.determineType}>Yes</button>
            </div>
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
import React from 'react';
import { connect } from 'react-redux';
// import styled from "styled-components";

import { resetBoard, closeModal, deleteColumn } from "../../actions";


export class Confirmation extends React.Component {

    callCloseModal = () =>{
        this.props.dispatch(closeModal())
    }

    determineType=()=>{
        const confirmType = this.props.confirmType;
        if (confirmType === "resetConfirmation"){
            this.props.dispatch(resetBoard());
            this.props.dispatch(closeModal());
        }

        if (confirmType === "logout"){
            localStorage.setItem("token", "");
            this.props.dispatch(closeModal())
            window.location.replace("http://localhost:3000");
        }
        if (confirmType === "deleteConfirmation"){
            this.props.dispatch(deleteColumn(this.props.values));
            this.props.dispatch(closeModal());
        }
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
  });
  
export default connect(mapStateToProps)(Confirmation);
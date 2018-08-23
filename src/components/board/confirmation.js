import React from 'react';
import { connect } from 'react-redux';

import { resetBoard, closeModal } from "../../actions";

export class Confirmation extends React.Component {

    callCloseModal = () =>{
        this.props.dispatch(closeModal())
    }

    determineType=()=>{
        const confirmType = this.props.confirmType;
        if (confirmType === "reset"){
            this.props.dispatch(resetBoard())
            this.props.dispatch(closeModal())
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
import React from 'react';
import { connect } from 'react-redux';

import { openModal } from "../../actions"
import Modal from "./practice-modal-component"

class PracticeModal extends React.Component {
    triggerModal=()=>{
        console.log("Button clicked")
        this.props.dispatch(openModal());
    }

    render(){
        console.log(this.props.showModal)
        return(
            <div>
                <button type="button" onClick={this.triggerModal}> Testing </button>
                {this.props.showModal && <Modal> This is my test modal </Modal>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showModal: state.firstmate.showModal,
  });
  
export default connect(mapStateToProps)(PracticeModal);
  
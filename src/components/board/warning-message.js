import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import { closeModal } from "../../actions";

const Content = styled.div`
    width: 80%
    height: 80%
    margin: auto;
    margin-top: 2%;
    padding-top: 2%
    text-align: center;
    border: 2px solid black;
`


export class Warning extends React.Component {

    callCloseModal = () =>{
        this.props.dispatch(closeModal())
    }

    render(){
        let warningMessage = "Generic warning"
        const warningType = this.props.warningType;
        if (warningType === "hasTasksWarning"){
            warningMessage = (
                "Cannot delete if Staff member has assigned processes. Please remove all processes before trying again."
            )
        }

        return(
            <div>
                <Content> {warningMessage} </Content>
                <button type="button" onClick={this.callCloseModal}>OK</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  });
  
export default connect(mapStateToProps)(Warning);
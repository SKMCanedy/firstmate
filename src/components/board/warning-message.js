//Content displayed in modal when user attempts to delete a droppable (column/staff card) while it contains draggables (tasks/processes)

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { closeModal } from "../../actions";

const Content = styled.div`
    width: 80%
    height: 80%
    margin: 2% auto;
    padding: 2%
    text-align: center;
    font-size: 1.25rem;

`
const Button = styled.button`
    font-family: 'Headland One', serif;
    background-color: ${props=>(props.disabled ? "grey" : "#2b3e55")};
    color: #fff0d2;
    font-size: 1.25rem;
    width: 8rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    margin: 1rem;

    &:hover {
        background-color: ${props=>(props.disabled ? "grey" : "#fff0d2")};
        color: ${props=>(props.disabled ? "#fff0d2" : "#2b3e55")};
    }
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
                "Cannot be deleted while Staff member has assigned processes. Please remove all processes before trying again."
            )
        }

        return(
            <div>
                <Content> {warningMessage} </Content>
                <Button onClick={this.callCloseModal}>OK</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  });
  
export default connect(mapStateToProps)(Warning);
import React from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import styled from "styled-components";

import { closeModal } from "../../actions";
import AddTaskForm from "./form-add-task";
import AddColumnForm from "./form-add-column";

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000088;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalWindow = styled.div`
    background-color: white;
    border-radius: 5px;
    width: 30rem;
    height: 10rem;
    margin-right: 1rem;
    margin-left: 1rem;
    text-align: center;
`
const CloseButton = styled.div`
    position: inline-block;
    margin-right: .25%;
    margin-top: .25%;
    background-color: lightblue;
    border-radius: 5px;
    width: 1rem;
    height: 1rem;
    float: right;
    text-align: center;
`
const Content = styled.div`
    width: 80%
    height: 80%
    margin: auto;
    margin-top: 2%;
    padding-top: 2%
    text-align: center;
    border: 2px solid black;
`

class Modal extends React.Component {
    constructor (props){
        super(props);
        this.element = document.createElement('div');
        this.modalRoot = document.getElementById('modal-root');
        this.modalRoot.appendChild(this.element)
    }

    componentDidMount(){
        document.addEventListener("keyup", this.keyup, false)
    }

    componentWillUnmount(){
        document.removeEventListener("keyup", this.keyup, false)
        this.modalRoot.removeChild(this.element)
    }

    keyup = e =>{
        if (e.key === "Escape"){
            this.triggerCloseModal();
        }
    }

    triggerCloseModal = () =>{
        this.props.dispatch(closeModal());
    }

    determineContent = ()=>{
        if (this.props.modalType === "taskModal"){
           return( <AddTaskForm /> )
        }

        if (this.props.modalType === "columnModal"){
            return( <AddColumnForm /> )
         }

        return ("uh oh something went wrong with determineContent function")
    }
    render(){
        return ReactDOM.createPortal(this._renderModal(),this.element)
    }
    _renderModal(){
        return(
            <Background onClick={this.triggerCloseModal}>
                <ModalWindow onClick={e=>e.stopPropagation()}>
                    <CloseButton type="button" onClick={this.triggerCloseModal}>X</CloseButton>
                    <Content>{this.determineContent()}</Content>
                </ModalWindow>
            </Background>
        )
    }
}

const mapStateToProps = state => ({
    showModal: state.firstmate.modalStatus.showModal,
    modalType: state.firstmate.modalStatus.modalType
  });
  
export default connect(mapStateToProps)(Modal);
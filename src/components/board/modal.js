//"Modal" that is called by the board's buttons (add, logout, delete, reset). This calls in data from another component. 
//Another root was added to index.html to create another DOM. Also some aria-related actions added to help with closing modal

import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { closeModal } from "../../actions";
import AddTaskForm from "./form-add-task";
import AddColumnForm from "./form-add-column";
import Confirmation from "./confirmation";
import Warning from "./warning-message";
import closeIcon from "../../images/delete-darkblue.png"

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
    font-family: 'Headland One', serif;
    background-image: linear-gradient(to bottom right, #ebd593, #dbbe3d);
    border-radius: 10px;
    width: 90%
    height: 65%
    margin-right: 1rem;
    margin-left: 1rem;
    text-align: center;
    @media (min-width: 450px) {
        width: 30rem;
        height: 20rem;
    }
`
const CloseButton = styled.div`
    position: inline-block;
    margin-right: .5rem;
    margin-top: .5rem;
    border-radius: 5px;
    float: right;

    &:hover {
        background-color: #fff0d2;
    }

    & img {
        width: 2rem;
        height: 2rem;
    }

`
const Content = styled.div`
    width: 80%;
    height: 80%;
    margin: auto;
    margin-top: 5%;
    padding-top: 2%;
    text-align: center;
    color: #2b3e55;
`

class Modal extends React.Component {
    constructor (props){
        super(props);
        this.element = document.createElement("div");
        this.modalRoot = document.getElementById("modal-root");
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

        if (this.props.modalType === "resetConfirmation" || this.props.modalType==="logout" || this.props.modalType==="deleteConfirmation"){
            const confirmationType = this.props.modalType
            return(<Confirmation confirmType={confirmationType} values={this.props.values} />)
        }

        if (this.props.modalType === "hasTasksWarning"){
            const type = this.props.modalType
            return (<Warning warningType={type} />)
        }

        return ("There has been an error")
    }
    render(){
        return ReactDOM.createPortal(this._renderModal(),this.element)
    }
    _renderModal(){
        return(
            <Background onClick={this.triggerCloseModal}>
                <ModalWindow onClick={e=>e.stopPropagation()}>
                    <CloseButton type="button" onClick={this.triggerCloseModal}><img src={closeIcon} alt="delete icon" /></CloseButton>
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
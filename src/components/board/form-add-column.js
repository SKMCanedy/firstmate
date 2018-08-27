import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import { connect } from 'react-redux';
import styled from "styled-components";

import Input from './form-input';
import { addColumn, updateServerBoard } from "../../actions";

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
const SuccessMessage = styled.div`
    margin-top: 1rem;
    font-size: 1.25 rem;
    font-weight: bold;
`

export class AddColumnForm extends React.Component {
    state = { 
        successMessage:""
    }

    onSubmit(values) {
        this.props.dispatch(addColumn(values));
        this.setState(
            {successMessage:(
                <SuccessMessage>
                    Success! A new staff member has been added to the list.
                </SuccessMessage>
            )})
        this.props.dispatch(updateServerBoard());
        this.props.dispatch(reset('addColumnForm'))
    }

    clearSuccessMessage=()=>{
        this.setState(
            {successMessage:""})
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    name="newColumn"
                    type="textarea"
                    component={Input}
                    label="Add a new staff member"
                    onFocus={this.clearSuccessMessage}
                />
                <Button 
                    type="reset" 
                    disabled={this.props.submitting} 
                    onClick={this.props.reset}> 
                        Clear 
                </Button>              
                <Button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </Button>
                {this.state.successMessage}
            </form>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.firstmate.tasks,
    columns: state.firstmate.columns,
    columnOrder: state.firstmate.columnOrder
  });
  
const formConnect = reduxForm({
    form: 'addColumnForm',
})(AddColumnForm);

export default connect(mapStateToProps)(formConnect);
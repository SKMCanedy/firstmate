//Content for the Sign up section

import React from 'react';
import {reduxForm, Field, SubmissionError, reset} from 'redux-form';
import axios from "axios";
import styled from "styled-components";

import Input from './form-input';
import { required, nonEmpty } from './form-validators';
import ContentContainer from "./content-container";
import { API_USER_URL } from "../../config";

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

const ErrorMessage = styled.div`
    margin-top: 1rem;
    font-size: 1.25 rem;
    font-weight: bold;
    color: #e7cd7e;
`

export class NewUser extends React.Component {
    onSubmit(values) {
        return axios.post(API_USER_URL, values)
            .then((res) => {
                this.props.dispatch(reset('newUser'))
            })
            .catch(err => {
                console.log(err.response)
                return Promise.reject(
                    new SubmissionError({
                        _error: err.response.data.message
                    })
                );
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <SuccessMessage>
                    Success! Please login.
                </SuccessMessage>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <ErrorMessage>{this.props.error}</ErrorMessage>
            );
        }

        return (
            <ContentContainer>
                <h2> Sign Up </h2>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <Field
                        name="firstName"
                        type="text"
                        component={Input}
                        label="First Name:"
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        name="lastName"
                        type="text"
                        component={Input}
                        label="Last Name: "
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        name="username"
                        type="text"
                        component={Input}
                        label="Username:  "
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        name="password"
                        type="password"
                        component={Input}
                        label="Password:  "
                        validate={[required, nonEmpty]}
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
                    {successMessage}
                    {errorMessage}
                </form>
            </ContentContainer>
        );
    }
}

export default reduxForm({
    form: 'newUser',
})(NewUser);
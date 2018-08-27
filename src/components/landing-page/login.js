import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import styled from "styled-components";

import axios from "axios";

import Input from './form-input';
import { required, nonEmpty } from './form-validators';
import ContentContainer from "./content-container";
import { API_AUTH_URL, BOARD_PAGE } from "../../config";

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
const ErrorMessage = styled.div`
    margin: 1rem auto;
    font-size: 1.25 rem;
    font-weight: 900;
    color: orange;
    background-color: #2b3e55;
    border-radius: 10px;
    width: 40%;
    padding: .25rem;
`

export class Login extends React.Component {
    onSubmit(values) {
        const loginValues = {
            "username": values.loginUsername,
            "password": values.loginPassword
        }
        return axios.post(API_AUTH_URL, loginValues)
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", res.data.authToken);
            })
            .catch(err => {
                console.log(err.response)
                return Promise.reject(
                    new SubmissionError({
                        _error: "Invalid information. Please try again"
                    })
                );
            });
    }

    render() {

        if (this.props.submitSucceeded) {
            console.log("Successful login")
			window.location.replace(BOARD_PAGE);
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <ErrorMessage>{this.props.error}</ErrorMessage>
            );
        }

        return (
            <ContentContainer>
                <h1> Firstmate </h1>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <Field
                        name="loginUsername"
                        type="text"
                        component={Input}
                        label="Username"
                        validate={[required, nonEmpty]}
                    />
                    <Field
                        name="loginPassword"
                        type="password"
                        component={Input}
                        label="Password"
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
                    {errorMessage}
                </form>
            </ContentContainer>
        );
    }
}

export default reduxForm({
    form: 'login',
})(Login);
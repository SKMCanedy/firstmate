import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import axios from "axios";

import Input from '../general/input';
import { required, nonEmpty } from '../../form-validators';

export class Login extends React.Component {
    onSubmit(values) {
        const loginValues = {
            "username": values.loginUsername,
            "password": values.loginPassword
        }
        return axios.post("http://localhost:8080/api/auth/login", loginValues)
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
			window.location.replace("http://localhost:3000/board");
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {/* {successMessage} */}
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
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                {errorMessage}
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
})(Login);
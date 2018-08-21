import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import axios from "axios";

import Input from '../general/input';
import { required, nonEmpty } from '../../form-validators';

export class NewUser extends React.Component {
    onSubmit(values) {
        return axios.post("http://localhost:8080/api/users", values)
            .then((res) => {
                console.log(res)
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
                <div className="message message-success">
                    Success! Please login above.
                </div>
            );
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
                {successMessage}
                {errorMessage}
                <Field
                    name="firstName"
                    type="text"
                    component={Input}
                    label="First Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="lastName"
                    type="text"
                    component={Input}
                    label="Last Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="username"
                    type="text"
                    component={Input}
                    label="Username"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="password"
                    type="password"
                    component={Input}
                    label="Password"
                    validate={[required, nonEmpty]}
                />
                <button 
                    type="reset" 
                    disabled={this.props.submitting} 
                    onClick={this.props.reset}> 
                        Clear 
                </button>                
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'newUser',
})(NewUser);
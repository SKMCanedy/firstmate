import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';

import Input from '../general/input';
import { required, nonEmpty } from '../../form-validators';
import { addColumn } from "../../actions";

export class AddColumnForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(addColumn(values));
        this.props.dispatch(reset('addColumnForm'))
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div>
                    Success! New Staff Member has been added.
                </div>
            )}
        
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    name="newColumn"
                    type="text"
                    component={Input}
                    label="New Staff Member"
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
                {successMessage}
            </form>
        );
    }
}

export default reduxForm({
    form: 'addColumnForm',
})(AddColumnForm);
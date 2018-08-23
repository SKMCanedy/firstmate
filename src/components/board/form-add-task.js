import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';

import Input from '../general/input';
import { required, nonEmpty } from '../../form-validators';
import { addTask } from "../../actions";

export class AddTaskForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(addTask(values));
        this.props.dispatch(reset('addTaskForm'))
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div>
                    Success! New process added.
                </div>
            )}
        
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>

                <Field
                    name="newTask"
                    type="text"
                    component={Input}
                    label="New Process"
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
    form: 'addTaskForm',
})(AddTaskForm);
import React from 'react';
import {reduxForm, Field} from 'redux-form';

import Input from '../general/input';
import { required, nonEmpty } from '../../form-validators';
import { addTask } from "../../actions";

export class AddTaskForm extends React.Component {
    onSubmit(values) {
        //call an action with the values; reducer will add the task to tasks and processbank - {newTask: "this is my new task"}
        //clear submit field
        //success message
        this.props.dispatch(addTask(values))
        console.log(values)
    }

    render() {

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
                {/* {successMessage} */}
            </form>
        );
    }
}

export default reduxForm({
    form: 'addTaskForm',
})(AddTaskForm);
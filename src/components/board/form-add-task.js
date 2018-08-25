import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';

import Input from '../general/input';
import { required, nonEmpty } from '../../form-validators';
import { addTask, updateServerBoard } from "../../actions";
import { connect } from 'react-redux';

export class AddTaskForm extends React.Component {
    state = { 
        successMessage:""
    }

    onSubmit(values) {
        this.props.dispatch(addTask(values))
        this.setState(
            {successMessage:(
                <div>
                    Success! New process added.
                </div>
            )})
        this.props.dispatch(updateServerBoard());
        this.props.dispatch(reset('addTaskForm'))
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
                    name="newTask"
                    type="text"
                    component={Input}
                    label="New Process"
                    validate={[required, nonEmpty]}
                    onFocus={this.clearSuccessMessage}
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
    form: 'addTaskForm',
})(AddTaskForm);

  export default connect(mapStateToProps)(formConnect);
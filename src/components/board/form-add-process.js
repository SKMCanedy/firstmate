import React from "react";
import { reduxForm, Field } from "redux-form";

const validate = values => {
    const errors = {}
    if (!values.processName){
        errors.processName = "Required"
    }
    return errors;
}

const showResults = ()=>{
    console.log("Add Process Form submitted");
}

const renderInput = ({ input, meta, label, type }) =>{
    return(
        <div>
            <label>{label}</label>
            <input { ... input} placeholder={label} type={type}/>
            {meta.error && 
                meta.touched && 
                !meta.active && 
                <span>{meta.error}</span>}
        </div>
    )
}

function FormAddProcess(props){
    return(
        <form onSubmit={props.handleSubmit(showResults)}>
            <Field 
                name="processName" 
                label="Process name" 
                type="text" 
                component={renderInput}
            />
            <button 
                type="reset" 
                disabled={props.submitting} 
                onClick={props.reset}> 
                    Clear 
            </button>
            <button 
                type="submit" 
                disabled={props.pristine || props.submitting}> 
                    Submit 
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'addStaff',
    validate
})(FormAddProcess);
import React from "react";
import { reduxForm, Field } from "redux-form";

const validate = values => {
    const errors = {}
    if (!values.staffName){
        errors.staffName = "Required"
    }
    return errors;
}

const showResults = ()=>{
    console.log("Add Staff Form submitted");
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

function FormAddStaff(props){
    return(
        <form onSubmit={props.handleSubmit(showResults)}>
            <Field 
                name="staffName" 
                label="Staff member's name" 
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
})(FormAddStaff);
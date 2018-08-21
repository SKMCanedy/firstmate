// import React from "react";
// // import { connect } from "react-redux";
// import { reduxForm, Field } from "redux-form";
 

// import FormMessage from "./form-message"
// import { newUserSubmit } from "../../actions";

// export class NewUser extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             submitSuccess:""
//         }
//     }

//     renderInput({ input, meta, label, type }) {
//         return(
//             <div>
//                 <label>{label}</label>
//                 <input { ... input} placeholder={label} type={type}/>
//                 {meta.error && 
//                     meta.touched && 
//                     !meta.active && 
//                     <span>{meta.error}</span>}
//             </div>
//         )
//     }

//     //Form Submission

//     submitOutcome(response) {
//         if (response.status === 201){
//             //success message
//             this.setState({
//                 submitSuccess: "Success! Please log in at the top of the page to continue"
//             })

//             this.successMessage="Success! Please log in at the top of the page to continue"

//         }
//         if (response.status === 400){
//             //error message
//             this.setState({
//                 submitSuccess: response.message
//             })

//             this.errorMessage= response.message
//         }
//     }

//     submitSignup(values) {
//         this.props.dispatch(newUserSubmit(values))
//             .then(response => this.submitOutcome(response))
//             .catch(error =>  this.submitOutcome(error));
//     }

//     render(){

//         let successMessage = ""
//         let errorMessage = ""

//         console.log("state submitsuccess is " + this.state.submitSuccess)
//         console.log("successMessage is " + this.successMessage)
//         console.log("errorMessage is this " + this.errorMessage)
//         return(
//             <form onSubmit={this.props.handleSubmit(values => this.submitSignup(values))}>
//                 <Field 
//                     name="firstName" 
//                     label="First Name" 
//                     type="text" 
//                     component={this.renderInput}
//                 />
//                 <Field 
//                     name="lastName" 
//                     label="Last Name" 
//                     type="text" 
//                     component={this.renderInput}
//                 />
//                 <Field 
//                     name="username" 
//                     label="Username" 
//                     type="text" 
//                     component={this.renderInput}
//                 />
//                 <Field 
//                     name="password" 
//                     label="Password" 
//                     type="password" 
//                     component={this.renderInput}
//                 />
//                 <Field 
//                     name="confirmPassword" 
//                     label="Confirm Password" 
//                     type="password" 
//                     component={this.renderInput}
//                 />
//                 <button 
//                     type="reset" 
//                     disabled={this.props.submitting} 
//                     onClick={this.props.reset}> 
//                         Clear 
//                 </button>
//                 <button 
//                     type="submit" 
//                     disabled={this.props.pristine || this.props.submitting}> 
//                         Submit 
//                 </button>
//                 <FormMessage message={this.state.submitSuccess}></FormMessage>
//                 <div>{this.errorMessage}</div>
//                 <div>{this.successMessage}</div>
//             </form>
//         )}
// }

// // function mapStateToProps(state) {
// //     return {

// //     }
// // }

// //FrontEnd form validation
// const validate = values => {
 
//     const errors = {};

//     if (!values.firstName){
//         errors.firstName = "Required"
//     }
//     if (!values.lastName){
//         errors.lastName = "Required"
//     }
//     if (!values.username){
//         errors.username = "Required"
//     }
//     if (!values.password){
//         errors.password = "Required"
//     }
//     // if (values.password.length < 7){
//     //     errors.password = "Must be at least 7 characters"
//     // }
//     if (!values.confirmPassword){
//         errors.confirmPassword = "Required"
//     }
//     if(values.password !== values.confirmPassword){
//         errors.confirmPassword = "Passwords must match"
//     }
//     return errors;
// }


// NewUser = reduxForm({
//     form: 'NewUser',
//     validate,
//   })(NewUser);

// export default NewUser;
// // export default connect(mapStateToProps)(NewUser)

// // export default reduxForm({
// //     form: 'signupForm',
// //     validate
// // })(NewUser);
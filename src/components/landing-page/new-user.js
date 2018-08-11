import React from "react";

export default function NewUser(props){
    return(
        <div>
            <h2> New User Sign-up</h2>
            <form>
                First Name:<br/>
                <input type="text" name="firstname" /><br/>
                Last Name:<br/>
                <input type="text" name="lastname" /><br/>
                Username:<br/>
                <input type="text" name="username" /><br/>
                Password:<br/>
                <input type="text" name="password" /><br/>
            </form>
        </div>
    )
}
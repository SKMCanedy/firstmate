import React from "react";

export default function Login(props){
    return(
        <div>
            <form>
                Username:
                <input type="text" name="username" /><br/>
                Password:
                <input type="text" name="password" />
            </form>
        </div>
    )
}
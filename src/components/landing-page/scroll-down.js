import React from "react";

import "./scroll-down.css";

export default function ScrollDown(props){
    return(
        <div>
            <div className="scroll-down">
                    <span role="img" aria-labelledby="link to next section"> &#9875; </span>
            </div>
            <div className="scroll-down">
                <span role="img" aria-labelledby="link to next section"> &#xfe40; </span>
            </div>
        </div>
        
    )
}
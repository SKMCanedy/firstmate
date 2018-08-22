import React from "react";

import "./scroll.css";

export default function ScrollDown(props){
    return(
        <div>
            <a href={props.anchorLink}>
                <div className="scroll-down">
                        <span role="img" aria-labelledby="link to next section"> &#9875; </span>
                </div>
                <div className="scroll-down">
                    <span role="img" aria-labelledby="link to next section"> &#xfe40; </span>
                </div>
            </a>
        </div>
        
    )
} 
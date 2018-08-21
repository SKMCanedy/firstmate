import React from "react";

import "./scroll.css";

export default function ScrollUp(props){
    return(
        <div>
            <a href={props.anchorLink}>
                <div className="scroll-down">
                    <span role="img" aria-labelledby="link to next section"> &#xfe3f; </span>
                </div>
            </a>
        </div>
        
    )
} 
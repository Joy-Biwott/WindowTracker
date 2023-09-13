import React from "react";

export default function WindowTracker({innerWidth, isToggle}){
    return(
        <div>
            {isToggle && <h3>The width is: {innerWidth}</h3>}
        </div>
    )
}
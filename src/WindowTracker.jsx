import React, {useState} from "react";

export default function WindowTracker({isToggle}){
    return(
        <div>
            {isToggle && <h3>The width is: {window.innerWidth}</h3>}
        </div>
    )
}
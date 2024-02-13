"use client"
import { useState } from "react";

function Button(){
    const[btnState,setBtnState] = useState(false);
    function handleClick(){
        setBtnState(btnState=>!btnState);
    }
    let toggleClassCheck = btnState ? 'active': '';
    return(
        <div className={`btn${toggleClassCheck}`} onClick={handleClick} ></div>
    )
}

export default Button;
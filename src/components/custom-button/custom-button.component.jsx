import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children})=>{
    return (
        <button>{children}</button>
    )
}

export default CustomButton
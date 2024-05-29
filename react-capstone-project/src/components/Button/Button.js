import React from "react";
import "./Button.css"

const Button = ({ title, onClick, type}) => {
    const handleClick = (e) => {
        if (type !== "submit"){
            e.preventDefault();
        }
        if (onClick) {
            onClick(e);
        }
    };



    return (
        <button
            className="button"
            type={type}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default Button
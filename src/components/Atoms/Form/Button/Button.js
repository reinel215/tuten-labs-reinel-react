import React from 'react';

import "./Button.scss";

const Button = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`button ${className ? className : ""}`}
        >
            {children}
        </button>
    )
}

export default Button

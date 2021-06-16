import React from 'react';

import "./ErrorMessage.scss";

const ErrorMessage = ({ children, className, ...props }) => {
    return (
        <div>
            <label {...props} className={`error-message ${className ? className : ""}`} >
                {children}
            </label>
        </div>

    )
}

export default ErrorMessage

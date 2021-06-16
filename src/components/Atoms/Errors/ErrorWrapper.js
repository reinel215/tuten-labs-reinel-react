import React from 'react'

import "./ErrorWrapper.scss";

const ErrorWrapper = ({ className, children, ...props }) => {
    return (
        <div
            {...props}
            className={`error-wrapper ${className? className : ""}`}
        >
            {children}
        </div>
    )
}

export default ErrorWrapper

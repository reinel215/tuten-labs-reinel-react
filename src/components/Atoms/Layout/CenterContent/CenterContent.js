import React from 'react';

import "./CenterContent.scss";

const CenterContent = ({ children, className, ...props }) => {
    return (
        <div
            className={`center-content ${className ? className : ""}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default CenterContent

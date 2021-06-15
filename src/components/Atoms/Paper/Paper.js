import React from 'react';

import "./Paper.scss"

const Paper = ({children, className, ...props}) => {
    return (
        <div className={`paper ${className ? className : ""}`} {...props} >
            {children}
        </div>
    )
}

export default Paper

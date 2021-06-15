import React from 'react';

import "./InputLabel.scss";

const inputLabel = ({children, ...props}) => {
    return (
       <label className="InputLabel" {...props} > {children} </label>
    )
}

export default inputLabel

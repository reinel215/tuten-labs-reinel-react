import React from 'react';

import "./PaperTitle.scss";

const FormTitle = ({ children ,...props}) => {
    return (
        <h3 {...props} className="paper-title" > {children} </h3>
    )
}

export default FormTitle

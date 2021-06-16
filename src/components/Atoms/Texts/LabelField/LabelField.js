import React from 'react'

import "./LabelField.scss";

const LabelField = ({children , ...props}) => {
    return (
        <span {...props} className="label-field" >
            {children}
        </span>
    )
}

export default LabelField

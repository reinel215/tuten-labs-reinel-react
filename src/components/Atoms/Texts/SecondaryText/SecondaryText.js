import React from 'react';

import "./SecondaryText.scss";

const SecondaryText = ({children, ...props}) => {
    return (
        <span {...props} className="secondary-text" >
            {children}
        </span>
    )
}

export default SecondaryText

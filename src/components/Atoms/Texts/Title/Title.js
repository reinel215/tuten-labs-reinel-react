import React from 'react';

import "./Title.scss";

const Title = ({ children, ...props }) => {
    return (
        <p {...props} className="title" >
            {children}
        </p>

    )
}

export default Title

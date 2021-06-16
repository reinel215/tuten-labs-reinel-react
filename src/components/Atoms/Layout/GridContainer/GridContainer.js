import React from 'react';

import "./GridContainer.scss";

const GridContainer = ({ children, className, column, ...props }) => {
    return (
        <div
            {...props}
            className={
                `grid-container \
                ${className ? className : ""} \
                ${column ? "direction-column" : ""}`
            }
        >
            {children}
        </div>
    )
}

export default GridContainer

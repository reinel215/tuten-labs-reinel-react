import React from 'react';

import "./GridContainer.scss";

const GridContainer = ({ children, className, column, ...props }) => {
    return (
        <div
            className={
                `grid-container \
                ${className ? className : ""} \
                ${column ? "direction-column" : ""}`
            }
            {...props}
        >
            {children}
        </div>
    )
}

export default GridContainer

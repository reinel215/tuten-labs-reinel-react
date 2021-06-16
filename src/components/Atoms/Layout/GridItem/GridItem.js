import React from 'react';

import "./GridItem.scss";

const GridItem = ({ children, className = "", col = "", ...props }) => {


    const getCol = () => {

        switch (col) {
            case 12:
                return "col-12";

            case 8:
                return "col-8"
                
            case 6:
                return "col-6";

            case 4:
                return "col-4";
                
            case 3:
                return "col-3";
                

            default:
                return "";
        }

    }

    return (
        <div
            {...props}
            className={
                `grid-item \
                ${className ? className : ""} \
                ${getCol()}`
            }
        >
            {children}
        </div>
    )
}

export default GridItem

import React from 'react';

import "./InputText.scss";

const InputText = React.forwardRef(({ ...props }, ref) => {

    return (
        <div className="text-input-wrapper">
            <input
                {...props}
                type="text"
                className="input-text"
            />

            <span className="border" ></span>
        </div>
    )

})



export default InputText;
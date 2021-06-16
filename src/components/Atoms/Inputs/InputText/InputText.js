import React from 'react';

import "./InputText.scss";

const InputText = React.forwardRef(({ ...props }, ref) => {

    return (

        <input
            {...props}
            type="text"
            className="input-text"
        />

    )

})



export default InputText;
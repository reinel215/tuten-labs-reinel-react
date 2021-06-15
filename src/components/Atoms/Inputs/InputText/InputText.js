import React from 'react';

import "./InputText.scss";

const InputText = ({...props }) => {
    return (

        <input
            {...props}
            type="text"
            className="input-text"
        />

    )
}


export default InputText;
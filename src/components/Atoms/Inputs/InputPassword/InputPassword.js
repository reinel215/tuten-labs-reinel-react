import React from 'react';

import "./InputPassword.scss"

const InputPassword = ({...props}) => {
    return (
        <input
            {...props}
            type="password"
            className="input-password"
        />
    )
}

export default InputPassword

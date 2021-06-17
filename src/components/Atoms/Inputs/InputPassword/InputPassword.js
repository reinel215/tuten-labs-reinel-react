import React from 'react';

import "./InputPassword.scss"

const InputPassword = ({ ...props }) => {
    return (
        <div className="password-input-wrapper" >
            <input
                {...props}
                type="password"
                className="input-password"
            />
            <span className="border-password" ></span>
        </div>
    )
}

export default InputPassword

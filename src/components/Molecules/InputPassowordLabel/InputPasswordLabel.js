import React from 'react'
import InputLabel from '../../Atoms/Texts/InputLabel/inputLabel';
import InputPassword from '../../Atoms/Inputs/InputPassword/InputPassword';

const InputPasswordLabel = ({label, ...props}) => {

    return (
        <div style={{ textAlign: "left" }} >

            <InputLabel>{label}</InputLabel>
            <InputPassword {...props} />

        </div>
    )
}

export default InputPasswordLabel

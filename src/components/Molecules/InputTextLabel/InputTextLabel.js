import React from 'react';
import InputLabel from '../../Atoms/Texts/InputLabel/inputLabel';
import InputText from '../../Atoms/Inputs/InputText/InputText';


const InputTextLabel = React.forwardRef(({ label, ...props }, ref) => {
    return (
        <div style={{ textAlign: "left" }} >

            <InputLabel>{label}</InputLabel>
            <InputText {...props} />

        </div>
    )
})


export default InputTextLabel

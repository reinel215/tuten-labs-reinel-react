import React from 'react'

const FormWrapper = ({children, onSubmit ,...props}) => {



    return (
        <form {...props} onSubmit={onSubmit} >
            {children}
        </form>
    )
}

export default FormWrapper

import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import validationRegister from '../../utils/validationRegister';
import * as userActions from '../../store/user/actions';


//molecules
import InputTextLabel from '../Molecules/InputTextLabel/InputTextLabel';
import InputPasswordLabel from '../Molecules/InputPassowordLabel/InputPasswordLabel';

const Login = () => {

    const { register, handleSubmit, formState } = useForm()
    const dispatch = useDispatch();

    console.log(formState.errors);

    const login = (data) => {
        console.log(data);
        dispatch(userActions.login(data))
    }


    return (
        <div style={{ display: 'flex', width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} >
            <div style={{ borderRadius: 20, boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.2)", padding: 20, textAlign: "center", backgroundColor:"#ffffff" }} >

                <h3>Inicio de sesion</h3>
                <form onSubmit={handleSubmit(login)} >

                    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 20 }} >

                        <InputTextLabel
                            {...register("email", validationRegister({ required: true }))}
                            label="Email"
                            placeholder="example@email.com"
                        />

                        <InputPasswordLabel
                            {...register("password", validationRegister({ required: true }))}
                            label="Password"
                            placeholder="********"
                        />

                        <button type="submit" style={{ padding: 10, fontWeight: "bold" }} >Signin</button>

                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login

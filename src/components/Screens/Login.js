import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import validationRegister from '../../utils/validationRegister';
import * as userActions from '../../store/user/actions';


//molecules
import InputTextLabel from '../Molecules/InputTextLabel/InputTextLabel';
import InputPasswordLabel from '../Molecules/InputPassowordLabel/InputPasswordLabel';
import FormWrapper from '../Atoms/Form/FormWrapper/FormWrapper';
import CenterContent from '../Atoms/Layout/CenterContent/CenterContent';
import Paper from '../Atoms/Paper/Paper';
import PaperTitle from '../Atoms/Paper/PaperTitle/PaperTitle';
import GridContainer from '../Atoms/Layout/GridContainer/GridContainer';
import Button from '../Atoms/Form/Button/Button';

const Login = () => {

    const { register, handleSubmit, formState } = useForm()
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    console.log(formState.errors);

    const login = (data) => {
        dispatch(userActions.login(data))
    }


    return (
        <CenterContent>
            <Paper style={{width : "60%" , minWidth : 300}} >

                <PaperTitle>Inicio de sesion</PaperTitle>

                <FormWrapper onSubmit={handleSubmit(login)} >

                    <GridContainer column style={{ gap: 20, padding: 20 }} >
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

                        <Button type="submit" disabled={user.loading} >
                            { user.loading ? "Iniciando..." : "Signin"}
                        </Button>

                    </GridContainer>

                </FormWrapper>

            </Paper>
        </CenterContent>
    )
}

export default Login

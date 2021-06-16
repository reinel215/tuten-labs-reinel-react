import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import validationRegister from '../../../utils/validationRegister';
import * as userActions from '../../../store/user/actions';



//molecules
import InputTextLabel from '../../Molecules/InputTextLabel/InputTextLabel';
import InputPasswordLabel from '../../Molecules/InputPassowordLabel/InputPasswordLabel';

//atoms
import FormWrapper from '../../Atoms/Form/FormWrapper/FormWrapper';
import CenterContent from '../../Atoms/Layout/CenterContent/CenterContent';
import Paper from '../../Atoms/Paper/Paper';
import PaperTitle from '../../Atoms/Paper/PaperTitle/PaperTitle';
import GridContainer from '../../Atoms/Layout/GridContainer/GridContainer';
import Button from '../../Atoms/Form/Button/Button';
import ErrorMessage from '../../Atoms/Texts/ErrorMessage/ErrorMessage';
import ErrorWrapper from '../../Atoms/Errors/ErrorWrapper';

export const LoginForm = () => {

    const { register, handleSubmit, formState } = useForm()

    const history = useHistory();


    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    const login = (data) => {
        dispatch(userActions.login(data, () => history.push("/bookings")))
    }


    console.log(user);


    return (
        <CenterContent>
            <Paper style={{ width: "60%", minWidth: 300 }} >

                <PaperTitle>Inicio de sesion</PaperTitle>

                <FormWrapper onSubmit={handleSubmit(login)} >

                    <GridContainer column style={{ gap: 20, padding: 20 }} >
                        <InputTextLabel
                            {...register("email", validationRegister({ required: true, email: true, name: "Email" }))}
                            label="Email"
                            placeholder="example@email.com"
                        />

                        <InputPasswordLabel
                            {...register("password", validationRegister({ required: true, name: "Password" }))}
                            label="Password"
                            placeholder="********"
                        />

                        <Button type="submit" disabled={user.loading} >
                            {user.loading ? "Iniciando..." : "Signin"}
                        </Button>

                    </GridContainer>

                </FormWrapper>

                <GridContainer style={{ justifyContent: "center" }} >

                    {/*this need a refactor later*/}
                    {
                        formState.errors.email || formState.errors.password ?
                            <ErrorWrapper>
                                {
                                    formState.errors.email ?
                                        <ErrorMessage>*{formState.errors.email.message}</ErrorMessage>
                                        :
                                        null
                                }

                                {
                                    formState.errors.password ?
                                        <ErrorMessage>*{formState.errors.password.message}</ErrorMessage>
                                        :
                                        null
                                }
                            </ErrorWrapper>
                            :
                            null

                    }


                </GridContainer>

            </Paper>
        </CenterContent>
    )
}



export default LoginForm;

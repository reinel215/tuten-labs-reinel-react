import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as bookingActions from '../../../store/bookings/actions';
import validationRegister from '../../../utils/validationRegister';

import Paper from '../../Atoms/Paper/Paper';
import PaperTitle from '../../Atoms/Paper/PaperTitle/PaperTitle';
import FormWrapper from '../../Atoms/Form/FormWrapper/FormWrapper';
import GridContainer from '../../Atoms/Layout/GridContainer/GridContainer';
import GridItem from '../../Atoms/Layout/GridItem/GridItem';
import InputText from '../../Atoms/Inputs/InputText/InputText';
import CenterContent from '../../Atoms/Layout/CenterContent/CenterContent';
import Button from '../../Atoms/Form/Button/Button';
import ErrorWrapper from '../../Atoms/Errors/ErrorWrapper';
import ErrorMessage from '../../Atoms/Texts/ErrorMessage/ErrorMessage';

const BookingSearch = () => {

    const { register, handleSubmit, formState } = useForm();

    const dispatch = useDispatch();
    const booking = useSelector(state => state.booking);
    const user = useSelector(state => state.user);

    const searchBookings = (data) => {
        dispatch(bookingActions.getBookings({ email: data.email, adminEmail: user.user.email, current: true }));
    }


    console.log(formState.errors);

    return (
        <Paper style={{ width: "60%", minWidth: 300 }} >
            <PaperTitle>Booking</PaperTitle>


            <FormWrapper onSubmit={handleSubmit(searchBookings)} >

                <GridContainer style={{ padding: 10 }} >

                    <GridItem col={8} style={{ padding: 4 }}>
                        <InputText
                            {...register("email", validationRegister({ required: true, email: true, name: "Email" }))}
                            placeholder="example@email.com"
                        />
                    </GridItem>

                    <GridItem col={4} style={{ padding: 4 }} >
                        <CenterContent>
                            <Button type="submit" disabled={booking.loading} >
                                {booking.loading ? "searching..." : "search"}
                            </Button>
                        </CenterContent>
                    </GridItem>

                </GridContainer>

            </FormWrapper>

            <GridContainer style={{ justifyContent: "center" }} >
                {
                    formState.errors.email || booking.error ?
                        <ErrorWrapper>
                            {
                                formState.errors.email ?
                                    <ErrorMessage>{formState.errors.email.message}</ErrorMessage>
                                    :
                                    null
                            }

                            {
                                booking.error ?
                                    <ErrorMessage>*Usuario o contraseña incorrectos</ErrorMessage>
                                    :
                                    null
                            }
                        </ErrorWrapper>
                        :
                        null

                }
            </GridContainer>

        </Paper>
    )
}

export default BookingSearch

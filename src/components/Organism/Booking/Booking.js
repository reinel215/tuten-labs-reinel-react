import React from 'react';
import Paper from '../../Atoms/Paper/Paper';
import LabelField from '../../Atoms/Texts/LabelField/LabelField';

import SecondaryText from '../../Atoms/Texts/SecondaryText/SecondaryText';
import Title from '../../Atoms/Texts/Title/Title';

export const Booking = ({ booking, ...props }) => {

    const date = new Date(booking.bookingTime);

    return (
        <Paper {...props} >

            <SecondaryText>BookingId</SecondaryText>
            <Title>{booking.bookingId}</Title>

            <LabelField>Cliente:</LabelField>
            <p>{ `${booking.tutenUserClient.firstName} ${booking.tutenUserClient.lastName}`}</p>

            <LabelField>Fecha De Creación:</LabelField>
            <p>{date.toLocaleString()}</p>

            <LabelField>Dirección:</LabelField>
            <p>{booking.locationId.streetAddress}</p>

            <LabelField>Precio:</LabelField>
            <p>{booking.bookingPrice} $ </p>

        </Paper>
    )
}



export default Booking
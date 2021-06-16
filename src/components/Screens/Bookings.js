import React from 'react';

import { useSelector } from 'react-redux';


import CenterContent from '../Atoms/Layout/CenterContent/CenterContent';
import GridContainer from '../Atoms/Layout/GridContainer/GridContainer';
import GridItem from '../Atoms/Layout/GridItem/GridItem';

import BookingItem from '../Organism/Booking/Booking';

import BookingSearch from '../Organism/BookingSearch/BookingSearch';

const Bookings = () => {
    const booking = useSelector(state => state.booking);


    return (

        <GridContainer column style={{ padding: 20, gap: 20 }} >

            <CenterContent>
                <BookingSearch />
            </CenterContent>

            <GridContainer>
                {
                    booking.bookings?.map((booking, index) =>
                        <GridItem col={4} key={index} style={{padding:12}} >
                            <BookingItem booking={booking}  />
                        </GridItem>
                    )
                }
            </GridContainer>

        </GridContainer>


    )
}

export default Bookings

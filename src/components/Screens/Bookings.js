import React, { useCallback, useState } from 'react';

import { useSelector } from 'react-redux';


import CenterContent from '../Atoms/Layout/CenterContent/CenterContent';
import GridContainer from '../Atoms/Layout/GridContainer/GridContainer';
import GridItem from '../Atoms/Layout/GridItem/GridItem';

import BookingItem from '../Organism/Booking/Booking';

import BookingSearch from '../Organism/BookingSearch/BookingSearch';
import Filters from '../Organism/Filters/Filters';

const Bookings = () => {

    const booking = useSelector(state => state.booking);

    const [filteredBookings, setFilteredBookings] = useState([]);


    const onFilterChange = useCallback((filters) => {

        let filteredBookings = booking.bookings;

        if (filters.idMoreThan) {
            filteredBookings = filteredBookings.filter(booking => Number(filters.idMoreThan) < booking.bookingId)
        }

        if (filters.idLessThan) {
            filteredBookings = filteredBookings.filter(booking => Number(filters.idLessThan) > booking.bookingId)
        }

        if (filters.priceMoreThan) {
            filteredBookings = filteredBookings.filter(booking => Number(filters.priceMoreThan) < booking.bookingPrice)
        }

        if (filters.priceLessThan) {
            filteredBookings = filteredBookings.filter(booking => Number(filters.priceLessThan) > booking.bookingPrice)
        }


        setFilteredBookings(filteredBookings);

    }, [booking.bookings]);



    return (

        <GridContainer column style={{ padding: 20, gap: 20 }} >

            <CenterContent>
                <BookingSearch />
            </CenterContent>

            {
                booking.bookings ?
                    <Filters onFilterChange={onFilterChange} />
                    :
                    null
            }


            <GridContainer>
                {
                    filteredBookings?.map((booking, index) =>
                        <GridItem col={4} key={index} style={{ padding: 12 }} >
                            <BookingItem booking={booking} />
                        </GridItem>
                    )
                }
            </GridContainer>

        </GridContainer>


    )
}

export default Bookings

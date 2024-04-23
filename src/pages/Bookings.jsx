import styled from "styled-components";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, getBooking, getError, getStatus } from "../features/bookings/bookingsSlice";
import { useEffect, useState } from "react";
import { fecthAllBookingsThunk, fecthBookingThunk } from "../features/bookings/bookingsThunk";


export const Bookings = (props) => {
    const dispatch = useDispatch();
    const allBookings = useSelector(getAllBookings);
    const booking = useSelector(getBooking);
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    useEffect(() => {
        if(status === 'pending') {
            console.log('pending');
        } else if(status === 'rejected') {
            console.log(`${status} - ${error}`);
        } else if(status === 'fulfilled') {
            console.log('fulfilled');
        } else if(status === 'idle') {
            dispatch(fecthAllBookingsThunk());
            /* dispatch(fecthBookingThunk('20')); */
        }

    }, [dispatch, allBookings, booking])
    
    console.log(allBookings)
    console.log(booking)
    console.log(status)
    
    const cols = [
        {property: 'Guest', display: allBookings => allBookings.Guest},
        {property: 'Reservation ID', display: allBookings => allBookings.Reservation_ID},
        {property: 'Order Date', display: allBookings => allBookings.Order_Date},
        {property: 'Check In', display: allBookings => allBookings.Check_In},
        {property: 'Check Out', display: allBookings => allBookings.Check_Out},
        {property: 'Special Request', display: () => (<button>view notes</button>)},
        {property: 'Room Type', display: allBookings => allBookings.Room_Type},
        {property: 'Room Number', display: allBookings => allBookings.Room_Number},
        {property: 'Status', display: allBookings => allBookings.Status}
    ];  

    return(
        <>
            <Header title={'Bookings'} />
            <SideNav />
            <Data_Table cols={cols} data={allBookings}/>
            
        </>
    );
}
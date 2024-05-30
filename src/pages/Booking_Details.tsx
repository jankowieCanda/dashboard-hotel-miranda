import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getBooking } from "../features/bookings/bookingsSlice";
import { fecthBookingThunk } from "../features/bookings/bookingsThunk";
import { Booking } from "../interfaces/BookingsInterfaces";
import { useParams } from "react-router";


export const Booking_Details = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const booking: Booking = useAppSelector(getBooking);
    const [isLoading, setIsLoading] = useState(true);

    const initialFetch = async () => {
        if(!id) {
            return
        }
       await dispatch(fecthBookingThunk(id)).unwrap();
       setIsLoading(false);
    }
    useEffect(() => {
        initialFetch();
    }, []);

    if(isLoading) {
        return <p>loading...</p>
    }

    return(<p>{booking.Guest}</p>);
}
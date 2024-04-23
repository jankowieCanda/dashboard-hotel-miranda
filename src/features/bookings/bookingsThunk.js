import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { bookings_data } from '../../data';

export const fecthAllBookingsThunk = createAsyncThunk('bookings/fetchAllBookings', async () => {
    
    const data = await delayFunction(bookings_data);
    return data;
    
});
export const fecthBookingThunk = createAsyncThunk('bookings/fetchBooking', async (id) => {
    
    const data = await delayFunction(bookings_data.filter(booking => booking.Reservation_ID == id));
    return data;
    
});
import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { bookings_data } from '../../data';

export const fecthAllBookingsThunk = createAsyncThunk('bookings/fetchAllBookings', async () => {
    
    const data = await delayFunction(bookings_data);
    return data;
    
});
export const fecthBookingThunk = createAsyncThunk('bookings/fetchBooking', async (id) => {
    
    const data = await delayFunction(bookings_data.find(booking => booking.Reservation_ID === id));
    return data;
    
});
export const deleteBookingThunk = createAsyncThunk('bookings/deleteBooking', async (id) => {
    
    const data = await delayFunction();
    return id;
    
});
export const updateBookingThunk = createAsyncThunk('bookings/updateBooking', async (obj) => {
    
    const data = await delayFunction();
    return obj;
    
});
export const createBookingThunk = createAsyncThunk('bookings/createBooking', async (obj) => {
    
    const data = await delayFunction();
    return obj;
    
});
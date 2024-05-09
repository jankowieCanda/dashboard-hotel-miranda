import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../../interfaces/BookingsInterfaces";
import { delayFunction } from '../../delay_function';
import { bookings_data } from '../../data';

export const fecthAllBookingsThunk = createAsyncThunk('bookings/fetchAllBookings', async () => {
    
    const data = await delayFunction(bookings_data);
    return data;
    
});
export const fecthBookingThunk = createAsyncThunk('bookings/fetchBooking', async (id: number) => {
    
    const data = await delayFunction(bookings_data.filter((booking: Booking) => booking.Reservation_ID === id));
    return data;
    
});
export const deleteBookingThunk = createAsyncThunk('bookings/deleteBooking', async (id: number) => {
    
    const data = await delayFunction();
    return id;
    
});
export const updateBookingThunk = createAsyncThunk('bookings/updateBooking', async (obj: Booking) => {
    
    const data = await delayFunction();
    return obj;
    
});
export const createBookingThunk = createAsyncThunk('bookings/createBooking', async (obj: Booking) => {
    
    const data = await delayFunction();
    return obj;
    
});
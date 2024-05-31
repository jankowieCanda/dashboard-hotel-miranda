import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../../interfaces/BookingsInterfaces";
import { fetchAPI } from "../../utils/fetchAPI";

export const fecthAllBookingsThunk = createAsyncThunk('bookings/fetchAllBookings', async () => {
    
    const bookings = await fetchAPI('bookings');
    return bookings.data;
    
});
export const fecthBookingThunk = createAsyncThunk('bookings/fetchBooking', async (id: string) => {
    
    const booking = await fetchAPI(`bookings/${id}`);
    return booking.data;
    
});
export const deleteBookingThunk = createAsyncThunk('bookings/deleteBooking', async (id: string) => {
    
    const booking = await fetchAPI(`bookings/${id}`);
    return booking.data._id;
    
});
export const updateBookingThunk = createAsyncThunk('bookings/updateBooking', async (obj: Booking) => {
    
    const booking = await fetchAPI(`bookings/${obj._id}`, 'PATCH', obj);
    return booking.data;
    
});
export const createBookingThunk = createAsyncThunk('bookings/createBooking', async (obj: Booking) => {
    
    const booking = await fetchAPI('bookings', 'POST', obj);
    return booking.data;
    
});
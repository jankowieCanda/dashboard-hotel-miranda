import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../../interfaces/BookingsInterfaces";
import { FetchAPI } from "../../app/hooks";

export const fecthAllBookingsThunk = createAsyncThunk('bookings/fetchAllBookings', async () => {
    
    const bookings = await FetchAPI('bookings');
    return bookings.data;
    
});
export const fecthBookingThunk = createAsyncThunk('bookings/fetchBooking', async (id: string) => {
    
    const booking = await FetchAPI(`bookings/${id}`);
    return booking.data;
    
});
export const deleteBookingThunk = createAsyncThunk('bookings/deleteBooking', async (id: string) => {
    
    const booking = await FetchAPI(`bookings/${id}`);
    return booking.data._id;
    
});
export const updateBookingThunk = createAsyncThunk('bookings/updateBooking', async (obj: Booking) => {
    
    const booking = await FetchAPI(`bookings/${obj._id}`, 'PATCH', obj);
    return booking.data;
    
});
export const createBookingThunk = createAsyncThunk('bookings/createBooking', async (obj: Booking) => {
    
    const booking = await FetchAPI('bookings', 'POST', obj);
    return booking.data;
    
});
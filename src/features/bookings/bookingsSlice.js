import { createSlice } from '@reduxjs/toolkit';
import { fecthAllBookingsThunk, fecthBookingThunk } from './bookingsThunk';

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        booking: null,
        status: 'idle',
        error: null
    },
    /* reducers: {
       
    }, */
    extraReducers: (builder) => {
        builder.addCase(fecthAllBookingsThunk.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(fecthAllBookingsThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }).addCase(fecthAllBookingsThunk.fulfilled, (state, action) => {
            state.bookings = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthBookingThunk.fulfilled, (state, action) => {
            state.booking = action.payload;
            state.status = 'fulfilled';
        })
    }
});

/* export const bookingsReducer = bookingsSlice.reducer; */
export const getAllBookings = state => state.bookings.bookings;
export const getBooking = state => state.bookings.booking;
export const getStatus = state => state.bookings.status;
export const getError = state => state.bookings.error;
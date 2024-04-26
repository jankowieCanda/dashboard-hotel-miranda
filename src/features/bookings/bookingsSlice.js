import { createSlice } from '@reduxjs/toolkit';
import { updateBookingThunk, deleteBookingThunk, fecthAllBookingsThunk, fecthBookingThunk, createBookingThunk } from './bookingsThunk';

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        booking: null,
        status: 'idle',
        error: null
    },
    reducers: {},
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
        }).addCase(deleteBookingThunk.fulfilled, (state, action) => {
            state.bookings = state.bookings.filter(booking => booking.Reservation_ID !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateBookingThunk.fulfilled, (state, action) => {
            let index = state.bookings.findIndex(booking => booking.Reservation_ID === action.payload.Reservation_ID)
            state.bookings.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        }).addCase(createBookingThunk.fulfilled, (state, action) => {
            state.bookings = [...state.bookings, action.payload];
            state.status = 'fulfilled';
        })
    }
});

/* export const bookingsReducer = bookingsSlice.reducer; */
export const getAllBookings = state => state.bookings.bookings;
export const getBooking = state => state.bookings.booking;
export const getStatus = state => state.bookings.status;
export const getError = state => state.bookings.error;
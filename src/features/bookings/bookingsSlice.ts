import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Booking, BookingsState } from '../../interfaces/bookinsInterfaces';
import { updateBookingThunk, deleteBookingThunk, fecthAllBookingsThunk, fecthBookingThunk, createBookingThunk } from './bookingsThunk';
import { Type } from 'typescript';

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: <BookingsState> {
        bookings: [],
        booking: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fecthAllBookingsThunk.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(fecthAllBookingsThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }).addCase(fecthAllBookingsThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.bookings = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthBookingThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.booking = action.payload;
            state.status = 'fulfilled';
        }).addCase(deleteBookingThunk.fulfilled, (state, action: PayloadAction<number>) => {
            state.bookings = state.bookings.filter(booking => booking.Reservation_ID !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
            let index = state.bookings.findIndex(booking => booking.Reservation_ID === action.payload.Reservation_ID)
            state.bookings.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        }).addCase(createBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
            state.bookings = [...state.bookings, action.payload];
            state.status = 'fulfilled';
        })
    }
});

export const getAllBookings = (state: RootState) => state.bookings.bookings;
export const getBooking = (state: RootState) => state.bookings.booking;
export const getStatus = (state: RootState) => state.bookings.status;
export const getError = (state: RootState) => state.bookings.error;
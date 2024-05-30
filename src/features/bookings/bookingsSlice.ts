import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Booking, BookingsState } from '../../interfaces/BookingsInterfaces';
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
            console.log(action.payload)
            state.status = 'fulfilled';
        }).addCase(deleteBookingThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.bookings = state.bookings.filter(booking => booking._id !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateBookingThunk.fulfilled, (state, action: PayloadAction<Booking>) => {
            let index = state.bookings.findIndex(booking => booking._id === action.payload._id)
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
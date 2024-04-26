import { configureStore } from '@reduxjs/toolkit';
import { bookingsSlice } from '../features/bookings/bookingsSlice';
import { roomsSlice } from '../features/rooms/roomsSlice';
import { usersSlice } from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        bookings: bookingsSlice.reducer,
        rooms: roomsSlice.reducer,
        users: usersSlice.reducer,
    },
});
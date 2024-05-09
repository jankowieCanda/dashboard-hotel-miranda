import { Reducer, configureStore } from '@reduxjs/toolkit';
import { bookingsSlice } from '../features/bookings/bookingsSlice';
import { roomsSlice } from '../features/rooms/roomsSlice';
import { usersSlice } from '../features/users/usersSlice';
import { contactSlice } from '../features/contact/contactSlice';

export const store = configureStore({
    reducer: {
        bookings: <Reducer> bookingsSlice.reducer,
        rooms: <Reducer> roomsSlice.reducer,
        users: <Reducer> usersSlice.reducer,
        contact: <Reducer> contactSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
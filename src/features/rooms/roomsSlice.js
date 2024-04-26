import { createSlice } from '@reduxjs/toolkit';
import { fecthAllRoomsThunk, fecthRoomThunk, deleteRoomThunk, updateRoomThunk, createRoomThunk } from './roomsThunk';

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        room: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fecthAllRoomsThunk.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(fecthAllRoomsThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }).addCase(fecthAllRoomsThunk.fulfilled, (state, action) => {
            state.rooms = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthRoomThunk.fulfilled, (state, action) => {
            state.room = action.payload;
            state.status = 'fulfilled';
        }).addCase(deleteRoomThunk.fulfilled, (state, action) => {
            state.rooms = state.rooms.filter(room => room.Room_ID !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateRoomThunk.fulfilled, (state, action) => {
            let index = state.rooms.findIndex(room => room.Room_ID === action.payload.Room_ID)
            state.rooms.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        }).addCase(createRoomThunk.fulfilled, (state, action) => {
            state.rooms = [...state.rooms, action.payload];
            state.status = 'fulfilled';
        })
    }
});

/* export const bookingsReducer = bookingsSlice.reducer; */
export const getAllRooms = state => state.rooms.rooms;
export const getRoom = state => state.rooms.room;
export const getStatus = state => state.rooms.status;
export const getError = state => state.rooms.error;
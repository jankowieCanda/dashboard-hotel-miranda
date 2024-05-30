import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fecthAllRoomsThunk, fecthRoomThunk, deleteRoomThunk, updateRoomThunk, createRoomThunk } from './roomsThunk';
import { Room, RoomsState } from '../../interfaces/RoomsInterfaces';
import { RootState } from '../../app/store';

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: <RoomsState> {
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
        }).addCase(fecthAllRoomsThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.rooms = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthRoomThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.room = action.payload;
            state.status = 'fulfilled';
        }).addCase(deleteRoomThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter(room => room._id !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateRoomThunk.fulfilled, (state, action: PayloadAction<Room>) => {
            let index = state.rooms.findIndex(room => room._id === action.payload._id)
            state.rooms.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        }).addCase(createRoomThunk.fulfilled, (state, action: PayloadAction<Room>) => {
            state.rooms = [...state.rooms, action.payload];
            state.status = 'fulfilled';
        })
    }
});

export const getAllRooms = (state: RootState) => state.rooms.rooms;
export const getRoom = (state: RootState) => state.rooms.room;
export const getStatus = (state: RootState) => state.rooms.status;
export const getError = (state: RootState) => state.rooms.error;
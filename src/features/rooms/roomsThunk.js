import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { rooms_data } from '../../data';

export const fecthAllRoomsThunk = createAsyncThunk('rooms/fetchAllRooms', async () => {
    
    const data = await delayFunction(rooms_data);
    return data;
    
});
export const fecthRoomThunk = createAsyncThunk('rooms/fetchRoom', async (id) => {
    
    const data = await delayFunction(rooms_data.find(room => room.Room_ID === id));
    return data;
    
});
export const deleteRoomThunk = createAsyncThunk('rooms/deleteRoom', async (id) => {
    
    const data = await delayFunction();
    return id;
    
});
export const updateRoomThunk = createAsyncThunk('rooms/updateRoom', async (obj) => {
    
    const data = await delayFunction();
    return obj;
    
});
export const createRoomThunk = createAsyncThunk('rooms/createRoom', async (obj) => {
    
    const data = await delayFunction();
    return obj;
    
});
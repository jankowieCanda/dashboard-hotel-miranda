import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { rooms_data } from '../../data';
import { Room } from "../../interfaces/RoomsInterfaces";

export const fecthAllRoomsThunk = createAsyncThunk('rooms/fetchAllRooms', async () => {
    
    const data = await delayFunction(rooms_data);
    return data;
    
});
export const fecthRoomThunk = createAsyncThunk('rooms/fetchRoom', async (id: number) => {
    
    const data = await delayFunction(rooms_data.filter((room: Room) => room.Room_ID === id));
    return data;
    
});
export const deleteRoomThunk = createAsyncThunk('rooms/deleteRoom', async (id: number) => {
    
    const data = await delayFunction();
    return id;
    
});
export const updateRoomThunk = createAsyncThunk('rooms/updateRoom', async (obj: Room) => {
    
    const data = await delayFunction();
    return obj;
    
});
export const createRoomThunk = createAsyncThunk('rooms/createRoom', async (obj: Room) => {
    
    const data = await delayFunction();
    return obj;
    
});
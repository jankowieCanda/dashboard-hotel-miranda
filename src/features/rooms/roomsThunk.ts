import { createAsyncThunk } from "@reduxjs/toolkit";
import { Room } from "../../interfaces/RoomsInterfaces";
import { fetchAPI } from "../../utils/fetchAPI";

export const fecthAllRoomsThunk = createAsyncThunk('rooms/fetchAllRooms', async () => {
    
    const rooms = await fetchAPI('rooms');
    return rooms.data;
    
});
export const fecthRoomThunk = createAsyncThunk('rooms/fetchRoom', async (id: string) => {
    
    const room = await fetchAPI(`rooms/${id}`);
    return room.data;
    
});
export const deleteRoomThunk = createAsyncThunk('rooms/deleteRoom', async (id: string) => {
    
    const room = await fetchAPI(`rooms/${id}`, 'DELETE');
    return room.data._id;
    
});
export const updateRoomThunk = createAsyncThunk('rooms/updateRoom', async (obj: Room) => {
    
    const room = await fetchAPI(`rooms/${obj._id}`, 'PATCH', obj);
    return room.data._id;
    
});
export const createRoomThunk = createAsyncThunk('rooms/createRoom', async (obj: Room) => {
    
    const room = await fetchAPI(`rooms`, 'POST', obj);
    return room.data;
    
});
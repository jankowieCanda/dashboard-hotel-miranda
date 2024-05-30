import { createAsyncThunk } from "@reduxjs/toolkit";
import { Room } from "../../interfaces/RoomsInterfaces";
import { FetchAPI } from "../../app/hooks";

export const fecthAllRoomsThunk = createAsyncThunk('rooms/fetchAllRooms', async () => {
    
    const rooms = await FetchAPI('rooms');
    return rooms.data;
    
});
export const fecthRoomThunk = createAsyncThunk('rooms/fetchRoom', async (id: string) => {
    
    const room = await FetchAPI(`rooms/${id}`);
    return room.data;
    
});
export const deleteRoomThunk = createAsyncThunk('rooms/deleteRoom', async (id: string) => {
    
    const room = await FetchAPI(`rooms/${id}`, 'DELETE');
    return room.data._id;
    
});
export const updateRoomThunk = createAsyncThunk('rooms/updateRoom', async (obj: Room) => {
    
    const room = await FetchAPI(`rooms/${obj._id}`, 'PATCH', obj);
    return room.data._id;
    
});
export const createRoomThunk = createAsyncThunk('rooms/createRoom', async (obj: Room) => {
    
    const room = await FetchAPI(`rooms`, 'POST', obj);
    return room.data;
    
});
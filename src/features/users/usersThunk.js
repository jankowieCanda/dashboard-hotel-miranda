import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { users_data } from '../../data';

export const fecthAllUsersThunk = createAsyncThunk('users/fetchAllUsers', async () => {
    
    const data = await delayFunction(users_data);
    return data;
    
});
export const fecthUserThunk = createAsyncThunk('users/fetchUser', async (id) => {
    
    const data = await delayFunction(users_data.find(user => user.Employee_ID === id));
    return data;
    
});
export const deleteUserThunk = createAsyncThunk('users/deleteUser', async (id) => {
    
    const data = await delayFunction();
    return id;
    
});
export const updateUserThunk = createAsyncThunk('users/updateUser', async (obj) => {
    
    const data = await delayFunction();
    return obj;
    
});
export const createUserThunk = createAsyncThunk('users/createUser', async (obj) => {
    
    const data = await delayFunction();
    return obj;
    
});
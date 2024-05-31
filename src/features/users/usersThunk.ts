import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../interfaces/UsersInterfaces";
import { fetchAPI } from "../../utils/fetchAPI";

export const fecthAllUsersThunk = createAsyncThunk('users/fetchAllUsers', async () => {
    
    const users = await fetchAPI('users');
    return users.data;
    
});
export const fecthUserThunk = createAsyncThunk('users/fetchUser', async (id: string) => {
    
    const user = await fetchAPI(`users/${id}`);
    return user.data;
    
});
export const deleteUserThunk = createAsyncThunk('users/deleteUser', async (id: string) => {
    
    const user = await fetchAPI(`users/${id}`, 'DELETE');
    return user.data._id;
    
});
export const updateUserThunk = createAsyncThunk('users/updateUser', async (obj: User) => {
    
    const user = await fetchAPI(`users/${obj._id}`, 'PATCH', obj);
    return user.data;
    
});
export const createUserThunk = createAsyncThunk('users/createUser', async (obj: User) => {
    
    const user = await fetchAPI('users', 'POST', obj);
    return user.data;
    
});
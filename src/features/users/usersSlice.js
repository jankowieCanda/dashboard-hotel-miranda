import { createSlice } from '@reduxjs/toolkit';
import { fecthAllUsersThunk, fecthUserThunk, deleteUserThunk, updateUserThunk, createUserThunk } from './usersThunk';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fecthAllUsersThunk.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(fecthAllUsersThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }).addCase(fecthAllUsersThunk.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthUserThunk.fulfilled, (state, action) => {
            state.user = state.users.find(user => user.Employee_ID === action.payload);
            console.log(action.payload)
            state.status = 'fulfilled';
        }).addCase(deleteUserThunk.fulfilled, (state, action) => {
            state.users = state.users.filter(user => user.Employee_ID !== action.payload);
            console.log(action.payload)
            state.status = 'fulfilled';
        }).addCase(updateUserThunk.fulfilled, (state, action) => {
            let data = action.payload;
            let index = state.users.findIndex(user => user.Employee_ID === data.Employee_ID)
            state.users.splice(index, 1, data);
            state.status = 'fulfilled';
        }).addCase(createUserThunk.fulfilled, (state, action) => {
            state.users = [...state.users, action.payload];
            console.log(action.payload)
            state.status = 'fulfilled';
        })
    }
});

/* export const bookingsReducer = bookingsSlice.reducer; */
export const getAllUsers = state => state.users.users;
export const getUser = state => state.users.user;
export const getStatus = state => state.users.status;
export const getError = state => state.users.error;
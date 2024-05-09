import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fecthAllUsersThunk, fecthUserThunk, deleteUserThunk, updateUserThunk, createUserThunk } from './usersThunk';
import { User, UsersState } from '../../interfaces/UsersInterfaces';
import { RootState } from '../../app/store';

export const usersSlice = createSlice({
    name: 'users',
    initialState: <UsersState> {
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
        }).addCase(fecthAllUsersThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.users = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthUserThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            state.status = 'fulfilled';
        }).addCase(deleteUserThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.Employee_ID !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
            let index = state.users.findIndex(user => user.Employee_ID === action.payload.Employee_ID)
            state.users.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        }).addCase(createUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
            state.users = [...state.users, action.payload];
            state.status = 'fulfilled';
        })
    }
});

export const getAllUsers = (state: RootState) => state.users.users;
export const getUser = (state: RootState) => state.users.user;
export const getStatus = (state: RootState) => state.users.status;
export const getError = (state: RootState) => state.users.error;
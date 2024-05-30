import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fecthAllReviewsThunk, fecthReviewThunk, deleteReviewThunk, updateReviewThunk } from './contactThunk';
import { ContactState, Review } from '../../interfaces/ContactInterfaces';
import { RootState } from '../../app/store';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: <ContactState> {
        reviews: [],
        review: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fecthAllReviewsThunk.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(fecthAllReviewsThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        }).addCase(fecthAllReviewsThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.reviews = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthReviewThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.review = action.payload;
            state.status = 'fulfilled';
        }).addCase(deleteReviewThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.reviews = state.reviews.filter(review => review._id !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateReviewThunk.fulfilled, (state, action: PayloadAction<Review>) => {
            let index = state.reviews.findIndex(review => review._id === action.payload._id)
            state.reviews.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        })
    }
});


export const getAllReviews = (state: RootState) => state.contact.reviews;
export const getReview = (state: RootState) => state.contact.review;
export const getStatus = (state: RootState) => state.contact.status;
export const getError = (state: RootState) => state.contact.error;
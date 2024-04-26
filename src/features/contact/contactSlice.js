import { createSlice } from '@reduxjs/toolkit';
import { fecthAllReviewsThunk, fecthReviewThunk, deleteReviewThunk, updateReviewThunk } from './contactThunk';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
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
        }).addCase(fecthAllReviewsThunk.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.status = 'fulfilled';
        }).addCase(fecthReviewThunk.fulfilled, (state, action) => {
            state.review = action.payload;
            state.status = 'fulfilled';
        }).addCase(deleteReviewThunk.fulfilled, (state, action) => {
            state.reviews = state.reviews.filter(review => review.message_id !== action.payload);
            state.status = 'fulfilled';
        }).addCase(updateReviewThunk.fulfilled, (state, action) => {
            let index = state.reviews.findIndex(review => review.message_id === action.payload.message_id)
            state.reviews.splice(index, 1, action.payload);
            state.status = 'fulfilled';
        })
    }
});


export const getAllReviews = state => state.contact.reviews;
export const getReview = state => state.contact.review;
export const getStatus = state => state.contact.status;
export const getError = state => state.contact.error;
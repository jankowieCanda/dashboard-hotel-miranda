import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { reviews_data } from '../../data';
import { Review } from "../../interfaces/ContactInterfaces";

export const fecthAllReviewsThunk = createAsyncThunk('contact/fetchAllReviews', async () => {
    
    return await delayFunction(reviews_data);
    
});
export const fecthReviewThunk = createAsyncThunk('contact/fetchReview', async (id: number) => {
    
    const data = await delayFunction(reviews_data.filter((review: Review) => review.message_id === id));
    return data;
    
});
export const deleteReviewThunk = createAsyncThunk('contact/deleteReview', async (id: number) => {
    
    const data = await delayFunction();
    return id;
    
});
export const updateReviewThunk = createAsyncThunk('contact/updateReview', async (obj: Review) => {
    
    const data = await delayFunction();
    return obj;
    
});
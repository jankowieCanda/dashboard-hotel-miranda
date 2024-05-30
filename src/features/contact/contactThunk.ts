import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayFunction } from '../../delay_function';
import { reviews_data } from '../../data';
import { Review } from "../../interfaces/ContactInterfaces";
import { FetchAPI } from "../../app/hooks";

export const fecthAllReviewsThunk = createAsyncThunk('contact/fetchAllReviews', async () => {
    
    const reviews = await FetchAPI('contact');
    return reviews.data;
    
});
export const fecthReviewThunk = createAsyncThunk('contact/fetchReview', async (id: string) => {
    
    const review = await FetchAPI(`contact/${id}`);
    return review.data;
    
});
export const deleteReviewThunk = createAsyncThunk('contact/deleteReview', async (id: string) => {
    
    const review = await FetchAPI(`contact/${id}`, 'DELETE');
    return review.data._id;
    
});
export const updateReviewThunk = createAsyncThunk('contact/updateReview', async (obj: Review) => {
    
    const review = await FetchAPI(`contact/${obj._id}`, 'PATCH', obj);
    return review.data;
    
});
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review } from "../../interfaces/ContactInterfaces";
import { fetchAPI } from "../../utils/fetchAPI";

export const fecthAllReviewsThunk = createAsyncThunk('contact/fetchAllReviews', async () => {
    
    const reviews = await fetchAPI('contact');
    return reviews.data;
    
});
export const fecthReviewThunk = createAsyncThunk('contact/fetchReview', async (id: string) => {
    
    const review = await fetchAPI(`contact/${id}`);
    return review.data;
    
});
export const deleteReviewThunk = createAsyncThunk('contact/deleteReview', async (id: string) => {
    
    const review = await fetchAPI(`contact/${id}`, 'DELETE');
    return review.data._id;
    
});
export const updateReviewThunk = createAsyncThunk('contact/updateReview', async (obj: Review) => {
    
    const review = await fetchAPI(`contact/${obj._id}`, 'PATCH', obj);
    return review.data;
    
});
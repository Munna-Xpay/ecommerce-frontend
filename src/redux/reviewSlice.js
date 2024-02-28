import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';


export const addReviews = createAsyncThunk('/add/reviews', async (data, { rejectWithValue }) => {
    console.log(data)
    const token = localStorage.getItem('token')
    console.log(token)
    return await axios.post(`${BASE_URL}/api/product/add-review`, data, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res.data)
        return res.data
    })
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const fetchAllreviews = createAsyncThunk('/fetch/all/reviews', async (args, { rejectWithValue }) => {
    return await axios.get(`${BASE_URL}/api/product/get-review`)
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

const initialState = {
    allReviews: [],
    error: "",
    loading: false
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllreviews.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllreviews.fulfilled, (state, action) => {
            return { ...state, allReviews: action.payload, loading: false }
        })

        builder.addCase(fetchAllreviews.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })


        builder.addCase(addReviews.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(addReviews.fulfilled, (state, action) => {
            state.allReviews.push(action.payload)
        })

        builder.addCase(addReviews.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default reviewSlice.reducer;
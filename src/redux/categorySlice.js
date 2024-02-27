import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';


export const addCategory = createAsyncThunk('/add/category', async (data, { rejectWithValue }) => {
    return await axios.post(`${BASE_URL}/api/admin/get`, data)
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const fetchAllCategory = createAsyncThunk('/fetch/all/category', async (args, { rejectWithValue }) => {
    return await axios.get(`${BASE_URL}/api/admin/get-category`)
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

const initialState = {
    allCategories: [],
    error: "",
    loading: false
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllCategory.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            return { ...state, allCategories: action.payload, loading: false }
        })

        builder.addCase(fetchAllCategory.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default categorySlice.reducer;
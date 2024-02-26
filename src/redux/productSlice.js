import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';

export const fetchAllProducts = createAsyncThunk('/fetch/all/products', async (query, { rejectWithValue }) => {
    try {
        let res
        if (query.sort == 'oldest') {
            res = await axios.get(`${BASE_URL}/api/product/get?oldest=true`)
        } else if (query.sort == 'popular') {
            res = await axios.get(`${BASE_URL}/api/product/get?popular=true`)
        }
        else {
            res = await axios.get(`${BASE_URL}/api/product/get`)
        }
        console.log(res.data)
        return res.data
    } catch (err) {
        rejectWithValue("Something went wrong ! network error")
    }
})

const initialState = {
    allProducts: [],
    error: "",
    loading: false
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return { ...state, allProducts: action.payload, loading: false }
        })

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default productSlice.reducer;
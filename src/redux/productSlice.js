import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';

export const fetchAllProducts = createAsyncThunk('/fetch/all/products', async () => {
    return await axios.get(`${BASE_URL}/api/product/get`)
        .then(res => res.data)
})

export const fetchOneProduct = createAsyncThunk('/fetch/one/product', async (id) => {
    return await axios.get(`${BASE_URL}/api/product/get-one/${id}`)
        .then(res => res.data)
})

const initialState = {
    allProducts: [],
    error: false
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            return { ...state, allProducts: action.payload }
        })

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            console.log(action.error)
        })

        builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
            return { ...state, currentProduct: action.payload }
        })
    }
})

export default productSlice.reducer;
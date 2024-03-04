import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';


export const fetchAllcoupons = createAsyncThunk('/fetch/all/coupons', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/admin/get-coupon`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

const initialState = {
    allCoupon: [],
    error: "",
    loading: false
}

const couponSlice = createSlice({
    name: "review",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllcoupons.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllcoupons.fulfilled, (state, action) => {
            return { ...state, allCoupon: action.payload, loading: false }
        })

        builder.addCase(fetchAllcoupons.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default couponSlice.reducer;
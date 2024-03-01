import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';


export const addToCart = createAsyncThunk('/add-cart-item', async (data, { rejectWithValue }) => {
    console.log(data)
    const token = localStorage.getItem('token')
    console.log(token)
    return await axios.post(`${BASE_URL}/api/auth/add-to-cart`, data, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res)
        return res.data
    }).catch((err) => {
        if (err.response.status == 503) {
            return rejectWithValue(err.response.data)
        } else {
            return rejectWithValue("Something went wrong network error")
        }
    })
})

export const fetchCartItems = createAsyncThunk('/fetch-cart-items', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/auth/cart-products`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const deleteCartItem = createAsyncThunk('/delete-cart-item', async (id, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.delete(`${BASE_URL}/api/auth/delete-cart-product/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => id)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const updateCartItem = createAsyncThunk('/update-cart-item', async ({ id, data }, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    console.log(id)
    console.log(data)
    return await axios.put(`${BASE_URL}/api/auth/change-cart-quantity/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

const initialState = {
    cartItems: [],
    error: "",
    loading: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: builder => {
        builder.addCase(addToCart.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(addToCart.fulfilled, (state, action) => {
            console.log(action)
            return { ...state, loading: false, cartItems: action.payload }
        })

        builder.addCase(addToCart.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(fetchCartItems.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            console.log(action)
            return { ...state, loading: false, cartItems: action.payload }
        })

        builder.addCase(fetchCartItems.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(deleteCartItem.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(deleteCartItem.fulfilled, (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id != action.payload)
        })

        builder.addCase(deleteCartItem.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(updateCartItem.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(updateCartItem.fulfilled, (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item._id == action.payload._id) {
                    return action.payload
                } else {
                    return item
                }
            })
        })

        builder.addCase(updateCartItem.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default cartSlice.reducer;
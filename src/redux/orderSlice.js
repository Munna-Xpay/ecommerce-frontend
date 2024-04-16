import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';
import toast, { Toaster } from 'react-hot-toast';

export const fetchAllOrders = createAsyncThunk('/fetch/all/orders', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/auth/user-orders`, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
        .then(res => res.data)
        .catch((err) => rejectWithValue("Something went wrong ! network error"))
})

export const addOrder = createAsyncThunk('/add/order', async ({ data, navigate,user,socket }, { rejectWithValue }) => {
    console.log(data)
    const token = localStorage.getItem('token')
    console.log(token)
    return await axios.post(`${BASE_URL}/api/auth/add-order-details`, data, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    }).then(res => {
       console.log(res)
       if(res.status===200){
        socket?.emit('sendNotifyCheckout',{products:data.products,user:user})
        navigate('/order/completed')
        return res.data
       }
       
    }).catch((err) => {
        toast.error("Something went wrong ! network error")
        return rejectWithValue("Something went wrong ! network error")
    })
})

export const CancelOrder = createAsyncThunk('/cancel/order', async ({ data, id }, { rejectWithValue }) => {
    console.log(data)
    const token = localStorage.getItem('token')
    return await axios.put(`${BASE_URL}/api/auth/cancel-order/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res)
        toast.success("Order Canceled")
        return res.data
    }).catch((err) => {
        toast.error("Failed to Cancel Order")
        return rejectWithValue("Failed to Cancel Order")
    })
})

const initialState = {
    allOrders: [],
    error: "",
    loading: false
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllOrders.pending, (state) => {
            return { ...state, loading: true }
        })

        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            return { ...state, allOrders: action.payload, loading: false }
        })

        builder.addCase(fetchAllOrders.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(addOrder.pending, (state) => {
            return { ...state, loading: true, error: "" }
        })

        builder.addCase(addOrder.fulfilled, (state, action) => {
            return { ...state, allOrders: action.payload, loading: false, error: "" }
        })

        builder.addCase(addOrder.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })



        builder.addCase(CancelOrder.pending, (state) => {
            return { ...state, loading: true, error: "" }
        })

        builder.addCase(CancelOrder.fulfilled, (state, action) => {
            return { ...state, allOrders: action.payload, loading: false, error: "" }
        })

        builder.addCase(CancelOrder.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
        })
    }
})

export default orderSlice.reducer;
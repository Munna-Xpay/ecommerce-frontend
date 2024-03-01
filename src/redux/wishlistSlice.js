import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseUrl';


export const addToWishlist=createAsyncThunk('/add-to-wishlist',async (data,{rejectWithValue})=>{
    const token = localStorage.getItem('token')
    //console.log(token);
    return await axios.post(`${BASE_URL}/api/auth/add-to-wishlist`,data,{
        headers:{
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
    .then(res=>res.data)
    .catch((err)=>
    rejectWithValue(err.response.data)
    )
});

export const getWishlistProducts=createAsyncThunk('/get-wishlist',async(args,{rejectWithValue})=>{
    const token=localStorage.getItem('token')
    return await axios.get(`${BASE_URL}/api/auth/wishlist-products`,{
        headers:{
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
    .then(res=>res.data)
    .catch((err)=>
    rejectWithValue(err.response.data)
    )
})

export const deleteWishlistProduct=createAsyncThunk('/delete-wishlist-product',async(id,{rejectWithValue})=>{
    const token=localStorage.getItem('token')
    return await axios.delete(`${BASE_URL}/api/auth/delete-wishlist-product/${id}`,{
        headers:{
            "Content-Type": "application/json",
            "user_token": `Bearer ${token}`
        }
    })
    .then(res=>id)
    .catch((err)=>
    rejectWithValue(err.response.data)
    )
})

const initialState={
    wishlistProducts:[],
   loading:false,
   error:""
}

const wishlistSlice =createSlice({
    name:"wishlist",
    initialState,
    extraReducers:builder=>{

        //add to wishlist
        builder.addCase(addToWishlist.pending,(state)=>{
            return {...state,loading:true}
        })
        builder.addCase(addToWishlist.fulfilled, (state,action)=>{
           // console.log(action.payload);
            return {...state,wishlistProducts:action.payload,loading:false}
            
        })
        builder.addCase(addToWishlist.rejected, (state,action)=>{
            return {...state,error:action.payload,loading:false}
        })

        //get wishlist product
        builder.addCase(getWishlistProducts.pending,(state)=>{
            return {...state,loading:true}
        })
        builder.addCase(getWishlistProducts.fulfilled, (state,action)=>{
           // console.log(action.payload);
            return {...state,wishlistProducts:action.payload,loading:false}
            
        })
        builder.addCase(getWishlistProducts.rejected, (state,action)=>{
            return {...state,error:action.payload,loading:false}
        })

        //delete wishlist product
        builder.addCase(deleteWishlistProduct.pending,(state)=>{
            return {...state,loading:true}
        })
        builder.addCase(deleteWishlistProduct.fulfilled, (state,action)=>{
           // console.log(action.payload);
            state.wishlistProducts=state.wishlistProducts.filter((product)=>product._id!=action.payload)
            
        })
        builder.addCase(deleteWishlistProduct.rejected, (state,action)=>{
            return {...state,error:action.payload,loading:false}
        })
    }
})

export default wishlistSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from './baseUrl';
import axios from 'axios';




//login
export const userLogin=createAsyncThunk(
    'user/login', async(userData,{rejectWithValue})=>{
        return await axios.post(`${BASE_URL}/api/auth/login`,userData)
    .then(res=>{
        if(res){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("currentUser",JSON.stringify(res.data.user))
            localStorage.setItem("userId",res.data.user._id)
        }
        return res.data
    }).catch((err)=>
    rejectWithValue(err.response.data))
})


const initialState={
    user:null,
    loading:false,
    error:''
}

const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:(builder)=>{

        //login
        builder.addCase(userLogin.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(userLogin.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
           //console.log(action.payload);
            state.error=''
        })
        builder.addCase(userLogin.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            
        })

    }
})




export default userSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "./baseUrl";
import axios from "axios";
import toast from "react-hot-toast";

//login
export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    return await axios
      .post(`${BASE_URL}/api/auth/login`, userData)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user._id);
        }
        return res.data;
      })
      .catch((err) => rejectWithValue(err.response.data));
  }
);

export const profileEdit = createAsyncThunk(
  "user/profile",
  async (userData, { rejectWithValue }) => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
   //console.log(token);
    const response=await axios.put(
      `${BASE_URL}/api/auth/update-profile/${id}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          "user_token": `Bearer ${token}`,
        },
      }
    ).catch(err=>rejectWithValue(err.response.data))
    return response
    //console.log(response);
  }
);



const initialState = {
  user: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      //console.log(action.payload);
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    //profile edit
    builder.addCase(profileEdit.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(profileEdit.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
       console.log(action.payload);
        state.error = "";
      });
      builder.addCase(profileEdit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

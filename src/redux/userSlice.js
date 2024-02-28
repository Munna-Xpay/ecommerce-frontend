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

//profile edit
export const profileEdit = createAsyncThunk(
  "user/profile",
  async (userData, { rejectWithValue }) => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    //console.log(token);
    const response = await axios
      .put(`${BASE_URL}/api/auth/update-profile/${id}`, userData, {
        headers: {
          "Content-Type": "application/json",
          user_token: `Bearer ${token}`,
        },
      })
      .catch((err) => rejectWithValue(err.response.data));
    return response;
    //console.log(response);
  }
);

//get user by id
export const userById = createAsyncThunk(
  "user/byId",
  async ({ rejectWithValue }) => {
    const id = localStorage.getItem("userId");
    await axios
      .get(`${BASE_URL}/api/auth/user/${id}`)
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.response.data));
  }
);

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
      //   //console.log(action.payload.user);
      //  // console.log(action.payload.token);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //profile edit

    builder.addCase(profileEdit.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(profileEdit.fulfilled, (state, action) => {
      return { ...state, user: action.payload, loading: false };
      console.log(action.payload);
    });
    builder.addCase(profileEdit.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });

    //get user by id

    builder.addCase(userById.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(userById.fulfilled, (state, action) => {
      return { ...state, user: action.payload, loading: false };
      // console.log(action.payload);
    });
    builder.addCase(userById.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false };
    });
  },
});

export default userSlice.reducer;

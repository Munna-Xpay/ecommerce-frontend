import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./baseUrl";

export const fetchAllProducts = createAsyncThunk(
  "/fetch/all/products",
  async (query, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/product/get?sort=${query.sort ? query.sort : ""
        }&category=${query.category ? query.category : ""}&min=${query.min ? query.min : ""
        }&max=${query.max ? query.max : ""}&review=${query.review ? query.review : ""
        }&shipping=${query.shipping ? query.shipping : ""}&inStock=${query.inStockSrting ? query.inStockSrting : "true"
        }`
      );
      // console.log(res.data)
      return res.data;
    } catch (err) {
      rejectWithValue("Something went wrong ! network error");
    }
  }
);

export const fetchBrands = createAsyncThunk('/fetch/all/brands', async (args, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/product/get-brands`)
    console.log(res.data)
    return res.data
  } catch (err) {
    rejectWithValue("Something went wrong ! network error")
  }
})

const initialState = {
  allProducts: [],
  brands: [],
  error: "",
  loading: false
}

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      return { ...state, loading: true };
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return { ...state, allProducts: action.payload, loading: false };
    });

    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false }
    })



    builder.addCase(fetchBrands.pending, (state) => {
      return { ...state, loading: true }
    })

    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      return { ...state, brands: action.payload, loading: false }
    })

    builder.addCase(fetchBrands.rejected, (state, action) => {
      return { ...state, error: action.payload, loading: false }
    })
  }
})
export default productSlice.reducer;

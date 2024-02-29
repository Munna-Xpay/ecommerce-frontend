import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import wishlistSlice from './wishlistSlice'
import categorySlice from './categorySlice'
import orderSlice from './orderSlice'
import reviewSlice from './reviewSlice'
import couponSlice from './couponSlice'

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,
        wishlistReducer: wishlistSlice,
        categoryReducer: categorySlice,
        orderReducer: orderSlice,
        reviewReducer: reviewSlice,
        couponReducer: couponSlice
    }
})
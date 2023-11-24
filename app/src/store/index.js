import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/productsSlice'
import cartSlice from './slice/cartSlice'


export const store = configureStore({
    reducer:{
        products:productsSlice,
        cart:cartSlice
    }
})
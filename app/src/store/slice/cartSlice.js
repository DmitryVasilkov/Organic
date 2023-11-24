import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id:1, count:12 },
        { id:2, count:22 },
        { id:3, count:15 },
        { id:4, count:9 }
    ]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrCount(state, action){
           state.list.find(({id}) => id === action.payload).count++
        },
        decrCount(state, {payload}){
           const result = state.list.find(({id}) => id === payload)
             result.count === 1
           ? state.list = state.list.filter(({id}) => id !== payload)
           : result.count--
        },
        clearCart(state){
            state.list = []
        }
    }
})




export const { incrCount, decrCount, clearCart} = cartSlice.actions
export default cartSlice.reducer;
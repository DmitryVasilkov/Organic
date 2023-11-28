import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const show = {price: true, discount: true, mark: true, category: true}


const initialState = {
    list:[],
    status:'loading'
}
export const fetchProducts = createAsyncThunk(
    '/products/fetchProducts',
    async () => {
        const response = await fetch ('https://dmitryvasilkov.github.io/organicApi/products.json')
        const data = await response.json()
        return data
        
    }
)


const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        filterAction(state, {payload}){
            const {min, max} = payload
            state.list.forEach(item => {
                const curPrice = item.new_price ? item.new_price : item.price;
                item.show.price = (curPrice >= min && curPrice <= max)
            })
        },
        discountedAction(state, {payload}){
            state.list.forEach(item => {item.show.discount = !payload || item.new_price !== null})
        },
        markFilter(state, {payload}){
           state.list.forEach(({show, mark}) => {
            show.mark = payload === -1 ? true : mark === payload
           })
        },
        categoryFilter(state, {payload}){
           state.list.forEach(({show, type}) => {
            show.category = payload === '-1' ? true : type === payload
           })
        }, 
        resetFilter(state){
            state.list.forEach(product => {
                Object.keys(product.show).forEach(key => {
                    product.show[key] = true;
            })

            })
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
         })
        .addCase(fetchProducts.fulfilled, (state, {payload}) => {
        state.status = 'ready';
        state.list = payload.map(item => ({...item, show }))
        })
        .addCase(fetchProducts.rejected, (state) => {
        state.status = 'rejected'
         })
    }
})

export const {
    filterAction,
    discountedAction, 
    markFilter, 
    categoryFilter, 
    resetFilter} = productsSlice.actions;
export default productsSlice.reducer;


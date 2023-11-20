import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from '../../../config/supabaseClient'

const initialState = {
    products: [],
    status: 'idle', // idle, pending, succeded, 'failed'
    error: null,
    isProductModalShow: false,
    modalProduct: {},
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    let { data, error } = await supabase
    .from('products')
        .select('*')
    if (data) {return data}
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productModalShowHandler(state, action) {
            state.isProductModalShow = !state.isProductModalShow
            state.modalProduct = state.products.find(product => product.id === action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
                console.log(state.status);
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                if (action.payload) {
                    state.products = action.payload
                    state.status = 'succeeded'
                    console.log(action.payload);
                } else {
                    state.status = 'failed'
                    console.log('failed');
                }
            })
    }
})

export const selectAllProducts = (state => state.products.products)
export const getModalShow = (state) => state.products.isProductModalShow
export const getProductsErr = (state) => state.products.error
export const getProductsStatus = (state) => state.products.status
export const getModalProduct = (state) => state.products.modalProduct

// actions
export const { productModalShowHandler } = productsSlice.actions

export default productsSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {supabase} from '../../../config/supabaseClient'

const initialState = {
    products: [],
    status: null,
    isProductModalShow: false,
    modalProduct: {}
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        let { data, error } = await supabase
        .from('products')
            .select('*')
        return data
    } catch (err) {
        console.log(err);
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {

        },
        productModalShowHandler(state, action) {
            state.isProductModalShow = !state.isProductModalShow
            state.modalProduct = state.products.find(product => product.id === action.payload)

        }
        
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
            console.log( 'failed' ,action.payload);
        })
    }
})

export const selectAllProducts = (state => state.products.products)
export const getModalShow = (state) => state.products.isProductModalShow
export const getModalProduct = (state) => state.products.modalProduct

// actions
export const { productModalShowHandler } = productsSlice.actions

export default productsSlice.reducer
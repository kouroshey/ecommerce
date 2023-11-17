import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {supabase} from '../../../config/supabaseClient'

const initialState = {
    products: [],
    status: null
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

export default productsSlice.reducer
import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { supabase } from "../../../config/supabaseClient";

const initialState = {
    products: [],
    status: "idle", // idle, pending, succeeded, failed
    error: null,
    isProductModalShow: false,
    modalProduct: {},
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        let { data, error } = await supabase.from("products").select("*");
        if (data) {
            return data;
        } else {
            throw new Error("مشکل در دریافت محصولات از سرور");
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productModalShowHandler(state, action) {
            state.isProductModalShow = !state.isProductModalShow;
            state.modalProduct = state.products.find(
                (product) => product.id === action.payload
            );
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "succeeded";
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// Create selectors using createSelector to memoize the computed values
export const selectAllProducts = createSelector(
    (state) => state.products.products,
    (products) => products
);

export const getModalShow = createSelector(
    (state) => state.products.isProductModalShow,
    (isProductModalShow) => isProductModalShow
);

export const getProductsErr = createSelector(
    (state) => state.products.error,
    (error) => error
);

export const getProductsStatus = createSelector(
    (state) => state.products.status,
    (status) => status
);

export const getModalProduct = createSelector(
    (state) => state.products.modalProduct,
    (modalProduct) => modalProduct
);

// actions
export const { productModalShowHandler } = productsSlice.actions;

export default productsSlice.reducer;
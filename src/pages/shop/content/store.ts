import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { supabase } from "../../../config/supabaseClient";

export type ProductType = {
    category: string | null;
    created_at: string;
    desc: string | null;
    id: number;
    img: string | null;
    popular: boolean | null;
    price: string | null;
    size: string | null;
    title: string | null;
}

type ProductsStateType = {
    products: ProductType[] | [],
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null,
    isProductModalShow: boolean,
    modalProduct: {} | ProductType
}

const initialState: ProductsStateType = {
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
            const exitingItem = state.products.find(
                (product) => product.id === action.payload
            );
            if (exitingItem) state.modalProduct = exitingItem
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                console.log(action.payload);
                state.status = "succeeded";
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                if (action.error.message) { state.error = action.error.message; }
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
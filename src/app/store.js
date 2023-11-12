import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from './layout'

export const store = configureStore({
    reducer: {
        layout: layoutReducer
    }
})


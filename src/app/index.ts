import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppSelector = TypedUseSelectorHook<ReturnType<typeof store.getState>>
export const UseAppSelector: AppSelector = useSelector

export default store
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from '../../../config/supabaseClient'
import useDeleteCookie from "../../../hooks/useDeleteCookie";

import { toast } from "react-toastify";
import { RootReducer } from "../../../app/rootReducer";

type LoginStateType = {
    isLoading: boolean;
    user: null;
    accessToken: string | null;
    refreshToken: string | null;
    error: null;
}

const initialState: LoginStateType = {
    isLoading: false,
    user: null,
    accessToken: localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token'),
    error: null
}

type UserDataType = {
    email: string,
    password: string
}

export const signUpHandle = createAsyncThunk('auth/signUp', async ({ email, password }: UserDataType) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })

    if (data) { return data.user }
    if (error) { return error }
})

export const loginHandle = createAsyncThunk('auth/login', async ({ email, password }: UserDataType) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        options: {
            emailRedirectTo: 'http://localhost:5173/'
        }
    })
    if (data) { return data }
})

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAccessToken(state, action) {
            state.accessToken = action.payload
        },
        setRefreshToken(state, action) {
            state.refreshToken = action.payload
        },
        logOut(state) {
            useDeleteCookie('sb-access-token')
            state.accessToken = null
            state.user = null
            state.refreshToken = null
            state.error = null
        }
    },
    extraReducers(builder) {
        builder
            // signUp cases
            .addCase(signUpHandle.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(signUpHandle.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload) {
                    if (action.payload) {
                        state.user = action.payload
                        toast.success('ایمیل تاییدیه به ایمیل شما ارسال شد. لطفا صندوق دریافتی خود را چک کنید.')
                    } else {
                        toast.error('لطفا ایمیل و پسورد را به درستی وارد کنید.')
                    }
                }
            })
            // login cases
            .addCase(loginHandle.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(loginHandle.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload) {
                    localStorage.setItem('access_token', action.payload.session!.access_token)
                    localStorage.setItem('refresh_token', action.payload.session!.refresh_token)
                    state.user = action.payload.user
                    toast.error('ورود به حساب موفقیت آمیز بود :)')
                } else {
                    toast.error('ورود به حساب ناموفق بود :(')
                    state.error = 'ایمیل و پسورد را به درستی وارد کنید'
                }
            })
    }
})

export const getIsLoading = (state: RootReducer) => state.login.isLoading
export const getAccessToken = (state: RootReducer) => state.login.accessToken
export const getRefreshToken = (state: RootReducer) => state.login.refreshToken
export const getUser = (state: RootReducer) => state.login.user

export const { setAccessToken, setRefreshToken, logOut } = loginSlice.actions

export default loginSlice.reducer
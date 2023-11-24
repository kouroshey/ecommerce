import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from '../../../config/supabaseClient'
import useSetCookie from "../../../hooks/useSetCookie";

import { toast } from "react-toastify";

const initialState = {
    isLoading: true,
    user: null,
    accessToken: localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token'),
    error: null
}

export const signUpHandle = createAsyncThunk('auth/signUp', async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })
    if (data) { return data }
    if (error) { return error }
})

export const loginHandle = createAsyncThunk('auth/login', async ({ email, password }) => {
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
        logOut(state, action) {
            state.accessToken = null
            state.user = null
            state.refreshToken = null
            state.error = null
            useSetCookie('access_token', 0)
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
                console.log(action.payload);
                if (action.payload.user) {
                    state.user = action.payload.user
                    toast.success('ایمیل تاییدیه به ایمیل شما ارسال شد.')
                } else {
                    toast.error('لطفا ایمیل و پسورد را به درستی وارد کنید.')
                }
            })
            // login cases
            .addCase(loginHandle.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(loginHandle.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload.session) {
                    localStorage.setItem('access_token', action.payload.session.access_token)
                    localStorage.setItem('refresh_token', action.payload.session.refresh_token)
                    state.user = action.payload.user
                    toast.error('ورود به حساب موفقیت آمیز بود :)')
                } else {
                    toast.error('ورود به حساب ناموفق بود :(')
                    console.log('not exist');
                    console.log(action.payload);
                    state.error = 'ایمیل و پسورد را به درستی وارد کنید'
                }
            })
    }
})

export const getEmail = (state) => state.login.email
export const getPassword = (state) => state.login.password
export const getAccessToken = (state) => state.login.accessToken
export const getRefreshToken = (state) => state.login.refreshToken
export const getUser = (state) => state.login.user

export const { setAccessToken, setRefreshToken, logOut } = loginSlice.actions

export default loginSlice.reducer
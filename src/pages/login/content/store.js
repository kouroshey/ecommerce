import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from '../../../config/supabaseClient'

const initialState = {
    isLoading: true,
    email: null,
    password: null,
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
                    localStorage.setItem('access_token', action.payload.session.access_token)
                    localStorage.setItem('refresh_token', action.payload.session.refresh_token)
                    state.email = action.payload.user.email
                } else {
                    state.error = 'ایمیل و پسورد را به درستی وارد کنید'
                }
            })
            // login cases
            .addCase(loginHandle.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(loginHandle.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload.user) {
                    localStorage.setItem('access_token', action.payload.session.access_token)
                    localStorage.setItem('refresh_token', action.payload.session.refresh_token)
                    state.email = action.payload.user.email
                } else {
                    state.error = 'ایمیل و پسورد را به درستی وارد کنید'
                }
                console.log(localStorage.getItem('access_token'));
            })
    }
})

export const getEmail = (state) => state.login.email
export const getPassword = (state) => state.login.password
export const getAccessToken = (state) => state.login.accessToken
export const getRefreshToken = (state) => state.login.refreshToken

export const { setAccessToken, setRefreshToken } = loginSlice.actions

export default loginSlice.reducer
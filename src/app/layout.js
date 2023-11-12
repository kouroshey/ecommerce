import { createSlice } from "@reduxjs/toolkit";

const initialDarkMode = () => {
    const result = localStorage.getItem('dark')
    return result
 }

const initialState = {
    collapsed: true,
    isDark: initialDarkMode(),
    innerWidth
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {}
})

// selectors
export const getIsDark = (state) => state.layout.isDark
export const getCollapsed = (state) => state.layout.collapsed

export default layoutSlice.reducer


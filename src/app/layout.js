import { createSlice } from "@reduxjs/toolkit";

const initialDarkMode = () => {
    const result = localStorage.getItem('dark')
    return result
 }

const initialState = {
    
    isDark: initialDarkMode(),
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
    }
})

// selectors
export const getIsDark = (state) => state.layout.isDark

export default layoutSlice.reducer


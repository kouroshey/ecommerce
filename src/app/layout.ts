import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface LayoutStateType {
    isDark: string | null,
}

const initialDarkMode = () => {
    const result = localStorage.getItem('dark')
    return result
}

const initialState: LayoutStateType = {
    isDark: initialDarkMode(),
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
    }
})

// selectors
export const getIsDark = (state: RootState) => state.layout.isDark

export default layoutSlice.reducer


import { createSlice } from "@reduxjs/toolkit";
import rootReducer, { RootReducer } from "./rootReducer";

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
export const getIsDark = (state: RootReducer) => state.layout.isDark

export default layoutSlice.reducer


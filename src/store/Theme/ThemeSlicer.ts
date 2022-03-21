import { createSlice} from "@reduxjs/toolkit";


interface ThemeState {
    isDarkMode: boolean;
}

export const themeSlicer = createSlice({
    name: "darkMode",
    initialState: {
        isDarkMode: false,
    }as ThemeState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    },
    
});



export default themeSlicer.reducer

export const { toggleDarkMode } = themeSlicer.actions

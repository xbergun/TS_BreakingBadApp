import { configureStore} from "@reduxjs/toolkit";
import CharacterSlice from "./CharacterSlice/CharacterSlice";
import QuotesSlice from "./Quotes/QuotesSlice";
import ThemeSlicer from "./Theme/ThemeSlicer";
export const store = configureStore({
    reducer: {
        characters: CharacterSlice,
        quotes: QuotesSlice,
        darkMode : ThemeSlicer
    }
});





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
